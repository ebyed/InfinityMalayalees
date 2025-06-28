import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Gift, Sparkles, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Rich Onam Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
        {/* Mahabali Silhouette */}
        <div className="absolute top-10 right-10 w-32 h-40 opacity-20 dark:opacity-10">
          <div className="w-full h-full bg-gradient-to-b from-orange-600 to-red-600 rounded-t-full relative">
            {/* Crown */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-yellow-500 rounded-t-lg"></div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
            {/* Body */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gradient-to-b from-white to-cream-200 rounded-lg"></div>
          </div>
        </div>

        {/* Pookalam Patterns */}
        <div className="absolute inset-0 opacity-25 dark:opacity-15">
          {/* Large Pookalam */}
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full">
            <div className="w-full h-full rounded-full bg-gradient-conic from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-purple-400 to-pink-400 animate-spin-slow"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-conic from-yellow-300 via-orange-300 via-red-300 via-pink-300 via-purple-300 to-blue-300"></div>
            <div className="absolute inset-16 rounded-full bg-gradient-conic from-green-300 via-emerald-300 via-teal-300 to-cyan-300"></div>
            <div className="absolute inset-24 rounded-full bg-gradient-to-r from-white to-yellow-100"></div>
          </div>

          {/* Medium Pookalam */}
          <div className="absolute bottom-20 right-32 w-48 h-48 rounded-full">
            <div className="w-full h-full rounded-full bg-gradient-conic from-purple-400 via-pink-400 via-red-400 via-orange-400 to-yellow-400"></div>
            <div className="absolute inset-6 rounded-full bg-gradient-conic from-blue-300 via-green-300 to-yellow-300"></div>
            <div className="absolute inset-12 rounded-full bg-gradient-to-r from-orange-200 to-red-200"></div>
          </div>

          {/* Small Pookalam */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full">
            <div className="w-full h-full rounded-full bg-gradient-conic from-green-400 via-yellow-400 via-orange-400 to-red-400"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-conic from-pink-300 to-purple-300"></div>
          </div>
        </div>

        {/* Theyyam Mask Patterns */}
        <div className="absolute top-32 left-32 w-24 h-32 opacity-20 dark:opacity-10">
          <div className="w-full h-full bg-gradient-to-b from-red-600 via-orange-500 to-yellow-500 rounded-t-full relative">
            {/* Eyes */}
            <div className="absolute top-8 left-3 w-4 h-4 bg-white rounded-full"></div>
            <div className="absolute top-8 right-3 w-4 h-4 bg-white rounded-full"></div>
            <div className="absolute top-10 left-4 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute top-10 right-4 w-2 h-2 bg-black rounded-full"></div>
            {/* Decorative elements */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-yellow-400 rounded-t-lg"></div>
          </div>
        </div>

        {/* Thiruvathira Dancers Silhouettes */}
        <div className="absolute bottom-32 left-16 opacity-15 dark:opacity-8">
          <div className="flex space-x-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-16 relative">
                {/* Head */}
                <div className="w-4 h-4 bg-orange-600 rounded-full mx-auto"></div>
                {/* Body */}
                <div className="w-6 h-8 bg-gradient-to-b from-green-500 to-red-500 rounded-lg mx-auto mt-1"></div>
                {/* Arms in dance pose */}
                <div className="absolute top-4 -left-2 w-4 h-1 bg-orange-600 rounded-full transform rotate-45"></div>
                <div className="absolute top-4 -right-2 w-4 h-1 bg-orange-600 rounded-full transform -rotate-45"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Ola Pamparam (Umbrella) */}
        <div className="absolute top-16 right-1/3 w-20 h-12 opacity-25 dark:opacity-15">
          <div className="w-full h-8 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-t-full"></div>
          <div className="w-1 h-8 bg-brown-600 mx-auto"></div>
        </div>

        {/* Food Items Scattered */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          {/* Banana Chips */}
          <div className="absolute top-1/4 right-1/4 w-6 h-3 bg-yellow-400 rounded-full transform rotate-12"></div>
          <div className="absolute top-1/3 right-1/5 w-5 h-2 bg-yellow-500 rounded-full transform -rotate-12"></div>
          
          {/* Unniyappam (small round sweets) */}
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-amber-600 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-amber-700 rounded-full"></div>
          <div className="absolute bottom-1/5 left-1/3 w-4 h-4 bg-amber-500 rounded-full"></div>
          
          {/* Halwa pieces */}
          <div className="absolute top-2/3 right-1/6 w-8 h-6 bg-orange-600 rounded-lg"></div>
          <div className="absolute top-3/4 right-1/8 w-6 h-4 bg-orange-700 rounded-lg"></div>
          
          {/* Payasam bowls */}
          <div className="absolute bottom-1/6 right-1/3 w-12 h-8 bg-gradient-to-b from-cream-200 to-yellow-300 rounded-b-full"></div>
          <div className="absolute bottom-1/8 right-1/4 w-10 h-6 bg-gradient-to-b from-white to-cream-300 rounded-b-full"></div>
        </div>

        {/* Traditional Patterns */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-20 right-20 w-12 h-12 bg-red-400 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-14 h-14 bg-orange-400 rounded-full"></div>
          
          {/* Flower petals pattern */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-r from-yellow-300 to-amber-300 rounded-full opacity-40 animate-bounce-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-orange-300 to-red-300 rounded-full opacity-35"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-amber-400 dark:to-orange-400 text-orange-900 dark:text-gray-900 text-sm font-bold mb-4 shadow-lg border-2 border-yellow-400 dark:border-amber-300">
                <Sparkles size={18} className="mr-2 text-red-600 dark:text-red-700" />
                🌺 Onam 2025 Celebrations 🌺
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400">
                Infinity Malayalees
              </span>
              <br />
              <span className="text-2xl md:text-4xl text-gray-800 dark:text-gray-200">
                Ajmera Infinity Malayalam Association
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-medium">
              Join us in celebrating the spirit of Onam 2025! Experience the joy of Malayalam culture, 
              delicious Sadya, vibrant cultural programs, and the warmth of our community. 🎭🍛
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/onam-2025"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 dark:from-amber-500 dark:via-orange-500 dark:to-red-500 text-white font-bold text-lg hover:from-red-600 hover:via-orange-600 hover:to-yellow-600 dark:hover:from-amber-600 dark:hover:via-orange-600 dark:hover:to-red-600 transform hover:scale-105 transition-all duration-200 shadow-xl border-2 border-yellow-400 dark:border-amber-300"
              >
                🎉 Take me to Onam Celebrations 🎉
                <ArrowRight className="ml-2" size={20} />
              </Link>
              
              <Link
                to="/malayalee-registration"
                className="inline-flex items-center px-8 py-4 rounded-full border-3 border-orange-500 dark:border-amber-400 bg-white dark:bg-gray-800 text-orange-700 dark:text-amber-400 font-bold text-lg hover:bg-orange-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg"
              >
                Register as Malayalee
                <Users className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Onam Highlights */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative">
        {/* Traditional Food Background Elements */}
        <div className="absolute inset-0 opacity-5 dark:opacity-3">
          {/* Payasam bowls pattern */}
          <div className="absolute top-10 left-10 w-16 h-12 bg-gradient-to-b from-cream-200 to-yellow-300 rounded-b-full"></div>
          <div className="absolute top-20 right-20 w-14 h-10 bg-gradient-to-b from-white to-cream-300 rounded-b-full"></div>
          <div className="absolute bottom-20 left-32 w-18 h-14 bg-gradient-to-b from-pink-200 to-rose-300 rounded-b-full"></div>
          
          {/* Banana chips scattered */}
          <div className="absolute top-1/3 left-1/4 w-8 h-4 bg-yellow-400 rounded-full transform rotate-45"></div>
          <div className="absolute top-1/2 right-1/3 w-6 h-3 bg-yellow-500 rounded-full transform -rotate-30"></div>
          <div className="absolute bottom-1/3 left-1/2 w-7 h-3 bg-yellow-600 rounded-full transform rotate-60"></div>
          
          {/* Unniyappam dots */}
          <div className="absolute top-1/4 right-1/4 w-6 h-6 bg-amber-600 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/5 w-5 h-5 bg-amber-700 rounded-full"></div>
          <div className="absolute top-2/3 left-1/5 w-6 h-6 bg-amber-500 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-orange-700 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-4">
              🌟 Onam 2025 Highlights 🌟
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
              September 13-14, 2025 • Experience the grandest Onam celebration at Ajmera Infinity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-100 to-emerald-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border-2 border-green-300 dark:border-emerald-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
              {/* Food elements in background */}
              <div className="absolute top-2 right-2 w-8 h-6 bg-yellow-400 rounded-full opacity-20 transform rotate-12"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-amber-500 rounded-full opacity-15"></div>
              
              <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 dark:from-emerald-400 dark:to-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Gift className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-green-800 dark:text-emerald-300 mb-4">🍛 Traditional Sadya</h3>
              <p className="text-green-700 dark:text-gray-300 mb-4 font-medium">
                Authentic Kerala Sadya with 20+ traditional dishes served on banana leaves. 
                A feast that brings back memories of home!
              </p>
              <p className="text-green-800 dark:text-emerald-400 font-bold text-lg">₹350 per person</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-violet-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border-2 border-purple-300 dark:border-purple-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
              {/* Thiruvathira dancers in background */}
              <div className="absolute top-2 right-2 opacity-10">
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-3 h-8 bg-purple-600 rounded-full"></div>
                  ))}
                </div>
              </div>
              
              <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 dark:from-purple-400 dark:to-violet-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-4">🎭 Cultural Programs</h3>
              <p className="text-purple-700 dark:text-gray-300 mb-4 font-medium">
                Spectacular performances including Thiruvathira, folk dances, songs, skits, 
                and fashion shows by our talented community members.
              </p>
              <p className="text-purple-800 dark:text-purple-400 font-bold">Open for all residents</p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-orange-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 border-2 border-amber-300 dark:border-amber-500 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
              {/* Pookalam pattern in background */}
              <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-conic from-red-300 via-yellow-300 to-green-300 opacity-20"></div>
              
              <div className="relative w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-4">📅 Two-Day Celebration</h3>
              <p className="text-amber-700 dark:text-gray-300 mb-4 font-medium">
                Two full days of festivities with morning programs, Sadya lunch, 
                evening cultural events, and community bonding activities.
              </p>
              <p className="text-amber-800 dark:text-amber-400 font-bold">Sept 13-14, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative overflow-hidden">
        {/* Mahabali silhouette in background */}
        <div className="absolute top-10 left-10 w-24 h-32 opacity-10 dark:opacity-5">
          <div className="w-full h-full bg-gradient-to-b from-orange-400 to-red-400 rounded-t-full relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-yellow-400 rounded-t-lg"></div>
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-white rounded-lg"></div>
          </div>
        </div>

        {/* Traditional food elements */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-1/4 right-1/4 w-12 h-8 bg-gradient-to-b from-cream-200 to-yellow-300 rounded-b-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-8 h-4 bg-yellow-400 rounded-full transform rotate-45"></div>
          <div className="absolute top-1/2 right-1/6 w-6 h-6 bg-amber-500 rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-6">
            🎊 Ready to Join the Celebration? 🎊
          </h2>
          <p className="text-xl text-green-100 dark:text-gray-300 mb-8 font-medium">
            Register now and be part of the most memorable Onam celebration at Ajmera Infinity!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/onam-2025"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-green-700 dark:text-amber-400 font-bold text-lg hover:bg-green-50 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-200 shadow-xl border-2 border-yellow-300 dark:border-amber-400"
            >
              View Onam Portal
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