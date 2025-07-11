import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { SadyaIcon, CulturalIcon, ThiruvathiraIcon, PookkalamIcon, LampIcon, CoconutPalmIcon } from '../components/KeralaSVGIcons';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Clean Design */}
      <section className="relative overflow-hidden bg-warm-gradient">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 font-serif">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-red-700 to-orange-800">
                Infinity Malayalees
              </span>
            </h1>
            
            {/* English subtitle directly under main title */}
            <div className="mb-4">
              <span className="text-lg md:text-xl text-amber-900 font-sans font-medium block">
                Ajmera Infinity Malayalee Association
              </span>
            </div>
            
            {/* Malayalam text on new line */}
            <div className="mb-8">
              <span className="text-base md:text-lg text-amber-800 font-malayalam font-medium block">
                അജ്മേര ഇൻഫിനിറ്റി മലയാളി അസോസിയേഷൻ
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-stone-700 mb-8 max-w-3xl mx-auto font-medium">
              Join us in celebrating the spirit of Malayalam culture! Experience the joy of traditional festivals, 
              delicious Sadya, vibrant cultural programs, and the warmth of our community.
            </p>
            
            {/* Onam 2025 Hero CTA with Clean Design */}
            <div className="bg-orange-50/90 rounded-3xl p-8 mb-8 border-2 border-orange-400 shadow-2xl">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-terracotta-300 to-terracotta-400 text-terracotta-900 text-sm font-bold mb-4 shadow-lg border-2 border-terracotta-400">
                <Sparkles size={18} className="mr-2 text-terracotta-600" />
                September 13-14, 2025
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-amber-700">
                  Onam 2025 Grand Celebration
                </span>
              </h2>
              
              <p className="text-lg text-stone-800 mb-6 font-medium max-w-2xl mx-auto">
                Experience the grandest Malayalam festival with authentic Sadya, spectacular cultural programs, 
                Mega Thiruvathira, and traditional games. Two days of pure celebration!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 border border-orange-300 flex flex-col items-center">
                  <SadyaIcon size={32} className="text-terracotta-600 mb-2" />
                  <h3 className="font-bold text-stone-800">Traditional Sadya</h3>
                  <p className="text-sm text-stone-600">Available at Clubhouse</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-orange-300 flex flex-col items-center">
                  <CulturalIcon size={32} className="text-plum-600 mb-2" />
                  <h3 className="font-bold text-stone-800">Cultural Programs</h3>
                  <p className="text-sm text-stone-600">Dance, Music & More</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-orange-300 flex flex-col items-center">
                  <PookkalamIcon size={32} className="text-emerald-600 mb-2" />
                  <h3 className="font-bold text-stone-800">Pookalam Event</h3>
                  <p className="text-sm text-stone-600">Flower Arrangements</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-orange-300 flex flex-col items-center">
                  <ThiruvathiraIcon size={32} className="text-sapphire-600 mb-2" />
                  <h3 className="font-bold text-stone-800">Mega Thiruvathira</h3>
                  <p className="text-sm text-stone-600">Ladies Only Event</p>
                </div>
              </div>
              
              <Link
                to="/onam-2025"
                className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-amber-600 text-white font-bold text-xl hover:from-orange-600 hover:via-red-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Join Onam 2025 Celebration
                <ArrowRight className="ml-3" size={24} />
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/events"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-sapphire-500 text-white font-bold text-lg hover:from-emerald-600 hover:to-sapphire-600 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Explore All Events
                <Calendar className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Highlights with Clean Design */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent mb-4 font-serif">
              Community Highlights
            </h2>
            <p className="text-lg text-stone-700 max-w-2xl mx-auto font-medium">
              Discover what makes our Malayalee community special at Ajmera Infinity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-accent-500 to-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <SadyaIcon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-4">Authentic Traditions</h3>
              <p className="text-stone-700 mb-4 font-medium">
                Experience genuine Kerala culture with traditional Sadya, classical arts, 
                and time-honored customs that connect us to our roots.
              </p>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 border-2 border-amber-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-terracotta-500 to-gold-accent-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <ThiruvathiraIcon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-4">Vibrant Community</h3>
              <p className="text-stone-700 mb-4 font-medium">
                Join a warm, welcoming community of Malayalee families who share 
                the same love for culture, traditions, and creating lasting friendships.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-8 border-2 border-yellow-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-terracotta-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <LampIcon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-yellow-800 mb-4">Year-Round Events</h3>
              <p className="text-stone-700 mb-4 font-medium">
                From grand Onam celebrations to intimate cultural gatherings, 
                we organize events throughout the year that bring our community together.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Homepage;