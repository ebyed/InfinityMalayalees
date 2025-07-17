import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
      {/* Hero Section with Clean Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-terracotta-100 via-terracotta-200 to-terracotta-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
        {/* Full-width Hero Image */}
        <div className="w-full h-64 md:h-80 lg:h-96 mb-8">
          <img 
            src="/WhatsApp Image 2025-07-09 at 22.59.43.jpeg" 
            alt="Aarppo - Onam 2025 Celebration" 
            className="w-full h-full object-cover rounded-b-3xl shadow-2xl"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-sand-50 dark:bg-charcoal-800 text-terracotta-900 dark:text-terracotta-300 text-sm font-bold mb-6 shadow-lg border-2 border-terracotta-400 dark:border-terracotta-300">
              <Calendar size={18} className="mr-2 text-terracotta-600 dark:text-terracotta-400" />
              September 13-14, 2025
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta-600 via-terracotta-700 to-terracotta-800 dark:from-terracotta-400 dark:via-terracotta-500 dark:to-terracotta-600">
                Aarppo
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-stone-800 dark:text-stone-100">
              Onam Celebrations 2025
            </h2>
            
            <p className="text-xl md:text-2xl text-stone-800 dark:text-stone-100 mb-8 max-w-4xl mx-auto font-medium">
              Welcome to Aarppo - our ultimate Onam celebration! Register, participate, 
              and be part of the grandest Malayalam festival at Ajmera Infinity.
            </p>
            
            <div className="bg-sand-50/80 dark:bg-charcoal-800/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border-2 border-terracotta-400 dark:border-terracotta-400 shadow-xl">
              <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100 mb-4">🌺 Onam Ashamsakal! 🌺</h3>
              <p className="text-stone-700 dark:text-stone-200 font-medium mb-4">
                We, the Infinity Malayalees, are here to celebrate Onam—close to our hearts and full of joy!
              </p>
              <p className="text-stone-700 dark:text-stone-200 font-medium mb-4">
                Join us at Ajmera Infinity as we bring to life the colors, flavors, and traditions of Kerala's grandest festival.
              </p>
              <p className="text-stone-700 dark:text-stone-200 font-medium">
                Register, participate, and be a part of the magic that makes Onam unforgettable.
              </p>
              <p className="text-stone-700 dark:text-stone-200 font-medium mt-4">
                Let's celebrate together—with smiles on our faces, love in our hearts, and the spirit of Onam in every moment!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gradient-to-br from-sand-50 via-sand-100 to-sand-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
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
          <section className="py-16 bg-gradient-to-br from-sand-50 via-sand-100 to-sand-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-terracotta-700 to-plum-700 dark:from-terracotta-400 dark:to-plum-400 bg-clip-text text-transparent mb-4 font-serif">
                  Join the festivites !
                </h2>
                <p className="text-lg text-stone-700 dark:text-stone-200 max-w-2xl mx-auto font-medium">
                  Everything you need to be part of our Onam 2025 celebrations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                  onClick={() => setActiveTab('sadya')}
                  className="group cursor-pointer bg-sand-50 dark:bg-charcoal-800 rounded-2xl p-8 border-2 border-terracotta-400 dark:border-terracotta-500 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-terracotta-500 to-terracotta-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                    <SadyaIcon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                    Sadya Information
                  </h3>
                  <p className="text-stone-700 dark:text-stone-200 font-medium">
                    Learn about our traditional Onam Sadya availability
                  </p>
                </div>

                <div
                  onClick={() => setActiveTab('events')}
                  className="group cursor-pointer bg-sand-50 dark:bg-charcoal-800 rounded-2xl p-8 border-2 border-plum-400 dark:border-plum-500 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-plum-500 to-plum-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                    <CulturalIcon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                    Cultural Events
                  </h3>
                  <p className="text-stone-700 dark:text-stone-200 font-medium">
                    Participate in dance, songs, skits, fashion show
                  </p>
                </div>

                <div
                  onClick={() => setActiveTab('thiruvathira')}
                  className="group cursor-pointer bg-sand-50 dark:bg-charcoal-800 rounded-2xl p-8 border-2 border-terracotta-400 dark:border-terracotta-500 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-terracotta-500 to-terracotta-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                    <ThiruvathiraIcon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">
                    Mega Thiruvathira
                  </h3>
                  <p className="text-stone-700 dark:text-stone-200 font-medium">
                    Ladies only traditional group dance registration
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Event Schedule */}
          <section className="py-16 bg-stone-50 dark:bg-charcoal-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-terracotta-700 to-plum-700 dark:from-terracotta-400 dark:to-plum-400 bg-clip-text text-transparent mb-4 font-serif">
                  📅 Event Schedule
                </h2>
                <p className="text-lg text-stone-700 dark:text-stone-200 font-medium">
                  Two days of non-stop celebration and fun activities
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-stone-50 dark:bg-charcoal-800 rounded-2xl p-8 border-2 border-terracotta-300 dark:border-terracotta-500 shadow-lg">
                  <h3 className="text-2xl font-bold text-terracotta-800 dark:text-terracotta-200 mb-4">🌅 Day 1 - September 13, 2025</h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h4 className="font-bold text-stone-800 dark:text-stone-100 mb-4 text-lg">Evening (6:00 PM - 9:00 PM)</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-terracotta-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-stone-700 dark:text-stone-200 font-medium">🎭 Cultural events and performances</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-terracotta-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-stone-700 dark:text-stone-200 font-medium">🍛 Traditional food stalls</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-terracotta-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-stone-700 dark:text-stone-200 font-medium">🎵 Live music and entertainment</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-terracotta-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-stone-700 dark:text-stone-200 font-medium">👨‍👩‍👧‍👦 Community bonding activities</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 dark:bg-charcoal-800 rounded-2xl p-8 border-2 border-plum-300 dark:border-plum-500 shadow-lg">
                  <h3 className="text-2xl font-bold text-plum-800 dark:text-plum-200 mb-4">Day 2 - September 14, 2025</h3>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-stone-800 dark:text-stone-100 mb-4 text-lg">Morning Program</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-plum-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div className="text-stone-700 dark:text-stone-200 font-medium">
                            <strong>5:00 AM:</strong> Community Pookalam Event - Everyone participates in creating beautiful flower arrangements
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-plum-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div className="text-stone-700 dark:text-stone-200 font-medium">
                            <strong>9:00 AM:</strong> Onam procession, welcoming King Mahabali with Chenda Melam
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-plum-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div className="text-stone-700 dark:text-stone-200 font-medium">
                            <strong>10:00 AM:</strong> Mega Thiruvathira performance
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-plum-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div className="text-stone-700 dark:text-stone-200 font-medium">
                            <strong>10:30 AM:</strong> Community Bonding Games
                          </div>
                        </div>
                        <div className="ml-5 space-y-2">
                          <div className="flex items-start">
                            <div className="w-1 h-1 bg-plum-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div className="text-stone-600 dark:text-stone-300 text-sm font-medium">Vadam Vali (Tug of War)</div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-1 h-1 bg-plum-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div className="text-stone-600 dark:text-stone-300 text-sm font-medium">Sundarikku Pottuthodal</div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-1 h-1 bg-plum-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div className="text-stone-600 dark:text-stone-300 text-sm font-medium">Kudam Adi (Pot Breaking)</div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-1 h-1 bg-plum-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <div className="text-stone-600 dark:text-stone-300 text-sm font-medium">...and many more fun games</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-800 dark:text-stone-100 mb-4 text-lg">Afternoon Feast</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-plum-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div className="text-stone-700 dark:text-stone-200 font-medium">
                            <strong>11:30 AM onwards:</strong> Traditional Onam Sadya
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-plum-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div className="text-stone-700 dark:text-stone-200 font-medium">Served on authentic banana leaves</div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-plum-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div className="text-stone-700 dark:text-stone-200 font-medium">20+ traditional dishes including Payasam</div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-2 h-2 bg-plum-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div className="text-stone-700 dark:text-stone-200 font-medium">Community dining experience</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-stone-50 dark:bg-charcoal-800 rounded-2xl p-6 border-2 border-stone-300 dark:border-stone-500">
                <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-3 text-lg text-center">Venue Information</h4>
                <div className="text-center text-stone-700 dark:text-stone-200 font-medium">
                  <p><strong>Location:</strong> Ajmera Infinity Clubhouse</p>
                  <p><strong>Address:</strong> Neeladri Road, Karuna Nagar, Electronic City Phase 1, Bangalore - 560100</p>
                  <p className="mt-2 text-terracotta-700 dark:text-terracotta-300"><strong>Sadya Coupons:</strong> Available at clubhouse from September 1-9</p>
                  <p className="text-terracotta-700 dark:text-terracotta-300"><strong>Sadya Date:</strong> September 14, 2025 (Sunday only)</p>
                </div>
              </div>
            </div>

            {/* Closing Message */}
            <div className="mt-12 bg-gradient-to-r from-terracotta-100 to-sand-100 dark:from-terracotta-900/30 dark:to-sand-900/30 rounded-3xl p-8 border-2 border-terracotta-300 dark:border-terracotta-500 text-center">
              <h3 className="text-2xl font-bold text-terracotta-800 dark:text-terracotta-200 mb-4">
                Join the Magic of Aarppo! ✨
              </h3>
              <p className="text-lg text-stone-800 dark:text-stone-200 font-medium leading-relaxed mb-6">
                Onam isn't just a festival for us—it's a beautiful emotion woven into our memories, our traditions, and our sense of belonging. No matter where we are in the world, this season brings us together with the warmth of home and the spirit of unity.
              </p>
              <p className="text-lg text-stone-800 dark:text-stone-200 font-medium leading-relaxed mb-6">
                We welcome the legendary King Mahabali with open hearts, colorful Pookkalams at our doorsteps, and joyful smiles all around. Dressed in our traditional kasavu sarees and mundu, we relive the essence of Kerala—simple, graceful, and deeply rooted.
              </p>
              <p className="text-lg text-stone-800 dark:text-stone-200 font-medium leading-relaxed">
                <strong>Aarppo - Infinity Onam 2025</strong> is more than just a celebration - It's a heartfelt gathering of friends and neighbours coming together to create indelible memories.
                Whether you are a malayalee or just love the festive spirit of Onam — join in, dress up, sing, dance, volunteer, and be a part of the magic!
              </p>
            </div>
          </section>
        </>
      )}

      {activeTab === 'sadya' && (
        <div className="bg-stone-50 dark:bg-charcoal-800">
          <SadyaInformation />
        </div>
      )}

      {activeTab === 'events' && (
        <div className="bg-stone-50 dark:bg-charcoal-800">
          <CulturalEvents />
        </div>
      )}

      {activeTab === 'thiruvathira' && (
        <div className="bg-stone-50 dark:bg-charcoal-800">
          <ThiruvathiraRegistration />
        </div>
      )}

    </div>
  );
};

export default Onam2025;