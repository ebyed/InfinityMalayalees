import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Utensils, Music, Heart, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 'onam-2025',
      title: 'Onam 2025 Grand Celebration',
      date: 'September 13-14, 2025',
      description: 'The grandest Malayalam festival celebration with authentic Sadya, cultural programs, and community bonding',
      image: '🎉',
      link: '/onam-2025',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-100 to-red-200 dark:from-orange-900/30 dark:to-red-900/30',
      borderColor: 'border-orange-400 dark:border-orange-500',
      features: ['Traditional Sadya', 'Cultural Programs', 'Pookalam Competition', 'Mega Thiruvathira']
    }
  ];

  const eventCategories = [
    {
      icon: Utensils,
      title: 'Sadya Registration',
      description: 'Book your authentic Kerala Sadya experience',
      link: '/sadya-registration',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-100 to-emerald-200 dark:from-green-900/30 dark:to-emerald-900/30',
      borderColor: 'border-green-400 dark:border-green-500'
    },
    {
      icon: Music,
      title: 'Cultural Events',
      description: 'Participate in dance, songs, and cultural programs',
      link: '/cultural-events',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-100 to-violet-200 dark:from-purple-900/30 dark:to-violet-900/30',
      borderColor: 'border-purple-400 dark:border-purple-500'
    },
    {
      icon: Users,
      title: 'Community Registration',
      description: 'Join our Malayalam community at Ajmera Infinity',
      link: '/malayalee-registration',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-100 to-cyan-200 dark:from-blue-900/30 dark:to-cyan-900/30',
      borderColor: 'border-blue-400 dark:border-blue-500'
    },
    {
      icon: Heart,
      title: 'Support & Donations',
      description: 'Help us organize spectacular celebrations',
      link: '/donations',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-100 to-pink-200 dark:from-red-900/30 dark:to-pink-900/30',
      borderColor: 'border-red-400 dark:border-red-500'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
        {/* Traditional background elements */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-conic from-purple-400 via-pink-400 to-rose-400 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-conic from-orange-400 via-red-400 to-pink-400"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-pink-400 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 dark:from-purple-400 dark:via-pink-400 dark:to-rose-400">
                🎭 Community Events 🎭
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8 max-w-4xl mx-auto font-medium">
              Celebrating Malayalam culture through vibrant festivals, authentic traditions, 
              and memorable community gatherings at Ajmera Infinity. 🌺
            </p>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border-2 border-purple-400 dark:border-pink-400 shadow-xl">
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">🎉 Join Our Celebrations!</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                From grand Onam festivities to intimate cultural gatherings, 
                experience the warmth of Kerala's traditions in Bangalore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-700 to-red-700 dark:from-orange-400 dark:to-red-400 bg-clip-text text-transparent mb-4">
              🎪 Upcoming Events
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              Don't miss these exciting celebrations coming up!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className={`bg-gradient-to-br ${event.bgColor} rounded-3xl p-8 border-2 ${event.borderColor} shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300`}>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="text-8xl">{event.image}</div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">{event.title}</h3>
                    <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                      <Calendar size={20} className="text-orange-600 dark:text-orange-400" />
                      <span className="text-lg font-semibold text-orange-700 dark:text-orange-400">{event.date}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-6 text-lg leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {event.features.map((feature, idx) => (
                        <div key={idx} className="bg-white/50 dark:bg-gray-700/50 rounded-lg p-3 text-center">
                          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to={event.link}
                      className={`inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r ${event.color} text-white font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                    >
                      🎉 Join Celebration
                      <ArrowRight className="ml-2" size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              📋 Event Categories
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
              Explore different ways to participate in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className={`group bg-gradient-to-br ${category.bgColor} rounded-2xl p-8 border-2 ${category.borderColor} hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                  <category.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                  {category.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 font-medium">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Vision */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-teal-700 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent mb-6">
            🌟 Our Vision
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-8">
            Infinity Malayalees is dedicated to preserving and celebrating our rich Malayalam heritage 
            through authentic cultural events, traditional festivals, and community bonding activities. 
            We bring the warmth of Kerala to Bangalore, creating a home away from home for all Malayalam families.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-green-200 dark:border-green-600">
              <div className="text-3xl mb-3">🎭</div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Cultural Preservation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Keeping Malayalam traditions alive through authentic celebrations</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-green-200 dark:border-green-600">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Community Building</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Fostering connections among Malayalam families in Bangalore</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-green-200 dark:border-green-600">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Future Generations</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Teaching children about their Malayalam heritage and culture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 dark:from-purple-700 dark:via-pink-700 dark:to-rose-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            🎊 Ready to Join Our Next Event? 🎊
          </h2>
          <p className="text-xl text-purple-100 mb-8 font-medium">
            Be part of our vibrant Malayalam community and create lasting memories 
            with fellow Malayalees at Ajmera Infinity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/onam-2025"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-purple-600 font-bold text-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              🎉 Join Onam 2025
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/malayalee-registration"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all duration-200 shadow-lg"
            >
              👥 Register as Member
              <Users className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;