import React, { useState, useEffect } from 'react';
import { useSupabaseData } from '../hooks/useSupabaseData';
import { adminAuth } from '../lib/auth';
import { 
  malayaleeRegistrations, 
  sadyaRegistrations, 
  thiruvathiraRegistrations, 
  culturalRegistrations, 
  donations 
} from '../lib/database';
import { Users, Calendar, Heart, Music, Gift, Trash2, LogOut, Eye, EyeOff } from 'lucide-react';

const AdminPortal: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(false);

  const { data, isLoading: dataLoading, error, refetch } = useSupabaseData();

  const {
    malayaleeRegistrations: malayaleeData = [],
    sadyaRegistrations: sadyaData = [],
    thiruvathiraRegistrations: thiruvathiraData = [],
    culturalRegistrations: culturalData = [],
    donations: donationsData = [],
    statistics = {}
  } = data || {};

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await adminAuth.isAuthenticated();
      setIsAuthenticated(authStatus);
    };
    checkAuth();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await adminAuth.logout();
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const handleDelete = async (type: string, id: number) => {
    if (!confirm('Are you sure you want to delete this record?')) return;

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
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete record');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Portal</h1>
            <p className="text-gray-600">Sign in to access the dashboard</p>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
              disabled={isLoading}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'malayalee', label: 'Malayalee Registrations', icon: Users },
    { id: 'sadya', label: 'Sadya Registrations', icon: Calendar },
    { id: 'thiruvathira', label: 'Thiruvathira', icon: Music },
    { id: 'cultural', label: 'Cultural Events', icon: Heart },
    { id: 'donations', label: 'Donations', icon: Gift },
  ];

  const StatCard = ({ title, value, icon: Icon, color }: any) => (
    <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <Icon className="h-8 w-8 text-gray-400" />
      </div>
    </div>
  );

  const DataTable = ({ data, type, columns }: any) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column: any) => (
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
            {data.map((item: any) => (
              <tr key={item.id} className="hover:bg-gray-50">
                {columns.map((column: any) => (
                  <td key={column.key} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {column.render ? column.render(item[column.key], item) : item[column.key]}
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleDelete(type, item.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderTabContent = () => {
    if (dataLoading) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-500"></div>
        </div>
      );
    }

    switch (activeTab) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard
              title="Malayalee Registrations"
              value={statistics.malayaleeRegistrations || 0}
              icon={Users}
              color="border-blue-500"
            />
            <StatCard
              title="Sadya Registrations"
              value={statistics.sadyaRegistrations || 0}
              icon={Calendar}
              color="border-green-500"
            />
            <StatCard
              title="Total Sadya Count"
              value={statistics.totalSadyaCount || 0}
              icon={Calendar}
              color="border-green-600"
            />
            <StatCard
              title="Thiruvathira Registrations"
              value={statistics.thiruvathiraRegistrations || 0}
              icon={Music}
              color="border-purple-500"
            />
            <StatCard
              title="Cultural Registrations"
              value={statistics.culturalRegistrations || 0}
              icon={Heart}
              color="border-red-500"
            />
            <StatCard
              title="Total Donations"
              value={`₹${statistics.totalDonationAmount || 0}`}
              icon={Gift}
              color="border-yellow-500"
            />
          </div>
        );

      case 'malayalee':
        return (
          <DataTable
            data={malayaleeData}
            type="malayalee"
            columns={[
              { key: 'full_name', label: 'Name' },
              { key: 'email', label: 'Email' },
              { key: 'phone', label: 'Phone' },
              { key: 'flat_number', label: 'Flat Number' },
              { key: 'native_place', label: 'Native Place' },
              { key: 'family_members', label: 'Family Members' },
              { 
                key: 'volunteer_interest', 
                label: 'Volunteer Interest',
                render: (value: boolean) => value ? 'Yes' : 'No'
              },
              { 
                key: 'created_at', 
                label: 'Registered',
                render: (value: string) => new Date(value).toLocaleDateString()
              }
            ]}
          />
        );

      case 'sadya':
        return (
          <DataTable
            data={sadyaData}
            type="sadya"
            columns={[
              { key: 'full_name', label: 'Name' },
              { key: 'email', label: 'Email' },
              { key: 'phone', label: 'Phone' },
              { key: 'flat_number', label: 'Flat Number' },
              { key: 'sadya_count', label: 'Sadya Count' },
              { key: 'total_amount', label: 'Amount', render: (value: number) => `₹${value}` },
              { key: 'registration_id', label: 'Registration ID' },
              { 
                key: 'verified', 
                label: 'Verified',
                render: (value: boolean) => (
                  <span className={`px-2 py-1 rounded-full text-xs ${value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {value ? 'Verified' : 'Pending'}
                  </span>
                )
              },
              { 
                key: 'created_at', 
                label: 'Registered',
                render: (value: string) => new Date(value).toLocaleDateString()
              }
            ]}
          />
        );

      case 'thiruvathira':
        return (
          <DataTable
            data={thiruvathiraData}
            type="thiruvathira"
            columns={[
              { key: 'full_name', label: 'Name' },
              { key: 'email', label: 'Email' },
              { key: 'phone', label: 'Phone' },
              { key: 'flat_number', label: 'Flat Number' },
              { key: 'age', label: 'Age' },
              { key: 'experience', label: 'Experience' },
              { key: 'emergency_contact', label: 'Emergency Contact' },
              { key: 'emergency_phone', label: 'Emergency Phone' },
              { 
                key: 'created_at', 
                label: 'Registered',
                render: (value: string) => new Date(value).toLocaleDateString()
              }
            ]}
          />
        );

      case 'cultural':
        return (
          <DataTable
            data={culturalData}
            type="cultural"
            columns={[
              { key: 'participant_name', label: 'Participant' },
              { key: 'email', label: 'Email' },
              { key: 'phone', label: 'Phone' },
              { key: 'flat_number', label: 'Flat Number' },
              { key: 'event_category', label: 'Category' },
              { key: 'event_title', label: 'Event Title' },
              { key: 'participant_count', label: 'Participants' },
              { key: 'age', label: 'Age' },
              { key: 'gender', label: 'Gender' },
              { 
                key: 'created_at', 
                label: 'Registered',
                render: (value: string) => new Date(value).toLocaleDateString()
              }
            ]}
          />
        );

      case 'donations':
        return (
          <DataTable
            data={donationsData}
            type="donation"
            columns={[
              { key: 'donor_name', label: 'Donor Name' },
              { key: 'email', label: 'Email' },
              { key: 'phone', label: 'Phone' },
              { key: 'flat_number', label: 'Flat Number' },
              { key: 'donation_type', label: 'Type' },
              { key: 'donation_amount', label: 'Amount', render: (value: number) => `₹${value}` },
              { key: 'transaction_id', label: 'Transaction ID' },
              { 
                key: 'verified', 
                label: 'Verified',
                render: (value: boolean) => (
                  <span className={`px-2 py-1 rounded-full text-xs ${value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {value ? 'Verified' : 'Pending'}
                  </span>
                )
              },
              { 
                key: 'created_at', 
                label: 'Donated',
                render: (value: string) => new Date(value).toLocaleDateString()
              }
            ]}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <LogOut className="h-4 w-4" />
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
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            Error loading data: {error.message}
          </div>
        )}

        {renderTabContent()}
      </div>
    </div>
  );
};

export default AdminPortal;