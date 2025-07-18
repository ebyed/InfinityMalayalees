// MegaThiruvathiraRegistration.tsx
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
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-yellow-100 to-sand-100 rounded-3xl p-8 text-center border-2 border-yellow-300 shadow-2xl">
          <CheckCircle className="mx-auto text-yellow-600 mb-6" size={80} />
          <h2 className="text-3xl font-bold text-yellow-800 mb-4">🎉 Registration Successful!</h2>
          <p className="text-yellow-700 mb-6 text-lg font-medium">
            You're now registered for the Mega Thiruvathira! Stay tuned for rehearsal updates. 💃
          </p>
          <div className="bg-white rounded-xl p-4 border-2 border-yellow-200 mb-6">
            <p className="text-sm text-yellow-800 font-bold">
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
                participantName: '', email: '', phone: '', flatNumber: '', age: '',
                experience: '', specialRequirements: '', emergencyContact: '', emergencyPhone: ''
              });
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
    <div className="max-w-4xl mx-auto px-4 py-12 text-yellow-800">
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-200 to-yellow-100 text-yellow-900 text-sm font-bold border-2 border-yellow-400">
          <Crown size={18} className="mr-2 text-yellow-600" />
          💃 Ladies Only Event 💃
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-700 mt-4 mb-4">
          🌼 Mega Thiruvathira Registration 🌼
        </h1>
        <p className="text-xl text-yellow-700 max-w-3xl mx-auto font-medium">
          Join our graceful community dance in traditional attire. No prior experience needed — just enthusiasm and unity!
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border-2 border-yellow-200 p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Users className="mr-3" size={28} />
          Registration Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['participantName', 'email', 'phone', 'flatNumber', 'emergencyContact', 'emergencyPhone'].map(field => (
              <div key={field}>
                <label className="block text-sm font-bold mb-2 capitalize">
                  {field.replace(/([A-Z])/g, ' $1')}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-bold mb-2">Age Group</label>
              <select
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">Select age group</option>
                <option value="18-25">18–25</option>
                <option value="26-35">26–35</option>
                <option value="36-45">36–45</option>
                <option value="46-55">46–55</option>
                <option value="55+">55+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Dance Experience</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option value="">Select experience level</option>
                <option value="beginner">Beginner</option>
                <option value="some">Some Experience</option>
                <option value="experienced">Experienced</option>
                <option value="expert">Expert</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Special Requirements or Comments</label>
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border-2 border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-400 text-white font-bold py-4 rounded-xl hover:from-yellow-600 hover:to-yellow-500 transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            💃 Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default MegaThiruvathiraRegistration;
