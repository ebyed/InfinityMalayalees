import React, { useState } from 'react';
import { Users, Star, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { CulturalIcon } from '../components/KeralaSVGIcons';
import { culturalRegistrations } from '../lib/database';

const CulturalEvents: React.FC = () => {
  const [formData, setFormData] = useState({
    participantName: '',
    email: '',
    phone: '',
    flatNumber: '',
    eventCategory: '',
    eventTitle: '',
    participantCount: 1,
    description: '',
    specialRequirements: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const eventCategories = [
    {
      id: 'group-dance',
      name: 'Group Dance',
      icon: Users,
      description: 'Traditional or modern group dance performances',
      maxParticipants: 15,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30'
    },
    {
      id: 'solo-dance',
      name: 'Solo Dance',
      icon: Star,
      description: 'Individual dance performances - classical or contemporary',
      maxParticipants: 1,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30'
    },
    {
      id: 'group-song',
      name: 'Group Song',
      icon: CulturalIcon,
      description: 'Choir or group singing performances',
      maxParticipants: 10,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30'
    },
    {
      id: 'solo-song',
      name: 'Solo Song',
      icon: CulturalIcon,
      description: 'Individual singing performances',
      maxParticipants: 1,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30'
    },
    {
      id: 'skit',
      name: 'Skit / Drama',
      icon: Users,
      description: 'Short theatrical performances or comedy skits',
      maxParticipants: 8,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30'
    },
    {
      id: 'fashion-show',
      name: 'Fashion Show',
      icon: Star,
      description: 'Traditional Kerala attire or theme-based fashion show',
      maxParticipants: 12,
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30'
    },
    {
      id: 'mega-thiruvathira',
      name: 'Mega Thiruvathira',
      icon: Users,
      description: 'Traditional Kerala group dance for women',
      maxParticipants: 20,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Create registration
      await culturalRegistrations.create({
        participant_name: formData.participantName,
        email: formData.email,
        phone: formData.phone,
        flat_number: formData.flatNumber,
        event_category: formData.eventCategory,
        event_title: formData.eventTitle,
        participant_count: formData.participantCount,
        description: formData.description,
        special_requirements: formData.specialRequirements || null
      });

      console.log('Cultural event registration successful:', formData);
      setIsSubmitted(true);
    } catch (err) {
      console.error('Cultural event registration error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred during registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const selectedEvent = eventCategories.find(event => event.id === formData.eventCategory);

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-green-50 dark:bg-green-900/50 rounded-2xl p-8 text-center border border-green-200 dark:border-green-600">
          <CheckCircle className="mx-auto text-green-500 dark:text-green-400 mb-4" size={64} />
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-4">Registration Successful!</h2>
          <p className="text-green-700 dark:text-green-300 mb-6">
            Your cultural event registration has been submitted successfully. 
            Our events team will contact you with further details.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-green-200 dark:border-green-600 mb-6">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong>Event:</strong> {selectedEvent?.name}<br />
              <strong>Participants:</strong> {formData.participantCount}<br />
              <strong>Contact:</strong> {formData.email}
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
                eventCategory: '',
                eventTitle: '',
                participantCount: 1,
                description: '',
                specialRequirements: ''
              });
            }}
            className="bg-green-500 dark:bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-600 dark:hover:bg-green-700 transition-colors"
          >
            Register Another Event
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Cultural Events Registration
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Showcase your talent at Onam 2025! Register for cultural events and be part of 
          our spectacular celebration. Open for all residents of Ajmera Infinity.
        </p>
      </div>

      {/* Event Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {eventCategories.map((event) => (
          <div
            key={event.id}
            className={`bg-gradient-to-br ${event.bgColor} rounded-2xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300`}
          >
            <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center mb-4`}>
              <event.icon size={28} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{event.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{event.description}</p>
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Max: {event.maxParticipants} participants</span>
              <CulturalIcon size={14} />
            </div>
          </div>
        ))}
      </div>

      {/* Registration Form */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-600 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-violet-500 dark:from-purple-600 dark:to-violet-600 px-8 py-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <CulturalIcon size={28} className="mr-3 text-white" />
            Event Registration Form
          </h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Participant Name (Main Contact) *
              </label>
              <input
                type="text"
                name="participantName"
                required
                value={formData.participantName}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Flat Number
              </label>
              <input
                type="text"
                name="flatNumber"
                value={formData.flatNumber}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="e.g., A-1205"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Event Category *
              </label>
              <select
                name="eventCategory"
                required
                value={formData.eventCategory}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Select an event category</option>
                {eventCategories.map((event) => (
                  <option key={event.id} value={event.id}>
                    {event.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number of Participants *
              </label>
              <input
                type="number"
                name="participantCount"
                required
                min="1"
                max={selectedEvent?.maxParticipants || 20}
                value={formData.participantCount}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Number of participants"
              />
              {selectedEvent && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Maximum {selectedEvent.maxParticipants} participants allowed
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Performance Title *
            </label>
            <input
              type="text"
              name="eventTitle"
              required
              value={formData.eventTitle}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Give a title to your performance"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Performance Description *
            </label>
            <textarea
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              disabled={isSubmitting}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Describe your performance, theme, duration, etc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Special Requirements (Optional)
            </label>
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              disabled={isSubmitting}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Any special requirements for props, music, lighting, etc."
            />
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-600">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Important Guidelines:</h3>
            <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
              <li>• All performances should be family-friendly and appropriate for all ages</li>
              <li>• Maximum performance time: 6-8 minutes per act</li>
              <li>• Participants are responsible for their own costumes and basic props</li>
              <li>• Background music should be provided in advance (WhatsApp or email)</li>
              <li>• Rehearsal slots will be arranged closer to the event date</li>
              <li>• Registration closes on September 5, 2025</li>
            </ul>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-500 to-violet-500 dark:from-purple-600 dark:to-violet-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-600 hover:to-violet-600 dark:hover:from-purple-700 dark:hover:to-violet-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader2 className="animate-spin" size={20} />
                <span>Registering...</span>
              </div>
            ) : (
              'Register for Cultural Event'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CulturalEvents;