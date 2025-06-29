import React, { useState, useEffect } from 'react';
import { Users, Utensils, Music, Heart, Download, Calendar, Mail, Phone, Home, User, Loader2, AlertCircle, CheckCircle, Eye, Send, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QRCodeModal from '../components/QRCodeModal';
import { useSupabaseData } from '../hooks/useSupabaseData';
import { sendEmail, generateConfirmationEmailTemplate } from '../utils/emailService';

const AdminPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { data, loading, error, refetch } = useSupabaseData();
  const [selectedRegistration, setSelectedRegistration] = useState<any>(null);
  const [showQRModal, setShowQRModal] = useState(false);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [verifyingPayment, setVerifyingPayment] = useState<number | null>(null);

  // Send confirmation email
  const sendConfirmationEmail = async (registration: any, type: string) => {
    setSendingEmail(true);
    try {
      let emailTemplate = '';
      let subject = '';
      
      if (type === 'sadya') {
        subject = `Onam 2025 Sadya Registration Confirmed - ${registration.sadya_count} meals`;
        emailTemplate = generateConfirmationEmailTemplate(
          registration.full_name,
          'Sadya Registration',
          {
            'Sadya Count': registration.sadya_count,
            'Total Amount': `₹${registration.total_amount}`,
            'Registration ID': registration.registration_id,
            'Event Date': 'September 13-14, 2025',
            'Venue': 'Ajmera Infinity Community Hall'
          }
        );
      } else if (type === 'malayalee') {
        subject = 'Welcome to Infinity Malayalees Community';
        emailTemplate = generateConfirmationEmailTemplate(
          registration.full_name,
          'Malayalee Community Registration',
          {
            'Flat Number': registration.flat_number,
            'Native Place': registration.native_place || 'Not specified',
            'Family Members': registration.family_members || 'Not specified',
            'Volunteer Interest': registration.volunteer_interest ? 'Yes' : 'No'
          }
        );
      } else if (type === 'thiruvathira') {
        subject = 'Mega Thiruvathira Registration Confirmed';
        emailTemplate = generateConfirmationEmailTemplate(
          registration.full_name,
          'Mega Thiruvathira Registration',
          {
            'Event Date': 'September 14, 2025 at 10:00 AM',
            'Venue': 'Ajmera Infinity Community Hall',
            'Flat Number': registration.flat_number,
            'Contact': registration.phone
          }
        );
      } else if (type === 'cultural') {
        subject = `Cultural Event Registration Confirmed - ${registration.event_title}`;
        emailTemplate = generateConfirmationEmailTemplate(
          registration.participant_name,
          'Cultural Event Registration',
          {
            'Event Category': registration.event_category.replace('-', ' '),
            'Event Title': registration.event_title,
            'Participants': registration.participant_count,
            'Event Date': 'September 14, 2025 (Evening)',
            'Venue': 'Ajmera Infinity Community Hall'
          }
        );
      } else if (type === 'donation') {
        subject = `Thank you for your generous donation - ₹${registration.donation_amount}`;
        emailTemplate = generateConfirmationEmailTemplate(
          registration.donor_name,
          'Donation Confirmation',
          {
            'Donation Type': registration.donation_type === 'malayalee' ? 'Community Support' : registration.donation_type,
            'Amount': `₹${registration.donation_amount}`,
            'Transaction ID': registration.transaction_id || 'Pending verification',
            'Message': registration.message || 'No message'
          }
        );
      }

      const emailData = {
        to: registration.email,
        subject,
        html: emailTemplate
      };

      const success = await sendEmail(emailData);
      
      if (success) {
        alert(`Confirmation email sent to ${registration.email}`);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    } finally {
      setSendingEmail(false);
    }
  };

  // Verify payment (mock function)
  const verifyPayment = async (registrationId: number, type: string) => {
    setVerifyingPayment(registrationId);
    try {
      // In a real implementation, you would update the database
      console.log(`Verifying payment for ${type} registration:`, registrationId);
      
      // Simulate verification delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      alert('Payment verified successfully!');
      refetch(); // Refresh data
    } catch (error) {
      console.error('Error verifying payment:', error);
      alert('Failed to verify payment. Please try again.');
    } finally {
      setVerifyingPayment(null);
    }
  };

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
    const headers = ['full_name', 'email', 'phone', 'flat_number', 'native_place', 'family_members', 'special_skills', 'volunteer_interest', 'created_at'];
    const csvContent = convertToCSV(data.malayaleeRegistrations, headers);
    downloadCSV(csvContent, `malayalee_registrations_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const exportSadyaRegistrations = () => {
    const headers = ['full_name', 'email', 'phone', 'flat_number', 'sadya_count', 'total_amount', 'upi_id', 'transaction_id', 'registration_id', 'created_at'];
    const csvContent = convertToCSV(data.sadyaRegistrations, headers);
    downloadCSV(csvContent, `sadya_registrations_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const exportThiruvathiraRegistrations = () => {
    const headers = ['full_name', 'email', 'phone', 'flat_number', 'created_at'];
    const csvContent = convertToCSV(data.thiruvathiraRegistrations, headers);
    downloadCSV(csvContent, `thiruvathira_registrations_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const exportCulturalRegistrations = () => {
    const headers = ['participant_name', 'email', 'phone', 'flat_number', 'event_category', 'event_title', 'participant_count', 'description', 'special_requirements', 'created_at'];
    const csvContent = convertToCSV(data.culturalRegistrations, headers);
    downloadCSV(csvContent, `cultural_registrations_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const exportDonations = () => {
    const headers = ['donor_name', 'email', 'phone', 'flat_number', 'donation_type', 'donation_amount', 'upi_id', 'transaction_id', 'message', 'created_at'];
    const csvContent = convertToCSV(data.donations, headers);
    downloadCSV(csvContent, `donations_${new Date().toISOString().split('T')[0]}.csv`);
  };

  const exportAllData = () => {
    const summaryData = [
      { category: 'Malayalee Registrations', count: data.statistics.malayaleeRegistrations },
      { category: 'Sadya Registrations', count: data.statistics.sadyaRegistrations },
      { category: 'Total Sadya Count', count: data.statistics.totalSadyaCount },
      { category: 'Thiruvathira Registrations', count: data.statistics.thiruvathiraRegistrations },
      { category: 'Cultural Event Registrations', count: data.statistics.culturalRegistrations },
      { category: 'Donations', count: data.statistics.totalDonations },
      { category: 'Total Donation Amount', count: `₹${data.statistics.totalDonationAmount}` }
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <Loader2 className="animate-spin mx-auto mb-4 text-blue-600 dark:text-blue-400" size={48} />
            <p className="text-lg text-gray-600 dark:text-gray-400">Loading admin data...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center max-w-md">
            <AlertCircle className="mx-auto mb-4 text-red-600 dark:text-red-400" size={48} />
            <h2 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">Error Loading Data</h2>
            <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
            <button
              onClick={refetch}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
          <TabButton tabId="malayalee" label="Malayalee Members" icon={Users} count={data.statistics.malayaleeRegistrations} />
          <TabButton tabId="sadya" label="Sadya Bookings" icon={Utensils} count={data.statistics.sadyaRegistrations} />
          <TabButton tabId="thiruvathira" label="Thiruvathira" icon={Music} count={data.statistics.thiruvathiraRegistrations} />
          <TabButton tabId="cultural" label="Cultural Events" icon={Music} count={data.statistics.culturalRegistrations} />
          <TabButton tabId="donations" label="Donations" icon={Heart} count={data.statistics.totalDonations} />
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-200 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-500 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Users className="text-blue-600 dark:text-blue-400" size={32} />
                  <span className="text-2xl font-bold text-blue-800 dark:text-blue-300">{data.statistics.malayaleeRegistrations}</span>
                </div>
                <h3 className="font-bold text-blue-800 dark:text-blue-300">Malayalee Members</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm">Community registrations</p>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 border-2 border-green-300 dark:border-green-500 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Utensils className="text-green-600 dark:text-green-400" size={32} />
                  <span className="text-2xl font-bold text-green-800 dark:text-green-300">{data.statistics.totalSadyaCount}</span>
                </div>
                <h3 className="font-bold text-green-800 dark:text-green-300">Sadya Bookings</h3>
                <p className="text-green-600 dark:text-green-400 text-sm">Total meals booked</p>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-violet-200 dark:from-purple-900/30 dark:to-violet-900/30 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-500 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Music className="text-purple-600 dark:text-purple-400" size={32} />
                  <span className="text-2xl font-bold text-purple-800 dark:text-purple-300">
                    {data.statistics.thiruvathiraRegistrations + data.statistics.culturalRegistrations}
                  </span>
                </div>
                <h3 className="font-bold text-purple-800 dark:text-purple-300">Cultural Events</h3>
                <p className="text-purple-600 dark:text-purple-400 text-sm">Total participants</p>
              </div>

              <div className="bg-gradient-to-br from-red-100 to-pink-200 dark:from-red-900/30 dark:to-pink-900/30 rounded-2xl p-6 border-2 border-red-300 dark:border-red-500 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <Heart className="text-red-600 dark:text-red-400" size={32} />
                  <span className="text-2xl font-bold text-red-800 dark:text-red-300">
                    ₹{data.statistics.totalDonationAmount.toLocaleString()}
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
                Malayalee Community Registrations ({data.malayaleeRegistrations.length})
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
              {data.malayaleeRegistrations.length === 0 ? (
                <div className="text-center py-8">
                  <Users className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500 dark:text-gray-400">No Malayalee registrations yet.</p>
                </div>
              ) : (
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
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.malayaleeRegistrations.map((registration) => (
                        <tr key={registration.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="py-3 px-2">
                            <div>
                              <div className="font-medium text-gray-900 dark:text-gray-100">{registration.full_name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {registration.created_at ? new Date(registration.created_at).toLocaleDateString() : 'N/A'}
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
                              <span className="text-gray-700 dark:text-gray-300">{registration.flat_number}</span>
                            </div>
                          </td>
                          <td className="py-3 px-2 text-gray-700 dark:text-gray-300">{registration.native_place || 'N/A'}</td>
                          <td className="py-3 px-2 text-gray-700 dark:text-gray-300">{registration.family_members ? `${registration.family_members} members` : 'N/A'}</td>
                          <td className="py-3 px-2 text-gray-700 dark:text-gray-300 max-w-xs truncate">{registration.special_skills || 'N/A'}</td>
                          <td className="py-3 px-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              registration.volunteer_interest 
                                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300' 
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                            }`}>
                              {registration.volunteer_interest ? 'Yes' : 'No'}
                            </span>
                          </td>
                          <td className="py-3 px-2">
                            <button
                              onClick={() => sendConfirmationEmail(registration, 'malayalee')}
                              disabled={sendingEmail}
                              className="flex items-center space-x-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors disabled:opacity-50"
                            >
                              {sendingEmail ? <Loader2 size={12} className="animate-spin" /> : <Send size={12} />}
                              <span>Email</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Sadya Registrations Tab */}
        {activeTab === 'sadya' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-green-200 dark:border-green-600 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Utensils className="mr-2" size={24} />
                Sadya Registrations ({data.sadyaRegistrations.length} bookings, {data.statistics.totalSadyaCount} meals)
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
              {data.sadyaRegistrations.length === 0 ? (
                <div className="text-center py-8">
                  <Utensils className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500 dark:text-gray-400">No Sadya registrations yet.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Name & Contact</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Flat</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Sadya Count</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Amount</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Payment Details</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.sadyaRegistrations.map((registration) => (
                        <tr key={registration.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="py-3 px-2">
                            <div>
                              <div className="font-medium text-gray-900 dark:text-gray-100">{registration.full_name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{registration.email}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{registration.phone}</div>
                            </div>
                          </td>
                          <td className="py-3 px-2 text-gray-700 dark:text-gray-300">{registration.flat_number}</td>
                          <td className="py-3 px-2">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-xs font-medium">
                              {registration.sadya_count} meals
                            </span>
                          </td>
                          <td className="py-3 px-2 font-medium text-gray-900 dark:text-gray-100">₹{registration.total_amount}</td>
                          <td className="py-3 px-2">
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              <div>UPI: {registration.upi_id || 'N/A'}</div>
                              <div>TXN: {registration.transaction_id || 'N/A'}</div>
                              <div>ID: {registration.registration_id}</div>
                            </div>
                          </td>
                          <td className="py-3 px-2">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => {
                                  setSelectedRegistration(registration);
                                  setShowQRModal(true);
                                }}
                                className="flex items-center space-x-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                              >
                                <Eye size={12} />
                                <span>QR</span>
                              </button>
                              <button
                                onClick={() => sendConfirmationEmail(registration, 'sadya')}
                                disabled={sendingEmail}
                                className="flex items-center space-x-1 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs hover:bg-green-200 dark:hover:bg-green-800 transition-colors disabled:opacity-50"
                              >
                                {sendingEmail ? <Loader2 size={12} className="animate-spin" /> : <Send size={12} />}
                                <span>Email</span>
                              </button>
                              <button
                                onClick={() => verifyPayment(registration.id!, 'sadya')}
                                disabled={verifyingPayment === registration.id}
                                className="flex items-center space-x-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded text-xs hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors disabled:opacity-50"
                              >
                                {verifyingPayment === registration.id ? <Loader2 size={12} className="animate-spin" /> : <Shield size={12} />}
                                <span>Verify</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Thiruvathira Registrations Tab */}
        {activeTab === 'thiruvathira' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-pink-200 dark:border-pink-600 overflow-hidden">
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-500 dark:to-rose-500 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Music className="mr-2" size={24} />
                Mega Thiruvathira Registrations ({data.thiruvathiraRegistrations.length})
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
              {data.thiruvathiraRegistrations.length === 0 ? (
                <div className="text-center py-8">
                  <Music className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500 dark:text-gray-400">No Thiruvathira registrations yet.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Name</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Email</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Phone</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Flat Number</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Registered</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.thiruvathiraRegistrations.map((registration) => (
                        <tr key={registration.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="py-3 px-2">
                            <div className="flex items-center space-x-2">
                              <User size={16} className="text-pink-500 dark:text-pink-400" />
                              <span className="font-medium text-gray-900 dark:text-gray-100">{registration.full_name}</span>
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
                              <span className="text-gray-700 dark:text-gray-300">{registration.flat_number}</span>
                            </div>
                          </td>
                          <td className="py-3 px-2 text-gray-600 dark:text-gray-400">
                            {registration.created_at ? new Date(registration.created_at).toLocaleDateString() : 'N/A'}
                          </td>
                          <td className="py-3 px-2">
                            <button
                              onClick={() => sendConfirmationEmail(registration, 'thiruvathira')}
                              disabled={sendingEmail}
                              className="flex items-center space-x-1 px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 rounded text-xs hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors disabled:opacity-50"
                            >
                              {sendingEmail ? <Loader2 size={12} className="animate-spin" /> : <Send size={12} />}
                              <span>Email</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Cultural Events Tab */}
        {activeTab === 'cultural' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-purple-200 dark:border-purple-600 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-violet-600 dark:from-purple-500 dark:to-violet-500 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Music className="mr-2" size={24} />
                Cultural Event Registrations ({data.culturalRegistrations.length})
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
              {data.culturalRegistrations.length === 0 ? (
                <div className="text-center py-8">
                  <Music className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500 dark:text-gray-400">No cultural event registrations yet.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Participant</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Event Details</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Participants</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Description</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Requirements</th>
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.culturalRegistrations.map((registration) => (
                        <tr key={registration.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="py-3 px-2">
                            <div>
                              <div className="font-medium text-gray-900 dark:text-gray-100">{registration.participant_name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{registration.email}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{registration.phone}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Flat: {registration.flat_number}</div>
                            </div>
                          </td>
                          <td className="py-3 px-2">
                            <div>
                              <div className="font-medium text-gray-900 dark:text-gray-100">{registration.event_title}</div>
                              <div className="text-xs text-purple-600 dark:text-purple-400 capitalize">
                                {registration.event_category.replace('-', ' ')}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-2">
                            <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full text-xs font-medium">
                              {registration.participant_count}
                            </span>
                          </td>
                          <td className="py-3 px-2 max-w-xs">
                            <div className="text-gray-700 dark:text-gray-300 text-xs truncate" title={registration.description}>
                              {registration.description}
                            </div>
                          </td>
                          <td className="py-3 px-2 max-w-xs">
                            <div className="text-gray-600 dark:text-gray-400 text-xs truncate" title={registration.special_requirements || ''}>
                              {registration.special_requirements || 'None'}
                            </div>
                          </td>
                          <td className="py-3 px-2">
                            <button
                              onClick={() => sendConfirmationEmail(registration, 'cultural')}
                              disabled={sendingEmail}
                              className="flex items-center space-x-1 px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded text-xs hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors disabled:opacity-50"
                            >
                              {sendingEmail ? <Loader2 size={12} className="animate-spin" /> : <Send size={12} />}
                              <span>Email</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Donations Tab */}
        {activeTab === 'donations' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-red-200 dark:border-red-600 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-500 dark:to-pink-500 px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white flex items-center">
                <Heart className="mr-2" size={24} />
                Donations ({data.donations.length} donors, ₹{data.statistics.totalDonationAmount.toLocaleString()})
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
              {data.donations.length === 0 ? (
                <div className="text-center py-8">
                  <Heart className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500 dark:text-gray-400">No donations yet.</p>
                </div>
              ) : (
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
                        <th className="text-left py-3 px-2 font-bold text-gray-700 dark:text-gray-300">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.donations.map((donation) => (
                        <tr key={donation.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="py-3 px-2">
                            <div>
                              <div className="font-medium text-gray-900 dark:text-gray-100">{donation.donor_name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Flat: {donation.flat_number || 'N/A'}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {donation.created_at ? new Date(donation.created_at).toLocaleDateString() : 'N/A'}
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
                              donation.donation_type === 'gold' 
                                ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300'
                                : donation.donation_type === 'silver'
                                ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                                : donation.donation_type === 'platinum'
                                ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300'
                                : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
                            }`}>
                              {donation.donation_type === 'malayalee' ? 'Community' : donation.donation_type}
                            </span>
                          </td>
                          <td className="py-3 px-2 font-bold text-gray-900 dark:text-gray-100">₹{donation.donation_amount.toLocaleString()}</td>
                          <td className="py-3 px-2">
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              <div>UPI: {donation.upi_id || 'N/A'}</div>
                              <div>TXN: {donation.transaction_id || 'N/A'}</div>
                            </div>
                          </td>
                          <td className="py-3 px-2 max-w-xs">
                            <div className="text-gray-700 dark:text-gray-300 text-xs truncate" title={donation.message || ''}>
                              {donation.message || 'No message'}
                            </div>
                          </td>
                          <td className="py-3 px-2">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => sendConfirmationEmail(donation, 'donation')}
                                disabled={sendingEmail}
                                className="flex items-center space-x-1 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-xs hover:bg-green-200 dark:hover:bg-green-800 transition-colors disabled:opacity-50"
                              >
                                {sendingEmail ? <Loader2 size={12} className="animate-spin" /> : <Send size={12} />}
                                <span>Email</span>
                              </button>
                              <button
                                onClick={() => verifyPayment(donation.id!, 'donation')}
                                disabled={verifyingPayment === donation.id}
                                className="flex items-center space-x-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded text-xs hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors disabled:opacity-50"
                              >
                                {verifyingPayment === donation.id ? <Loader2 size={12} className="animate-spin" /> : <Shield size={12} />}
                                <span>Verify</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* QR Code Modal */}
        <QRCodeModal
          isOpen={showQRModal}
          onClose={() => {
            setShowQRModal(false);
            setSelectedRegistration(null);
          }}
          registration={selectedRegistration}
          onEmailSent={() => {
            console.log('Email sent successfully');
          }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default AdminPortal;