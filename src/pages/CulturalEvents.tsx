// CulturalEvents.tsx
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
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
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSubmitted && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth' });
      successRef.current.focus();
    }
  }, [isSubmitted]);

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
      <div className="max-w-2xl mx-auto px-4 py-16" ref={successRef} tabIndex={-1}>
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

  return null; // form remains unchanged and will still render as-is
};

export default CulturalEvents;
