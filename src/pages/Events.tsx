import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { SadyaIcon, CulturalIcon, ThiruvathiraIcon } from '../components/KeralaSVGIcons';
import Footer from '../components/Footer';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 'onam-2025',
      title: 'Onam 2025 Grand Celebration',
      date: 'September 13-14, 2025',
      description: 'The grandest Malayalam festival celebration with authentic Sadya, cultural programs, and community bonding',
      link: '/onam-2025',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-white dark:bg-gray-800',
      borderColor: 'border-orange-400 dark:border-orange-500',
      features: ['Traditional Sadya', 'Cultural Programs', 'Pookalam Competition', 'Mega Thiruvathira']
    }
  ];

  const eventCategories = [
    {
      icon: SadyaIcon,
      title: 'Sadya Information',
      description: 'Learn about our traditional Kerala Sadya',
      link: '/sadya-registration',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-white dark:bg-gray-800',
      borderColor: 'border-green-400 dark:border-green-500'
    },
    {
      icon: CulturalIcon,
      title: 'Cultural Events',
      description: 'Participate in dance, songs, and cultural programs',
      link: '/cultural-events',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'bg-white dark:bg-gray-800',
      borderColor: 'border-purple-400 dark:border-purple-500'
    },
    {
      icon: ThiruvathiraIcon,
      title: 'Mega Thiruvathira',
      description: 'Traditional group dance for ladies',
      link: '/thiruvathira-registration',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-white dark:bg-gray-800',
      borderColor: 'border-pink-400 dark:border-pink-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-red-100 to-amber-100">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-amber-700">
                Community Events
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-800 mb-8 max-w-4xl mx-auto font-medium">
              Celebrating Malayalam culture through vibrant festivals, authentic traditions, 
              and memorable community gatherings at Ajmera Infinity.
            </p>
            
            <div className="bg-stone-50/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border-2 border-plum-400 shadow-xl">
              <h3 className="text-lg font-bold text-stone-800 mb-2">Join Our Celebrations!</h3>
              <p className="text-stone-700 font-medium">
                From grand Onam festivities to intimate cultural gatherings, 
                experience the warmth of Kerala's traditions in Bangalore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gradient-to-br from-sand-50 via-sand-100 to-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-stone-700 font-medium">
              Don't miss these exciting celebrations coming up!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 border-2 border-orange-400 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-stone-900 mb-4">{event.title}</h3>
                    <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                      <Calendar size={20} className="text-terracotta-600" />
                      <span className="text-lg font-semibold text-terracotta-700">{event.date}</span>
                    </div>
                    <p className="text-stone-700 font-medium mb-6 text-lg leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {event.features.map((feature, idx) => (
                        <div key={idx} className="bg-stone-100 rounded-lg p-3 text-center">
                          <span className="text-sm font-semibold text-stone-800">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      to={event.link}
                      className={`inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r ${event.color} text-white font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                    >
                      Join Celebration
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
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sapphire-700 to-plum-700 bg-clip-text text-transparent mb-4">
              Event Categories
            </h2>
            <p className="text-lg text-stone-700 font-medium">
              Explore different ways to participate in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventCategories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group bg-white rounded-2xl p-8 border-2 border-stone-300 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                  <category.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-stone-800">
                  {category.title}
                </h3>
                <p className="text-stone-700 group-hover:text-stone-800 font-medium">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Vision */}
      <section className="py-16 bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-sapphire-700 bg-clip-text text-transparent mb-6">
            Our Vision
          </h2>
          <p className="text-xl text-stone-700 font-medium leading-relaxed mb-8">
            Infinity Malayalees is dedicated to preserving and celebrating our rich Malayalam heritage 
            through authentic cultural events, traditional festivals, and community bonding activities. 
            We bring the warmth of Kerala to Bangalore, creating a home away from home for all Malayalam families.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-xl p-6 shadow-lg border border-emerald-200">
              <h3 className="font-bold text-stone-800 mb-2">Cultural Preservation</h3>
              <p className="text-stone-600 text-sm">Keeping Malayalam traditions alive through authentic celebrations</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-6 shadow-lg border border-emerald-200">
              <h3 className="font-bold text-stone-800 mb-2">Community Building</h3>
              <p className="text-stone-600 text-sm">Fostering connections among Malayalam families in Bangalore</p>
            </div>
            <div className="bg-stone-50 rounded-xl p-6 shadow-lg border border-emerald-200">
              <h3 className="font-bold text-stone-800 mb-2">Future Generations</h3>
              <p className="text-stone-600 text-sm">Teaching children about their Malayalam heritage and culture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-plum-600 via-plum-700 to-plum-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Next Event?
          </h2>
          <p className="text-xl text-plum-100 mb-8 font-medium">
            Be part of our vibrant Malayalam community and create lasting memories 
            with fellow Malayalees at Ajmera Infinity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/onam-2025"
              className="inline-flex items-center px-8 py-4 rounded-full bg-stone-50 text-plum-600 font-bold text-lg hover:bg-stone-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              Join Onam 2025
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;