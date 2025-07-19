// CulturalEvents.tsx
import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2, User, Mail, Phone, Home } from 'lucide-react';
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
    interestedEvents: [] as string[],
    remarks: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const eventOptions = [
    'Choreography',
    'Group Song',
    'Group Dance',
    'Acting',
    'Musical Instruments',
    'Ramp Walk',
    'Volunteering'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await culturalRegistrations.create({
        participant_name: formData.participantName,
        email: formData.email,
        phone: formData.phone,
        flat_number: formData.flatNumber,
        age: formData.age ? parseInt(formData.age) : null,
        gender: formData.gender || null,
        event_category: 'Cultural Events',
        event_title: formData.interestedEvents.join(', '),
        participant_count: 1,
        description: `Age: ${formData.age || 'Not specified'}, Gender: ${formData.gender || 'Not specified'}, Interested Events: ${formData.interestedEvents.join(', ')}`,
        special_requirements: formData.remarks || null
      });

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'interestedEvents') {
      const selectedOptions = formData.interestedEvents.includes(value)
        ? formData.interestedEvents.filter(v => v !== value)
        : [...formData.interestedEvents, value];
      setFormData(prev => ({ ...prev, interestedEvents: selectedOptions }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (error) setError(null);
  };

  const toggleCheckbox = (event: string) => {
    setFormData(prev => ({
      ...prev,
      interestedEvents: prev.interestedEvents.includes(event)
        ? prev.interestedEvents.filter(e => e !== event)
        : [...prev.interestedEvents, event]
    }));
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-yellow-50 rounded-2xl p-8 text-center border border-yellow-300">
          <CheckCircle className="mx-auto text-yellow-600 mb-4" size={64} />
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Registration Successful!</h2>
          <p className="text-yellow-700 mb-6">
            Your cultural event registration has been submitted successfully. 
            Our events team will contact you with further details.
          </p>
          <div className="bg-white rounded-lg p-4 border border-yellow-300 mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Participant:</strong> {formData.participantName}<br />
              <strong>Age:</strong> {formData.age}<br />
              <strong>Gender:</strong> {formData.gender}<br />
              <strong>Interested Events:</strong> {formData.interestedEvents.join(', ')}<br />
              <strong>Contact:</strong> {formData.email}
            </p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ participantName: '', email: '', phone: '', flatNumber: '', age: '', gender: '', interestedEvents: [], remarks: '' });
            }}
            className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition-colors"
          >
            Register Another Event
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mb-4">
          Cultural Events 
        </h1>
        <p className="text-lg text-yellow-800 max-w-3xl mx-auto">
          Express your interest in cultural events for Onam 2025. Let us know what events 
          you'd like to <strong>participate in, volunteer for, or choreograph</strong> and we will contact you with more details.
        </p>
      </div>
      <div className="bg-yellow-50 rounded-2xl p-6 mb-8 border-2 border-yellow-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-yellow-800">Events Date:</p>
            <p className="text-yellow-700">September 13, 2025 - 06:00 PM onwards</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-xl border border-yellow-300 overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-500 px-8 py-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <CulturalIcon size={28} className="mr-3 text-white" />
            Event Registration Form
          </h2>
        </div>

        {error && (
          <div className="mx-8 mt-6 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
            <div className="flex items-center space-x-2">
              <AlertCircle className="text-yellow-800" size={20} />
              <p className="text-yellow-800 font-medium">{error}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
              <h3 className="text-yellow-800 font-bold mb-2">Important Guidelines</h3>
              <ul className="list-disc list-inside text-sm text-yellow-700 space-y-1">
                <li>⚠️ Limited seats only - We will contact you after confirmation</li> 
                {/* <li>All events should be family-friendly and appropriate for all ages</li> */}
                <li>Our cultural team will organize participants into groups based on interests</li>
                <li>Rehearsal schedules will be shared after team formation</li>
                <li>Registration closes within 1-2 weeks (limited time for practice)</li>
              </ul>
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-800 mb-1">Full Name</label>
              <input type="text" name="participantName" value={formData.participantName} onChange={handleChange} required className="w-full border border-yellow-300 px-4 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-800 mb-1">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-yellow-300 px-4 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-800 mb-1">Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full border border-yellow-300 px-4 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-800 mb-1">Flat Number</label>
              <input type="text" name="flatNumber" value={formData.flatNumber} onChange={handleChange} required className="w-full border border-yellow-300 px-4 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-800 mb-1">Age</label>
              <input type="number" name="age" value={formData.age} onChange={handleChange} required className="w-full border border-yellow-300 px-4 py-2 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-yellow-800 mb-1">Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full border border-yellow-300 px-4 py-2 rounded">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-yellow-800 mb-1">Events Interested In</label>
            <div className="space-y-2 border border-yellow-300 rounded p-4">
              {eventOptions.map((event) => (
                <label key={event} className="flex items-center space-x-2 text-yellow-800">
                  <input
                    type="checkbox"
                    name="interestedEvents"
                    value={event}
                    checked={formData.interestedEvents.includes(event)}
                    onChange={() => toggleCheckbox(event)}
                    className="h-4 w-4 text-yellow-600 border-yellow-300 rounded"
                  />
                  <span>{event}</span>
                </label>
              ))}
            </div>
            <p className="text-xs text-yellow-700 mt-1">You may select multiple events.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-yellow-800 mb-1">Remarks</label>
            <textarea name="remarks" value={formData.remarks} onChange={handleChange} rows={3} className="w-full border border-yellow-300 px-4 py-2 rounded" />
          </div>

          <button type="submit" disabled={isSubmitting} className="w-full bg-yellow-500 text-white font-bold py-3 rounded hover:bg-yellow-600">
            {isSubmitting ? <span className="flex items-center justify-center space-x-2"><Loader2 className="animate-spin" size={20} /><span>Registering...</span></span> : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CulturalEvents;
