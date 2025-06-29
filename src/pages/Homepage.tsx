import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Gift, Sparkles, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Serene Backwaters Theme */}
      <section className="relative overflow-hidden bg-serene-gradient dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
        {/* Backwater elements */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          {/* Gentle water ripples */}
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-br from-serene-300 to-backwater-300 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-br from-sage-300 to-serene-300 animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-backwater-300 to-sage-300 animate-bounce-slow"></div>
          
          {/* Coconut palm silhouettes */}
          <div className="absolute top-10 right-10 w-16 h-40 opacity-30">
            <div className="w-2 h-32 bg-sage-600 mx-auto"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute w-12 h-3 bg-serene-600 rounded-full"
                  style={{
                    transform: `rotate(${i * 60}deg) translateY(-8px)`,
                    transformOrigin: 'center bottom'
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Traditional boat silhouettes */}
          <div className="absolute bottom-16 left-16 w-48 h-8 bg-gradient-to-r from-sage-600 to-backwater-600 rounded-full opacity-25 transform rotate-12"></div>
          <div className="absolute bottom-12 left-20 w-32 h-6 bg-gradient-to-r from-serene-600 to-sage-600 rounded-full opacity-20 transform rotate-12"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-serene-600 via-backwater-600 to-sage-600 dark:from-serene-400 dark:via-backwater-400 dark:to-sage-400">
                Infinity Malayalees
              </span>
              <br />
              <span className="text-2xl md:text-4xl text-gray-800 dark:text-gray-200">
                Ajmera Infinity Malayalam Association
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-medium">
              Join us in celebrating the spirit of Malayalam culture! Experience the joy of traditional festivals, 
              delicious Sadya, vibrant cultural programs, and the warmth of our community. 🎭🍛
            </p>
            
            {/* Onam 2025 Hero CTA with Tropical Bloom Theme */}
            <div className="bg-tropical-gradient dark:from-tropical-900/30 dark:via-bloom-900/30 dark:to-coral-900/30 rounded-3xl p-8 mb-8 border-4 border-tropical-400 dark:border-tropical-500 shadow-2xl backdrop-blur-sm">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-bloom-300 to-coral-300 dark:from-bloom-400 dark:to-coral-400 text-bloom-900 dark:text-gray-900 text-sm font-bold mb-4 shadow-lg border-2 border-tropical-400 dark:border-tropical-300">
                <Sparkles size={18} className="mr-2 text-coral-600 dark:text-coral-700" />
                🌺 September 13-14, 2025 🌺
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropical-600 via-bloom-600 to-coral-600 dark:from-tropical-400 dark:via-bloom-400 dark:to-coral-400">
                  🎉 Onam 2025 Grand Celebration 🎉
                </span>
              </h2>
              
              <p className="text-lg text-gray-800 dark:text-gray-200 mb-6 font-medium max-w-2xl mx-auto">
                Experience the grandest Malayalam festival with authentic Sadya, spectacular cultural programs, 
                Mega Thiruvathira, and traditional games. Two days of pure celebration!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 border border-tropical-300 dark:border-tropical-500">
                  <div className="text-2xl mb-2">🍛</div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">Traditional Sadya</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">₹350 per person</p>
                </div>
                <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 border border-tropical-300 dark:border-tropical-500">
                  <div className="text-2xl mb-2">🎭</div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">Cultural Programs</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Dance, Music & More</p>
                </div>
                <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 border border-tropical-300 dark:border-tropical-500">
                  <div className="text-2xl mb-2">💃</div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200">Mega Thiruvathira</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Ladies Only Event</p>
                </div>
              </div>
              
              <Link
                to="/onam-2025"
                className="inline-flex items-center px-10 py-5 rounded-full bg-gradient-to-r from-tropical-500 via-bloom-500 to-coral-500 dark:from-tropical-500 dark:via-bloom-500 dark:to-coral-500 text-white font-bold text-xl hover:from-tropical-600 hover:via-bloom-600 hover:to-coral-600 dark:hover:from-tropical-600 dark:hover:via-bloom-600 dark:hover:to-coral-600 transform hover:scale-110 transition-all duration-300 shadow-2xl border-3 border-bloom-400 dark:border-bloom-300"
              >
                🎊 Join Onam 2025 Celebration 🎊
                <ArrowRight className="ml-3" size={24} />
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/events"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-serene-500 to-backwater-500 dark:from-serene-400 dark:to-backwater-400 text-white font-bold text-lg hover:from-serene-600 hover:to-backwater-600 dark:hover:from-serene-500 dark:hover:to-backwater-500 transform hover:scale-105 transition-all duration-200 shadow-xl border-2 border-sage-300 dark:border-sage-300"
              >
                📅 Explore All Events
                <Calendar className="ml-2" size={20} />
              </Link>
              
              <Link
                to="/malayalee-registration"
                className="inline-flex items-center px-8 py-4 rounded-full border-3 border-serene-500 dark:border-serene-400 bg-white dark:bg-gray-800 text-serene-700 dark:text-serene-400 font-bold text-lg hover:bg-serene-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg"
              >
                Register as Malayalee
                <Users className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Highlights with Serene Theme */}
      <section className="py-16 bg-gradient-to-br from-serene-50 via-backwater-50 to-sage-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative">
        {/* Serene background elements */}
        <div className="absolute inset-0 opacity-5 dark:opacity-3">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-serene-400 to-backwater-400"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-sage-400 to-serene-400"></div>
          <div className="absolute top-1/2 left-1/6 w-16 h-16 rounded-full bg-backwater-400"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-serene-700 to-backwater-700 dark:from-serene-400 dark:to-backwater-400 bg-clip-text text-transparent mb-4">
              🌟 Community Highlights 🌟
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
              Discover what makes our Malayalam community special at Ajmera Infinity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-serene-100 to-backwater-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border-2 border-serene-300 dark:border-serene-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-serene-500 to-backwater-600 dark:from-serene-400 dark:to-backwater-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Gift className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-serene-800 dark:text-serene-300 mb-4">🍛 Authentic Traditions</h3>
              <p className="text-serene-700 dark:text-gray-300 mb-4 font-medium">
                Experience genuine Kerala culture with traditional Sadya, classical arts, 
                and time-honored customs that connect us to our roots.
              </p>
            </div>

            <div className="bg-gradient-to-br from-sage-100 to-serene-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border-2 border-sage-300 dark:border-sage-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-sage-500 to-serene-600 dark:from-sage-400 dark:to-serene-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-sage-800 dark:text-sage-300 mb-4">🎭 Vibrant Community</h3>
              <p className="text-sage-700 dark:text-gray-300 mb-4 font-medium">
                Join a warm, welcoming community of Malayalam families who share 
                the same love for culture, traditions, and creating lasting friendships.
              </p>
            </div>

            <div className="bg-gradient-to-br from-backwater-100 to-sage-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border-2 border-backwater-300 dark:border-backwater-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-backwater-500 to-sage-600 dark:from-backwater-400 dark:to-sage-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-backwater-800 dark:text-backwater-300 mb-4">📅 Year-Round Events</h3>
              <p className="text-backwater-700 dark:text-gray-300 mb-4 font-medium">
                From grand Onam celebrations to intimate cultural gatherings, 
                we organize events throughout the year that bring our community together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Serene Theme */}
      <section className="py-16 bg-gradient-to-r from-serene-600 via-backwater-600 to-sage-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative overflow-hidden">
        {/* Serene background elements */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-backwater-400 to-sage-400"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-serene-400"></div>
          <div className="absolute top-1/2 right-1/6 w-16 h-16 rounded-full bg-sage-400"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-6">
            🎊 Ready to Join Our Community? 🎊
          </h2>
          <p className="text-xl text-serene-100 dark:text-gray-300 mb-8 font-medium">
            Become part of our vibrant Malayalam family at Ajmera Infinity and experience 
            the joy of celebrating our rich cultural heritage together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/onam-2025"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-serene-700 dark:text-serene-400 font-bold text-lg hover:bg-serene-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-xl border-2 border-backwater-300 dark:border-backwater-400"
            >
              🎉 Join Onam 2025
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/donations"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white dark:border-gray-300 text-white dark:text-gray-300 font-bold text-lg hover:bg-white/10 dark:hover:bg-gray-700/50 transition-all duration-200 shadow-lg"
            >
              💝 Support with Donations
              <Gift className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;