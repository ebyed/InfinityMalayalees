import React, { useState, useEffect } from 'react';
import { Lock, User, Eye, EyeOff, LogOut, Plus, Users, Calendar, Heart, TrendingUp, AlertCircle, CheckCircle, Loader2, Mail, Settings, Music, Crown, Trash2 } from 'lucide-react';
import { useSupabaseData } from '../hooks/useSupabaseData';
import { adminAuth, type AdminUser } from '../lib/auth';
import QRCodeModal from '../components/QRCodeModal';
import { sendEmail, generateDonationThankYouTemplate, generateConfirmationEmailTemplate, emailSettings } from '../utils/emailService';
import { supabase } from '../lib/supabase';

const AdminPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  
  // Admin management
  const [showCreateAdmin, setShowCreateAdmin] = useState(false);
  const [newAdminForm, setNewAdminForm] = useState({ username: '', password: '' });
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [createAdminError, setCreateAdminError] = useState('');
  const [createAdminSuccess, setCreateAdminSuccess] = useState('');
  
  // QR Code Modal
  const [selectedRegistration, setSelectedRegistration] = useState<any>(null);
  const [showQRModal, setShowQRModal] = useState(false);

  // Email settings
  const [showEmailSettings, setShowEmailSettings] = useState(false);
  const [emailConfig, setEmailConfig] = useState(emailSettings.getConfig());
  const [deletingId, setDeletingId] = useState<number | null>(null);

  // Active tab for different views
  const [activeTab, setActiveTab] = useState('overview');

  const { data, loading, error, refetch } = useSupabaseData();

  useEffect(() => {
    setIsLoggedIn(adminAuth.isLoggedIn());
    if (adminAuth.isLoggedIn()) {
      loadAdmins();
    }
  }, []);

  const loadAdmins = async () => {
    const adminList = await adminAuth.getAllAdmins();
    setAdmins(adminList);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    const success = await adminAuth.login(loginForm.username, loginForm.password);
    
    if (success) {
      setIsLoggedIn(true);
      await loadAdmins();
    } else {
      setLoginError('Invalid username or password');
    }
    
    setIsLoggingIn(false);
  };

  const handleLogout = () => {
    adminAuth.logout();
    setIsLoggedIn(false);
    setLoginForm({ username: '', password: '' });
  };

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreateAdminError('');
    setCreateAdminSuccess('');

    if (newAdminForm.username.length < 3) {
      setCreateAdminError('Username must be at least 3 characters long');
      return;
    }

    if (newAdminForm.password.length < 4) {
      setCreateAdminError('Password must be at least 4 characters long');
      return;
    }

    const success = await adminAuth.createAdmin(newAdminForm.username, newAdminForm.password);
    
    if (success) {
      setCreateAdminSuccess('Admin created successfully!');
      setNewAdminForm({ username: '', password: '' });
      setShowCreateAdmin(false);
      await loadAdmins();
      setTimeout(() => setCreateAdminSuccess(''), 3000);
    } else {
      setCreateAdminError('Failed to create admin. Username might already exist.');
    }
  };

  const handleGenerateQR = (registration: any) => {
    setSelectedRegistration(registration);
    setShowQRModal(true);
  };

  const handleSendDonationThankYou = async (donation: any) => {
    if (!emailSettings.isConfigured()) {
      setShowEmailSettings(true);
      return;
    }

    try {
      // First verify the donation in database
      const { error: verifyError } = await supabase.rpc('verify_donation', {
        donation_id_param: donation.id,
        verified_by_param: adminAuth.getCurrentUser() || 'admin'
      });

      if (verifyError) {
        console.error('Error verifying donation:', verifyError);
        alert('Failed to verify donation in database.');
        return;
      }

      // Then send thank you email
      const emailTemplate = generateDonationThankYouTemplate(
        donation.donor_name,
        donation.donation_type,
        donation.donation_amount,
        donation.transaction_id,
        donation.message
      );

      const emailData = {
        to: donation.email,
        subject: `Thank You for Your Donation - Onam 2025`,
        html: emailTemplate
      };

      const success = await sendEmail(emailData);
      
      if (success) {
        alert('Donation verified and thank you email sent successfully!');
        refetch(); // Refresh data to show updated verification status
      } else {
        alert('Donation verified but failed to send email. Please check your email settings.');
      }
    } catch (err) {
      console.error('Error processing donation:', err);
      alert('Failed to process donation. Please try again.');
    }
  };

  const handleSendConfirmationEmail = async (registration: any, eventType: string) => {
    if (!emailSettings.isConfigured()) {
      setShowEmailSettings(true);
      return;
    }

    try {
      const emailTemplate = generateConfirmationEmailTemplate(
        registration.full_name || registration.participant_name,
        eventType,
        {
          'Email': registration.email,
          'Phone': registration.phone,
          'Flat Number': registration.flat_number,
          'Registration Date': new Date(registration.created_at).toLocaleDateString('en-IN')
        }
      );

      const emailData = {
        to: registration.email,
        subject: `${eventType} Registration Confirmation - Onam 2025`,
        html: emailTemplate
      };

      const success = await sendEmail(emailData);
      
      if (success) {
        alert('Confirmation email sent successfully!');
      } else {
        alert('Failed to send email. Please check your email settings.');
      }
    } catch (err) {
      console.error('Error sending confirmation email:', err);
      alert('Failed to send email. Please try again.');
    }
  };

  const downloadCSV = (data: any[], filename: string) => {
    if (!data || data.length === 0) {
      alert('No data available to download');
      return;
    }

    // Get all unique keys from the data
    const headers = Array.from(new Set(data.flatMap(item => Object.keys(item))));
    
    // Create CSV content
    const csvContent = [
      headers.join(','), // Header row
      ...data.map(item => 
        headers.map(header => {
          const value = item[header];
          // Handle values that might contain commas or quotes
          if (value === null || value === undefined) return '';
          const stringValue = String(value);
          if (stringValue.includes(',') || stringValue.includes('"') || stringValue.includes('\n')) {
            return `"${stringValue.replace(/"/g, '""')}"`;
          }
          return stringValue;
        }).join(',')
      )
    ].join('\n');

    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveEmailSettings = () => {
    emailSettings.saveConfig(emailConfig);
    setShowEmailSettings(false);
    alert('Email settings saved successfully!');
  };

  const handleDeleteRegistration = async (id: number, type: string) => {
    console.log('=== DELETE OPERATION START ===');
    console.log('Attempting to delete:', { id, type });
    console.log('Current data state:', data);
    
    if (!confirm('Are you sure you want to delete this registration? This action cannot be undone.')) {
      console.log('Delete cancelled by user');
      return;
    }

    setDeletingId(id);
    try {
      console.log('Setting deleting state for ID:', id);
      
      // First, optimistically remove from UI
      const originalData = { ...data };
      console.log('Original data before optimistic update:', originalData);
      
      switch (type) {
        case 'sadya':
          console.log('Deleting sadya registration, current count:', data.sadyaRegistrations.length);
          setData(prev => ({
            ...prev,
            sadyaRegistrations: prev.sadyaRegistrations.filter(item => item.id !== id)
          }));
          break;
        case 'cultural':
          console.log('Deleting cultural registration, current count:', data.culturalRegistrations.length);
          setData(prev => ({
            ...prev,
            culturalRegistrations: prev.culturalRegistrations.filter(item => item.id !== id)
          }));
          break;
        case 'thiruvathira':
          console.log('Deleting thiruvathira registration, current count:', data.thiruvathiraRegistrations.length);
          setData(prev => ({
            ...prev,
            thiruvathiraRegistrations: prev.thiruvathiraRegistrations.filter(item => item.id !== id)
          }));
          break;
        case 'malayalee':
          console.log('Deleting malayalee registration, current count:', data.malayaleeRegistrations.length);
          setData(prev => ({
            ...prev,
            malayaleeRegistrations: prev.malayaleeRegistrations.filter(item => item.id !== id)
          }));
          break;
        case 'donation':
          console.log('Deleting donation, current count:', data.donations.length);
          setData(prev => ({
            ...prev,
            donations: prev.donations.filter(item => item.id !== id)
          }));
          break;
        default:
          console.error('Invalid registration type:', type);
          throw new Error('Invalid registration type');
      }

      console.log('UI updated optimistically, now calling database delete...');
      
      // Now delete from database
      let deleteResult;
      switch (type) {
        case 'sadya':
          deleteResult = await sadyaRegistrations.delete(id);
          break;
        case 'cultural':
          deleteResult = await culturalRegistrations.delete(id);
          break;
        case 'thiruvathira':
          deleteResult = await thiruvathiraRegistrations.delete(id);
          break;
        case 'malayalee':
          deleteResult = await malayaleeRegistrations.delete(id);
          break;
        case 'donation':
          deleteResult = await donations.delete(id);
          break;
      }

      console.log('Database delete result:', deleteResult);
      console.log('Delete successful!');
      alert('Registration deleted successfully!');

    } catch (err) {
      console.error('Error deleting registration:', err);
      console.log('Delete failed, rolling back UI changes...');
      
      // Rollback the optimistic update
      refetch();
      alert(`Failed to delete registration: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      console.log('Clearing deleting state');
      setDeletingId(null);
      console.log('=== DELETE OPERATION END ===');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Login Form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-200 dark:border-gray-600">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-white" size={32} />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Admin Portal</h1>
            <p className="text-gray-600 dark:text-gray-400">Infinity Malayalees Management</p>
          </div>

          {loginError && (
            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-600 rounded-lg">
              <div className="flex items-center space-x-2">
                <AlertCircle className="text-red-600 dark:text-red-400" size={16} />
                <p className="text-red-700 dark:text-red-300 text-sm font-medium">{loginError}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <User size={16} className="inline mr-2" />
                Username
              </label>
              <input
                type="text"
                required
                value={loginForm.username}
                onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                disabled={isLoggingIn}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Lock size={16} className="inline mr-2" />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={loginForm.password}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                  disabled={isLoggingIn}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 pr-12"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoggingIn ? (
                <div className="flex items-center justify-center space-x-2">
                  <Loader2 className="animate-spin" size={20} />
                  <span>Signing In...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Default credentials: admin / admin
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Lock className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Admin Portal</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Welcome, {adminAuth.getCurrentUser()}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowEmailSettings(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                <Settings size={16} />
                <span>Email Settings</span>
              </button>
              <button
                onClick={() => setShowCreateAdmin(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Plus size={16} />
                <span>Add Admin</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        {createAdminSuccess && (
          <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-600 rounded-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-green-600 dark:text-green-400" size={20} />
              <p className="text-green-700 dark:text-green-300 font-medium">{createAdminSuccess}</p>
            </div>
          </div>
        )}

        {/* Email Configuration Status */}
        {!emailSettings.isConfigured() && (
          <div className="mb-6 p-4 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-600 rounded-lg">
            <div className="flex items-center space-x-2">
              <AlertCircle className="text-yellow-600 dark:text-yellow-400" size={20} />
              <p className="text-yellow-700 dark:text-yellow-300 font-medium">
                Email not configured. Click "Email Settings" to set up Gmail credentials for sending confirmations.
              </p>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', label: 'Overview', icon: TrendingUp },
                { id: 'sadya', label: 'Sadya Registrations', icon: Calendar },
                { id: 'cultural', label: 'Cultural Events', icon: Music },
                { id: 'thiruvathira', label: 'Thiruvathira', icon: Crown },
                { id: 'admins', label: 'Admin Users', icon: Lock }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <tab.icon size={16} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Sadya Bookings</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{data.statistics.totalSadyaCount}</p>
                  </div>
                  <Calendar className="text-green-500" size={32} />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Cultural Events</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{data.statistics.culturalRegistrations}</p>
                  </div>
                  <TrendingUp className="text-purple-500" size={32} />
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Thiruvathira</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{data.statistics.thiruvathiraRegistrations}</p>
                  </div>
                  <Crown className="text-pink-500" size={32} />
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Cultural Registrations */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Recent Cultural Event Registrations</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {data.culturalRegistrations.slice(0, 5).map((registration) => (
                      <div key={registration.id} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-gray-100">{registration.participant_name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{registration.email}</p>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {formatDate(registration.created_at!)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Thiruvathira Registrations */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Recent Thiruvathira Registrations</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {data.thiruvathiraRegistrations.slice(0, 5).map((registration) => (
                      <div key={registration.id} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900 dark:text-gray-100">{registration.full_name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{registration.email}</p>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {formatDate(registration.created_at!)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Sadya Registrations Tab */}
        {activeTab === 'sadya' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Sadya Registrations</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Name</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Registration Date</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Email</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Count</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Amount</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Status</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.sadyaRegistrations.map((registration) => (
                      <tr key={registration.id} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 text-sm text-gray-900 dark:text-gray-100 font-medium">{registration.full_name}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{formatDate(registration.created_at!)}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{registration.email}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{registration.sadya_count}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">₹{registration.total_amount}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            registration.verified 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}>
                            {registration.verified ? 'Verified' : 'Pending'}
                          </span>
                        </td>
                        <td className="py-3">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleGenerateQR(registration)}
                              className={`px-3 py-1 text-xs rounded transition-colors ${
                                registration.verified
                                  ? 'bg-green-500 text-white hover:bg-green-600'
                                  : 'bg-blue-500 text-white hover:bg-blue-600'
                              }`}
                            >
                              {registration.verified ? 'View QR' : 'Verify & Send QR'}
                            </button>
                            {registration.verified && (
                              <button
                                onClick={() => handleGenerateQR(registration)}
                                className="px-3 py-1 text-xs bg-purple-500 text-white hover:bg-purple-600 rounded transition-colors"
                                title="Resend verification email"
                              >
                                Resend Email
                              </button>
                            )}
                            <button
                              onClick={() => handleDeleteRegistration(registration.id!, 'sadya')}
                              disabled={deletingId === registration.id}
                              className="px-3 py-1 text-xs bg-red-500 text-white hover:bg-red-600 rounded transition-colors disabled:opacity-50"
                              title="Delete registration"
                            >
                              {deletingId === registration.id ? '...' : <Trash2 size={12} />}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Cultural Events Tab */}
        {activeTab === 'cultural' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Cultural Events Registrations</h2>
                <button
                  onClick={() => downloadCSV(data.culturalRegistrations, 'cultural_events_registrations')}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <span>📥</span>
                  <span>Download CSV</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Participant</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Registration Date</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Email</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Phone</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Flat</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Age</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Gender</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Interested Events</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.culturalRegistrations.map((registration) => (
                      <tr key={registration.id} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 text-sm text-gray-900 dark:text-gray-100 font-medium">{registration.participant_name}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{formatDate(registration.created_at!)}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{registration.email}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{registration.phone}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{registration.flat_number}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">
                          {registration.description?.match(/Age: ([^,]+)/)?.[1] || 'N/A'}
                        </td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">
                          {registration.description?.match(/Gender: ([^,]+)/)?.[1] || 'N/A'}
                        </td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate">
                          {registration.event_title}
                        </td>
                        <td className="py-3">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleSendConfirmationEmail(registration, 'Cultural Events Interest Registration')}
                              className="px-3 py-1 text-xs bg-purple-500 text-white hover:bg-purple-600 rounded transition-colors"
                            >
                              Send Confirmation
                            </button>
                            <button
                              onClick={() => handleDeleteRegistration(registration.id!, 'cultural')}
                              disabled={deletingId === registration.id}
                              className="px-3 py-1 text-xs bg-red-500 text-white hover:bg-red-600 rounded transition-colors disabled:opacity-50"
                              title="Delete registration"
                            >
                              {deletingId === registration.id ? '...' : <Trash2 size={12} />}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Thiruvathira Tab */}
        {activeTab === 'thiruvathira' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Thiruvathira Registrations</h2>
                <button
                  onClick={() => downloadCSV(data.thiruvathiraRegistrations, 'thiruvathira_registrations')}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <span>📥</span>
                  <span>Download CSV</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Name</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Registration Date</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Email</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Phone</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Flat</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.thiruvathiraRegistrations.map((registration) => (
                      <tr key={registration.id} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 text-sm text-gray-900 dark:text-gray-100 font-medium">{registration.full_name}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{formatDate(registration.created_at!)}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{registration.email}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{registration.phone}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{registration.flat_number}</td>
                        <td className="py-3">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleSendConfirmationEmail(registration, 'Mega Thiruvathira Registration')}
                              className="px-3 py-1 text-xs bg-pink-500 text-white hover:bg-pink-600 rounded transition-colors"
                            >
                              Send Confirmation
                            </button>
                            <button
                              onClick={() => handleDeleteRegistration(registration.id!, 'thiruvathira')}
                              disabled={deletingId === registration.id}
                              className="px-3 py-1 text-xs bg-red-500 text-white hover:bg-red-600 rounded transition-colors disabled:opacity-50"
                              title="Delete registration"
                            >
                              {deletingId === registration.id ? '...' : <Trash2 size={12} />}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Admin Users Tab */}
        {activeTab === 'admins' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Admin Users</h2>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Username</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Created Date</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Created</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Last Login</th>
                      <th className="text-left py-2 text-sm font-medium text-gray-600 dark:text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins.map((admin) => (
                      <tr key={admin.id} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 text-sm text-gray-900 dark:text-gray-100 font-medium">{admin.username}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{formatDate(admin.created_at)}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">{formatDate(admin.created_at)}</td>
                        <td className="py-3 text-sm text-gray-600 dark:text-gray-400">
                          {admin.last_login ? formatDate(admin.last_login) : 'Never'}
                        </td>
                        <td className="py-3">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            admin.is_active 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                              : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                          }`}>
                            {admin.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Admin Modal */}
      {showCreateAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Create New Admin</h3>
            
            {createAdminError && (
              <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-600 rounded-lg">
                <p className="text-red-700 dark:text-red-300 text-sm">{createAdminError}</p>
              </div>
            )}

            <form onSubmit={handleCreateAdmin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username</label>
                <input
                  type="text"
                  required
                  value={newAdminForm.username}
                  onChange={(e) => setNewAdminForm(prev => ({ ...prev, username: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter username"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  required
                  value={newAdminForm.password}
                  onChange={(e) => setNewAdminForm(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Create Admin
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateAdmin(false);
                    setCreateAdminError('');
                    setNewAdminForm({ username: '', password: '' });
                  }}
                  className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Email Settings Modal */}
      {showEmailSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">📧 Email Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Gmail Address
                </label>
                <input
                  type="email"
                  value={emailConfig.auth.user}
                  onChange={(e) => setEmailConfig(prev => ({
                    ...prev,
                    auth: { ...prev.auth, user: e.target.value }
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="infinitymalayalees@gmail.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  App Password
                </label>
                <input
                  type="password"
                  value={emailConfig.auth.pass}
                  onChange={(e) => setEmailConfig(prev => ({
                    ...prev,
                    auth: { ...prev.auth, pass: e.target.value }
                  }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter Gmail app password"
                />
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-3 border border-yellow-200 dark:border-yellow-600">
                <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                  <strong>Setup Instructions:</strong><br />
                  1. Enable 2-factor authentication on your Gmail account<br />
                  2. Go to Google Account Settings → Security → App passwords<br />
                  3. Generate an app password for "Mail"<br />
                  4. Use that 16-character password here (not your regular Gmail password)<br />
                  <br />
                  <strong>Note:</strong> Settings are saved locally on this device and will persist across sessions.
                </p>
              </div>
            </div>

            <div className="flex space-x-3 pt-6">
              <button
                onClick={handleSaveEmailSettings}
                className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Save Settings
              </button>
              <button
                onClick={() => setShowEmailSettings(false)}
                className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* QR Code Modal */}
      {showQRModal && selectedRegistration && (
        <QRCodeModal
          isOpen={showQRModal}
          onClose={() => {
            setShowQRModal(false);
            setSelectedRegistration(null);
          }}
          registration={selectedRegistration}
          onEmailSent={() => {
            console.log('QR codes sent successfully');
            refetch(); // Refresh data to show updated verification status
          }}
        />
      )}
    </div>
  );
};

export default AdminPortal;