import React, { useState, useEffect } from 'react';
import { Download, Users, Calendar, Heart, Trophy, DollarSign, Trash2, Eye, EyeOff } from 'lucide-react';
import { adminAuth } from '../lib/auth';
import { useSupabaseData } from '../hooks/useSupabaseData';
import {
  malayaleeRegistrations,
  sadyaRegistrations,
  thiruvathiraRegistrations,
  culturalRegistrations,
  donations,
  getStatistics
} from '../lib/database';

const AdminPortal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [statistics, setStatistics] = useState({
    malayaleeRegistrations: 0,
    sadyaRegistrations: 0,
    totalSadyaCount: 0,
    thiruvathiraRegistrations: 0,
    culturalRegistrations: 0,
    totalDonations: 0,
    totalDonationAmount: 0
  });

  const { data, loading, error, refetch } = useSupabaseData();

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await adminAuth.isLoggedIn();
      setIsAuthenticated(authenticated);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      loadStatistics();
    }
  }, [isAuthenticated]);

  const loadStatistics = async () => {
    try {
      const stats = await getStatistics();
      setStatistics(stats);
    } catch (error) {
      console.error('Error loading statistics:', error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    
    try {
      const success = await adminAuth.login(username, password);
      if (success) {
        setIsAuthenticated(true);
        await refetch();
      } else {
        setLoginError('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Login failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    await adminAuth.logout();
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const downloadCSV = (data: any[], filename: string, headers: string[]) => {
    if (!data || data.length === 0) {
      alert('No data to download');
      return;
    }

    const csvContent = [
      headers.join(','),
      ...data.map(row => {
        return headers.map(header => {
          const key = header.toLowerCase().replace(/\s+/g, '_');
          let value = '';
          
          // Map headers to actual data fields
          switch (header) {
            case 'Full Name':
              value = row.full_name || row.participant_name || row.donor_name || '';
              break;
            case 'Participant Name':
              value = row.participant_name || '';
              break;
            case 'Donor Name':
              value = row.donor_name || '';
              break;
            case 'Email':
              value = row.email || '';
              break;
            case 'Phone':
              value = row.phone || '';
              break;
            case 'Flat Number':
              value = row.flat_number || '';
              break;
            case 'Native Place':
              value = row.native_place || '';
              break;
            case 'Family Members':
              value = row.family_members || '';
              break;
            case 'Special Skills':
              value = row.special_skills || '';
              break;
            case 'Volunteer Interest':
              value = row.volunteer_interest ? 'Yes' : 'No';
              break;
            case 'Sadya Count':
              value = row.sadya_count || '';
              break;
            case 'Total Amount':
              value = row.total_amount || row.donation_amount || '';
              break;
            case 'UPI ID':
              value = row.upi_id || '';
              break;
            case 'Transaction ID':
              value = row.transaction_id || '';
              break;
            case 'Registration ID':
              value = row.registration_id || '';
              break;
            case 'Age':
              value = row.age || '';
              break;
            case 'Gender':
              value = row.gender || '';
              break;
            case 'Experience':
              value = row.experience || '';
              break;
            case 'Special Requirements':
              value = row.special_requirements || '';
              break;
            case 'Emergency Contact':
              value = row.emergency_contact || '';
              break;
            case 'Emergency Phone':
              value = row.emergency_phone || '';
              break;
            case 'Event Category':
              value = row.event_category || '';
              break;
            case 'Event Title':
              value = row.event_title || '';
              break;
            case 'Participant Count':
              value = row.participant_count || '';
              break;
            case 'Description':
              value = row.description || '';
              break;
            case 'Donation Type':
              value = row.donation_type || '';
              break;
            case 'Donation Amount':
              value = row.donation_amount || '';
              break;
            case 'Message':
              value = row.message || '';
              break;
            case 'Verified':
              value = row.verified ? 'Yes' : 'No';
              break;
            case 'Date':
              value = row.created_at ? new Date(row.created_at).toLocaleDateString() : '';
              break;
            default:
              value = row[key] || '';
          }
          
          // Escape commas and quotes
          if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
            value = `"${value.replace(/"/g, '""')}"`;
          }
          
          return value;
        }).join(',');
      })
    ].join('\n');

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

  const handleDelete = async (type: string, id: number) => {
    if (!confirm('Are you sure you want to delete this record?')) {
      return;
    }

    try {
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
      
      await refetch();
      await loadStatistics();
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete record. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-red-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Portal</h1>
            <p className="text-gray-600">Please login to access the admin dashboard</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
            
            {loginError && (
              <div className="text-red-600 text-sm text-center">{loginError}</div>
            )}
            
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const malayaleeData = data?.malayaleeRegistrations || [];
  const sadyaData = data?.sadyaRegistrations || [];
  const thiruvathiraData = data?.thiruvathiraRegistrations || [];
  const culturalData = data?.culturalRegistrations || [];
  const donationData = data?.donations || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: Users },
              { id: 'malayalee', name: 'Malayalee Registrations', icon: Users },
              { id: 'sadya', name: 'Sadya Registrations', icon: Calendar },
              { id: 'thiruvathira', name: 'Thiruvathira', icon: Heart },
              { id: 'cultural', name: 'Cultural Events', icon: Trophy },
              { id: 'donations', name: 'Donations', icon: DollarSign }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-3 py-4 text-sm font-medium border-b-2 ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && (
          <div className="text-center py-8">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
            <p className="mt-2 text-gray-600">Loading...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <p className="text-red-800">Error loading data: {error.message}</p>
          </div>
        )}

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Malayalee Registrations</p>
                  <p className="text-2xl font-bold text-gray-900">{statistics.malayaleeRegistrations}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Sadya Orders</p>
                  <p className="text-2xl font-bold text-gray-900">{statistics.totalSadyaCount}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-red-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Thiruvathira Participants</p>
                  <p className="text-2xl font-bold text-gray-900">{statistics.thiruvathiraRegistrations}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <DollarSign className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Donations</p>
                  <p className="text-2xl font-bold text-gray-900">₹{statistics.totalDonationAmount}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Malayalee Registrations Tab */}
        {activeTab === 'malayalee' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Malayalee Registrations ({malayaleeData.length})</h2>
              <button
                onClick={() => downloadCSV(
                  malayaleeData,
                  'malayalee_registrations',
                  ['Full Name', 'Email', 'Phone', 'Flat Number', 'Native Place', 'Family Members', 'Special Skills', 'Volunteer Interest', 'Date']
                )}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200 flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CSV
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Native Place</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Family Members</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volunteer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {malayaleeData.map((registration) => (
                    <tr key={registration.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{registration.full_name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.flat_number}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.native_place || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.family_members || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          registration.volunteer_interest ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {registration.volunteer_interest ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(registration.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => handleDelete('malayalee', registration.id)}
                          className="text-red-600 hover:text-red-900"
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
        )}

        {/* Sadya Registrations Tab */}
        {activeTab === 'sadya' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Sadya Registrations ({sadyaData.length})</h2>
              <button
                onClick={() => downloadCSV(
                  sadyaData,
                  'sadya_registrations',
                  ['Full Name', 'Email', 'Phone', 'Flat Number', 'Sadya Count', 'Total Amount', 'UPI ID', 'Transaction ID', 'Registration ID', 'Verified', 'Date']
                )}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200 flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CSV
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Count</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registration ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verified</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sadyaData.map((registration) => (
                    <tr key={registration.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{registration.full_name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.flat_number}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.sadya_count}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{registration.total_amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{registration.registration_id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          registration.verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {registration.verified ? 'Verified' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(registration.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => handleDelete('sadya', registration.id)}
                          className="text-red-600 hover:text-red-900"
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
        )}

        {/* Thiruvathira Registrations Tab */}
        {activeTab === 'thiruvathira' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Thiruvathira Registrations ({thiruvathiraData.length})</h2>
              <button
                onClick={() => downloadCSV(
                  thiruvathiraData,
                  'thiruvathira_registrations',
                  ['Full Name', 'Email', 'Phone', 'Flat Number', 'Age', 'Experience', 'Special Requirements', 'Emergency Contact', 'Emergency Phone', 'Date']
                )}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200 flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CSV
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Emergency Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {thiruvathiraData.map((registration) => (
                    <tr key={registration.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{registration.full_name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.flat_number}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.age || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.experience || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.emergency_contact || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(registration.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => handleDelete('thiruvathira', registration.id)}
                          className="text-red-600 hover:text-red-900"
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
        )}

        {/* Cultural Registrations Tab */}
        {activeTab === 'cultural' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Cultural Event Registrations ({culturalData.length})</h2>
              <button
                onClick={() => downloadCSV(
                  culturalData,
                  'cultural_registrations',
                  ['Participant Name', 'Email', 'Phone', 'Flat Number', 'Age', 'Gender', 'Event Category', 'Event Title', 'Participant Count', 'Description', 'Special Requirements', 'Date']
                )}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200 flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CSV
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participant</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participants</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {culturalData.map((registration) => (
                    <tr key={registration.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{registration.participant_name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.flat_number}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.age || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.event_category}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.event_title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{registration.participant_count}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(registration.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => handleDelete('cultural', registration.id)}
                          className="text-red-600 hover:text-red-900"
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
        )}

        {/* Donations Tab */}
        {activeTab === 'donations' && (
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Donations ({donationData.length})</h2>
              <button
                onClick={() => downloadCSV(
                  donationData,
                  'donations',
                  ['Donor Name', 'Email', 'Phone', 'Flat Number', 'Donation Type', 'Donation Amount', 'UPI ID', 'Transaction ID', 'Message', 'Verified', 'Date']
                )}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200 flex items-center"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CSV
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verified</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {donationData.map((donation) => (
                    <tr key={donation.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{donation.donor_name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donation.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donation.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donation.donation_type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{donation.donation_amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{donation.transaction_id || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          donation.verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {donation.verified ? 'Verified' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(donation.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => handleDelete('donation', donation.id)}
                          className="text-red-600 hover:text-red-900"
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
        )}
      </div>
    </div>
  );
};

export default AdminPortal;