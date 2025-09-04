import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { SadyaIcon, CulturalIcon, ThiruvathiraIcon } from '../components/KeralaSVGIcons';
import SadyaInformation from './SadyaInformation';
import CulturalEvents from './CulturalEvents';
import ThiruvathiraRegistration from './ThiruvathiraRegistration';

const Onam2025: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    if (location.pathname === '/sadya-registration') return 'sadya';
    if (location.pathname === '/cultural-events') return 'events';
    if (location.pathname === '/thiruvathira-registration') return 'thiruvathira';
    return 'overview';
  });


  // Countdown state
const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const targetDate = new Date('2025-09-13T09:00:00+05:30').getTime();

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    } else {
      clearInterval(interval);
    }
  }, 1000);

  return () => clearInterval(interval);
}, []);

  const TabButton = ({ tabId, label, icon: Icon }: { tabId: string, label: string, icon: any }) => (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
        activeTab === tabId
          ? 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-white shadow-lg'
          : 'bg-white text-yellow-700 hover:bg-yellow-50 hover:text-yellow-700 border border-yellow-300 shadow'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-white text-yellow-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200">
   {/* Hero Image with Countdown Overlay */}
<div className="relative w-full h-64 md:h-80 lg:h-96 mb-4">
  <img
    src="/WhatsApp Image 2025-07-09 at 22.59.43.jpeg"
    alt="Aarppo - Onam 2025 Celebration"
    className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-yellow-300"
  />
  {/* Countdown Overlay */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-white text-center font-serif drop-shadow-lg">
      <div className="flex space-x-6 text-3xl md:text-5xl font-bold">
        <div>
          {timeLeft.days}
          <span className="block text-sm md:text-lg font-normal">Days</span>
        </div>
        <div>
          {timeLeft.hours}
          <span className="block text-sm md:text-lg font-normal">Hrs</span>
        </div>
        <div>
          {timeLeft.minutes}
          <span className="block text-sm md:text-lg font-normal">Min</span>
        </div>
        <div>
          {timeLeft.seconds}
          <span className="block text-sm md:text-lg font-normal">Sec</span>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Sponsor Logos */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-0">
  <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
    <a href="https://www.dragarwal.com/eye-hospitals/bangalore/" target="_blank" rel="noopener noreferrer">
      <img src="/sponsors/agarwals-logo.png" alt="Agarwals Eye Hospital" className="h-24 object-contain transition-transform hover:scale-105" />
    </a>
    <a href="https://theoterra.com/" target="_blank" rel="noopener noreferrer">
      <img src="/sponsors/ottera-logo.png" alt="The Ottera Electronics City" className="h-24 object-contain transition-transform hover:scale-105" />
    </a>
    <a href="https://maruthiceramics.com/" target="_blank" rel="noopener noreferrer">
      <img src="/sponsors/maruti-ceramics-logo.png" alt="Maruti Ceramics" className="h-24 object-contain transition-transform hover:scale-105" />
    </a>
  </div>
<h3 className="text-lg md:text-xl font-bold text-yellow-700">Presents</h3>
</div>
        {/* Hero Text */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 text-center">
  <div className="inline-flex items-center px-6 py-3 rounded-full bg-white text-yellow-800 text-sm font-bold mb-6 shadow-md border-2 border-yellow-400">
    <Calendar size={18} className="mr-2 text-yellow-600" />
    September 13-14, 2025
  </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif text-yellow-700">Aarppo</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6">Onam Celebrations 2025 @ Ajmera Infinity</h2>
          <p className="text-xl md:text-2xl text-stone-700 max-w-3xl mx-auto font-medium">
            Welcome to Aarppo - our ultimate Onam celebration! Register, participate, 
            and be part of the grandest Malayalam festival at Ajmera Infinity.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mb-4 font-serif">
            Join the festivities. Express your interest now!
          </h2>
          <p className="text-lg text-stone-700 max-w-2xl mx-auto font-medium">
            Everything you need to be part of our Onam 2025 celebrations
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <TabButton tabId="overview" label="Event Schedule" icon={Calendar} />
            <TabButton tabId="events" label="Register for Cultural Events" icon={() => <CulturalIcon size={18} />} />
            <TabButton tabId="thiruvathira" label="Register for Mega Thiruvathira" icon={() => <ThiruvathiraIcon size={18} />} />
            <TabButton tabId="sadya" label="Sadya Information" icon={() => <SadyaIcon size={18} />} />
          </div>
        </div>
      </section>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mb-4">
                Event Schedule
              </h1>
            </div>

            {/* Day 1 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-yellow-300 shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">🌅 Day 1 - September 13, 2025</h3>
              <h4 className="font-bold text-lg mb-4">Evening (6:00 PM - 9:00 PM)</h4>
              <ul className="space-y-2 text-stone-700 font-medium list-disc list-inside">
                <li>🎭 Cultural events and performances</li>
                <li>🍛 Traditional food stalls</li>
                <li>🎵 Live music and entertainment</li>
                <li>👨‍👩‍👧‍👦 Community bonding activities</li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-yellow-300 shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">🌞 Day 2 - September 14, 2025</h3>
              <h4 className="font-bold text-lg mb-4">Morning Program</h4>
              <ul className="space-y-2 text-stone-700 font-medium list-disc list-inside mb-6">
                <li><strong>5:00 AM:</strong> Pookalam Event (Flower Art)</li>
                <li><strong>9:00 AM:</strong> Onam procession with Mahabali</li>
                <li><strong>10:00 AM:</strong> Mega Thiruvathira</li>
                <li><strong>10:30 AM:</strong> Community Games</li>
              </ul>
              <h4 className="font-bold text-lg mb-4">Afternoon Feast</h4>
              <ul className="space-y-2 text-stone-700 font-medium list-disc list-inside">
                <li><strong>11:30 AM onwards:</strong> Traditional Onam Sadya</li>
                <li>Served on banana leaves with 20+ dishes</li>
                <li>Payasam & Community Dining</li>
              </ul>
            </div>

            {/* Venue Info */}
            <div className="mt-12 bg-white rounded-2xl p-6 border-2 border-yellow-300 text-center shadow">
              <h4 className="font-bold mb-3 text-lg">📍 Venue Information</h4>
              <p><strong>Location:</strong> Ajmera Infinity Clubhouse</p>
              <p><strong>Address:</strong> Neeladri Road, Electronic City Phase 1, Bangalore - 560100</p>
            </div>

            {/* Closing Message */}
            <div className="mt-12 bg-gradient-to-r from-yellow-100 to-white rounded-3xl p-8 border-2 border-yellow-300 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-700 mb-4">Join the Magic of Aarppo! ✨</h3>
              <p className="text-lg text-stone-800 font-medium leading-relaxed mb-4">
                Onam isn't just a festival—it's an emotion rooted in unity, tradition, and joy. Let's celebrate together, dressed in kasavu and filled with festive spirit!
              </p>
              <p className="text-lg text-stone-800 font-medium leading-relaxed">
                Aarppo is a celebration of memories, friendships, and Malayalee culture. Whether you’re from Kerala or just love Onam—join the fun!
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Tab Sections */}
      {activeTab === 'sadya' && <div className="bg-white"><SadyaInformation /></div>}
      {activeTab === 'events' && <div className="bg-white"><CulturalEvents /></div>}
      {activeTab === 'thiruvathira' && <div className="bg-white"><ThiruvathiraRegistration /></div>}
    </div>
  );
};

export default Onam2025;
