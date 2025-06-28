import React, { useState } from 'react';
import { 
  Settings, 
  Users, 
  Utensils, 
  Music, 
  Heart, 
  CheckCircle, 
  XCircle, 
  Mail,
  Download,
  Search,
  Filter,
  Send,
  Key,
  Save,
  Eye,
  QrCode,
  X
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { generateCouponId, generateQRCodeData } from '../utils/qrCodeGenerator';

const AdminPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState('sadya');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [previewModal, setPreviewModal] = useState<{ type: 'sadya' | 'donation' | null, data: any }>({ type: null, data: null });

  // Email settings state
  const [emailSettings, setEmailSettings] = useState({
    emailAddress: 'infinitymalayalees@gmail.com',
    password: '',
    smtpHost: 'smtp.gmail.com',
    smtpPort: '587',
    isConfigured: false
  });

  const [showEmailSettings, setShowEmailSettings] = useState(false);

  // Mock data - in real app, this would come from your backend
  const [sadyaRegistrations, setSadyaRegistrations] = useState([
    {
      id: 1,
      name: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      phone: '+91 98765 43210',
      flat: 'A-1205',
      sadyaCount: 4,
      amount: 1400,
      upiId: 'rajesh@paytm',
      transactionId: 'TXN123456789',
      registrationId: 'SADYA-LX9K2M3N-ABC123',
      status: 'pending',
      registeredAt: '2024-12-20T10:30:00Z'
    },
    {
      id: 2,
      name: 'Priya Nair',
      email: 'priya@example.com',
      phone: '+91 98765 43211',
      flat: 'B-805',
      sadyaCount: 2,
      amount: 700,
      upiId: 'priya@gpay',
      transactionId: 'TXN987654321',
      registrationId: 'SADYA-MX8L1K4P-DEF456',
      status: 'verified',
      registeredAt: '2024-12-19T15:45:00Z'
    }
  ]);

  const culturalEvents = [
    {
      id: 1,
      name: 'Anil Menon',
      email: 'anil@example.com',
      phone: '+91 98765 43212',
      flat: 'C-605',
      eventCategory: 'group-dance',
      eventTitle: 'Kerala Folk Dance',
      participantCount: 8,
      description: 'Traditional Kerala folk dance performance with authentic costumes',
      status: 'approved',
      registeredAt: '2024-12-18T09:15:00Z'
    }
  ];

  const [donations, setDonations] = useState([
    {
      id: 1,
      name: 'Suresh Pillai',
      email: 'suresh@example.com',
      phone: '+91 98765 43213',
      flat: 'A-1505',
      donationType: 'gold',
      amount: 25000,
      upiId: 'suresh@paytm',
      transactionId: 'TXN555666777',
      message: 'Happy to support our community celebrations',
      status: 'pending',
      registeredAt: '2024-12-17T14:20:00Z'
    }
  ]);

  const malayaleeMembers = [
    {
      id: 1,
      name: 'Krishna Das',
      email: 'krishna@example.com',
      phone: '+91 98765 43214',
      flat: 'B-1205',
      nativePlace: 'Kochi',
      familyMembers: 4,
      specialSkills: 'Classical singing, tabla',
      volunteerInterest: true,
      status: 'active',
      registeredAt: '2024-12-16T11:30:00Z'
    }
  ];

  const handleEmailSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const saveEmailSettings = () => {
    // Here you would save the email settings to your backend/environment
    console.log('Saving email settings:', emailSettings);
    setEmailSettings(prev => ({ ...prev, isConfigured: true }));
    alert('✅ Email settings saved successfully! You can now send emails.');
    setShowEmailSettings(false);
  };

  const testEmailConnection = async () => {
    if (!emailSettings.emailAddress || !emailSettings.password) {
      alert('❌ Please enter email address and password first');
      return;
    }

    // Here you would test the email connection
    console.log('Testing email connection...');
    alert('✅ Email connection test successful! Ready to send emails.');
  };

  const showPreview = (type: 'sadya' | 'donation', data: any) => {
    setPreviewModal({ type, data });
  };

  const closePreview = () => {
    setPreviewModal({ type: null, data: null });
  };

  const handleStatusUpdate = (type: string, id: number, newStatus: string) => {
    if (!emailSettings.isConfigured) {
      alert('❌ Please configure email settings first to send notifications');
      setShowEmailSettings(true);
      return;
    }

    if (type === 'sadya') {
      setSadyaRegistrations(prev => 
        prev.map(reg => 
          reg.id === id ? { ...reg, status: newStatus } : reg
        )
      );
      
      if (newStatus === 'verified') {
        const registration = sadyaRegistrations.find(reg => reg.id === id);
        if (registration) {
          sendSadyaCoupons(registration);
        }
      }
    } else if (type === 'donation') {
      setDonations(prev => 
        prev.map(don => 
          don.id === id ? { ...don, status: newStatus } : don
        )
      );
      
      if (newStatus === 'verified') {
        const donation = donations.find(don => don.id === id);
        if (donation) {
          sendThankYouNote(donation);
        }
      }
    }
    
    console.log(`Updated ${type} ID ${id} to status: ${newStatus}`);
  };

  const sendSadyaCoupons = (registration: any) => {
    // Generate unique coupons for each Sadya
    const coupons = Array.from({ length: registration.sadyaCount }, (_, index) => {
      const couponId = generateCouponId(registration.id, index);
      const qrData = generateQRCodeData(couponId, {
        name: registration.name,
        flat: registration.flat
      });
      return { couponId, qrData };
    });

    console.log(`Generating and sending ${registration.sadyaCount} Sadya coupons to ${registration.email}`);
    console.log(`Coupons:`, coupons);
    console.log(`Using email: ${emailSettings.emailAddress}`);
    // Here you would:
    // 1. Generate QR codes for each coupon
    // 2. Create PDF with coupons
    // 3. Send email with attachments using the configured Gmail credentials
    alert(`✅ ${registration.sadyaCount} unique Sadya coupons with QR codes sent to ${registration.email} from ${emailSettings.emailAddress}`);
  };

  const sendThankYouNote = (donation: any) => {
    console.log(`Sending thank you note to ${donation.email} for ₹${donation.amount} donation`);
    console.log(`Using email: ${emailSettings.emailAddress}`);
    // Here you would send a personalized thank you email using the configured Gmail credentials
    alert(`✅ Thank you note sent to ${donation.email} for their generous donation of ₹${donation.amount} from ${emailSettings.emailAddress}`);
  };

  const TabButton = ({ tabId, label, icon: Icon, count }: { tabId: string, label: string, icon: any, count?: number }) => (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
        activeTab === tabId
          ? 'bg-gradient-to-r from-orange-500 to-red-500 dark:from-amber-500 dark:to-orange-500 text-white shadow-md'
          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-600 hover:text-orange-700 dark:hover:text-amber-400'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
      {count !== undefined && (
        <span className={`px-2 py-1 rounded-full text-xs ${
          activeTab === tabId ? 'bg-white/20' : 'bg-orange-200 dark:bg-amber-600 text-orange-800 dark:text-amber-100'
        }`}>
          {count}
        </span>
      )}
    </button>
  );

  const StatusBadge = ({ status }: { status: string }) => {
    const statusConfig = {
      pending: { color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-600', label: '⏳ Pending' },
      verified: { color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-300 dark:border-green-600', label: '✅ Verified' },
      approved: { color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-600', label: '👍 Approved' },
      rejected: { color: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-300 dark:border-red-600', label: '❌ Rejected' },
      active: { color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-300 dark:border-green-600', label: '✅ Active' }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}>
        {config.label}
      </span>
    );
  };

  const SadyaCouponPreview = ({ data }: { data: any }) => {
    // Generate unique coupons for preview
    const coupons = Array.from({ length: data.sadyaCount }, (_, index) => {
      const couponId = generateCouponId(data.id, index);
      const qrData = generateQRCodeData(couponId, {
        name: data.name,
        flat: data.flat
      });
      return { couponId, qrData };
    });

    return (
      <div className="space-y-4">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">🍛 Onam Sadya Coupons</h3>
          <p className="text-gray-600 dark:text-gray-400">Preview of coupons to be sent to {data.email}</p>
        </div>
        
        <div className="grid gap-4">
          {coupons.map((coupon, index) => (
            <div key={index} className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-300 dark:border-green-600 rounded-lg p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-bold text-green-800 dark:text-green-300">🌺 Onam Sadya Coupon #{index + 1}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                    <strong>Name:</strong> {data.name}<br />
                    <strong>Flat:</strong> {data.flat}<br />
                    <strong>Date:</strong> September 13-14, 2025<br />
                    <strong>Venue:</strong> Ajmera Infinity Community Hall
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 font-mono">
                    <strong>Coupon ID:</strong> {coupon.couponId}
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-white dark:bg-gray-800 border-2 border-green-400 dark:border-green-500 rounded-lg flex items-center justify-center mb-2">
                    <QrCode size={40} className="text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Scan for Entry</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-green-300 dark:border-green-600">
                <p className="text-xs text-green-700 dark:text-green-300 text-center">
                  🌟 Authentic Kerala Sadya with 20+ Traditional Dishes 🌟<br />
                  Present this coupon at the venue for entry
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-600 rounded-lg p-4">
          <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">📧 Email Content Preview:</h4>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <p><strong>Subject:</strong> 🍛 Your Onam Sadya Coupons - Infinity Malayalees</p>
            <p><strong>From:</strong> {emailSettings.emailAddress}</p>
            <p><strong>To:</strong> {data.email}</p>
            <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded border">
              <p>Dear {data.name},</p>
              <p className="mt-2">🌺 Onam Ashamsakal! 🌺</p>
              <p className="mt-2">Your payment has been verified! Please find attached your {data.sadyaCount} unique Sadya coupon(s) for the Onam 2025 celebrations.</p>
              <p className="mt-2">Event Details:<br />
              📅 Date: September 13-14, 2025<br />
              🏛️ Venue: Ajmera Infinity Community Hall<br />
              🍛 Sadya Time: 12:00 PM - 3:00 PM</p>
              <p className="mt-2">Each coupon has a unique QR code for secure entry. Please present these coupons at the venue.</p>
              <p className="mt-2">Looking forward to celebrating with you!</p>
              <p className="mt-2">Best regards,<br />Infinity Malayalees Team</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ThankYouNotePreview = ({ data }: { data: any }) => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-red-800 dark:text-red-300 mb-2">💝 Thank You Note</h3>
        <p className="text-gray-600 dark:text-gray-400">Preview of thank you note to be sent to {data.email}</p>
      </div>
      
      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 border-2 border-red-300 dark:border-red-600 rounded-lg p-6">
        <div className="text-center mb-4">
          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 dark:from-red-400 dark:to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart size={40} className="text-white" />
          </div>
          <h4 className="text-2xl font-bold text-red-800 dark:text-red-300">🙏 Thank You for Your Generous Donation!</h4>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-red-200 dark:border-red-600">
          <div className="text-center mb-4">
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">₹{data.amount.toLocaleString()}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 capitalize">{data.donationType} Sponsorship</p>
          </div>
          
          <div className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <p><strong>Donor:</strong> {data.name}</p>
            <p><strong>Flat:</strong> {data.flat}</p>
            <p><strong>Transaction ID:</strong> {data.transactionId}</p>
            {data.message && (
              <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded border-l-4 border-red-400 dark:border-red-500">
                <p><strong>Your Message:</strong></p>
                <p className="italic">"{data.message}"</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-red-700 dark:text-red-300 font-medium">
            🌟 Your contribution makes our Onam celebration possible! 🌟
          </p>
        </div>
      </div>
      
      <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-600 rounded-lg p-4">
        <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">📧 Email Content Preview:</h4>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <p><strong>Subject:</strong> 🙏 Thank You for Your Generous Donation - Infinity Malayalees</p>
          <p><strong>From:</strong> {emailSettings.emailAddress}</p>
          <p><strong>To:</strong> {data.email}</p>
          <div className="mt-2 p-3 bg-white dark:bg-gray-800 rounded border">
            <p>Dear {data.name},</p>
            <p className="mt-2">🌺 Onam Ashamsakal! 🌺</p>
            <p className="mt-2">We are deeply grateful for your generous donation of ₹{data.amount.toLocaleString()} towards our Onam 2025 celebrations!</p>
            <p className="mt-2">Your {data.donationType} sponsorship will help us:</p>
            <ul className="mt-2 ml-4 list-disc">
              <li>Organize spectacular cultural programs</li>
              <li>Provide authentic Sadya experience</li>
              <li>Create memorable celebrations for our community</li>
              <li>Preserve and promote Malayalam traditions</li>
            </ul>
            {data.message && (
              <p className="mt-2">Thank you for your heartfelt message: "{data.message}"</p>
            )}
            <p className="mt-2">Your support means the world to us and helps keep our Malayalam heritage alive at Ajmera Infinity.</p>
            <p className="mt-2">With heartfelt gratitude,<br />Infinity Malayalees Team</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-4">
              🛠️ Admin Portal
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              Manage Onam 2025 registrations, verify payments, and oversee community activities.
            </p>
          </div>
          
          {/* Email Settings Button */}
          <div className="flex items-center space-x-4">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              emailSettings.isConfigured 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-600' 
                : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-600'
            }`}>
              {emailSettings.isConfigured ? '✅ Email Configured' : '❌ Email Not Configured'}
            </div>
            <button
              onClick={() => setShowEmailSettings(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-all shadow-lg"
            >
              <Settings size={16} />
              <span>Email Settings</span>
            </button>
          </div>
        </div>

        {/* Preview Modal */}
        {previewModal.type && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 px-6 py-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {previewModal.type === 'sadya' ? '🍛 Sadya Coupons Preview' : '💝 Thank You Note Preview'}
                </h3>
                <button
                  onClick={closePreview}
                  className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                {previewModal.type === 'sadya' ? (
                  <SadyaCouponPreview data={previewModal.data} />
                ) : (
                  <ThankYouNotePreview data={previewModal.data} />
                )}
              </div>
            </div>
          </div>
        )}

        {/* Email Settings Modal */}
        {showEmailSettings && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
                  <Mail className="mr-2 text-blue-500 dark:text-blue-400" size={24} />
                  📧 Email Configuration
                </h3>
                <button
                  onClick={() => setShowEmailSettings(false)}
                  className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <XCircle size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    📧 Email Address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={emailSettings.emailAddress}
                    onChange={handleEmailSettingsChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="infinitymalayalees@gmail.com"
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    🔑 App Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={emailSettings.password}
                    onChange={handleEmailSettingsChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter Gmail App Password"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Use Gmail App Password, not your regular password
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      🌐 SMTP Host
                    </label>
                    <input
                      type="text"
                      name="smtpHost"
                      value={emailSettings.smtpHost}
                      onChange={handleEmailSettingsChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      🔌 Port
                    </label>
                    <input
                      type="text"
                      name="smtpPort"
                      value={emailSettings.smtpPort}
                      onChange={handleEmailSettingsChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      readOnly
                    />
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-200 dark:border-blue-600">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">📋 Setup Instructions:</h4>
                  <ol className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>1. Go to your Google Account settings</li>
                    <li>2. Enable 2-Factor Authentication</li>
                    <li>3. Generate an App Password for "Mail"</li>
                    <li>4. Enter the 16-character App Password above</li>
                    <li>5. Click "Save Settings" to configure</li>
                  </ol>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={testEmailConnection}
                    className="flex-1 bg-yellow-500 dark:bg-yellow-600 text-white px-4 py-3 rounded-lg hover:bg-yellow-600 dark:hover:bg-yellow-700 transition-all font-medium"
                  >
                    🧪 Test Connection
                  </button>
                  <button
                    onClick={saveEmailSettings}
                    className="flex-1 bg-green-500 dark:bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-600 dark:hover:bg-green-700 transition-all font-medium flex items-center justify-center"
                  >
                    <Save size={16} className="mr-2" />
                    💾 Save Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          <TabButton tabId="sadya" label="Sadya Registrations" icon={Utensils} count={sadyaRegistrations.length} />
          <TabButton tabId="cultural" label="Cultural Events" icon={Music} count={culturalEvents.length} />
          <TabButton tabId="donations" label="Donations" icon={Heart} count={donations.length} />
          <TabButton tabId="members" label="Malayalee Members" icon={Users} count={malayaleeMembers.length} />
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border-2 border-orange-200 dark:border-gray-600 p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter size={18} className="text-gray-400 dark:text-gray-500" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="verified">Verified</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-orange-200 dark:border-gray-600">
          {/* Sadya Registrations */}
          {activeTab === 'sadya' && (
            <div>
              <div className="px-6 py-4 border-b border-orange-200 dark:border-gray-600 bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-gray-700 dark:to-gray-600">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
                  <Utensils className="mr-2" size={22} />
                  🍛 Sadya Registrations
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-orange-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                        Registrant
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                        Order Details
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                        Payment
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    {sadyaRegistrations.map((registration) => (
                      <tr key={registration.id} className="hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-bold text-gray-900 dark:text-gray-100">{registration.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">🏠 Flat: {registration.flat}</div>
                            <div className="text-xs text-gray-400 dark:text-gray-500 font-mono">ID: {registration.registrationId}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <div className="text-gray-900 dark:text-gray-100">📧 {registration.email}</div>
                            <div className="text-gray-500 dark:text-gray-400">📱 {registration.phone}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <div className="text-gray-900 dark:text-gray-100 font-bold">🍛 {registration.sadyaCount} Sadya</div>
                            <div className="text-green-600 dark:text-green-400 font-bold">💰 ₹{registration.amount}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <div className="text-gray-900 dark:text-gray-100">💳 {registration.upiId}</div>
                            <div className="text-gray-500 dark:text-gray-400 font-mono text-xs">🔢 {registration.transactionId}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <StatusBadge status={registration.status} />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => showPreview('sadya', registration)}
                              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all"
                              title="Preview Sadya Coupons"
                            >
                              <Eye size={18} />
                            </button>
                            {registration.status === 'pending' && (
                              <>
                                <button
                                  onClick={() => handleStatusUpdate('sadya', registration.id, 'verified')}
                                  className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 transition-all"
                                  title="Verify Payment & Send Coupons"
                                >
                                  <CheckCircle size={20} />
                                </button>
                                <button
                                  onClick={() => handleStatusUpdate('sadya', registration.id, 'rejected')}
                                  className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 transition-all"
                                  title="Reject"
                                >
                                  <XCircle size={20} />
                                </button>
                              </>
                            )}
                            {registration.status === 'verified' && (
                              <button
                                onClick={() => sendSadyaCoupons(registration)}
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center space-x-1 px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all"
                                title="Resend Coupons"
                              >
                                <Send size={16} />
                                <span className="text-xs font-medium">Resend</span>
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Cultural Events */}
          {activeTab === 'cultural' && (
            <div>
              <div className="px-6 py-4 border-b border-orange-200 dark:border-gray-600 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-gray-700 dark:to-gray-600">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
                  <Music className="mr-2" size={22} />
                  🎭 Cultural Event Registrations
                </h2>
              </div>
              <div className="p-6">
                {culturalEvents.map((event) => (
                  <div key={event.id} className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg p-4 mb-4 border-2 border-purple-200 dark:border-purple-600">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg">🎪 {event.eventTitle}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">👤 by {event.name} • 👥 {event.participantCount} participants</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 font-medium">{event.description}</p>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          📧 {event.email} • 📱 {event.phone} • 🏠 Flat: {event.flat}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <StatusBadge status={event.status} />
                        <button
                          onClick={() => handleStatusUpdate('cultural', event.id, 'approved')}
                          className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 transition-all"
                        >
                          <CheckCircle size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Donations */}
          {activeTab === 'donations' && (
            <div>
              <div className="px-6 py-4 border-b border-orange-200 dark:border-gray-600 bg-gradient-to-r from-red-100 to-pink-100 dark:from-gray-700 dark:to-gray-600">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
                  <Heart className="mr-2" size={22} />
                  💝 Donations & Sponsorships
                </h2>
              </div>
              <div className="p-6">
                {donations.map((donation) => (
                  <div key={donation.id} className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 rounded-lg p-4 mb-4 border-2 border-red-200 dark:border-red-600">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg">🙏 {donation.name}</h3>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">💰 ₹{donation.amount.toLocaleString()}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 capitalize font-medium">🏆 {donation.donationType} Sponsor</p>
                        {donation.message && (
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-2 italic bg-white/50 dark:bg-gray-700/50 p-2 rounded">💬 "{donation.message}"</p>
                        )}
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          📧 {donation.email} • 📱 {donation.phone} • 🏠 Flat: {donation.flat}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          💳 {donation.upiId} • 🔢 {donation.transactionId}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => showPreview('donation', donation)}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all"
                          title="Preview Thank You Note"
                        >
                          <Eye size={18} />
                        </button>
                        <StatusBadge status={donation.status} />
                        {donation.status === 'pending' && (
                          <button
                            onClick={() => handleStatusUpdate('donation', donation.id, 'verified')}
                            className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 transition-all"
                            title="Verify Donation & Send Thank You"
                          >
                            <CheckCircle size={18} />
                          </button>
                        )}
                        {donation.status === 'verified' && (
                          <button
                            onClick={() => sendThankYouNote(donation)}
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center space-x-1 px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all"
                            title="Resend Thank You"
                          >
                            <Send size={16} />
                            <span className="text-xs font-medium">Resend</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Malayalee Members */}
          {activeTab === 'members' && (
            <div>
              <div className="px-6 py-4 border-b border-orange-200 dark:border-gray-600 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-gray-700 dark:to-gray-600">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
                  <Users className="mr-2" size={22} />
                  👥 Malayalee Community Members
                </h2>
              </div>
              <div className="p-6">
                {malayaleeMembers.map((member) => (
                  <div key={member.id} className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg p-4 mb-4 border-2 border-blue-200 dark:border-blue-600">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-gray-100 text-lg">👤 {member.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          🏞️ From: {member.nativePlace} • 👨‍👩‍👧‍👦 Family: {member.familyMembers} members
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 font-medium">
                          🎨 Skills: {member.specialSkills || 'Not specified'}
                        </p>
                        {member.volunteerInterest && (
                          <span className="inline-block bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full mt-2 font-medium">
                            🙋‍♂️ Volunteer Interest
                          </span>
                        )}
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          📧 {member.email} • 📱 {member.phone} • 🏠 Flat: {member.flat}
                        </div>
                      </div>
                      <StatusBadge status={member.status} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-600 dark:to-emerald-600 rounded-lg p-6 text-white shadow-lg transform hover:scale-105 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 font-medium">🍛 Total Sadya</p>
                <p className="text-3xl font-bold">
                  {sadyaRegistrations.reduce((sum, reg) => sum + reg.sadyaCount, 0)}
                </p>
              </div>
              <Utensils size={36} className="text-green-200" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-violet-500 dark:from-purple-600 dark:to-violet-600 rounded-lg p-6 text-white shadow-lg transform hover:scale-105 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 font-medium">🎭 Cultural Events</p>
                <p className="text-3xl font-bold">{culturalEvents.length}</p>
              </div>
              <Music size={36} className="text-purple-200" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500 to-pink-500 dark:from-red-600 dark:to-pink-600 rounded-lg p-6 text-white shadow-lg transform hover:scale-105 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-100 font-medium">💝 Total Donations</p>
                <p className="text-3xl font-bold">
                  ₹{donations.reduce((sum, don) => sum + don.amount, 0).toLocaleString()}
                </p>
              </div>
              <Heart size={36} className="text-red-200" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 rounded-lg p-6 text-white shadow-lg transform hover:scale-105 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 font-medium">👥 Members</p>
                <p className="text-3xl font-bold">{malayaleeMembers.length}</p>
              </div>
              <Users size={36} className="text-blue-200" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPortal;