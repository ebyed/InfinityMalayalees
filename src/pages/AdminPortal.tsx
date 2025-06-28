import React, { useState } from 'react';
import { Users, Utensils, Music, Heart, Download, Calendar, Mail, Phone, Home, User } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AdminPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in a real app, this would come from your database
  const mockMalayaleeRegistrations = [
    {
      id: 1,
      fullName: 'Rajesh Kumar',
      email: 'rajesh.kumar@email.com',
      phone: '+91 98765 43210',
      flatNumber: 'A-1205',
      nativePlace: 'Kochi',
      familyMembers: '4',
      specialSkills: 'Classical dance, singing',
      volunteerInterest: true,
      registeredAt: '2024-12-20T10:30:00Z'
    },
    {
      id: 2,
      fullName: 'Priya Nair',
      email: 'priya.nair@email.com',
      phone: '+91 87654 32109',
      flatNumber: 'B-0803',
      nativePlace: 'Thiruvananthapuram',
      familyMembers: '3',
      specialSkills: 'Cooking, Thiruvathira',
      volunteerInterest: false,
      registeredAt: '2024-12-20T14:15:00Z'
    },
    {
      id: 3,
      fullName: 'Anil Menon',
      email: 'anil.menon@email.com',
      phone: '+91 76543 21098',
      flatNumber: 'C-1507',
      nativePlace: 'Kozhikode',
      familyMembers: '2',
      specialSkills: 'Chenda, Photography',
      volunteerInterest: true,
      registeredAt: '2024-12-20T16:45:00Z'
    }
  ];

  const mockSadyaRegistrations = [
    {
      id: 1,
      fullName: 'Deepa Pillai',
      email: 'deepa.pillai@email.com',
      phone: '+91 65432 10987',
      flatNumber: 'A-0904',
      sadyaCount: 4,
      totalAmount: 1400,
      upiId: 'deepa@paytm',
      transactionId: 'TXN123456789',
      registrationId: 'SADYA-ABC123',
      registeredAt: '2024-12-20T11:20:00Z'
    },
    {
      id: 2,
      fullName: 'Suresh Nambiar',
      email: 'suresh.nambiar@email.com',
      phone: '+91 54321 09876',
      flatNumber: 'B-1206',
      sadyaCount: 2,
      totalAmount: 700,
      upiId: 'suresh@gpay',
      transactionId: 'TXN987654321',
      registrationId: 'SADYA-DEF456',
      registeredAt: '2024-12-20T13:10:00Z'
    }
  ];

  const mockThiruvathiraRegistrations = [
    {
      id: 1,
      fullName: 'Lakshmi Devi',
      email: 'lakshmi.devi@email.com',
      phone: '+91 43210 98765',
      flatNumber: 'C-0802',
      registeredAt: '2024-12-20T09:45:00Z'
    },
    {
      id: 2,
      fullName: 'Radha Krishnan',
      email: 'radha.krishnan@email.com',
      phone: '+91 32109 87654',
      flatNumber: 'A-1408',
      registeredAt: '2024-12-20T15:30:00Z'
    },
    {
      id: 3,
      fullName: 'Meera Sathyan',
      email: 'meera.sathyan@email.com',
      phone: '+91 21098 76543',
      flatNumber: 'B-0705',
      registeredAt: '2024-12-20T17:20:00Z'
    }
  ];

  const mockCulturalRegistrations = [
    {
      id: 1,
      participantName: 'Arjun Nair',
      email: 'arjun.nair@email.com',
      phone: '+91 10987 65432',
      flatNumber: 'A-0603',
      eventCategory: 'solo-dance',
      eventTitle: 'Bharatanatyam Performance',
      participantCount: 1,
      description: 'Classical Bharatanatyam piece depicting Lord Krishna',
      specialRequirements: 'Traditional music system',
      registeredAt: '2024-12-20T12:00:00Z'
    },
    {
      id: 2,
      participantName: 'Kavya Menon',
      email: 'kavya.menon@email.com',
      phone: '+91 09876 54321',
      flatNumber: 'C-1203',
      eventCategory: 'group-song',
      eventTitle: 'Malayalam Folk Songs',
      participantCount: 6,
      description: 'Traditional Malayalam folk songs medley',
      specialRequirements: 'Microphones for 6 people',
      registeredAt: '2024-12-20T14:30:00Z'
    }
  ];

  const mockDonations = [
    {
      id: 1,
      donorName: 'Vinod Kumar',
      email: 'vinod.kumar@email.com',
      phone: '+91 98765 43210',
      flatNumber: 'A-1501',
      donationType: 'gold',
      donationAmount: 25000,
      upiId: 'vinod@paytm',
      transactionId: 'TXN555666777',
      message: 'Happy to support our community celebrations',
      registeredAt: '2024-12-20T10:15:00Z'
    },
    {
      id: 2,
      donorName: 'Sita Ramachandran',
      email: 'sita.ramachandran@email.com',
      phone: '+91 87654 32109',
      flatNumber: 'B-0907',
      donationType: 'malayalee',
      donationAmount: 5000,
      upiId: 'sita@gpay',
      transactionId: 'TXN888999000',
      message: 'For the success of Onam celebrations',
      registeredAt: '2024-12-20T16:00:00Z'
    }
  ];

  // CSV Export Functions
  const convertToCSV = (data: any[], headers: string[]) => {
    const csvContent = [
      headers.join(','),
      ...data.map(row => 
        headers.map(header => {
          const value = row[header] || '';
          // Escape commas and quotes in CSV
          return typeof value === 'string' && (value.includes(',') || value.includes('"')) 
            ? `"${value.replace(/"/g, '""')}"` 
            : value;
        }).join(',')
      )
    ].join('\n');
    
    return csvContent;
  };

  const downloadCSV = (csvContent: string, filename: string) => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportMalayaleeRegistrations = () => {
    const headers = ['fullName', 'email', 'phone', 'flatNumber', 'nativePlace', 'familyMembers', 'specialSkills', 'volunteerInterest', 'registeredAt'];
    const csvContent = convertToCSV(mockMalayaleeRegistrations, headers);
    downloadCSV(csvContent, `malayalee_registrations_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const exportSadyaRegistrations = () => {
    const headers = ['fullName', 'email', 'phone', 'flatNumber', 'sadyaCount', 'totalAmount', 'upiId', 'transactionId', 'registrationId', 'registeredAt'];
    const csvContent = convertToCSV(mockSadyaRegistrations, headers);
    downloadCSV(csvContent, `sadya_registrations_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const exportThiruvathiraRegistrations = () => {
    const headers = ['fullName', 'email', 'phone', 'flatNumber', 'registeredAt'];
    const csvContent = convertToCSV(mockThiruvathiraRegistrations, headers);
    downloadCSV(csvContent, `thiruvathira_registrations_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const exportCulturalRegistrations = () => {
    const headers = ['participantName', 'email', 'phone', 'flatNumber', 'eventCategory', 'eventTitle', 'participantCount', 'description', 'specialRequirements', 'registeredAt'];
    const csvContent = convertToCSV(mockCulturalRegistrations, headers);
    downloadCSV(csvContent, `cultural_registrations_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const exportDonations = () => {
    const headers = ['donorName', 'email', 'phone', 'flatNumber', 'donationType', 'donationAmount', 'upiId', 'transactionId', 'message', 'registeredAt'];
    const csvContent = convertToCSV(mockDonations, headers);
    downloadCSV(csvContent, `donations_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const exportAllData = () => {
    // Create a comprehensive export with all registration data
    const allData = {
      malayalee: mockMalayaleeRegistrations,
      sadya: mockSadyaRegistrations,
      thiruvathira: mockThiruvathiraRegistrations,
      cultural: mockCulturalRegistrations,
      donations: mockDonations
    };

    // Create a summary CSV with key statistics
    const summaryData = [
      { category: 'Malayalee Registrations', count: mockMalayaleeRegistrations.length },
      { category: 'Sadya Registrations', count: mockSadyaRegistrations.length },
      { category: 'Thiruvathira Registrations', count: mockThiruvathiraRegistrations.length },
      { category: 'Cultural Event Registrations', count: mockCulturalRegistrations.length },
      { category: 'Donations', count: mockDonations.length },
      { category: 'Total Sadya Count', count: mockSadyaRegistrations.reduce((sum, reg) => sum + reg.sadyaCount, 0) },
      { category: 'Total Donation Amount', count: `₹${mockDonations.reduce((sum, don) => sum + don.donationAmount, 0)}` }
    ];

    const summaryHeaders = ['category', 'count'];
    const csvContent = convertToCSV(summaryData, summaryHeaders);
    downloadCSV(csvContent, `onam2025_summary_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const TabButton = ({ tabId, label, icon: Icon, count }: { tabId: string, label: string, icon: any, count?: number }) => (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-bold transition-all duration-300 ${
        activeTab === tabId
          ? 'bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 text-white shadow-lg'
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-blue-400 shadow-md'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
      {count !== undefined && (
        <span className={`px-2 py-1 rounded-full text-xs font-bold ${
          activeTab === tabId ? 'bg-white/20' : 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
        }`}>
          {count}
        </span>
      )}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
            🛠️ Admin Portal
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Manage Onam 2025 registrations, donations, and community data
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <TabButton tabId="overview" label="Overview" icon={Calendar} />
          <TabButton tabId="malayalee" label="Malayalee Members" icon={Users} count={mockMalayaleeRegistrations.length} />
          <TabButton tabId="sadya" label="Sadya Bookings" icon={Utensils} count={mockSadyaRegistrations.length} />
          <TabButton tabId="thiruvathira" label="Thiruvathira" icon={Music} count={mockThiruvathiraRegistrations.length} />
          <TabButton tabId="cultural" label="Cultural Events" icon={Music} count={mockCulturalRegistrations.length} />
          <TabButton tabId="donations" label="Donations" icon={Heart} count={mockDonations.length} />
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-200 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-500 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Users className="text-blue-600 dark:text-blue-400" size={32} />
                  <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">{mockMalayaleeRegistrations.length}</span>
                </div>
                <h3 className="font-bold text-blue-800 dark:text-blue-300">Malayalee Members</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm">Community registrations</p>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 border-2 border-green-300 dark:border-green-500 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Utensils className="text-green-600 dark:text-green-400" size={32} />
                  <span className="text-2xl font-bold text-green-800 dark:text-green-300">
                    {mockSadyaRegistrations.reduce((sum, reg) => sum + reg.sadyaCount, 0)}
                  </span>
                </div>
                <h3 className="font-bold text-green-800 dark:text-green-300">Sadya Bookings</h3>
                <p className="text-green-600 dark:text-green-400 text-sm">Total meals booked</p>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-violet-200 dark:from-purple-900/30 dark:to-violet-900/30 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-500 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Music className="text-purple-600 dark:text-purple-400" size={32} />
                  <span className="text-2xl font-bold text-purple-800 dark:text-purple-300">
                    {mockThiruvathiraRegistrations.length + mockCulturalRegistrations.length}
                  </span>
                </div>
                <h3 className="font-bold text-purple-800 dark:text-purple-300">Cultural Events</h3>
                <p className="text-purple-600 dark:text-purple-400 text-sm">Total participants</p>
              </div>

              <div className="bg-gradient-to-br from-red-100 to-pink-200 dark:from-red-900/30 dark:to-pink-900/30 rounded-2xl p-6 border-2 border-red-300 dark:border-red-500 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Heart className="text-red-600 dark:text-red-400" size={32} />
                  <span className="text-2xl font-bold text-red-800 dark:text-red-300">
                    ₹{mockDonations.reduce((sum, don) => sum + don.donationAmount, 0).toLocaleString()}
                  </span>
                </div>
                <h3 className="font-bold text-red-800 dark:text-red-300">Total Donations</h3>
                <p className="text-red-600 dark:text-red-400 text-sm">Community support</p>
              </div>
            </div>

            {/* Export All Data Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-600 shadow-xl">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">📊 Export All Registration Data</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Download comprehensive reports of all registrations and donations for Onam 2025
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <button
                  onClick={exportMalayaleeRegistrations}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 dark:hover:from-blue-500 dark:hover:to-cyan-500 transition-all font-medium"
                >
                  <Download size={18} />
                  <span>Malayalee Members</span>
                </button>

                <button
                  onClick={exportSadyaRegistrations}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 text-white rounded-lg hover:from-green-600 hover:to-emerald-600 dark:hover:from-green-500 dark:hover:to-emerald-500 transition-all font-medium"
                >
                  <Download size={18} />
                  <span>Sadya Bookings</span>
                </button>

                <button
                  onClick={exportThiruvathiraRegistrations}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400 text-white rounded-lg hover:from-pink-600 hover:to-rose-600 dark:hover:from-pink-500 dark:hover:to-rose-500 transition-all font-medium"
                >
                  <Download size={18} />
                  <span>Thiruvathira</span>
                </button>

                <button
                  onClick={exportCulturalRegistrations}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-violet-500 dark:from-purple-400 dark:to-violet-400 text-white rounded-lg hover:from-purple-600 hover:to-violet-600 dark:hover:from-purple-500 dark:hover:to-violet-500 transition-all font-medium"
                >
                  <Download size={18} />
                  <span>Cultural Events</span>
                </button>

                <button
                  onClick={exportDonations}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 dark:from-red-400 dark:to-pink-400 text-white rounded-lg hover:from-red-600 hover:to-pink-600 dark:hover:from-red-500 dark:hover:to-pink-500 transition-all font-medium"
                >
                  <Download size={18} />
                  <span>Donations</span>
                </button>

                <button
                  onClick={exportAllData}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-black dark:hover:from-gray-700 dark:hover:to-gray-900 transition-all font-medium"
                >
                  <Download size={18} />
                  <span>Summary Report</span>
                </button>
              </div>

              <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-lg p-4 border border-amber-300 dark:border-amber-500">
                <p className="text-amber-800 dark:text-amber-300 text-sm font-medium">
                  <strong>📋 Export Information:</strong> CSV files include all registration details with timestamps. 
                  Use these exports for event planning, communication, and record keeping.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Malayalee Registrations Tab */}
        {activeTab === 'malayalee' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-blue-200 dark:border-blue-600 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Users className="mr-2" size={24} />
                Malayalee Community Registrations ({mockMalayaleeRegistrations.length})
              </h2>
              <button
                onClick={exportMalayaleeRegistrations}
                className="flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all font-medium"
              >
                <Download size={16} />
                <span>Export CSV</span>
              </button>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Name</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Contact</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Flat</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Native Place</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Family</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Skills</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Volunteer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockMalayaleeRegistrations.map((registration) => (
                      <tr key={registration.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="py-3 px-2">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-gray-100">{registration.fullName}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(registration.registeredAt).toLocaleDateString()}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <div className="text-gray-700 dark:text-gray-300">
                            <div className="flex items-center space-x-1">
                              <Mail size={12} />
                              <span className="text-xs">{registration.email}</span>
                            </div>
                            <div className="flex items-center space-x-1 mt-1">
                              <Phone size={12} />
                              <span className="text-xs">{registration.phone}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center space-x-1">
                            <Home size={12} className="text-gray-500 dark:text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">{registration.flatNumber}</span>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-gray-700 dark:text-gray-300">{registration.nativePlace}</td>
                        <td className="py-3 px-2 text-gray-700 dark:text-gray-300">{registration.familyMembers} members</td>
                        <td className="py-3 px-2 text-gray-700 dark:text-gray-300 max-w-xs truncate">{registration.specialSkills}</td>
                        <td className="py-3 px-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            registration.volunteerInterest 
                              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300' 
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                          }`}>
                            {registration.volunteerInterest ? 'Yes' : 'No'}
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

        {/* Sadya Registrations Tab */}
        {activeTab === 'sadya' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-green-200 dark:border-green-600 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Utensils className="mr-2" size={24} />
                Sadya Registrations ({mockSadyaRegistrations.length} bookings, {mockSadyaRegistrations.reduce((sum, reg) => sum + reg.sadyaCount, 0)} meals)
              </h2>
              <button
                onClick={exportSadyaRegistrations}
                className="flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all font-medium"
              >
                <Download size={16} />
                <span>Export CSV</span>
              </button>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Name & Contact</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Flat</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Sadya Count</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Amount</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Payment Details</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Registration ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockSadyaRegistrations.map((registration) => (
                      <tr key={registration.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="py-3 px-2">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-gray-100">{registration.fullName}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{registration.email}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{registration.phone}</div>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-gray-700 dark:text-gray-300">{registration.flatNumber}</td>
                        <td className="py-3 px-2">
                          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                            {registration.sadyaCount} meals
                          </span>
                        </td>
                        <td className="py-3 px-2 font-medium text-gray-900 dark:text-gray-100">₹{registration.totalAmount}</td>
                        <td className="py-3 px-2">
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            <div>UPI: {registration.upiId}</div>
                            <div>TXN: {registration.transactionId}</div>
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <div className="text-xs font-mono text-gray-600 dark:text-gray-400">{registration.registrationId}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {new Date(registration.registeredAt).toLocaleDateString()}
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

        {/* Thiruvathira Registrations Tab */}
        {activeTab === 'thiruvathira' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-pink-200 dark:border-pink-600 overflow-hidden">
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-500 dark:to-rose-500 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Music className="mr-2" size={24} />
                Mega Thiruvathira Registrations ({mockThiruvathiraRegistrations.length})
              </h2>
              <button
                onClick={exportThiruvathiraRegistrations}
                className="flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all font-medium"
              >
                <Download size={16} />
                <span>Export CSV</span>
              </button>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Name</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Email</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Phone</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Flat Number</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Registered</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockThiruvathiraRegistrations.map((registration) => (
                      <tr key={registration.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="py-3 px-2">
                          <div className="flex items-center space-x-2">
                            <User size={16} className="text-pink-500 dark:text-pink-400" />
                            <span className="font-medium text-gray-900 dark:text-gray-100">{registration.fullName}</span>
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center space-x-2">
                            <Mail size={16} className="text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">{registration.email}</span>
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center space-x-2">
                            <Phone size={16} className="text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">{registration.phone}</span>
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center space-x-2">
                            <Home size={16} className="text-gray-400" />
                            <span className="text-gray-700 dark:text-gray-300">{registration.flatNumber}</span>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-gray-600 dark:text-gray-400">
                          {new Date(registration.registeredAt).toLocaleDateString()}
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
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-purple-200 dark:border-purple-600 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-violet-600 dark:from-purple-500 dark:to-violet-500 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Music className="mr-2" size={24} />
                Cultural Event Registrations ({mockCulturalRegistrations.length})
              </h2>
              <button
                onClick={exportCulturalRegistrations}
                className="flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all font-medium"
              >
                <Download size={16} />
                <span>Export CSV</span>
              </button>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Participant</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Event Details</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Participants</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Description</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Requirements</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockCulturalRegistrations.map((registration) => (
                      <tr key={registration.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="py-3 px-2">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-gray-100">{registration.participantName}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{registration.email}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{registration.phone}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Flat: {registration.flatNumber}</div>
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-gray-100">{registration.eventTitle}</div>
                            <div className="text-xs text-purple-600 dark:text-purple-400 capitalize">
                              {registration.eventCategory.replace('-', ' ')}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full text-xs font-medium">
                            {registration.participantCount}
                          </span>
                        </td>
                        <td className="py-3 px-2 max-w-xs">
                          <div className="text-gray-700 dark:text-gray-300 text-xs truncate" title={registration.description}>
                            {registration.description}
                          </div>
                        </td>
                        <td className="py-3 px-2 max-w-xs">
                          <div className="text-gray-600 dark:text-gray-400 text-xs truncate" title={registration.specialRequirements}>
                            {registration.specialRequirements || 'None'}
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

        {/* Donations Tab */}
        {activeTab === 'donations' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-red-200 dark:border-red-600 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-500 dark:to-pink-500 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Heart className="mr-2" size={24} />
                Donations ({mockDonations.length} donors, ₹{mockDonations.reduce((sum, don) => sum + don.donationAmount, 0).toLocaleString()})
              </h2>
              <button
                onClick={exportDonations}
                className="flex items-center space-x-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all font-medium"
              >
                <Download size={16} />
                <span>Export CSV</span>
              </button>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Donor</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Contact</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Type</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Amount</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Payment</th>
                      <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockDonations.map((donation) => (
                      <tr key={donation.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="py-3 px-2">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-gray-100">{donation.donorName}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Flat: {donation.flatNumber}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {new Date(donation.registeredAt).toLocaleDateString()}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            <div>{donation.email}</div>
                            <div>{donation.phone}</div>
                          </div>
                        </td>
                        <td className="py-3 px-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            donation.donationType === 'gold' 
                              ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300'
                              : donation.donationType === 'silver'
                              ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                              : donation.donationType === 'platinum'
                              ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300'
                              : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
                          }`}>
                            {donation.donationType === 'malayalee' ? 'Community' : donation.donationType}
                          </span>
                        </td>
                        <td className="py-3 px-2 font-bold text-gray-900 dark:text-gray-100">₹{donation.donationAmount.toLocaleString()}</td>
                        <td className="py-3 px-2">
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            <div>UPI: {donation.upiId}</div>
                            <div>TXN: {donation.transactionId}</div>
                          </div>
                        </td>
                        <td className="py-3 px-2 max-w-xs">
                          <div className="text-gray-700 dark:text-gray-300 text-xs truncate" title={donation.message}>
                            {donation.message || 'No message'}
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
      </div>

      <Footer />
    </div>
  );
};

export default AdminPortal;