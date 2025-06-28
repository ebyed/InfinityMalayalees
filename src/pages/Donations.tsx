import React, { useState } from 'react';
import { Heart, Award, QrCode, CheckCircle, User, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Donations: React.FC = () => {
  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    phone: '',
    flatNumber: '',
    donationType: 'malayalee',
    donationAmount: 2000,
    customAmount: '',
    upiId: '',
    transactionId: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const sponsorshipTiers = [
    {
      id: 'platinum',
      name: 'Title Sponsor (Platinum)',
      amount: 50000,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50',
      benefits: [
        'Logo on all event materials',
        'Announcement during events',
        'Social media promotion',
        'Premium seating arrangement',
        'Certificate of appreciation'
      ]
    },
    {
      id: 'gold',
      name: 'Gold Sponsor',
      amount: 25000,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
      benefits: [
        'Logo on event banners',
        'Announcement during cultural program',
        'Social media mention',
        'Certificate of appreciation'
      ]
    },
    {
      id: 'silver',
      name: 'Silver Sponsor',
      amount: 10000,
      color: 'from-gray-400 to-gray-600',
      bgColor: 'from-gray-50 to-gray-100',
      benefits: [
        'Name mention in event materials',
        'Announcement during event',
        'Certificate of appreciation'
      ]
    },
    {
      id: 'malayalee',
      name: 'Malayalee Community Donation',
      amount: 2000,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      benefits: [
        'Support community celebrations',
        'Help organize cultural events',
        'Contribute to Sadya arrangements',
        'Foster Malayalam culture'
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation data:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'donationType') {
      const selectedTier = sponsorshipTiers.find(tier => tier.id === value);
      setFormData(prev => ({
        ...prev,
        [name]: value,
        donationAmount: selectedTier?.amount || 2000,
        customAmount: ''
      }));
    } else if (name === 'customAmount') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        donationAmount: parseInt(value) || 0
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const selectedTier = sponsorshipTiers.find(tier => tier.id === formData.donationType);

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-green-50 rounded-2xl p-8 text-center border border-green-200">
            <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
            <h2 className="text-2xl font-bold text-green-800 mb-4">Donation Submitted!</h2>
            <p className="text-green-700 mb-6">
              Thank you for your generous contribution! Our admin team will verify your donation 
              and send you a confirmation with benefits details.
            </p>
            <div className="bg-white rounded-lg p-4 border border-green-200 mb-6">
              <p className="text-sm text-gray-600">
                <strong>Donation Type:</strong> {selectedTier?.name}<br />
                <strong>Amount:</strong> ₹{formData.donationAmount}<br />
                <strong>Donor:</strong> {formData.donorName}
              </p>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  donorName: '',
                  email: '',
                  phone: '',
                  flatNumber: '',
                  donationType: 'malayalee',
                  donationAmount: 2000,
                  customAmount: '',
                  upiId: '',
                  transactionId: '',
                  message: ''
                });
              }}
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
            >
              Make Another Donation
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Support Onam 2025 Celebrations
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Help us make Onam 2025 a memorable celebration for the entire community. 
            Your generous contributions enable us to organize cultural events, authentic Sadya, and foster Malayalam traditions.
          </p>
        </div>

        {/* Sponsorship Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sponsorshipTiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-gradient-to-br ${tier.bgColor} rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 ${
                formData.donationType === tier.id ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-full flex items-center justify-center mb-4`}>
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tier.name}</h3>
              <p className="text-2xl font-bold text-gray-800 mb-4">₹{tier.amount.toLocaleString()}</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {tier.benefits.map((benefit, index) => (
                  <li key={index}>• {benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Donation Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 px-8 py-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Heart className="mr-3" size={28} />
              Donation Form
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User size={16} className="inline mr-2" />
                  Donor Name *
                </label>
                <input
                  type="text"
                  name="donorName"
                  required
                  value={formData.donorName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail size={16} className="inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone size={16} className="inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Flat Number
                </label>
                <input
                  type="text"
                  name="flatNumber"
                  value={formData.flatNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="e.g., A-1205"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Donation Type *
                </label>
                <select
                  name="donationType"
                  required
                  value={formData.donationType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                >
                  {sponsorshipTiers.map((tier) => (
                    <option key={tier.id} value={tier.id}>
                      {tier.name} - ₹{tier.amount.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="customAmount"
                    value={formData.customAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder={`₹${formData.donationAmount}`}
                    min={formData.donationType === 'malayalee' ? 2000 : selectedTier?.amount}
                  />
                  {formData.donationType === 'malayalee' && (
                    <p className="text-xs text-gray-500 mt-1">Minimum ₹2,000</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="Any message for the community..."
              />
            </div>

            {/* Payment Section */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Details</h3>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 text-center">
                  <div className="bg-white rounded-lg p-6 mb-4 border">
                    <QrCode size={150} className="mx-auto text-gray-400 mb-3" />
                    <p className="text-sm text-gray-600 font-medium">Scan to Donate</p>
                    <p className="text-lg font-bold text-gray-800 mt-2">₹{formData.donationAmount}</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <p className="text-sm text-blue-800 font-medium">UPI ID:</p>
                    <p className="text-blue-700 font-mono text-sm">infinitymalayalees@paytm</p>
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your UPI ID (for verification)
                    </label>
                    <input
                      type="text"
                      name="upiId"
                      value={formData.upiId}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="yourname@paytm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transaction ID (After payment)
                    </label>
                    <input
                      type="text"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Enter transaction ID after payment"
                    />
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800 mb-2">Payment Instructions:</h4>
                    <ol className="text-yellow-700 text-sm space-y-1">
                      <li>1. Scan QR code or use UPI ID</li>
                      <li>2. Enter amount: ₹{formData.donationAmount}</li>
                      <li>3. Complete payment</li>
                      <li>4. Enter UPI ID and Transaction ID</li>
                      <li>5. Submit donation form</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">How Your Donation Helps:</h3>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• Subsidize Sadya costs for community members</li>
                <li>• Arrange cultural program equipment and decorations</li>
                <li>• Provide prizes and certificates for participants</li>
                <li>• Support traditional Pookalam and decoration materials</li>
                <li>• Ensure memorable celebration for all families</li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-4 px-6 rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
            >
              Complete Donation
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Donations;