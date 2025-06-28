import React, { useState } from 'react';
import { User, Mail, Phone, Home, Users, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const MalayaleeRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    flatNumber: '',
    nativePlace: '',
    familyMembers: '',
    specialSkills: '',
    volunteerInterest: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Registration data:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 text-center border-2 border-green-300 shadow-2xl">
            <CheckCircle className="mx-auto text-green-600 mb-6" size={80} />
            <h2 className="text-3xl font-bold text-green-800 mb-4">🎉 Registration Successful!</h2>
            <p className="text-green-700 mb-6 text-lg font-medium">
              Thank you for registering as a Malayalee member of Ajmera Infinity. 
              You'll receive a confirmation email shortly. 📧
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all transform hover:scale-105 shadow-lg font-bold"
            >
              Register Another Member
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
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            👥 Malayalee Registration
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Join the Infinity Malayalees community! Register to stay connected with fellow Malayalees 
            and participate in cultural events and celebrations. 🌺
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-8">
            <h2 className="text-3xl font-bold text-white flex items-center">
              <Users className="mr-3" size={32} />
              👤 Member Registration Form
            </h2>
            <p className="text-blue-100 mt-2 font-medium">Join our vibrant Malayalam community</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  <User size={18} className="inline mr-2 text-blue-600" />
                  👤 Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  <Mail size={18} className="inline mr-2 text-blue-600" />
                  📧 Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  <Phone size={18} className="inline mr-2 text-blue-600" />
                  📱 Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  <Home size={18} className="inline mr-2 text-blue-600" />
                  🏠 Flat Number *
                </label>
                <input
                  type="text"
                  name="flatNumber"
                  required
                  value={formData.flatNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                  placeholder="e.g., A-1205"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  🏞️ Native Place (Kerala)
                </label>
                <input
                  type="text"
                  name="nativePlace"
                  value={formData.nativePlace}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                  placeholder="e.g., Kochi, Thiruvananthapuram"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  👨‍👩‍👧‍👦 Number of Family Members
                </label>
                <input
                  type="number"
                  name="familyMembers"
                  value={formData.familyMembers}
                  onChange={handleChange}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                  placeholder="Including yourself"
                  min="1"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                🎨 Special Skills / Talents
              </label>
              <textarea
                name="specialSkills"
                value={formData.specialSkills}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                placeholder="e.g., Classical dance, singing, instruments, cooking, etc."
              />
            </div>

            <div className="flex items-center p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
              <input
                type="checkbox"
                name="volunteerInterest"
                checked={formData.volunteerInterest}
                onChange={handleChange}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-2 border-gray-300 rounded"
              />
              <label className="ml-3 block text-sm font-bold text-blue-800">
                🙋‍♂️ I'm interested in volunteering for community events
              </label>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6 border-2 border-blue-300">
              <h3 className="font-bold text-blue-800 mb-4 text-lg">🌟 Benefits of Registration:</h3>
              <ul className="text-blue-700 font-medium space-y-2">
                <li className="flex items-center"><span className="mr-2">📢</span> Get updates about all Malayalam cultural events</li>
                <li className="flex items-center"><span className="mr-2">🎫</span> Priority booking for Onam Sadya and celebrations</li>
                <li className="flex items-center"><span className="mr-2">🤝</span> Connect with fellow Malayalees in the community</li>
                <li className="flex items-center"><span className="mr-2">🎭</span> Opportunity to showcase your talents in cultural programs</li>
                <li className="flex items-center"><span className="mr-2">🎪</span> Participate in organizing community events</li>
              </ul>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-6 px-8 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
            >
              🎉 Complete Registration
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MalayaleeRegistration;