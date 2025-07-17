import React, { useState } from 'react';
import { Users, Star, Music, CheckCircle, User, Mail, Phone, Crown } from 'lucide-react';

const MegaThiruvathiraRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    participantName: '',
    email: '',
    phone: '',
    flatNumber: '',
    age: '',
    experience: '',
    specialRequirements: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mega Thiruvathira registration:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-pink-100 to-rose-100 dark:bg-pink-900/50 rounded-3xl p-8 text-center border-2 border-pink-300 dark:border-pink-500 shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-conic from-pink-300 via-rose-300 to-red-300 opacity-30 animate-spin-slow"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 rounded-full bg-gradient-conic from-purple-300 via-pink-300 to-rose-300 opacity-25"></div>
          
          <CheckCircle className="mx-auto text-pink-600 dark:text-pink-400 mb-6" size={80} />
          <h2 className="text-3xl font-bold text-pink-800 dark:text-pink-300 mb-4">🎉 Registration Successful!</h2>
          <p className="text-pink-700 dark:text-pink-300 mb-6 text-lg font-medium">
            Welcome to the Mega Thiruvathira! You're now part of this beautiful traditional dance celebration. 
            Our cultural team will contact you with rehearsal details. 💃
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-pink-300 dark:border-pink-500 mb-6">
            <p className="text-sm text-gray-700 dark:text-gray-300 font-bold">
              📋 Registration Details:<br />
              👤 Participant: {formData.participantName}<br />
              📧 Contact: {formData.email}<br />
              🏠 Flat: {formData.flatNumber}
            </p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                participantName: '',
                email: '',
                phone: '',
                flatNumber: '',
                age: '',
                experience: '',
                specialRequirements: '',
                emergencyContact: '',
                emergencyPhone: ''
              });
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-8 relative">
        {/* Decorative Thiruvathira dancers in background */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
          <div className="absolute top-4 left-4 w-16 h-16">
            <div className="relative w-full h-full">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-2 h-6 bg-pink-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-20px)`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="absolute top-4 right-4 w-12 h-12">
            <div className="relative w-full h-full">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-1 h-4 bg-rose-400 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-15px)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-pink-300 to-rose-300 dark:from-pink-600 dark:to-rose-600 text-pink-900 dark:text-pink-100 text-sm font-bold mb-6 shadow-lg border-2 border-pink-400 dark:border-pink-500">
            <Crown size={18} className="mr-2 text-rose-600 dark:text-rose-300" />
            💃 Ladies Only Event 💃
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400 bg-clip-text text-transparent mb-4">
            🌺 Mega Thiruvathira Registration 🌺
          </h1>
          
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
            Join the most spectacular traditional Kerala group dance! Experience the grace and beauty 
            of Thiruvathira with fellow ladies in our community. No experience required - just bring your enthusiasm! 💫
          </p>
        </div>
      </div>

      {/* About Thiruvathira Section */}
      <div className="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 rounded-3xl p-8 mb-8 border-2 border-pink-300 dark:border-pink-500 shadow-xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-2 right-2 w-12 h-12 rounded-full bg-gradient-conic from-pink-300 via-rose-300 via-purple-300 to-pink-300 opacity-20 animate-spin-slow"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 rounded-full bg-gradient-conic from-rose-300 via-red-300 to-pink-300 opacity-15"></div>
        
        <div className="relative">
          <h2 className="text-3xl font-bold text-pink-800 dark:text-pink-300 mb-6 text-center">
            ✨ About Mega Thiruvathira ✨
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-rose-800 dark:text-rose-300 mb-4">🎭 What is Thiruvathira?</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">
                Thiruvathira is a traditional group dance performed by women in Kerala, especially during 
                the Thiruvathira festival. It's a graceful dance form that celebrates femininity, 
                devotion, and the beauty of Kerala's cultural heritage.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-rose-800 dark:text-rose-300 mb-4">🌟 What to Expect?</h3>
              <ul className="text-gray-700 dark:text-gray-300 space-y-3 font-medium">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <span><strong>Rehearsals:</strong> 2-3 practice sessions before the event</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <span><strong>Costume:</strong> Traditional Kerala saree (guidance provided)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <span><strong>Performance:</strong> September 14, 2025 at 10:00 AM</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <span><strong>Duration:</strong> 15-20 minutes performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-2 border-pink-200 dark:border-pink-600 overflow-hidden">
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-500 dark:to-rose-500 px-8 py-8 relative overflow-hidden">
          {/* Decorative dancers */}
          <div className="absolute top-2 right-2 opacity-20">
            <div className="flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3 h-8 relative">
                  <div className="w-2 h-2 bg-white rounded-full mx-auto"></div>
                  <div className="w-3 h-4 bg-white rounded-lg mx-auto mt-1"></div>
                  <div className="absolute top-2 -left-1 w-2 h-1 bg-white rounded-full transform rotate-45"></div>
                  <div className="absolute top-2 -right-1 w-2 h-1 bg-white rounded-full transform -rotate-45"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <h2 className="text-3xl font-bold text-white flex items-center">
              <Users className="mr-3" size={32} />
              💃 Registration Form
            </h2>
            <p className="text-pink-100 mt-2 font-medium">Join the most beautiful traditional dance celebration</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                <User size={18} className="inline mr-2 text-pink-600 dark:text-pink-400" />
                👤 Full Name *
              </label>
              <input
                type="text"
                name="participantName"
                required
                value={formData.participantName}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 dark:focus:border-pink-400 transition-all shadow-sm"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                <Mail size={18} className="inline mr-2 text-pink-600 dark:text-pink-400" />
                📧 Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 dark:focus:border-pink-400 transition-all shadow-sm"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                <Phone size={18} className="inline mr-2 text-pink-600 dark:text-pink-400" />
                📱 Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 dark:focus:border-pink-400 transition-all shadow-sm"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                🏠 Flat Number *
              </label>
              <input
                type="text"
                name="flatNumber"
                required
                value={formData.flatNumber}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 dark:focus:border-pink-400 transition-all shadow-sm"
                placeholder="e.g., A-1205"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                🎂 Age Group *
              </label>
              <select
                name="age"
                required
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 dark:focus:border-pink-400 transition-all shadow-sm"
              >
                <option value="">Select age group</option>
                <option value="18-25">18-25 years</option>
                <option value="26-35">26-35 years</option>
                <option value="36-45">36-45 years</option>
                <option value="46-55">46-55 years</option>
                <option value="55+">55+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                💃 Dance Experience
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 dark:focus:border-pink-400 transition-all shadow-sm"
              >
                <option value="">Select experience level</option>
                <option value="beginner">Beginner (No prior experience)</option>
                <option value="some">Some experience with traditional dances</option>
                <option value="experienced">Experienced in Thiruvathira</option>
                <option value="expert">Expert level</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                🚨 Emergency Contact Name *
              </label>
              <input
                type="text"
                name="emergencyContact"
                required
                value={formData.emergencyContact}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 dark:focus:border-pink-400 transition-all shadow-sm"
                placeholder="Emergency contact person"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                📞 Emergency Contact Phone *
              </label>
              <input
                type="tel"
                name="emergencyPhone"
                required
                value={formData.emergencyPhone}
                onChange={handleChange}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 dark:focus:border-pink-400 transition-all shadow-sm"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
              💬 Special Requirements or Comments
            </label>
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 dark:focus:border-pink-400 transition-all shadow-sm"
              placeholder="Any special requirements, health considerations, or questions..."
            />
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 rounded-2xl p-6 border-2 border-pink-300 dark:border-pink-500 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-conic from-pink-300 via-rose-300 to-red-300 opacity-20"></div>
            
            <h3 className="relative font-bold text-pink-800 dark:text-pink-300 mb-4 text-lg">🌟 Important Guidelines:</h3>
            <ul className="text-pink-700 dark:text-pink-300 font-medium space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-rose-500 dark:text-rose-400 mt-1">•</span>
                <span>This is exclusively for ladies - all ages welcome!</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-500 dark:text-rose-400 mt-1">•</span>
                <span>No prior dance experience required - we'll teach you!</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-500 dark:text-rose-400 mt-1">•</span>
                <span>Comfortable clothing for rehearsals (traditional attire for performance)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-500 dark:text-rose-400 mt-1">•</span>
                <span>Rehearsal schedule will be shared after registration</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-500 dark:text-rose-400 mt-1">•</span>
                <span>Performance on September 14, 2025 at 10:00 AM</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-rose-500 dark:text-rose-400 mt-1">•</span>
                <span>Limited slots. Registration closes on September 5, 2025</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-500 relative overflow-hidden">
            {/* Decorative dancers */}
            <div className="absolute top-2 right-2 opacity-15">
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-6 bg-purple-600 rounded-full"></div>
                ))}
              </div>
            </div>
            
            <div className="relative flex items-center space-x-2 mb-2">
              <Music size={16} className="text-purple-600 dark:text-purple-400" />
              <h3 className="font-bold text-purple-800 dark:text-purple-300 text-lg">🎵 What Makes This Special?</h3>
            </div>
            <p className="text-purple-700 dark:text-purple-300 font-medium">
              This isn't just a dance - it's a celebration of sisterhood, tradition, and the divine feminine energy. 
              You'll be part of a beautiful circle of women, moving in harmony to ancient Malayalam melodies, 
              creating magic that connects us to our ancestors and to each other. ✨
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-600 to-rose-600 dark:from-pink-500 dark:to-rose-500 text-white font-bold py-6 px-8 rounded-2xl hover:from-pink-700 hover:to-rose-700 dark:hover:from-pink-600 dark:hover:to-rose-600 transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg relative overflow-hidden"
          >
            {/* Decorative sparkles */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-4 right-8 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-3 left-8 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-2 right-4 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
            <span className="relative">💃 Join the Mega Thiruvathira! 🌺</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default MegaThiruvathiraRegistration;