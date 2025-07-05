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
      <section className="relative overflow-hidden bg-mature-gradient dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 font-serif">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-sapphire-600 to-plum-700 dark:from-emerald-400 dark:via-sapphire-400 dark:to-plum-500">
                Infinity Malayalees
              </span>
            </h1>
            
            {/* English subtitle directly under main title */}
            <div className="mb-4">
              <span className="text-lg md:text-xl text-stone-700 dark:text-sand-300 font-sans font-medium block">
                Ajmera Infinity Malayalee Association
              </span>
            </div>
            
            {/* Malayalam text on new line */}
            <div className="mb-8">
              <span className="text-base md:text-lg text-stone-600 dark:text-sand-400 font-malayalam font-medium block">
                അജ്മേര ഇൻഫിനിറ്റി മലയാളി അസോസിയേഷൻ
              </span>
            </div>
            
            <p className="text-lg md:text-xl text-stone-700 dark:text-stone-100 mb-8 max-w-3xl mx-auto font-medium">
              Join us in celebrating the spirit of Malayalam culture! Experience the joy of traditional festivals, 
              delicious Sadya, vibrant cultural programs, and the warmth of our community.
            </p>
            
            {/* Onam 2025 Hero CTA with Clean Design */}
            <div className="bg-sand-50/80 dark:bg-charcoal-800/80 rounded-3xl p-8 mb-8 border-2 border-terracotta-400 dark:border-terracotta-500 shadow-2xl">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-terracotta-300 to-terracotta-400 dark:from-terracotta-400 dark:to-terracotta-500 text-terracotta-900 dark:text-charcoal-900 text-sm font-bold mb-4 shadow-lg border-2 border-terracotta-400 dark:border-terracotta-300">
                <Sparkles size={18} className="mr-2 text-terracotta-600 dark:text-terracotta-700" />
                September 13-14, 2025
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta-600 via-terracotta-700 to-terracotta-800 dark:from-terracotta-400 dark:via-terracotta-500 dark:to-terracotta-600">
                  Onam 2025 Grand Celebration
                </span>
              </h2>
              
              <p className="text-lg text-stone-800 dark:text-stone-100 mb-6 font-medium max-w-2xl mx-auto">
                Experience the grandest Malayalam festival with authentic Sadya, spectacular cultural programs, 
                Mega Thiruvathira, and traditional games. Two days of pure celebration!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white dark:bg-charcoal-700 rounded-xl p-4 border border-terracotta-300 dark:border-terracotta-500 flex flex-col items-center">
                  <SadyaIcon size={32} className="text-terracotta-600 dark:text-terracotta-400 mb-2" />
                  <h3 className="font-bold text-stone-800 dark:text-stone-100">Traditional Sadya</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300">Available at Clubhouse</p>
                </div>
                <div className="bg-white dark:bg-charcoal-700 rounded-xl p-4 border border-terracotta-300 dark:border-terracotta-500 flex flex-col items-center">
                  <CulturalIcon size={32} className="text-plum-600 dark:text-plum-400 mb-2" />
                  <h3 className="font-bold text-stone-800 dark:text-stone-100">Cultural Programs</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300">Dance, Music & More</p>
                </div>
                <div className="bg-white dark:bg-charcoal-700 rounded-xl p-4 border border-terracotta-300 dark:border-terracotta-500 flex flex-col items-center">
                  <PookkalamIcon size={32} className="text-emerald-600 dark:text-emerald-400 mb-2" />
                  <h3 className="font-bold text-stone-800 dark:text-stone-100">Pookalam Event</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300">Flower Arrangements</p>
                </div>
                <div className="bg-white dark:bg-charcoal-700 rounded-xl p-4 border border-terracotta-300 dark:border-terracotta-500 flex flex-col items-center">
                  <ThiruvathiraIcon size={32} className="text-sapphire-600 dark:text-sapphire-400 mb-2" />
                  <h3 className="font-bold text-stone-800 dark:text-stone-100">Mega Thiruvathira</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-300">Ladies Only Event</p>
                </div>
              </div>
              
              <Link
                to="/onam-2025"
                className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-terracotta-500 via-terracotta-600 to-terracotta-700 dark:from-terracotta-500 dark:via-terracotta-600 dark:to-terracotta-700 text-white font-bold text-xl hover:from-terracotta-600 hover:via-terracotta-700 hover:to-terracotta-800 dark:hover:from-terracotta-600 dark:hover:via-terracotta-700 dark:hover:to-terracotta-800 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Join Onam 2025 Celebration
                <ArrowRight className="ml-3" size={24} />
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/events"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-sapphire-500 dark:from-emerald-400 dark:to-sapphire-400 text-white font-bold text-lg hover:from-emerald-600 hover:to-sapphire-600 dark:hover:from-emerald-500 dark:hover:to-sapphire-500 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Explore All Events
                <Calendar className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Highlights with Clean Design */}
      <section className="py-16 bg-gradient-to-br from-stone-50 via-sand-50 to-stone-100 dark:from-charcoal-800 dark:via-charcoal-700 dark:to-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-sapphire-700 dark:from-emerald-400 dark:to-sapphire-400 bg-clip-text text-transparent mb-4 font-serif">
              Community Highlights
            </h2>
            <p className="text-lg text-stone-700 dark:text-stone-200 max-w-2xl mx-auto font-medium">
              Discover what makes our Malayalee community special at Ajmera Infinity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-stone-50 dark:bg-charcoal-700 rounded-2xl p-8 border-2 border-gold-accent-300 dark:border-gold-accent-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-accent-500 to-emerald-600 dark:from-gold-accent-400 dark:to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <SadyaIcon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-sapphire-800 dark:text-gold-accent-200 mb-4">Authentic Traditions</h3>
              <p className="text-stone-700 dark:text-stone-200 mb-4 font-medium">
                Experience genuine Kerala culture with traditional Sadya, classical arts, 
                and time-honored customs that connect us to our roots.
              </p>
            </div>

            <div className="bg-stone-50 dark:bg-charcoal-700 rounded-2xl p-8 border-2 border-terracotta-300 dark:border-terracotta-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-terracotta-500 to-gold-accent-600 dark:from-terracotta-400 dark:to-gold-accent-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <ThiruvathiraIcon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-sapphire-800 dark:text-terracotta-200 mb-4">Vibrant Community</h3>
              <p className="text-stone-700 dark:text-stone-200 mb-4 font-medium">
                Join a warm, welcoming community of Malayalee families who share 
                the same love for culture, traditions, and creating lasting friendships.
              </p>
            </div>

            <div className="bg-stone-50 dark:bg-charcoal-700 rounded-2xl p-8 border-2 border-emerald-300 dark:border-emerald-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-terracotta-600 dark:from-emerald-400 dark:to-terracotta-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <LampIcon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-sapphire-800 dark:text-emerald-200 mb-4">Year-Round Events</h3>
              <p className="text-stone-700 dark:text-stone-200 mb-4 font-medium">
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