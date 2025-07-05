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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-200 via-cyan-200 to-teal-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400">
                About Infinity Malayalees
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 mb-8 max-w-4xl mx-auto font-medium">
              Preserving Malayalam heritage and fostering community bonds at Ajmera Infinity, Bangalore. 
              United by culture, strengthened by tradition.
            </p>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 max-w-3xl mx-auto border-2 border-blue-400 dark:border-cyan-400 shadow-2xl">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <MapPin size={24} className="text-blue-600 dark:text-cyan-400" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">Our Location</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-200 font-medium">
                Ajmera Infinity, Neeladri Road, Karuna Nagar<br />
                Electronic City Phase 1, Bangalore - 560100
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-blue-300 dark:border-blue-500 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <SadyaIcon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">Our Mission</h3>
              <p className="text-blue-700 dark:text-gray-200 font-medium leading-relaxed">
                To create a vibrant Malayalee community at Ajmera Infinity that celebrates our rich cultural heritage, 
                fosters meaningful connections among residents, and preserves traditional values for future generations. 
                We strive to organize authentic cultural events, promote Malayalam language and arts, and build a 
                supportive network for all Malayalee families.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-teal-300 dark:border-teal-500 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 dark:from-teal-400 dark:to-emerald-400 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <LampIcon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-teal-800 dark:text-teal-200 mb-4">Our Vision</h3>
              <p className="text-teal-700 dark:text-gray-200 font-medium leading-relaxed">
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
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <PookkalamIcon size={32} className="text-green-600 dark:text-green-400" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-700 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                Our Story
              </h2>
              <PookkalamIcon size={32} className="text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
              From humble beginnings to a thriving community
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border-2 border-green-300 dark:border-green-500 shadow-lg">
            <p className="text-gray-800 dark:text-gray-100 font-medium leading-relaxed mb-6 text-lg">
              Infinity Malayalees was born from a simple desire - to recreate the warmth and joy of Kerala's 
              festivals in our new home at Ajmera Infinity, Bangalore. What started as informal gatherings 
              among a few Malayalee families has blossomed into a vibrant community association.
            </p>
            
            <p className="text-gray-800 dark:text-gray-100 font-medium leading-relaxed mb-6 text-lg">
              In 2013, we officially formed the Infinity Malayalees Association with the goal of preserving 
              our rich cultural heritage while building lasting friendships. Our first Onam celebration was 
              a modest affair with 50 participants, but the enthusiasm and joy were infectious.
            </p>
            
            <p className="text-gray-800 dark:text-gray-100 font-medium leading-relaxed text-lg">
              Today, we're proud to organize grand celebrations that bring together over 200 community members, 
              featuring authentic Sadya, spectacular cultural programs, and the spirit of Kerala that makes 
              everyone feel at home. Our journey continues as we work to make every festival a memorable 
              experience for our growing Malayalee family.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <LampIcon size={32} className="text-amber-600 dark:text-amber-400" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-700 to-red-700 dark:from-amber-400 dark:to-red-400 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <LampIcon size={32} className="text-red-600 dark:text-red-400" />
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
              Milestones that define our community's growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border-2 border-amber-200 dark:border-amber-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <achievement.keralIcon className="text-white" size={20} />
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">{achievement.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{achievement.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-200 font-medium">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-700 dark:via-cyan-700 dark:to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <CoconutPalmIcon size={32} className="text-white" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Join Our Community
            </h2>
            <CoconutPalmIcon size={32} className="text-white" />
          </div>
          <p className="text-xl text-blue-100 mb-8 font-medium">
            Be part of our growing Malayalee family at Ajmera Infinity. 
            Together, we celebrate traditions and create lasting memories.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <Mail size={32} className="text-white mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Email Us</h3>
              <p className="text-blue-100 text-sm">infinitymalayalees@gmail.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <Phone size={32} className="text-white mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Call Us</h3>
              <p className="text-blue-100 text-sm">+91 9686 900488</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <MapPin size={32} className="text-white mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Visit Us</h3>
              <p className="text-blue-100 text-sm">Ajmera Infinity Clubhouse</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all duration-200 shadow-lg"
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