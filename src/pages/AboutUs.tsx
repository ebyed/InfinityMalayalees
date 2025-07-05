import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Calendar, Award, MapPin, Mail, Phone } from 'lucide-react';
import { SadyaIcon, CulturalIcon, ThiruvathiraIcon, CoconutPalmIcon, LampIcon, PookkalamIcon } from '../components/KeralaSVGIcons';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutUs: React.FC = () => {
  const achievements = [
    {
      year: '2022',
      title: 'Grand Onam Celebration',
      description: 'Successfully organized Onam 2024 with 200+ participants',
      keralIcon: PookkalamIcon
    },
    {
      year: '2013',
      title: 'Community Formation',
      description: 'Established Infinity Malayalees Association',
      keralIcon: CoconutPalmIcon
    },
    {
      year: '2013',
      title: 'First Cultural Program',
      description: 'Inaugural Thiruvathira and cultural showcase',
      keralIcon: ThiruvathiraIcon
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Clean Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sapphire-100 via-sapphire-200 to-sapphire-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapphire-600 via-sapphire-700 to-sapphire-800 dark:from-sapphire-400 dark:via-sapphire-500 dark:to-sapphire-600">
                About Infinity Malayalees
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-800 dark:text-stone-100 mb-8 max-w-4xl mx-auto font-medium">
              Preserving Malayalam heritage and fostering community bonds at Ajmera Infinity, Bangalore. 
              United by culture, strengthened by tradition.
            </p>
            
            <div className="bg-stone-50/80 dark:bg-charcoal-800/80 backdrop-blur-sm rounded-3xl p-6 max-w-3xl mx-auto border-2 border-sapphire-400 dark:border-sapphire-500 shadow-2xl">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <MapPin size={24} className="text-sapphire-600 dark:text-sapphire-400" />
                <h3 className="text-lg font-bold text-stone-800 dark:text-stone-100">Our Location</h3>
              </div>
              <p className="text-stone-700 dark:text-stone-200 font-medium">
                Ajmera Infinity, Neeladri Road, Karuna Nagar<br />
                Electronic City Phase 1, Bangalore - 560100
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-stone-50 dark:bg-charcoal-800 rounded-3xl p-8 border-2 border-sapphire-300 dark:border-sapphire-500 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-sapphire-500 to-sapphire-600 dark:from-sapphire-400 dark:to-sapphire-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <SadyaIcon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-sapphire-800 dark:text-sapphire-200 mb-4">Our Mission</h3>
              <p className="text-sapphire-700 dark:text-stone-200 font-medium leading-relaxed">
                To create a vibrant Malayalee community at Ajmera Infinity that celebrates our rich cultural heritage, 
                fosters meaningful connections among residents, and preserves traditional values for future generations. 
                We strive to organize authentic cultural events, promote Malayalam language and arts, and build a 
                supportive network for all Malayalee families.
              </p>
            </div>

            <div className="bg-stone-50 dark:bg-charcoal-800 rounded-3xl p-8 border-2 border-emerald-300 dark:border-emerald-500 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <LampIcon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">Our Vision</h3>
              <p className="text-emerald-700 dark:text-stone-200 font-medium leading-relaxed">
                To be the premier Malayalee cultural association in Bangalore, known for organizing spectacular 
                celebrations that bring together families from across Kerala. We envision a thriving community 
                where Malayalam traditions flourish, children learn about their heritage, and every member feels 
                a sense of belonging and pride in their cultural identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-stone-50 dark:bg-charcoal-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <PookkalamIcon size={32} className="text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-sapphire-700 dark:from-emerald-400 dark:to-sapphire-400 bg-clip-text text-transparent">
                Our Story
              </h2>
              <PookkalamIcon size={32} className="text-sapphire-600 dark:text-sapphire-400" />
            </div>
            <p className="text-lg text-stone-700 dark:text-stone-200 font-medium">
              From humble beginnings to a thriving community
            </p>
          </div>

          <div className="bg-stone-50 dark:bg-charcoal-800 rounded-3xl p-8 border-2 border-emerald-300 dark:border-emerald-500 shadow-lg">
            <p className="text-stone-800 dark:text-stone-100 font-medium leading-relaxed mb-6 text-lg">
              Infinity Malayalees was born from a simple desire - to recreate the warmth and joy of Kerala's 
              festivals in our new home at Ajmera Infinity, Bangalore. What started as informal gatherings 
              among a few Malayalee families has blossomed into a vibrant community association.
            </p>
            
            <p className="text-stone-800 dark:text-stone-100 font-medium leading-relaxed mb-6 text-lg">
              In 2013, we officially formed the Infinity Malayalees Association with the goal of preserving 
              our rich cultural heritage while building lasting friendships. Our first Onam celebration was 
              a modest affair with 50 participants, but the enthusiasm and joy were infectious.
            </p>
            
            <p className="text-stone-800 dark:text-stone-100 font-medium leading-relaxed text-lg">
              Today, we're proud to organize grand celebrations that bring together over 200 community members, 
              featuring authentic Sadya, spectacular cultural programs, and the spirit of Kerala that makes 
              everyone feel at home. Our journey continues as we work to make every festival a memorable 
              experience for our growing Malayalee family.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16 bg-gradient-to-br from-sand-50 via-sand-100 to-sand-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <LampIcon size={32} className="text-terracotta-600 dark:text-terracotta-400" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-terracotta-700 to-plum-700 dark:from-terracotta-400 dark:to-plum-400 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <LampIcon size={32} className="text-plum-600 dark:text-plum-400" />
            </div>
            <p className="text-lg text-stone-700 dark:text-stone-200 font-medium">
              Milestones that define our community's growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-sand-50 dark:bg-charcoal-800 rounded-3xl p-6 shadow-xl border-2 border-terracotta-200 dark:border-terracotta-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-terracotta-500 to-terracotta-600 rounded-full flex items-center justify-center shadow-lg">
                      <achievement.keralIcon className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-terracotta-700 dark:text-terracotta-300">{achievement.year}</div>
                    <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">{achievement.title}</h3>
                  </div>
                </div>
                <p className="text-stone-600 dark:text-stone-200 font-medium">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-sapphire-600 via-sapphire-700 to-sapphire-800 dark:from-sapphire-700 dark:via-sapphire-800 dark:to-sapphire-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <CoconutPalmIcon size={32} className="text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Join Our Community
            </h2>
            <CoconutPalmIcon size={32} className="text-white" />
          </div>
          <p className="text-xl text-sapphire-100 mb-8 font-medium">
            Be part of our growing Malayalee family at Ajmera Infinity. 
            Together, we celebrate traditions and create lasting memories.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-stone-50/10 backdrop-blur-sm rounded-3xl p-6 border border-stone-100/20">
              <Mail size={32} className="text-white mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Email Us</h3>
              <p className="text-sapphire-100 text-sm">infinitymalayalees@gmail.com</p>
            </div>
            <div className="bg-stone-50/10 backdrop-blur-sm rounded-3xl p-6 border border-stone-100/20">
              <Phone size={32} className="text-white mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Call Us</h3>
              <p className="text-sapphire-100 text-sm">+91 9686 900488</p>
            </div>
            <div className="bg-stone-50/10 backdrop-blur-sm rounded-3xl p-6 border border-stone-100/20">
              <MapPin size={32} className="text-white mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Visit Us</h3>
              <p className="text-sapphire-100 text-sm">Ajmera Infinity Clubhouse</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-stone-100 text-stone-100 font-bold text-lg hover:bg-stone-50/10 transition-all duration-200 shadow-lg"
            >
              <LampIcon className="mr-2" size={20} />
              View Events
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;