import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2, User, Mail, Phone, Home, Users, Star } from 'lucide-react';
import { CulturalIcon } from '../components/KeralaSVGIcons';
import { culturalRegistrations } from '../lib/database';

const CulturalEvents: React.FC = () => {
  const [formData, setFormData] = useState({
    participantName: '',
    email: '',
    phone: '',
    flatNumber: '',
    age: '',
    gender: '',
    interestedEvents: '',
    remarks: ''
  });

  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [showEventDropdown, setShowEventDropdown] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const eventOptions = [
    'Singing',
    'Dancing', 
    'Drama',
    'Musical Instruments',
    'Ramp walk',
    'Decoration',
    'Volunteer'
  ];

  const eventCategories = [
    {
      id: 'group-dance',
      name: 'Group Dance',
      icon: Users,
      description: 'Traditional or modern group dance performances',
      maxParticipants: 15,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-white dark:bg-gray-800'
    },
    {
      id: 'solo-dance',
      name: 'Solo Dance',
      icon: Star,
      description: 'Individual dance performances - classical or contemporary',
      maxParticipants: 1,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-white dark:bg-gray-800'
    },
    {
      id: 'group-song',
      name: 'Group Song',
      icon: CulturalIcon,
      description: 'Choir or group singing performances',
      maxParticipants: 10,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-white dark:bg-gray-800'
    },
    {
      id: 'solo-song',
      name: 'Solo Song',
      icon: CulturalIcon,
      description: 'Individual singing performances',
      maxParticipants: 1,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-white dark:bg-gray-800'
    },
    {
      id: 'skit',
      name: 'Skit / Drama',
      icon: Users,
      description: 'Short theatrical performances or comedy skits',
      maxParticipants: 8,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-white dark:bg-gray-800'
    },
    {
      id: 'fashion-show',
      name: 'Fashion Show',
      icon: Star,
      description: 'Traditional Kerala attire or theme-based fashion show',
      maxParticipants: 12,
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-white dark:bg-gray-800'
    },
    {
      id: 'mega-thiruvathira',
      name: 'Mega Thiruvathira',
      icon: Users,
      description: 'Traditional Kerala group dance for women',
      maxParticipants: 20,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-white dark:bg-gray-800'
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
        age: formData.age ? parseInt(formData.age) : null,
        gender: formData.gender || null,
        event_category: 'Cultural Events',
        event_title: selectedEvents.join(', '),
        participant_count: 1,
        description: `Age: ${formData.age || 'Not specified'}, Gender: ${formData.gender || 'Not specified'}, Interested Events: ${selectedEvents.join(', ')}`,
        special_requirements: formData.remarks || null
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

  const handleEventToggle = (event: string) => {
    setSelectedEvents(prev => 
      prev.includes(event) 
        ? prev.filter(e => e !== event)
        : [...prev, event]
    );
  };

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
              <strong>Participant:</strong> {formData.participantName}<br />
              <strong>Age:</strong> {formData.age}<br />
              <strong>Gender:</strong> {formData.gender}<br />
              <strong>Interested Events:</strong> {selectedEvents.join(', ')}<br />
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
                age: '',
                gender: '',
                interestedEvents: '',
                remarks: ''
              });
              setSelectedEvents([]);
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
          Express your interest in cultural events for Onam 2025. Let us know what events 
          you'd like to participate in and we'll contact you with more details.
        </p>
        {/* <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4 border border-yellow-300 dark:border-yellow-500 max-w-2xl mx-auto">
          <p className="text-yellow-800 dark:text-yellow-300 font-medium text-center">
            <strong>⚠️ Limited Seats Available!</strong><br />
            We have limited seats for each event. We will contact you for confirmation after reviewing your registration.
          </p>
        </div> */}
      </div>

      {/*
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {eventCategories.map((event) => (
          <div
            key={event.id}
            className={`${event.bgColor} rounded-2xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300`}
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
      </div> */} 
      

      {/* Registration Form */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-600 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-violet-500 dark:from-purple-600 dark:to-violet-600 px-8 py-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <CulturalIcon size={28} className="mr-3 text-white" />
            Event Registration Form
          </h2>
        </div>
         <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 border border-purple-200 dark:border-purple-600">
            <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-2">Important Guidelines:</h3>
            <ul className="text-purple-700 dark:text-purple-300 text-sm space-y-1">
              <li>⚠️ <strong>Limited seats only</strong> - We will contact you for confirmation</li>
              <li>All events should be family-friendly and appropriate for all ages</li>
              <li>Our cultural team will organize participants into groups based on interests</li>
              <li>Rehearsal schedules will be shared after team formation</li>
              <li>Events include: Singing, Dancing, Drama, Musical Instruments, Ramp walk, Decoration, Volunteer</li>
              <li>Interest registration closes within 1-2 weeks (limited time for practice)</li>
            </ul>
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
                <User size={18} className="inline mr-2 text-purple-600 dark:text-purple-400" />
                Full Name *
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
                <Mail size={18} className="inline mr-2 text-purple-600 dark:text-purple-400" />
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
                <Phone size={18} className="inline mr-2 text-purple-600 dark:text-purple-400" />
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
                <Home size={18} className="inline mr-2 text-purple-600 dark:text-purple-400" />
                Flat Number *
              </label>
              <input
                type="text"
                name="flatNumber"
                required
                value={formData.flatNumber}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="e.g., A-1205"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <User size={18} className="inline mr-2 text-purple-600 dark:text-purple-400" />
                Age *
              </label>
              <input
                type="number"
                name="age"
                required
                min="1"
                max="100"
                value={formData.age}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Enter your age"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <User size={18} className="inline mr-2 text-purple-600 dark:text-purple-400" />
                Gender *
              </label>
              <select
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Events Interested In *
            </label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowEventDropdown(!showEventDropdown)}
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left flex justify-between items-center"
              >
                <span className={selectedEvents.length === 0 ? 'text-gray-500' : ''}>
                  {selectedEvents.length === 0 
                    ? 'Select events...' 
                    : `${selectedEvents.length} event(s) selected`
                  }
                </span>
                <span className="text-gray-400">▼</span>
              </button>
              
              {showEventDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {eventOptions.map((event) => (
                    <label
                      key={event}
                      className="flex items-center px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedEvents.includes(event)}
                        onChange={() => handleEventToggle(event)}
                        className="mr-3 h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      />
                      <span className="text-gray-900 dark:text-gray-100">{event}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            {selectedEvents.length === 0 && (
              <p className="mt-1 text-xs text-red-500">Please select at least one event</p>
            )}
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Select multiple events you're interested in participating
            </p>
          </div>

          {/* Close dropdown when clicking outside */}
          {showEventDropdown && (
            <div 
              className="fixed inset-0 z-5" 
              onClick={() => setShowEventDropdown(false)}
            />
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Remarks (Optional)
            </label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              disabled={isSubmitting}
              rows={3}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Any additional remarks, special requirements, or information..."
            />
          </div>

         

          <button
            type="submit"
            disabled={isSubmitting || selectedEvents.length === 0}
            className="w-full bg-gradient-to-r from-purple-500 to-violet-500 dark:from-purple-600 dark:to-violet-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-purple-600 hover:to-violet-600 dark:hover:from-purple-700 dark:hover:to-violet-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader2 className="animate-spin" size={20} />
                <span>Registering...</span>
              </div>
            ) : (
              'Submit Interest Registration'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CulturalEvents;