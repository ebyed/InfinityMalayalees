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
    const phoneRegex = /^(\+91[\s-]?)?[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/[\s-]/g, ''));
  };

  const validateForm = (): boolean => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters long';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validateIndianPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid Indian phone number (10 digits starting with 6-9)';
    }

    if (!formData.flatNumber.trim()) {
      newErrors.flatNumber = 'Flat/Apartment number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const existingRegistration = await thiruvathiraRegistrations.getByEmail(formData.email);
      if (existingRegistration) {
        setError('This email is already registered for Thiruvathira. Please use a different email address.');
        setIsSubmitting(false);
        return;
      }

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
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    if (error) setError(null);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-yellow-50 rounded-3xl p-8 text-center border-2 border-yellow-300 shadow-2xl">
          <CheckCircle className="mx-auto text-yellow-600 mb-6" size={80} />
          <h2 className="text-3xl font-bold text-yellow-800 mb-4">Registration Successful!</h2>
          <p className="text-yellow-700 mb-6 text-lg font-medium">
            Welcome to the Mega Thiruvathira! You're now registered for this beautiful traditional dance celebration. 
            Our cultural team will contact you with rehearsal details soon.
          </p>
          <div className="bg-white rounded-xl p-4 border-2 border-yellow-300 mb-6">
            <p className="text-sm text-gray-700 font-bold">
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
              setFormData({ fullName: '', email: '', phone: '', flatNumber: '' });
              setErrors({});
            }}
            className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-white px-8 py-3 rounded-full hover:from-yellow-600 hover:to-yellow-500 transition-all transform hover:scale-105 shadow-lg font-bold"
          >
            Register Another Participant
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-yellow-900">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mb-4">
          Mega Thiruvathira Registration
        </h1>
        <p className="text-lg text-yellow-700 max-w-2xl mx-auto font-medium">
          Join the most spectacular traditional Kerala group dance! Experience the grace and beauty 
          of Thiruvathira with fellow ladies in our community.
        </p>
      </div>

      <div className="bg-yellow-50 rounded-2xl p-6 mb-8 border-2 border-yellow-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-yellow-800">Performance Date:</p>
            <p className="text-yellow-700">September 14, 2025 at 10:00 AM</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl border border-yellow-300 overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-500 px-8 py-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            
            <ThiruvathiraIcon size={28} className="mr-3 text-white" />
            Mega Thiruvathira Registration Form
          </h2>
        </div>

        {error && (
          <div className="mx-8 mt-6 p-4 bg-red-100 border border-red-300 rounded-lg">
            <div className="flex items-center space-x-2">
              <AlertCircle className="text-red-600" size={20} />
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-300">
            <h3 className="font-bold text-yellow-800 mb-2">Important Guidelines:</h3>
            <ul className="text-yellow-700 text-sm space-y-1 font-medium">
              <li>LADIES ONLY event - all ages welcome! (Limited participants only - First come first serve)</li> 
              <li>Participants are expected to attend all rehearsal sessions set by choreographers</li>
              <li>Registration closes within 1-2 weeks (limited time for practice)</li>
            </ul>
          </div>

          {['fullName', 'email', 'phone', 'flatNumber'].map(field => (
            <div key={field}>
              <label className="block text-sm font-bold text-yellow-800 mb-2 capitalize">
                {field === 'fullName' && <User size={18} className="inline mr-2 text-yellow-600" />} 
                {field === 'email' && <Mail size={18} className="inline mr-2 text-yellow-600" />} 
                {field === 'phone' && <Phone size={18} className="inline mr-2 text-yellow-600" />} 
                {field === 'flatNumber' && <Home size={18} className="inline mr-2 text-yellow-600" />} 
                {field.replace(/([A-Z])/g, ' $1')} *
              </label>
              <input
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                name={field}
                required
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-4 focus:ring-yellow-500/20 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors[field] 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-stone-300 focus:border-yellow-500'
                }`}
                placeholder={`Enter your ${field === 'flatNumber' ? 'flat/apartment number' : field}`}
              />
              {errors[field] && (
                <p className="mt-1 text-sm text-red-600 font-medium">{errors[field]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isSubmitting}
            
            className="w-full bg-yellow-500 text-white font-bold py-3 rounded hover:bg-yellow-600 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader2 className="animate-spin" size={20} />
                <span>Registering...</span>
              </div>
            ) : (
              'Register'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThiruvathiraRegistration;
