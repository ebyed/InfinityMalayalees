import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { SadyaIcon, CulturalIcon, ThiruvathiraIcon } from '../components/KeralaSVGIcons';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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

  const features = [
  ];

  const TabButton = ({ tabId, label, icon: Icon }: { tabId: string, label: string, icon: any }) => (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
        activeTab === tabId
          ? 'bg-gradient-to-r from-tropical-500 to-coral-500 dark:from-tropical-400 dark:to-coral-400 text-white shadow-lg'
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-tropical-100 dark:hover:bg-gray-700 hover:text-tropical-700 dark:hover:text-tropical-300 shadow-md'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Tropical Bloom Theme */}
      <section className="relative overflow-hidden bg-tropical-gradient dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
        {/* Tropical elements */}
        <div className="absolute inset-0 opacity-25 dark:opacity-15">
          {/* Large Tropical Bloom */}
          <div className="absolute top-16 left-16 w-80 h-80 rounded-full">
            <div className="w-full h-full rounded-full bg-gradient-conic from-tropical-400 via-bloom-400 via-coral-400 via-tropical-400 via-bloom-400 via-coral-400 to-tropical-400 animate-spin-slow"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-conic from-bloom-300 via-coral-300 via-tropical-300 to-bloom-300"></div>
            <div className="absolute inset-16 rounded-full bg-gradient-conic from-coral-300 via-tropical-300 to-coral-300"></div>
            <div className="absolute inset-24 rounded-full bg-gradient-to-r from-white via-tropical-100 to-bloom-100"></div>
          </div>

          {/* Medium Bloom */}
          <div className="absolute bottom-16 right-24 w-56 h-56 rounded-full">
            <div className="w-full h-full rounded-full bg-gradient-conic from-bloom-400 via-coral-400 via-tropical-400 to-bloom-400"></div>
            <div className="absolute inset-6 rounded-full bg-gradient-conic from-tropical-300 via-bloom-300 to-tropical-300"></div>
            <div className="absolute inset-12 rounded-full bg-gradient-to-r from-coral-200 to-bloom-200"></div>
          </div>

          {/* Small Bloom */}
          <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full">
            <div className="w-full h-full rounded-full bg-gradient-conic from-coral-400 via-tropical-400 to-coral-400"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-bloom-300 to-tropical-300"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-bloom-300 to-coral-300 dark:from-bloom-400 dark:to-coral-400 text-bloom-900 dark:text-gray-900 text-sm font-bold mb-6 shadow-lg border-2 border-tropical-400 dark:border-tropical-300">
              <Calendar size={18} className="mr-2 text-coral-600 dark:text-coral-700" />
              🌺 September 13-14, 2025 🌺
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-malayalam">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropical-600 via-bloom-600 to-coral-600 dark:from-tropical-400 dark:via-bloom-400 dark:to-coral-400">
                🎉 Onam 2025 🎉
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 mb-8 max-w-4xl mx-auto font-medium">
              Welcome to the ultimate Onam celebration portal! Register, participate, donate, 
              and be part of the grandest Malayalam festival at Ajmera Infinity. 🏛️✨
            </p>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border-2 border-tropical-400 dark:border-tropical-400 shadow-xl">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">🌺 Onam Ashamsakal! 🌺</h3>
              <p className="text-gray-700 dark:text-gray-200 font-medium">
                Experience the joy of King Mahabali's return with authentic traditions, 
                delicious Sadya, and vibrant cultural programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gradient-to-br from-tropical-50 via-bloom-50 to-coral-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <TabButton tabId="overview" label="Overview" icon={Calendar} />
            <TabButton tabId="sadya" label="Sadya Information" icon={() => <SadyaIcon size={18} />} />
            <TabButton tabId="events" label="Cultural Events" icon={() => <CulturalIcon size={18} />} />
            <TabButton tabId="thiruvathira" label="Mega Thiruvathira" icon={() => <ThiruvathiraIcon size={18} />} />
          </div>
        </div>
      </section>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <>
          {/* Main Features */}
          <section className="py-16 bg-gradient-to-br from-tropical-50 via-bloom-50 to-coral-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-tropical-700 to-coral-700 dark:from-tropical-400 dark:to-coral-400 bg-clip-text text-transparent mb-4 font-malayalam">
                  🌟 Celebration Features 🌟
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto font-medium">
                  Everything you need to be part of our Onam 2025 celebrations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                <div
                  onClick={() => setActiveTab('sadya')}
                  className="group cursor-pointer bg-gradient-to-br from-tropical-100 to-bloom-200 dark:from-tropical-900/30 dark:to-bloom-900/30 rounded-2xl p-8 border-2 border-tropical-400 dark:border-tropical-500 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-tropical-500 to-bloom-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                    <SadyaIcon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Sadya Information
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">
                    Learn about our traditional Onam Sadya availability
                  </p>
                </div>

                <div
                  onClick={() => setActiveTab('events')}
                  className="group cursor-pointer bg-gradient-to-br from-bloom-100 to-coral-200 dark:from-bloom-900/30 dark:to-coral-900/30 rounded-2xl p-8 border-2 border-bloom-400 dark:border-bloom-500 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-bloom-500 to-coral-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                    <CulturalIcon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Cultural Events
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">
                    Participate in dance, songs, skits, fashion show
                  </p>
                </div>

                <div
                  onClick={() => setActiveTab('thiruvathira')}
                  className="group cursor-pointer bg-gradient-to-br from-coral-100 to-tropical-200 dark:from-coral-900/30 dark:to-tropical-900/30 rounded-2xl p-8 border-2 border-coral-400 dark:border-coral-500 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-coral-500 to-tropical-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                    <ThiruvathiraIcon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Mega Thiruvathira
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 font-medium">
                    Ladies only traditional group dance registration
                  </p>
                </div>

              </div>
            </div>
          </section>


          {/* Event Schedule */}
          <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-tropical-700 to-coral-700 dark:from-tropical-400 dark:to-coral-400 bg-clip-text text-transparent mb-4 font-malayalam">
                  📅 Event Schedule
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
                  Two days of non-stop celebration and fun activities
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-bloom-100 to-coral-200 dark:from-bloom-900/30 dark:to-coral-900/30 rounded-2xl p-8 border-2 border-bloom-300 dark:border-bloom-500 shadow-lg">
                  <h3 className="text-2xl font-bold text-bloom-800 dark:text-bloom-200 mb-4">🌅 Day 1 - September 13, 2025</h3>
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-4 text-lg">Evening (6:00 PM - 9:00 PM)</h4>
                      <ul className="text-gray-700 dark:text-gray-200 space-y-2 font-medium">
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-bloom-500 rounded-full"></span>
                          <span>🎭 Cultural events and performances</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-bloom-500 rounded-full"></span>
                          <span>🍛 Traditional food stalls</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-bloom-500 rounded-full"></span>
                          <span>🎵 Live music and entertainment</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-bloom-500 rounded-full"></span>
                          <span>👨‍👩‍👧‍👦 Community bonding activities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-tropical-100 to-bloom-200 dark:from-tropical-900/30 dark:to-bloom-900/30 rounded-2xl p-8 border-2 border-tropical-300 dark:border-tropical-500 shadow-lg">
                  <h3 className="text-2xl font-bold text-tropical-800 dark:text-tropical-200 mb-4">🌆 Day 2 - September 14, 2025</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-3 text-lg">Morning Program</h4>
                      <ul className="text-gray-700 dark:text-gray-200 space-y-2 font-medium">
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-tropical-500 rounded-full"></span>
                          <span><strong>9:00 AM:</strong> 🎺 Onam procession, welcoming Maveli with Chenda Melam</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-tropical-500 rounded-full"></span>
                          <span><strong>9:30 AM:</strong> 🌸 Community Pookalam Event - Everyone participates in creating beautiful flower arrangements</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-tropical-500 rounded-full"></span>
                          <span><strong>10:00 AM:</strong> 💃 Mega Thiruvathira performance</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-tropical-500 rounded-full"></span>
                          <span><strong>10:30 AM:</strong> 🎮 Traditional Onam games</span>
                        </li>
                        <li className="flex items-center space-x-3 ml-6">
                          <span className="w-1 h-1 bg-tropical-400 rounded-full"></span>
                          <span className="text-sm">• Vadam Vali (Tug of War)</span>
                        </li>
                        <li className="flex items-center space-x-3 ml-6">
                          <span className="w-1 h-1 bg-tropical-400 rounded-full"></span>
                          <span className="text-sm">• Sundarikku Pottuthodal</span>
                        </li>
                        <li className="flex items-center space-x-3 ml-6">
                          <span className="w-1 h-1 bg-tropical-400 rounded-full"></span>
                          <span className="text-sm">• Kudam Adi (Pot Breaking)</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-3 text-lg">Afternoon Feast</h4>
                      <ul className="text-gray-700 dark:text-gray-200 space-y-2 font-medium">
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-tropical-500 rounded-full"></span>
                          <span><strong>11:30 AM onwards:</strong> 🍛 Traditional Onam Sadya (Available at Clubhouse)</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-tropical-500 rounded-full"></span>
                          <span>🌿 Served on authentic banana leaves</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-tropical-500 rounded-full"></span>
                          <span>🍮 20+ traditional dishes including Payasam</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <span className="w-2 h-2 bg-tropical-500 rounded-full"></span>
                          <span>👨‍👩‍👧‍👦 Community dining experience</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-coral-100 to-tropical-200 dark:from-coral-900/30 dark:to-tropical-900/30 rounded-2xl p-6 border-2 border-coral-300 dark:border-coral-500">
                <h4 className="font-bold text-coral-800 dark:text-coral-200 mb-3 text-lg text-center">📍 Venue Information</h4>
                <div className="text-center text-gray-700 dark:text-gray-200 font-medium">
                  <p><strong>🏛️ Location:</strong> Ajmera Infinity Community Hall</p>
                  <p><strong>📍 Address:</strong> Neeladri Road, Karuna Nagar, Electronic City Phase 1, Bangalore - 560100</p>
                  <p className="mt-2 text-coral-700 dark:text-coral-300"><strong>🍛 Sadya:</strong> Available at clubhouse from September 1-9</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'sadya' && (
        <div className="bg-tropical-gradient dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
          <SadyaInformation />
        </div>
      )}

      {activeTab === 'events' && (
        <div className="bg-bloom-gradient dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
          <CulturalEvents />
        </div>
      )}

      {activeTab === 'thiruvathira' && (
        <div className="bg-gradient-to-br from-coral-50 via-bloom-50 to-tropical-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
          <ThiruvathiraRegistration />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Onam2025;