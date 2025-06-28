import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Users, Utensils, Music, Heart, Award, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SadyaRegistration from './SadyaRegistration';
import CulturalEvents from './CulturalEvents';

const Onam2025: React.FC = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    if (location.pathname === '/sadya-registration') return 'sadya';
    if (location.pathname === '/cultural-events') return 'events';
    return 'overview';
  });

  const features = [
    {
      icon: Users,
      title: 'Malayalee Registration',
      description: 'Register as a Malayalee member of Ajmera Infinity community',
      link: '/malayalee-registration',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-100 to-cyan-200 dark:from-blue-900/30 dark:to-cyan-900/30',
      borderColor: 'border-blue-400 dark:border-blue-500'
    },
    {
      icon: Heart,
      title: 'Community Donations',
      description: 'Support Onam celebrations with your generous contributions (Min: ₹2000)',
      link: '/donations',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-100 to-pink-200 dark:from-red-900/30 dark:to-pink-900/30',
      borderColor: 'border-red-400 dark:border-red-500'
    }
  ];

  const TabButton = ({ tabId, label, icon: Icon }: { tabId: string, label: string, icon: any }) => (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
        activeTab === tabId
          ? 'bg-gradient-to-r from-orange-500 to-red-500 dark:from-amber-500 dark:to-orange-500 text-white shadow-lg'
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700 hover:text-orange-700 dark:hover:text-amber-400 shadow-md'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Rich Onam Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
        {/* King Mahabali Silhouette */}
        <div className="absolute top-8 right-8 w-40 h-48 opacity-20 dark:opacity-10">
          <div className="w-full h-full relative">
            {/* Crown */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-10 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-t-lg"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full"></div>
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-yellow-300 rounded-t-lg"></div>
            
            {/* Head */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-gradient-to-b from-orange-600 to-red-600 rounded-t-full"></div>
            
            {/* Mustache */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-black rounded-full"></div>
            
            {/* Body */}
            <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-24 h-20 bg-gradient-to-b from-white to-cream-200 rounded-lg"></div>
            
            {/* Arms */}
            <div className="absolute top-32 left-2 w-8 h-16 bg-orange-600 rounded-lg transform rotate-12"></div>
            <div className="absolute top-32 right-2 w-8 h-16 bg-orange-600 rounded-lg transform -rotate-12"></div>
          </div>
        </div>

        {/* Elaborate Pookalam Patterns */}
        <div className="absolute inset-0 opacity-25 dark:opacity-15">
          {/* Large Central Pookalam */}
          <div className="absolute top-16 left-16 w-80 h-80 rounded-full">
            <div className="w-full h-full rounded-full bg-gradient-conic from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-purple-400 via-pink-400 to-red-400 animate-spin-slow"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-conic from-yellow-300 via-orange-300 via-red-300 via-pink-300 via-purple-300 via-blue-300 via-green-300 to-yellow-300"></div>
            <div className="absolute inset-16 rounded-full bg-gradient-conic from-green-300 via-emerald-300 via-teal-300 via-cyan-300 via-blue-300 to-green-300"></div>
            <div className="absolute inset-24 rounded-full bg-gradient-conic from-pink-300 via-rose-300 via-red-300 to-pink-300"></div>
            <div className="absolute inset-32 rounded-full bg-gradient-to-r from-white via-yellow-100 to-orange-100"></div>
          </div>

          {/* Medium Pookalam */}
          <div className="absolute bottom-16 right-24 w-56 h-56 rounded-full">
            <div className="w-full h-full rounded-full bg-gradient-conic from-purple-400 via-pink-400 via-red-400 via-orange-400 via-yellow-400 to-purple-400"></div>
            <div className="absolute inset-6 rounded-full bg-gradient-conic from-blue-300 via-green-300 via-yellow-300 to-blue-300"></div>
            <div className="absolute inset-12 rounded-full bg-gradient-conic from-orange-200 via-red-200 to-orange-200"></div>
            <div className="absolute inset-18 rounded-full bg-gradient-to-r from-cream-200 to-yellow-200"></div>
          </div>

          {/* Small Pookalam */}
          <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full">
            <div className="w-full h-full rounded-full bg-gradient-conic from-green-400 via-yellow-400 via-orange-400 via-red-400 to-green-400"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-conic from-pink-300 via-purple-300 to-pink-300"></div>
            <div className="absolute inset-8 rounded-full bg-gradient-to-r from-white to-cream-100"></div>
          </div>
        </div>

        {/* Theyyam Masks */}
        <div className="absolute top-24 left-24 w-32 h-40 opacity-20 dark:opacity-10">
          <div className="w-full h-full bg-gradient-to-b from-red-600 via-orange-500 to-yellow-500 rounded-t-full relative">
            {/* Elaborate headdress */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-yellow-400 rounded-t-lg"></div>
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-red-500 rounded-t-lg"></div>
            
            {/* Eyes */}
            <div className="absolute top-8 left-4 w-6 h-6 bg-white rounded-full"></div>
            <div className="absolute top-8 right-4 w-6 h-6 bg-white rounded-full"></div>
            <div className="absolute top-10 left-6 w-3 h-3 bg-black rounded-full"></div>
            <div className="absolute top-10 right-6 w-3 h-3 bg-black rounded-full"></div>
            
            {/* Nose */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-orange-700 rounded-lg"></div>
            
            {/* Decorative patterns */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-yellow-300 rounded-full"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-red-400 rounded-full"></div>
          </div>
        </div>

        {/* Thiruvathira Dancers Circle */}
        <div className="absolute bottom-24 left-32 opacity-15 dark:opacity-8">
          <div className="relative w-48 h-48">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="absolute w-8 h-20"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-60px)`,
                }}
              >
                {/* Head */}
                <div className="w-6 h-6 bg-orange-600 rounded-full mx-auto"></div>
                {/* Body */}
                <div className="w-8 h-10 bg-gradient-to-b from-green-500 to-red-500 rounded-lg mx-auto mt-1"></div>
                {/* Arms in dance pose */}
                <div className="absolute top-6 -left-3 w-6 h-2 bg-orange-600 rounded-full transform rotate-45"></div>
                <div className="absolute top-6 -right-3 w-6 h-2 bg-orange-600 rounded-full transform -rotate-45"></div>
                {/* Flowing dress */}
                <div className="w-10 h-6 bg-gradient-to-b from-red-400 to-pink-400 rounded-b-full mx-auto -mt-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Ola Pamparam (Traditional Umbrellas) */}
        <div className="absolute top-20 right-1/4 w-24 h-16 opacity-25 dark:opacity-15">
          <div className="w-full h-10 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-blue-400 rounded-t-full"></div>
          <div className="w-2 h-12 bg-brown-600 mx-auto"></div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-brown-500 rounded-full"></div>
        </div>

        <div className="absolute top-32 right-1/6 w-20 h-14 opacity-20 dark:opacity-10">
          <div className="w-full h-8 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-t-full"></div>
          <div className="w-2 h-10 bg-brown-600 mx-auto"></div>
        </div>

        {/* Traditional Kerala Foods Scattered */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          {/* Banana Chips */}
          <div className="absolute top-1/4 right-1/4 w-8 h-4 bg-yellow-400 rounded-full transform rotate-12 shadow-sm"></div>
          <div className="absolute top-1/3 right-1/5 w-6 h-3 bg-yellow-500 rounded-full transform -rotate-12"></div>
          <div className="absolute top-2/5 right-1/6 w-7 h-3 bg-yellow-600 rounded-full transform rotate-45"></div>
          
          {/* Unniyappam (small round sweets) clusters */}
          <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-amber-600 rounded-full shadow-sm"></div>
          <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-amber-700 rounded-full"></div>
          <div className="absolute bottom-1/5 left-1/3 w-5 h-5 bg-amber-500 rounded-full"></div>
          <div className="absolute bottom-2/5 left-2/5 w-4 h-4 bg-amber-800 rounded-full"></div>
          
          {/* Halwa pieces */}
          <div className="absolute top-2/3 right-1/6 w-10 h-8 bg-orange-600 rounded-lg shadow-sm"></div>
          <div className="absolute top-3/4 right-1/8 w-8 h-6 bg-orange-700 rounded-lg"></div>
          <div className="absolute top-1/2 right-1/12 w-9 h-7 bg-orange-500 rounded-lg"></div>
          
          {/* Payasam bowls */}
          <div className="absolute bottom-1/6 right-1/3 w-16 h-12 bg-gradient-to-b from-cream-200 to-yellow-300 rounded-b-full shadow-lg"></div>
          <div className="absolute bottom-1/8 right-1/4 w-14 h-10 bg-gradient-to-b from-white to-cream-300 rounded-b-full"></div>
          <div className="absolute bottom-1/12 right-2/5 w-12 h-8 bg-gradient-to-b from-pink-200 to-rose-300 rounded-b-full"></div>
          
          {/* Traditional sweets */}
          <div className="absolute top-1/6 left-1/5 w-6 h-6 bg-brown-400 rounded-lg transform rotate-12"></div>
          <div className="absolute top-1/8 left-1/6 w-5 h-5 bg-brown-500 rounded-lg transform -rotate-12"></div>
        </div>

        {/* Traditional Patterns and Elements */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-20 right-20 w-12 h-12 bg-red-400 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 bg-green-400 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-14 h-14 bg-orange-400 rounded-full"></div>
          
          {/* Flower petals pattern */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full opacity-30 animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-r from-yellow-300 to-amber-300 rounded-full opacity-40 animate-bounce-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-orange-300 to-red-300 rounded-full opacity-35"></div>
          
          {/* Traditional boat (Vallam Kali) silhouettes */}
          <div className="absolute bottom-10 right-10 w-72 h-12 bg-gradient-to-r from-amber-600 to-orange-600 opacity-30 rounded-full transform rotate-12"></div>
          <div className="absolute bottom-12 right-12 w-56 h-8 bg-gradient-to-r from-yellow-600 to-amber-600 opacity-25 rounded-full transform rotate-12"></div>
          <div className="absolute bottom-8 right-8 w-48 h-6 bg-gradient-to-r from-orange-700 to-red-600 opacity-20 rounded-full transform rotate-12"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-amber-400 dark:to-orange-400 text-orange-900 dark:text-gray-900 text-sm font-bold mb-6 shadow-lg border-2 border-yellow-400 dark:border-amber-300">
              <Calendar size={18} className="mr-2 text-red-600 dark:text-red-700" />
              🌺 September 13-14, 2025 🌺
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 dark:from-amber-400 dark:via-orange-400 dark:to-red-400">
                🎉 Onam 2025 🎉
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8 max-w-4xl mx-auto font-medium">
              Welcome to the ultimate Onam celebration portal! Register, participate, donate, 
              and be part of the grandest Malayalam festival at Ajmera Infinity. 🏛️✨
            </p>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border-2 border-yellow-400 dark:border-amber-400 shadow-xl">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">🌺 Onam Ashamsakal! 🌺</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Experience the joy of King Mahabali's return with authentic traditions, 
                delicious Sadya, and vibrant cultural programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <TabButton tabId="overview" label="Overview" icon={Calendar} />
            <TabButton tabId="sadya" label="Sadya Registration" icon={Utensils} />
            <TabButton tabId="events" label="Cultural Events" icon={Music} />
          </div>
        </div>
      </section>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <>
          {/* Main Features */}
          <section className="py-16 bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative">
            {/* Traditional background elements */}
            <div className="absolute inset-0 opacity-5 dark:opacity-3">
              {/* Pookalam pattern background */}
              <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-conic from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400"></div>
              <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-conic from-orange-400 via-pink-400 via-emerald-400 to-violet-400"></div>
              
              {/* Food elements */}
              <div className="absolute top-1/3 left-1/4 w-12 h-8 bg-yellow-400 rounded-full transform rotate-45"></div>
              <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-amber-500 rounded-full"></div>
              <div className="absolute top-2/3 right-1/6 w-16 h-12 bg-gradient-to-b from-cream-200 to-yellow-300 rounded-b-full"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-orange-700 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-4">
                  🌟 Celebration Features 🌟
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
                  Everything you need to be part of our Onam 2025 celebrations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div
                  onClick={() => setActiveTab('sadya')}
                  className={`group cursor-pointer bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-8 border-2 border-green-400 dark:border-green-500 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
                >
                  {/* Food background elements */}
                  <div className="absolute top-2 right-2 w-6 h-4 bg-yellow-400 rounded-full opacity-20 transform rotate-12"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 bg-amber-500 rounded-full opacity-15"></div>
                  
                  <div className={`relative w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                    <Utensils className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                    Sadya Registration
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 font-medium">
                    Book your traditional Onam Sadya for ₹350 per person
                  </p>
                </div>

                <div
                  onClick={() => setActiveTab('events')}
                  className={`group cursor-pointer bg-gradient-to-br from-purple-100 to-violet-200 dark:from-purple-900/30 dark:to-violet-900/30 rounded-2xl p-8 border-2 border-purple-400 dark:border-purple-500 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
                >
                  {/* Thiruvathira dancers in background */}
                  <div className="absolute top-2 right-2 opacity-10">
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-2 h-6 bg-purple-600 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`relative w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                    <Music className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                    Cultural Events
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 font-medium">
                    Participate in dance, songs, skits, fashion show & Mega Thiruvathira
                  </p>
                </div>

                {features.map((feature, index) => (
                  <Link
                    key={index}
                    to={feature.link}
                    className={`group bg-gradient-to-br ${feature.bgColor} rounded-2xl p-8 border-2 ${feature.borderColor} hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
                  >
                    {/* Background decorative elements */}
                    <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-conic from-red-300 via-yellow-300 to-green-300 rounded-full opacity-15"></div>
                    
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                      <feature.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 font-medium">
                      {feature.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Donation CTA Section */}
          <section className="py-16 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 dark:from-red-700 dark:via-pink-700 dark:to-purple-700 relative overflow-hidden">
            {/* Mahabali silhouette in background */}
            <div className="absolute top-8 left-8 w-32 h-40 opacity-15 dark:opacity-8">
              <div className="w-full h-full relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-yellow-400 rounded-t-lg"></div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-gradient-to-b from-orange-400 to-red-400 rounded-t-full"></div>
                <div className="absolute top-22 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-white rounded-lg"></div>
              </div>
            </div>

            {/* Traditional food and cultural elements */}
            <div className="absolute inset-0 opacity-15 dark:opacity-8">
              <div className="absolute top-1/4 right-1/4 w-16 h-12 bg-gradient-to-b from-cream-200 to-yellow-300 rounded-b-full"></div>
              <div className="absolute bottom-1/4 left-1/4 w-10 h-6 bg-yellow-400 rounded-full transform rotate-45"></div>
              <div className="absolute top-1/2 right-1/6 w-8 h-8 bg-amber-500 rounded-full"></div>
              <div className="absolute bottom-1/3 right-1/3 w-12 h-8 bg-orange-600 rounded-lg"></div>
              
              {/* Pookalam elements */}
              <div className="absolute top-1/6 left-1/6 w-24 h-24 rounded-full bg-gradient-conic from-red-300 via-yellow-300 to-green-300 opacity-30"></div>
              <div className="absolute bottom-1/6 right-1/8 w-20 h-20 rounded-full bg-gradient-conic from-purple-300 via-pink-300 to-orange-300 opacity-25"></div>
            </div>
            
            <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold mb-6 shadow-lg border-2 border-white/30">
                  <Heart size={18} className="mr-2 text-pink-200" />
                  💝 Support Our Community 💝
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                🙏 Help Make Onam 2025 Unforgettable! 🙏
              </h2>
              <p className="text-xl text-pink-100 mb-8 font-medium max-w-2xl mx-auto">
                Your generous donations help us organize spectacular cultural programs, provide authentic Sadya experiences, 
                and create lasting memories for our entire Malayalam community at Ajmera Infinity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 relative overflow-hidden">
                  <div className="absolute top-1 right-1 w-6 h-6 bg-gradient-conic from-yellow-300 to-orange-300 rounded-full opacity-20"></div>
                  <div className="relative text-3xl font-bold text-yellow-300 mb-2">₹50,000+</div>
                  <div className="text-white font-semibold">🥇 Platinum Sponsor</div>
                  <div className="text-pink-100 text-sm mt-2">Logo on all materials</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 relative overflow-hidden">
                  <div className="absolute top-1 right-1 w-4 h-4 bg-amber-400 rounded-full opacity-20"></div>
                  <div className="relative text-3xl font-bold text-yellow-300 mb-2">₹25,000+</div>
                  <div className="text-white font-semibold">🥈 Gold Sponsor</div>
                  <div className="text-pink-100 text-sm mt-2">Event banners & announcements</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 relative overflow-hidden">
                  <div className="absolute top-1 right-1 w-8 h-6 bg-gradient-to-b from-cream-200 to-yellow-300 rounded-b-full opacity-15"></div>
                  <div className="relative text-3xl font-bold text-yellow-300 mb-2">₹2,000+</div>
                  <div className="text-white font-semibold">🤝 Community Support</div>
                  <div className="text-pink-100 text-sm mt-2">Help organize celebrations</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/donations"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white text-red-600 font-bold text-lg hover:bg-pink-50 transform hover:scale-105 transition-all duration-200 shadow-xl border-2 border-pink-200"
                >
                  💝 Donate Now
                  <Heart className="ml-2" size={20} />
                </Link>
                <Link
                  to="/malayalee-registration"
                  className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all duration-200 shadow-lg"
                >
                  👥 Join Community
                  <Users className="ml-2" size={20} />
                </Link>
              </div>
              
              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 relative overflow-hidden">
                <div className="absolute top-2 right-2 w-6 h-4 bg-yellow-400 rounded-full opacity-20 transform rotate-12"></div>
                <p className="relative text-pink-100 font-medium">
                  🌟 Every contribution, big or small, helps preserve and celebrate our rich Malayalam heritage. 
                  Together, we create magic! 🌟
                </p>
              </div>
            </div>
          </section>

          {/* Title Sponsors Section */}
          <section className="py-16 bg-gradient-to-br from-purple-100 to-indigo-200 dark:from-gray-700 dark:to-gray-800 relative">
            {/* Traditional background elements */}
            <div className="absolute inset-0 opacity-5 dark:opacity-3">
              <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-conic from-purple-400 to-indigo-400"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-gradient-conic from-pink-400 to-purple-400"></div>
              <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-amber-500 rounded-full"></div>
              <div className="absolute bottom-1/3 right-1/4 w-12 h-8 bg-gradient-to-b from-cream-200 to-yellow-300 rounded-b-full"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-300 dark:bg-purple-600 text-purple-900 dark:text-purple-100 text-sm font-bold mb-4 border-2 border-purple-400 dark:border-purple-500">
                  <Award size={16} className="mr-2" />
                  🏆 Title Sponsors
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
                  Our Generous Sponsors
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
                  Special thanks to our title sponsors who make these celebrations possible
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-purple-300 dark:border-purple-500 text-center transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-6 h-6 bg-gradient-conic from-yellow-300 to-orange-300 rounded-full opacity-15"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 dark:from-purple-400 dark:to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="text-white" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">🥇 Title Sponsor</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Platinum Level Sponsorship</p>
                  <p className="text-purple-700 dark:text-purple-400 font-bold mt-2 text-lg">₹50,000+</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-amber-300 dark:border-amber-500 text-center transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-4 h-4 bg-amber-400 rounded-full opacity-20"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="text-white" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">🥈 Gold Sponsor</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Gold Level Sponsorship</p>
                  <p className="text-amber-700 dark:text-amber-400 font-bold mt-2 text-lg">₹25,000+</p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-gray-300 dark:border-gray-500 text-center transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-8 h-6 bg-gradient-to-b from-cream-200 to-yellow-300 rounded-b-full opacity-15"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="text-white" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">🥉 Silver Sponsor</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">Silver Level Sponsorship</p>
                  <p className="text-gray-700 dark:text-gray-400 font-bold mt-2 text-lg">₹10,000+</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">
                  Want to become a sponsor? Contact our organizing committee for sponsorship opportunities.
                </p>
                <Link
                  to="/donations"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400 text-white font-bold hover:from-purple-600 hover:to-indigo-600 dark:hover:from-purple-500 dark:hover:to-indigo-500 transition-all duration-200 shadow-lg transform hover:scale-105"
                >
                  💝 Become a Sponsor
                  <Heart className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </section>

          {/* Event Schedule */}
          <section className="py-16 bg-white dark:bg-gray-900 relative">
            {/* Traditional background elements */}
            <div className="absolute inset-0 opacity-5 dark:opacity-3">
              <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-conic from-green-400 via-yellow-400 to-orange-400"></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-conic from-red-400 via-pink-400 to-purple-400"></div>
              <div className="absolute top-1/2 left-1/6 w-6 h-4 bg-yellow-400 rounded-full transform rotate-45"></div>
              <div className="absolute bottom-1/3 right-1/6 w-8 h-8 bg-amber-500 rounded-full"></div>
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-orange-700 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-4">
                  📅 Event Schedule
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                  Two days of non-stop celebration and fun activities
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-green-100 to-emerald-200 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-8 border-2 border-green-300 dark:border-green-500 shadow-lg relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-8 h-6 bg-gradient-to-b from-cream-200 to-yellow-300 rounded-b-full opacity-20"></div>
                  <h3 className="relative text-2xl font-bold text-green-800 dark:text-green-300 mb-4">🌅 Day 1 - September 13, 2025</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Morning (10:00 AM - 12:00 PM)</h4>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-1 font-medium">
                        <li>🌸 Pookalam competition</li>
                        <li>🎮 Traditional games</li>
                        <li>🎭 Cultural program rehearsals</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Afternoon (12:00 PM - 3:00 PM)</h4>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-1 font-medium">
                        <li>🍛 Traditional Onam Sadya</li>
                        <li>👨‍👩‍👧‍👦 Community lunch</li>
                        <li>☕ Rest and bonding time</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-100 to-orange-200 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl p-8 border-2 border-amber-300 dark:border-amber-500 shadow-lg relative overflow-hidden">
                  <div className="absolute top-2 right-2 w-6 h-4 bg-yellow-400 rounded-full opacity-20 transform rotate-12"></div>
                  <h3 className="relative text-2xl font-bold text-amber-800 dark:text-amber-300 mb-4">🌆 Day 2 - September 14, 2025</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Evening (4:00 PM - 8:00 PM)</h4>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-1 font-medium">
                        <li>🎭 Cultural program showcase</li>
                        <li>💃 Mega Thiruvathira</li>
                        <li>🏆 Prize distribution</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Night (8:00 PM onwards)</h4>
                      <ul className="text-gray-700 dark:text-gray-300 space-y-1 font-medium">
                        <li>🍽️ Community dinner</li>
                        <li>🎵 DJ and dancing</li>
                        <li>📸 Group photos & memories</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'sadya' && (
        <div className="bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
          <SadyaRegistration />
        </div>
      )}

      {activeTab === 'events' && (
        <div className="bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
          <CulturalEvents />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Onam2025;