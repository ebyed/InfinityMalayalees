import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Sparkles, ArrowRight } from 'lucide-react';
import { SadyaIcon, CulturalIcon, ThiruvathiraIcon, PookkalamIcon, LampIcon, CoconutPalmIcon } from '../components/KeralaSVGIcons';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Clean Design */}
      <section className="relative overflow-hidden bg-festive-gradient dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 font-serif">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-festive-gold-600 via-kerala-green-600 to-deep-maroon-600 dark:from-festive-gold-400 dark:via-kerala-green-400 dark:to-sunset-orange-400">
                Infinity Malayalees
              </span>
            </h1>
            
            {/* English subtitle directly under main title */}
            <div className="mb-4">
              <span className="text-lg md:text-xl text-charcoal-700 dark:text-festive-gold-300 font-sans font-medium block">
                Ajmera Infinity Malayalee Association
              </span>
            </div>
            
            {/* Malayalam text on new line */}
            <div className="mb-8">
              <span className="text-base md:text-lg text-charcoal-600 dark:text-festive-gold-400 font-malayalam font-medium block">
                അജ്മേര ഇൻഫിനിറ്റി മലയാളി അസോസിയേഷൻ
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-charcoal-700 dark:text-ivory-100 mb-8 max-w-3xl mx-auto font-medium">
              Join us in celebrating the spirit of Malayalam culture! Experience the joy of traditional festivals, 
              delicious Sadya, vibrant cultural programs, and the warmth of our community.
            </p>
            
            {/* Onam 2025 Hero CTA with Clean Design */}
            <div className="bg-white/90 dark:bg-charcoal-800/90 rounded-3xl p-8 mb-8 border-2 border-tropical-400 dark:border-tropical-500 shadow-2xl">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-bloom-300 to-coral-300 dark:from-bloom-400 dark:to-coral-400 text-bloom-900 dark:text-charcoal-900 text-sm font-bold mb-4 shadow-lg border-2 border-tropical-400 dark:border-tropical-300">
                <Sparkles size={18} className="mr-2 text-coral-600 dark:text-coral-700" />
                September 13-14, 2025
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropical-600 via-bloom-600 to-coral-600 dark:from-sunset-orange-400 dark:via-coral-400 dark:to-bloom-400">
                  Onam 2025 Grand Celebration
                </span>
              </h2>
              
              <p className="text-lg text-charcoal-800 dark:text-ivory-100 mb-6 font-medium max-w-2xl mx-auto">
                Experience the grandest Malayalam festival with authentic Sadya, spectacular cultural programs, 
                Mega Thiruvathira, and traditional games. Two days of pure celebration!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white dark:bg-charcoal-700 rounded-xl p-4 border border-tropical-300 dark:border-tropical-500 flex flex-col items-center">
                  <SadyaIcon size={32} className="text-tropical-600 dark:text-tropical-400 mb-2" />
                  <h3 className="font-bold text-charcoal-800 dark:text-ivory-100">Traditional Sadya</h3>
                  <p className="text-sm text-charcoal-600 dark:text-ash-grey-300">Available at Clubhouse</p>
                </div>
                <div className="bg-white dark:bg-charcoal-700 rounded-xl p-4 border border-tropical-300 dark:border-tropical-500 flex flex-col items-center">
                  <CulturalIcon size={32} className="text-bloom-600 dark:text-bloom-400 mb-2" />
                  <h3 className="font-bold text-charcoal-800 dark:text-ivory-100">Cultural Programs</h3>
                  <p className="text-sm text-charcoal-600 dark:text-ash-grey-300">Dance, Music & More</p>
                </div>
                <div className="bg-white dark:bg-charcoal-700 rounded-xl p-4 border border-tropical-300 dark:border-tropical-500 flex flex-col items-center">
                  <PookkalamIcon size={32} className="text-coral-600 dark:text-coral-400 mb-2" />
                  <h3 className="font-bold text-charcoal-800 dark:text-ivory-100">Pookalam Event</h3>
                  <p className="text-sm text-charcoal-600 dark:text-ash-grey-300">Flower Arrangements</p>
                </div>
                <div className="bg-white dark:bg-charcoal-700 rounded-xl p-4 border border-tropical-300 dark:border-tropical-500 flex flex-col items-center">
                  <ThiruvathiraIcon size={32} className="text-tropical-600 dark:text-tropical-400 mb-2" />
                  <h3 className="font-bold text-charcoal-800 dark:text-ivory-100">Mega Thiruvathira</h3>
                  <p className="text-sm text-charcoal-600 dark:text-ash-grey-300">Ladies Only Event</p>
                </div>
              </div>
              
              <Link
                to="/onam-2025"
                className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-tropical-500 via-bloom-500 to-coral-500 dark:from-tropical-500 dark:via-bloom-500 dark:to-coral-500 text-white font-bold text-xl hover:from-tropical-600 hover:via-bloom-600 hover:to-coral-600 dark:hover:from-tropical-600 dark:hover:via-bloom-600 dark:hover:to-coral-600 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Join Onam 2025 Celebration
                <ArrowRight className="ml-3" size={24} />
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/events"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-kerala-green-500 to-festive-gold-500 dark:from-kerala-green-400 dark:to-festive-gold-400 text-white font-bold text-lg hover:from-kerala-green-600 hover:to-festive-gold-600 dark:hover:from-kerala-green-500 dark:hover:to-festive-gold-500 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Explore All Events
                <Calendar className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Highlights with Clean Design */}
      <section className="py-16 bg-gradient-to-br from-ivory-50 via-festive-gold-50 to-kerala-green-50 dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-festive-gold-700 to-kerala-green-700 dark:from-festive-gold-400 dark:to-kerala-green-400 bg-clip-text text-transparent mb-4 font-serif">
              Community Highlights
            </h2>
            <p className="text-lg text-charcoal-700 dark:text-ash-grey-200 max-w-2xl mx-auto font-medium">
              Discover what makes our Malayalee community special at Ajmera Infinity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-charcoal-700 rounded-2xl p-8 border-2 border-festive-gold-300 dark:border-festive-gold-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-festive-gold-500 to-kerala-green-600 dark:from-festive-gold-400 dark:to-kerala-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <SadyaIcon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-deep-maroon-800 dark:text-festive-gold-200 mb-4">Authentic Traditions</h3>
              <p className="text-charcoal-700 dark:text-ash-grey-200 mb-4 font-medium">
                Experience genuine Kerala culture with traditional Sadya, classical arts, 
                and time-honored customs that connect us to our roots.
              </p>
            </div>

            <div className="bg-white dark:bg-charcoal-700 rounded-2xl p-8 border-2 border-sunset-orange-300 dark:border-sunset-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-sunset-orange-500 to-festive-gold-600 dark:from-sunset-orange-400 dark:to-festive-gold-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <ThiruvathiraIcon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-deep-maroon-800 dark:text-sunset-orange-200 mb-4">Vibrant Community</h3>
              <p className="text-charcoal-700 dark:text-ash-grey-200 mb-4 font-medium">
                Join a warm, welcoming community of Malayalee families who share 
                the same love for culture, traditions, and creating lasting friendships.
              </p>
            </div>

            <div className="bg-white dark:bg-charcoal-700 rounded-2xl p-8 border-2 border-kerala-green-300 dark:border-kerala-green-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-kerala-green-500 to-sunset-orange-600 dark:from-kerala-green-400 dark:to-sunset-orange-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <LampIcon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-deep-maroon-800 dark:text-kerala-green-200 mb-4">Year-Round Events</h3>
              <p className="text-charcoal-700 dark:text-ash-grey-200 mb-4 font-medium">
                From grand Onam celebrations to intimate cultural gatherings, 
                we organize events throughout the year that bring our community together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;