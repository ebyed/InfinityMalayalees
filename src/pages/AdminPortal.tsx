import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { adminAuth } from '../lib/auth';
import { useSupabaseData } from '../hooks/useSupabaseData';
import { 
  Users, 
  Utensils, 
  Music, 
  Heart, 
  Calendar,
  Trash2,
  Eye,
  EyeOff,
  LogOut,
  BarChart3
} from 'lucide-react';

const AdminPortal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);

  const {
    malayaleeRegistrations,
    sadyaRegistrations,
    thiruvathiraRegistrations,
    culturalRegistrations,
    donations,
    statistics,
    refreshData
  } = useSupabaseData();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');

    try {
      const isValid = await adminAuth.login(username, password);
      if (isValid) {
        setIsAuthenticated(true);
        await refreshData();
      } else {
        setLoginError('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setLoginError('');
  };

  const handleDelete = async (type: string, id: number) => {
    if (!confirm('Are you sure you want to delete this record?')) return;

    try {
      const { malayaleeRegistrations, sadyaRegistrations, thiruvathiraRegistrations, culturalRegistrations, donations } = await import('../lib/database');
      
      switch (type) {
        case 'malayalee':
          await malayaleeRegistrations.delete(id);
          break;
        case 'sadya':
          await sadyaRegistrations.delete(id);
          break;
        case 'thiruvathira':
          await thiruvathiraRegistrations.delete(id);
          break;
        case 'cultural':
          await culturalRegistrations.delete(id);
          break;
        case 'donation':
          await donations.delete(id);
          break;
      }
      
      await refreshData();
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete record');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
            <p className="text-gray-600 mt-2">Sign in to access the dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm">{loginError}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg hover:bg-emerald-700 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'malayalee', label: 'Malayalee Registrations', icon: Users },
    { id: 'sadya', label: 'Sadya Registrations', icon: Utensils },
    { id: 'thiruvathira', label: 'Thiruvathira', icon: Music },
    { id: 'cultural', label: 'Cultural Events', icon: Calendar },
    { id: 'donations', label: 'Donations', icon: Heart }
  ];

  const renderTable = (data: any[], type: string, columns: { key: string; label: string }[]) => (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {column.label}
                </th>
              ))}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {column.key === 'created_at' 
                      ? new Date(item[column.key]).toLocaleDateString()
                      : item[column.key] || '-'
                    }
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleDelete(type, item.id)}
                    className="text-red-600 hover:text-red-900 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-1 mb-8 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Malayalee Registrations</p>
                  <p className="text-2xl font-bold text-gray-900">{statistics.malayaleeRegistrations}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <Utensils className="w-8 h-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Sadya Orders</p>
                  <p className="text-2xl font-bold text-gray-900">{statistics.totalSadyaCount}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <Music className="w-8 h-8 text-purple-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Thiruvathira</p>
                  <p className="text-2xl font-bold text-gray-900">{statistics.thiruvathiraRegistrations}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <Heart className="w-8 h-8 text-red-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Donations</p>
                  <p className="text-2xl font-bold text-gray-900">₹{statistics.totalDonationAmount}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'malayalee' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Malayalee Registrations ({malayaleeRegistrations.length})</h2>
            {renderTable(malayaleeRegistrations, 'malayalee', [
              { key: 'full_name', label: 'Name' },
              { key: 'email', label: 'Email' },
              { key: 'phone', label: 'Phone' },
              { key: 'flat_number', label: 'Flat' },
              { key: 'native_place', label: 'Native Place' },
              { key: 'family_members', label: 'Family Members' },
              { key: 'created_at', label: 'Registered' }
            ])}
          </div>
        )}

        {activeTab === 'sadya' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Sadya Registrations ({sadyaRegistrations.length})</h2>
            {renderTable(sadyaRegistrations, 'sadya', [
              { key: 'full_name', label: 'Name' },
              { key: 'email', label: 'Email' },
              { key: 'phone', label: 'Phone' },
              { key: 'flat_number', label: 'Flat' },
              { key: 'sadya_count', label: 'Count' },
              { key: 'total_amount', label: 'Amount' },
              { key: 'registration_id', label: 'Registration ID' },
              { key: 'created_at', label: 'Registered' }
            ])}
          </div>
        )}

        {activeTab === 'thiruvathira' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Thiruvathira Registrations ({thiruvathiraRegistrations.length})</h2>
            {renderTable(thiruvathiraRegistrations, 'thiruvathira', [
              { key: 'full_name', label: 'Name' },
              { key: 'email', label: 'Email' },
              { key: 'phone', label: 'Phone' },
              { key: 'flat_number', label: 'Flat' },
              { key: 'age', label: 'Age' },
              { key: 'experience', label: 'Experience' },
              { key: 'created_at', label: 'Registered' }
            ])}
          </div>
        )}

        {activeTab === 'cultural' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Cultural Event Registrations ({culturalRegistrations.length})</h2>
            {renderTable(culturalRegistrations, 'cultural', [
              { key: 'participant_name', label: 'Name' },
              { key: 'email', label: 'Email' },
              { key: 'phone', label: 'Phone' },
              { key: 'flat_number', label: 'Flat' },
              { key: 'event_category', label: 'Category' },
              { key: 'event_title', label: 'Event' },
              { key: 'participant_count', label: 'Participants' },
              { key: 'created_at', label: 'Registered' }
            ])}
          </div>
        )}

        {activeTab === 'donations' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Donations ({donations.length})</h2>
            {renderTable(donations, 'donation', [
              { key: 'donor_name', label: 'Donor' },
              { key: 'email', label: 'Email' },
              { key: 'phone', label: 'Phone' },
              { key: 'flat_number', label: 'Flat' },
              { key: 'donation_type', label: 'Type' },
              { key: 'donation_amount', label: 'Amount' },
              { key: 'created_at', label: 'Date' }
            ])}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPortal;