import React, { useState } from 'react';
import { CheckCircle, User, Mail, Phone, Home, AlertCircle, Loader2 } from 'lucide-react';
import { ThiruvathiraIcon } from '../components/KeralaSVGIcons';
import { thiruvathiraRegistrations } from '../lib/database';

const ThiruvathiraRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    flatNumber: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Check if email already exists
      const existingRegistration = await thiruvathiraRegistrations.getByEmail(formData.email);
      if (existingRegistration) {
        setError('This email is already registered for Thiruvathira. Please use a different email address.');
        setIsSubmitting(false);
        return;
      }

      // Create registration
      await thiruvathiraRegistrations.create({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        flat_number: formData.flatNumber
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Thiruvathira registration error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred during registration. Please try again.');
    } finally {
      setIsSubmitting(false);
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
    
    // Clear general error
    if (error) setError(null);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-pink-50 dark:bg-pink-900/50 rounded-3xl p-8 text-center border-2 border-pink-300 dark:border-pink-500 shadow-2xl">
          <CheckCircle className="mx-auto text-pink-600 dark:text-pink-400 mb-6" size={80} />
          <h2 className="text-3xl font-bold text-pink-800 dark:text-pink-300 mb-4">Registration Successful!</h2>
          <p className="text-pink-700 dark:text-pink-300 mb-6 text-lg font-medium">
            Welcome to the Mega Thiruvathira! You're now registered for this beautiful traditional dance celebration. 
            Our cultural team will contact you with rehearsal details soon.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-pink-300 dark:border-pink-500 mb-6">
            <p className="text-sm text-gray-700 dark:text-gray-300 font-bold">
              Registration Details:<br />
              Name: {formData.fullName}<br />
              Email: {formData.email}<br />
              Phone: {formData.phone}<br />
              Flat: {formData.flatNumber}
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
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-stone-50 dark:bg-charcoal-800 text-yellow-900 dark:text-yellow-300 text-sm font-bold mb-6 shadow-lg border-2 border-yellow-400 dark:border-yellow-500">
          <ThiruvathiraIcon size={18} className="mr-2 text-rose-600 dark:text-rose-300" />
          Ladies Only Event
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 dark:from-yellow-400 dark:to-yellow-500 bg-clip-text text-transparent mb-4">
          Mega Thiruvathira Registration
        </h1>
        
        <p className="text-xl text-stone-700 dark:text-stone-200 max-w-2xl mx-auto font-medium">
          Join the most spectacular traditional Kerala group dance! Experience the grace and beauty 
          of Thiruvathira with fellow ladies in our community.
        </p>
      </div>

      {/* About Thiruvathira */}
      <div className="bg-stone-50 dark:bg-charcoal-800 rounded-2xl p-6 mb-8 border-2 border-yellow-300 dark:border-yellow-500">
        {/* <h3 className="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-3">What is Mega Thiruvathira</h3> */}
        {/* <p className="text-yellow-700 dark:text-yellow-300 font-medium mb-4">
          Thiruvathira is a traditional group dance performed by women in Kerala. It's a graceful dance form 
          that celebrates femininity and Kerala's cultural heritage. Maximum 100 participants can register.
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-yellow-800 dark:text-yellow-300">Performance Date:</p>
            <p className="text-yellow-700 dark:text-yellow-300">September 14, 2025 at 10:00 AM</p>
          </div>
          <div>
            <p className="font-semibold text-yellow-800 dark:text-yellow-300">Experience Required:</p>
            <p className="text-yellow-700 dark:text-yellow-300">None - We'll teach you!</p>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="bg-stone-50 dark:bg-charcoal-800 rounded-2xl shadow-xl border-2 border-yellow-200 dark:border-yellow-600 overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 dark:from-yellow-500 dark:to-yellow-600 px-8 py-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <ThiruvathiraIcon size={28} className="mr-3 text-white" />
            Registration Form
          </h2>
          <p className="text-yellow-100 mt-2 font-medium">Simple registration - just 4 essential details</p>
        </div>

        {error && (
          <div className="mx-8 mt-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-600 rounded-lg">
            <div className="flex items-center space-x-2">
              <AlertCircle className="text-red-600 dark:text-red-400" size={20} />
              <p className="text-red-700 dark:text-red-300 font-medium">{error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Guidelines */}
          <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-300 dark:border-yellow-500">
            <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">Important Guidelines:</h3>
            <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1 font-medium">
              <li>Ladies only event - all ages welcome! (Maximum 50 participants)</li>
              <li>No prior dance experience required</li>
              <li>4-5 rehearsal sessions before the event</li>
              <li>Performance on September 14, 2025 at 10:00 AM</li>
              <li>Registration closes within 1-2 weeks (limited time for practice)</li>
            </ul>
          </div>
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">
                <User size={18} className="inline mr-2 text-yellow-600 dark:text-yellow-400" />
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border-2 dark:bg-charcoal-700 dark:text-white focus:ring-4 focus:ring-yellow-500/20 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.fullName 
                    ? 'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400' 
                    : 'border-stone-300 dark:border-stone-600 focus:border-yellow-500 dark:focus:border-yellow-400'
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">{errors.fullName}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">
                <Mail size={18} className="inline mr-2 text-yellow-600 dark:text-yellow-400" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border-2 dark:bg-charcoal-700 dark:text-white focus:ring-4 focus:ring-yellow-500/20 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.email 
                    ? 'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400' 
                    : 'border-stone-300 dark:border-stone-600 focus:border-yellow-500 dark:focus:border-yellow-400'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">{errors.email}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">
                <Phone size={18} className="inline mr-2 text-yellow-600 dark:text-yellow-400" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border-2 dark:bg-charcoal-700 dark:text-white focus:ring-4 focus:ring-yellow-500/20 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.phone 
                    ? 'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400' 
                    : 'border-stone-300 dark:border-stone-600 focus:border-yellow-500 dark:focus:border-yellow-400'
                }`}
                placeholder="+91 98765 43210"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">{errors.phone}</p>
              )}
              <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
                Enter Indian phone number (10 digits starting with 6-9)
              </p>
            </div>

            {/* Flat Number */}
            <div>
              <label className="block text-sm font-bold text-stone-700 dark:text-stone-300 mb-2">
                <Home size={18} className="inline mr-2 text-yellow-600 dark:text-yellow-400" />
                Flat/Apartment Number *
              </label>
              <input
                type="text"
                name="flatNumber"
                required
                value={formData.flatNumber}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border-2 dark:bg-charcoal-700 dark:text-white focus:ring-4 focus:ring-yellow-500/20 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.flatNumber 
                    ? 'border-red-500 dark:border-red-400 focus:border-red-500 dark:focus:border-red-400' 
                    : 'border-stone-300 dark:border-stone-600 focus:border-yellow-500 dark:focus:border-yellow-400'
                }`}
                placeholder="e.g., A-1205"
              />
              {errors.flatNumber && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 font-medium">{errors.flatNumber}</p>
              )}
            </div>
          </div>

          

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 dark:from-yellow-500 dark:to-yellow-600 text-white font-bold py-4 px-6 rounded-lg hover:from-yellow-700 hover:to-yellow-800 dark:hover:from-yellow-600 dark:hover:to-yellow-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader2 className="animate-spin" size={20} />
                <span>Registering...</span>
              </div>
            ) : (
              'Register for Mega Thiruvathira'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThiruvathiraRegistration;