import React, { useState } from 'react';
import { Users, CheckCircle, User, Mail, Phone, Home } from 'lucide-react';

const ThiruvathiraRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    flatNumber: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateIndianPhone = (phone: string): boolean => {
    // Indian phone number validation: +91 followed by 10 digits or just 10 digits
    const phoneRegex = /^(\+91[\s-]?)?[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ''));
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters long';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validateIndianPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid Indian phone number (10 digits starting with 6-9)';
    }

    // Flat number validation
    if (!formData.flatNumber.trim()) {
      newErrors.flatNumber = 'Flat/Apartment number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend/database
      console.log('Thiruvathira registration:', formData);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
      }, 500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/50 dark:to-rose-900/50 rounded-3xl p-8 text-center border-2 border-pink-300 dark:border-pink-500 shadow-2xl">
          <CheckCircle className="mx-auto text-pink-600 dark:text-pink-400 mb-6" size={80} />
          <h2 className="text-3xl font-bold text-pink-800 dark:text-pink-300 mb-4">🎉 Registration Successful!</h2>
          <p className="text-pink-700 dark:text-pink-300 mb-6 text-lg font-medium">
            Welcome to the Mega Thiruvathira! You're now registered for this beautiful traditional dance celebration. 
            Our cultural team will contact you with rehearsal details soon. 💃
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-pink-300 dark:border-pink-500 mb-6">
            <p className="text-sm text-gray-700 dark:text-gray-300 font-bold">
              📋 Registration Details:<br />
              👤 Name: {formData.fullName}<br />
              📧 Email: {formData.email}<br />
              📱 Phone: {formData.phone}<br />
              🏠 Flat: {formData.flatNumber}
            </p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                flatNumber: ''
              });
              setErrors({});
            }}
            className="bg-gradient-to-r from-pink-500 to-rose-500 dark:from-pink-400 dark:to-rose-400 text-white px-8 py-3 rounded-full hover:from-pink-600 hover:to-rose-600 dark:hover:from-pink-500 dark:hover:to-rose-500 transition-all transform hover:scale-105 shadow-lg font-bold"
          >
            Register Another Participant
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-300 to-rose-300 dark:from-pink-600 dark:to-rose-600 text-pink-900 dark:text-pink-100 text-sm font-bold mb-6 shadow-lg border-2 border-pink-400 dark:border-pink-500">
          <Users size={18} className="mr-2 text-rose-600 dark:text-rose-300" />
          💃 Ladies Only Event 💃
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent mb-4">
          🌺 Mega Thiruvathira Registration 🌺
        </h1>
        
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
          Join the most spectacular traditional Kerala group dance! Experience the grace and beauty 
          of Thiruvathira with fellow ladies in our community. 💫
        </p>
      </div>

      {/* About Thiruvathira */}
      <div className="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 rounded-2xl p-6 mb-8 border-2 border-pink-300 dark:border-pink-500">
        <h3 className="text-xl font-bold text-pink-800 dark:text-pink-300 mb-3">✨ About Mega Thiruvathira</h3>
        <p className="text-pink-700 dark:text-pink-300 font-medium mb-4">
          Thiruvathira is a traditional group dance performed by women in Kerala. It's a graceful dance form 
          that celebrates femininity and Kerala's cultural heritage.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-pink-800 dark:text-pink-300">📅 Performance Date:</p>
            <p className="text-pink-700 dark:text-pink-300">September 14, 2025 at 10:00 AM</p>
          </div>
          <div>
            <p className="font-semibold text-pink-800 dark:text-pink-300">🎭 Experience Required:</p>
            <p className="text-pink-700 dark:text-pink-300">None - We'll teach you!</p>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-2 border-pink-200 dark:border-pink-600 overflow-hidden">
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-500 dark:to-rose-500 px-8 py-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Users className="mr-3" size={28} />
            💃 Registration Form
          </h2>
          <p className="text-pink-100 mt-2 font-medium">Simple registration - just 4 essential details</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                <User size={18} className="inline mr-2 text-pink-600 dark:text-pink-400" />
                👤 Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-pink-500/20 transition-all shadow-sm ${
                  errors.fullName 
                    ? 'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400' 
                    : 'border-gray-300 dark:border-gray-600 focus:border-pink-500 dark:focus:border-pink-400'
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">{errors.fullName}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                <Mail size={18} className="inline mr-2 text-pink-600 dark:text-pink-400" />
                📧 Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-pink-500/20 transition-all shadow-sm ${
                  errors.email 
                    ? 'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400' 
                    : 'border-gray-300 dark:border-gray-600 focus:border-pink-500 dark:focus:border-pink-400'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                <Phone size={18} className="inline mr-2 text-pink-600 dark:text-pink-400" />
                📱 Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-pink-500/20 transition-all shadow-sm ${
                  errors.phone 
                    ? 'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400' 
                    : 'border-gray-300 dark:border-gray-600 focus:border-pink-500 dark:focus:border-pink-400'
                }`}
                placeholder="+91 98765 43210"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">{errors.phone}</p>
              )}
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Enter Indian phone number (10 digits starting with 6-9)
              </p>
            </div>

            {/* Flat Number */}
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                <Home size={18} className="inline mr-2 text-pink-600 dark:text-pink-400" />
                🏠 Flat/Apartment Number *
              </label>
              <input
                type="text"
                name="flatNumber"
                required
                value={formData.flatNumber}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-pink-500/20 transition-all shadow-sm ${
                  errors.flatNumber 
                    ? 'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400' 
                    : 'border-gray-300 dark:border-gray-600 focus:border-pink-500 dark:focus:border-pink-400'
                }`}
                placeholder="e.g., A-1205"
              />
              {errors.flatNumber && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">{errors.flatNumber}</p>
              )}
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 rounded-lg p-4 border border-pink-300 dark:border-pink-500">
            <h3 className="font-bold text-pink-800 dark:text-pink-300 mb-2">🌟 Important Guidelines:</h3>
            <ul className="text-pink-700 dark:text-pink-300 text-sm space-y-1 font-medium">
              <li>• Ladies only event - all ages welcome!</li>
              <li>• No prior dance experience required</li>
              <li>• 2-3 rehearsal sessions before the event</li>
              <li>• Performance on September 14, 2025 at 10:00 AM</li>
              <li>• Registration closes on September 5, 2025</li>
            </ul>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-500 dark:to-rose-500 text-white font-bold py-4 px-6 rounded-lg hover:from-pink-700 hover:to-rose-700 dark:hover:from-pink-600 dark:hover:to-rose-600 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg"
          >
            💃 Register for Mega Thiruvathira 🌺
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThiruvathiraRegistration;