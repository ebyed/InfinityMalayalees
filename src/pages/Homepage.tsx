import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Gift, Sparkles, ArrowRight } from 'lucide-react';
import { SadyaIcon, CulturalIcon, ThiruvathiraIcon, PookkalamIcon, LampIcon, CoconutPalmIcon } from '../components/KeralaSVGIcons';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Golden Harvest Theme and Kerala Cultural Silhouettes */}
      <section className="relative overflow-hidden bg-golden-gradient dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
        {/* Kathakali Dancer Silhouette */}
        <div className="absolute top-10 right-10 w-32 h-48 opacity-15 dark:opacity-8">
          <div className="w-full h-full relative">
            {/* Elaborate Kathakali headdress */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-16 bg-gradient-to-b from-golden-600 to-harvest-600 rounded-t-full"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-12 bg-gradient-to-b from-amber-500 to-golden-500 rounded-t-full"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gradient-to-b from-harvest-400 to-golden-400 rounded-t-full"></div>
            
            {/* Face */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gradient-to-b from-amber-600 to-harvest-600 rounded-full"></div>
            
            {/* Elaborate costume */}
            <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-b from-golden-500 to-harvest-500 rounded-lg"></div>
            
            {/* Arms in dramatic pose */}
            <div className="absolute top-32 left-2 w-8 h-16 bg-amber-600 rounded-lg transform rotate-45 animate-sway"></div>
            <div className="absolute top-32 right-2 w-8 h-16 bg-amber-600 rounded-lg transform -rotate-45 animate-sway"></div>
          </div>
        </div>

        {/* Mohiniyattam Dancer Silhouette */}
        <div className="absolute top-20 left-16 w-24 h-40 opacity-12 dark:opacity-6">
          <div className="w-full h-full relative animate-dance">
            {/* Hair bun with flowers */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-golden-500 to-harvest-500 rounded-full"></div>
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-400 rounded-full"></div>
            
            {/* Head */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gradient-to-b from-harvest-600 to-golden-600 rounded-full"></div>
            
            {/* Graceful body */}
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-golden-500 to-harvest-500 rounded-lg"></div>
            
            {/* Flowing costume */}
            <div className="absolute top-26 left-1/2 transform -translate-x-1/2 w-12 h-14 bg-gradient-to-b from-amber-400 to-golden-400 rounded-b-full"></div>
            
            {/* Graceful arms */}
            <div className="absolute top-16 left-0 w-6 h-2 bg-harvest-600 rounded-full transform rotate-12"></div>
            <div className="absolute top-16 right-0 w-6 h-2 bg-harvest-600 rounded-full transform -rotate-12"></div>
          </div>
        </div>

        {/* Theyyam Performer Silhouette */}
        <div className="absolute bottom-20 right-24 w-28 h-44 opacity-10 dark:opacity-5">
          <div className="w-full h-full relative">
            {/* Elaborate Theyyam headdress */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-b from-golden-600 via-harvest-600 to-amber-600 rounded-t-full"></div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-b from-harvest-500 to-golden-500 rounded-t-full"></div>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-400 rounded-t-full"></div>
            
            {/* Face mask */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-10 h-12 bg-gradient-to-b from-harvest-700 to-golden-700 rounded-lg"></div>
            
            {/* Body */}
            <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-14 h-16 bg-gradient-to-b from-golden-500 to-harvest-500 rounded-lg"></div>
            
            {/* Dramatic pose */}
            <div className="absolute top-32 left-1 w-6 h-12 bg-amber-600 rounded-lg transform rotate-30"></div>
            <div className="absolute top-32 right-1 w-6 h-12 bg-amber-600 rounded-lg transform -rotate-30"></div>
          </div>
        </div>

        {/* Koodiyattam Artist Silhouette */}
        <div className="absolute bottom-32 left-20 w-20 h-36 opacity-8 dark:opacity-4">
          <div className="w-full h-full relative animate-pulse-slow">
            {/* Traditional crown */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-golden-500 to-harvest-500 rounded-t-lg"></div>
            
            {/* Head */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-10 bg-gradient-to-b from-harvest-600 to-golden-600 rounded-full"></div>
            
            {/* Classical costume */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-10 h-14 bg-gradient-to-b from-golden-500 to-harvest-500 rounded-lg"></div>
            
            {/* Traditional dhoti */}
            <div className="absolute top-30 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-amber-400 rounded-b-lg"></div>
          </div>
        </div>

        {/* Chenda Player Silhouette */}
        <div className="absolute top-1/2 left-1/4 w-24 h-32 opacity-12 dark:opacity-6">
          <div className="w-full h-full relative">
            {/* Head */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gradient-to-b from-harvest-600 to-golden-600 rounded-full"></div>
            
            {/* Body */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-gradient-to-b from-golden-500 to-harvest-500 rounded-lg"></div>
            
            {/* Chenda drum */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-gradient-to-r from-amber-600 to-harvest-600 rounded-full"></div>
            
            {/* Arms holding sticks */}
            <div className="absolute top-12 left-2 w-6 h-2 bg-harvest-600 rounded-full transform rotate-45"></div>
            <div className="absolute top-12 right-2 w-6 h-2 bg-harvest-600 rounded-full transform -rotate-45"></div>
          </div>
        </div>

        {/* Traditional Boat (Vallam) Silhouettes */}
        <div className="absolute bottom-10 left-10 w-64 h-12 opacity-15 dark:opacity-8">
          <div className="w-full h-full bg-gradient-to-r from-golden-600 to-harvest-600 rounded-full transform rotate-3"></div>
          <div className="absolute top-2 left-4 w-56 h-8 bg-gradient-to-r from-harvest-500 to-amber-500 rounded-full transform rotate-3"></div>
          {/* Boat crew silhouettes */}
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="absolute top-0 w-2 h-6 bg-golden-700 rounded-full"
              style={{ left: `${20 + i * 24}px` }}
            />
          ))}
        </div>

        {/* Coconut Palm Silhouettes */}
        <div className="absolute top-16 right-1/3 w-16 h-40 opacity-20 dark:opacity-10">
          <div className="w-2 h-32 bg-harvest-600 mx-auto"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-12 h-3 bg-golden-600 rounded-full animate-sway"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-8px)`,
                  transformOrigin: 'center bottom',
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Traditional Kerala Architecture Elements */}
        <div className="absolute bottom-16 right-16 w-32 h-20 opacity-10 dark:opacity-5">
          {/* Traditional roof */}
          <div className="w-full h-8 bg-gradient-to-r from-harvest-600 to-golden-600 rounded-t-lg transform -skew-x-12"></div>
          <div className="w-full h-12 bg-gradient-to-r from-golden-500 to-harvest-500 rounded-b-lg"></div>
          {/* Pillars */}
          <div className="absolute bottom-0 left-4 w-2 h-16 bg-amber-600"></div>
          <div className="absolute bottom-0 right-4 w-2 h-16 bg-amber-600"></div>
        </div>

        {/* Golden harvest elements scattered */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          {/* Rice grains pattern */}
          <div className="absolute top-1/4 right-1/4 w-6 h-3 bg-golden-400 rounded-full transform rotate-12"></div>
          <div className="absolute top-1/3 right-1/5 w-5 h-2 bg-harvest-500 rounded-full transform -rotate-12"></div>
          <div className="absolute bottom-1/3 left-1/3 w-7 h-3 bg-amber-600 rounded-full transform rotate-45"></div>
          
          {/* Traditional lamps */}
          <div className="absolute top-2/3 right-1/6 w-8 h-6 bg-golden-600 rounded-b-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-6 h-4 bg-harvest-600 rounded-b-full"></div>
          
          {/* Flower petals */}
          <div className="absolute top-1/6 left-1/5 w-4 h-4 bg-amber-400 rounded-full"></div>
          <div className="absolute bottom-1/6 right-1/3 w-5 h-5 bg-golden-500 rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-malayalam">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-golden-600 via-harvest-600 to-amber-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400">
                Infinity Malayalees
              </span>
            </h1>
            
            {/* Malayalam Subtitle */}
            <div className="mb-6">
              <p className="text-lg md:text-xl font-malayalam text-golden-700 dark:text-golden-300 font-medium">
                അജ്മേര ഇൻഫിനിറ്റി മലയാളി അസോസിയേഷൻ
              </p>
              <p className="text-base md:text-lg text-golden-600 dark:text-golden-400 font-sans font-medium mt-2">
                Ajmera Infinity Malayalam Association
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-black mb-8 max-w-3xl mx-auto font-medium">
              Join us in celebrating the spirit of Malayalam culture! Experience the joy of traditional festivals, 
              delicious Sadya, vibrant cultural programs, and the warmth of our community. 🎭🍛
            </p>
            
            {/* Onam 2025 Hero CTA with Tropical Bloom Theme */}
            <div className="bg-tropical-gradient dark:from-tropical-900/30 dark:via-bloom-900/30 dark:to-coral-900/30 rounded-3xl p-8 mb-8 border-4 border-tropical-400 dark:border-tropical-500 shadow-2xl backdrop-blur-sm">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-bloom-300 to-coral-300 dark:from-bloom-400 dark:to-coral-400 text-bloom-900 dark:text-gray-900 text-sm font-bold mb-4 shadow-lg border-2 border-tropical-400 dark:border-tropical-300">
                <Sparkles size={18} className="mr-2 text-coral-600 dark:text-coral-700" />
                🌺 September 13-14, 2025 🌺
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-malayalam">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-tropical-600 via-bloom-600 to-coral-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400">
                  🎉 Onam 2025 Grand Celebration 🎉
                </span>
              </h2>
              
              <p className="text-lg text-gray-800 dark:text-black mb-6 font-medium max-w-2xl mx-auto">
                Experience the grandest Malayalam festival with authentic Sadya, spectacular cultural programs, 
                Mega Thiruvathira, and traditional games. Two days of pure celebration!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 border border-tropical-300 dark:border-tropical-500 flex flex-col items-center">
                  <SadyaIcon size={32} className="text-tropical-600 dark:text-tropical-400 mb-2" />
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">Traditional Sadya</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">₹350 per person</p>
                </div>
                <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 border border-tropical-300 dark:border-tropical-500 flex flex-col items-center">
                  <CulturalIcon size={32} className="text-bloom-600 dark:text-bloom-400 mb-2" />
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">Cultural Programs</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Dance, Music & More</p>
                </div>
                <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 border border-tropical-300 dark:border-tropical-500 flex flex-col items-center">
                  <PookkalamIcon size={32} className="text-coral-600 dark:text-coral-400 mb-2" />
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">Pookalam Competition</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Flower Arrangements</p>
                </div>
                <div className="bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 border border-tropical-300 dark:border-tropical-500 flex flex-col items-center">
                  <ThiruvathiraIcon size={32} className="text-tropical-600 dark:text-tropical-400 mb-2" />
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">Mega Thiruvathira</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Ladies Only Event</p>
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
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-golden-500 to-harvest-500 dark:from-golden-400 dark:to-harvest-400 text-white font-bold text-lg hover:from-golden-600 hover:to-harvest-600 dark:hover:from-golden-500 dark:hover:to-harvest-500 transform hover:scale-105 transition-all duration-200 shadow-xl border-2 border-amber-300 dark:border-amber-300"
              >
                📅 Explore All Events
                <Calendar className="ml-2" size={20} />
              </Link>
              
              <Link
                to="/malayalee-registration"
                className="inline-flex items-center px-8 py-4 rounded-full border-3 border-golden-500 dark:border-golden-400 bg-white dark:bg-gray-800 text-golden-700 dark:text-golden-300 font-bold text-lg hover:bg-golden-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg"
              >
                Register as Malayalee
                <Users className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Highlights with Golden Harvest Theme */}
      <section className="py-16 bg-gradient-to-br from-golden-50 via-harvest-50 to-amber-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative">
        {/* Golden harvest background elements */}
        <div className="absolute inset-0 opacity-5 dark:opacity-3">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-golden-400 to-harvest-400"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-golden-400"></div>
          <div className="absolute top-1/2 left-1/6 w-16 h-16 rounded-full bg-harvest-400"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-golden-700 to-harvest-700 dark:from-golden-400 dark:to-harvest-400 bg-clip-text text-transparent mb-4 font-malayalam">
              🌟 Community Highlights 🌟
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto font-medium">
              Discover what makes our Malayalam community special at Ajmera Infinity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-golden-100 to-harvest-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border-2 border-golden-300 dark:border-golden-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-golden-500 to-harvest-600 dark:from-golden-400 dark:to-harvest-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <SadyaIcon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-golden-800 dark:text-golden-200 mb-4">🍛 Authentic Traditions</h3>
              <p className="text-golden-700 dark:text-gray-200 mb-4 font-medium">
                Experience genuine Kerala culture with traditional Sadya, classical arts, 
                and time-honored customs that connect us to our roots.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-golden-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border-2 border-amber-300 dark:border-amber-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-golden-600 dark:from-amber-400 dark:to-golden-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <ThiruvathiraIcon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-4">🎭 Vibrant Community</h3>
              <p className="text-amber-700 dark:text-gray-200 mb-4 font-medium">
                Join a warm, welcoming community of Malayalam families who share 
                the same love for culture, traditions, and creating lasting friendships.
              </p>
            </div>

            <div className="bg-gradient-to-br from-harvest-100 to-amber-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border-2 border-harvest-300 dark:border-harvest-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-harvest-500 to-amber-600 dark:from-harvest-400 dark:to-amber-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <LampIcon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-harvest-800 dark:text-harvest-200 mb-4">📅 Year-Round Events</h3>
              <p className="text-harvest-700 dark:text-gray-200 mb-4 font-medium">
                From grand Onam celebrations to intimate cultural gatherings, 
                we organize events throughout the year that bring our community together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action with Golden Harvest Theme */}
      <section className="py-16 bg-gradient-to-r from-golden-600 via-harvest-600 to-amber-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative overflow-hidden">
        {/* Golden harvest background elements */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-harvest-400 to-amber-400"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-golden-400"></div>
          <div className="absolute top-1/2 right-1/6 w-16 h-16 rounded-full bg-amber-400"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-6 font-malayalam">
            🎊 Ready to Join Our Community? 🎊
          </h2>
          <p className="text-xl text-golden-100 dark:text-gray-200 mb-8 font-medium">
            Become part of our vibrant Malayalam family at Ajmera Infinity and experience 
            the joy of celebrating our rich cultural heritage together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/onam-2025"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-golden-700 dark:text-golden-300 font-bold text-lg hover:bg-golden-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-xl border-2 border-harvest-300 dark:border-harvest-400"
            >
              🎉 Join Onam 2025
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/donations"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white dark:border-gray-300 text-white dark:text-gray-200 font-bold text-lg hover:bg-white/10 dark:hover:bg-gray-700/50 transition-all duration-200 shadow-lg"
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