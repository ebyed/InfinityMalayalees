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

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    else if (formData.fullName.trim().length < 2) newErrors.fullName = 'Name must be at least 2 characters';

    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';

    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!validateIndianPhone(formData.phone)) newErrors.phone = 'Invalid Indian phone number';

    if (!formData.flatNumber.trim()) newErrors.flatNumber = 'Flat number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const existing = await thiruvathiraRegistrations.getByEmail(formData.email);
      if (existing) {
        setError('This email is already registered.');
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
      console.error(err);
      setError(err instanceof Error ? err.message : 'Something went wrong.');
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
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-yellow-50 rounded-3xl p-8 text-center border-2 border-yellow-300 shadow-2xl">
          <CheckCircle className="mx-auto text-yellow-600 mb-6" size={80} />
          <h2 className="text-3xl font-bold text-yellow-800 mb-4">Registration Successful!</h2>
          <p className="text-yellow-700 mb-6 text-lg font-medium">
            You're now registered for the Mega Thiruvathira! Stay tuned for rehearsal updates.
          </p>
          <div className="bg-white rounded-xl p-4 border-2 border-yellow-200 mb-6">
            <p className="text-sm text-yellow-800 font-bold">
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
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mb-4">
          Mega Thiruvathira Registration
        </h1>
        <p className="text-lg text-yellow-800 max-w-xl mx-auto font-medium">
          Join the most graceful community dance in traditional attire. No experience needed — just enthusiasm and unity!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border-2 border-yellow-300 p-8 space-y-6">
        {error && (
          <div className="p-4 bg-red-100 border border-red-300 rounded-lg">
            <div className="flex items-center space-x-2">
              <AlertCircle className="text-red-600" size={20} />
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          </div>
        )}

        {[{ name: 'fullName', icon: User, label: 'Full Name', placeholder: 'Enter your full name' },
          { name: 'email', icon: Mail, label: 'Email', placeholder: 'you@example.com' },
          { name: 'phone', icon: Phone, label: 'Phone', placeholder: '+91 98765 43210' },
          { name: 'flatNumber', icon: Home, label: 'Flat Number', placeholder: 'e.g., A-1205' }].map(field => (
          <div key={field.name}>
            <label className="block text-sm font-bold text-yellow-800 mb-2">
              <field.icon size={18} className="inline mr-2 text-yellow-600" />
              {field.label} *
            </label>
            <input
              type="text"
              name={field.name}
              required
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-yellow-400 text-yellow-800 ${
                errors[field.name] ? 'border-red-500' : 'border-yellow-200'
              }`}
              placeholder={field.placeholder}
            />
            {errors[field.name] && (
              <p className="mt-1 text-sm text-red-600 font-medium">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-bold py-4 px-6 rounded-lg hover:from-yellow-700 hover:to-yellow-800 transition-all duration-200 transform hover:scale-105 shadow-lg text-lg disabled:opacity-50"
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
  );
};

export default ThiruvathiraRegistration;
