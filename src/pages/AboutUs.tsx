import React from 'react';
import { Users, Heart, Calendar, Award, MapPin, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'President',
      description: 'Leading the community with passion for Malayalam culture',
      icon: Users
    },
    {
      name: 'Priya Nair',
      role: 'Cultural Secretary',
      description: 'Organizing vibrant cultural programs and events',
      icon: Calendar
    },
    {
      name: 'Anil Menon',
      role: 'Treasurer',
      description: 'Managing finances and sponsorships',
      icon: Award
    },
    {
      name: 'Deepa Pillai',
      role: 'Event Coordinator',
      description: 'Coordinating logistics and community activities',
      icon: Heart
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'Grand Onam Celebration',
      description: 'Successfully organized Onam 2024 with 200+ participants',
      icon: '🎉'
    },
    {
      year: '2023',
      title: 'Community Formation',
      description: 'Established Infinity Malayalees Association',
      icon: '🏛️'
    },
    {
      year: '2023',
      title: 'First Cultural Program',
      description: 'Inaugural Thiruvathira and cultural showcase',
      icon: '🎭'
    },
    {
      year: '2024',
      title: 'Charity Initiative',
      description: 'Raised ₹50,000 for Kerala flood relief',
      icon: '💝'
    }
  ];

  const organizationalStructure = [
    {
      role: 'Patron / Mentor',
      responsibilities: 'Senior/respected members who provide guidance',
      headcount: '1–2',
      category: 'leadership'
    },
    {
      role: 'President',
      responsibilities: 'Overall event leadership, final approvals',
      headcount: '1',
      category: 'leadership'
    },
    {
      role: 'Vice President',
      responsibilities: 'Supports President, handles inter-team coordination',
      headcount: '1',
      category: 'leadership'
    },
    {
      role: 'General Secretary',
      responsibilities: 'Drives communication, meeting coordination, minutes',
      headcount: '1',
      category: 'core'
    },
    {
      role: 'Treasurer',
      responsibilities: 'Budgeting, collections, expense tracking',
      headcount: '1',
      category: 'core'
    },
    {
      role: 'Cultural Team Lead',
      responsibilities: 'Manages performances, auditions, rehearsals',
      headcount: '1',
      category: 'operations'
    },
    {
      role: 'Logistics Team Lead',
      responsibilities: 'Stage, decorations, chairs, sound system',
      headcount: '1',
      category: 'operations'
    },
    {
      role: 'Food Committee Head',
      responsibilities: 'Sadya planning, catering, volunteers',
      headcount: '1',
      category: 'operations'
    },
    {
      role: 'Game & Sports Lead',
      responsibilities: 'Onakalikal, indoor/outdoor games',
      headcount: '1',
      category: 'operations'
    },
    {
      role: 'Publicity & Design Lead',
      responsibilities: 'Posters, WhatsApp invites, video edits',
      headcount: '1',
      category: 'support'
    },
    {
      role: 'Photography & Videography',
      responsibilities: 'Capturing and sharing memories',
      headcount: '1–2',
      category: 'support'
    },
    {
      role: 'Volunteer Coordinator',
      responsibilities: 'Organize volunteers for each sub-team',
      headcount: '1',
      category: 'support'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'leadership':
        return 'from-purple-500 to-indigo-500 dark:from-purple-400 dark:to-indigo-400';
      case 'core':
        return 'from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400';
      case 'operations':
        return 'from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400';
      case 'support':
        return 'from-orange-500 to-red-500 dark:from-orange-400 dark:to-red-400';
      default:
        return 'from-gray-500 to-gray-600 dark:from-gray-400 dark:to-gray-500';
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case 'leadership':
        return 'from-purple-100 to-indigo-200 dark:from-purple-900/30 dark:to-indigo-900/30';
      case 'core':
        return 'from-blue-100 to-cyan-200 dark:from-blue-900/30 dark:to-cyan-900/30';
      case 'operations':
        return 'from-green-100 to-emerald-200 dark:from-green-900/30 dark:to-emerald-900/30';
      case 'support':
        return 'from-orange-100 to-red-200 dark:from-orange-900/30 dark:to-red-900/30';
      default:
        return 'from-gray-100 to-gray-200 dark:from-gray-900/30 dark:to-gray-800/30';
    }
  };

  const getCategoryBorder = (category: string) => {
    switch (category) {
      case 'leadership':
        return 'border-purple-300 dark:border-purple-500';
      case 'core':
        return 'border-blue-300 dark:border-blue-500';
      case 'operations':
        return 'border-green-300 dark:border-green-500';
      case 'support':
        return 'border-orange-300 dark:border-orange-500';
      default:
        return 'border-gray-300 dark:border-gray-500';
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-200 via-cyan-200 to-teal-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
        {/* Traditional background elements */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-conic from-blue-400 via-cyan-400 to-teal-400 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-conic from-green-400 via-emerald-400 to-teal-400"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-cyan-400 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400">
                About Infinity Malayalees
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-100 mb-8 max-w-4xl mx-auto font-medium">
              Preserving Malayalam heritage and fostering community bonds at Ajmera Infinity, Bangalore. 
              United by culture, strengthened by tradition. 🌺
            </p>
            
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto border-2 border-blue-400 dark:border-cyan-400 shadow-xl">
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
            <div className="bg-gradient-to-br from-blue-100 to-cyan-200 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-500 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">🎯 Our Mission</h3>
              <p className="text-blue-700 dark:text-gray-200 font-medium leading-relaxed">
                To create a vibrant Malayalam community at Ajmera Infinity that celebrates our rich cultural heritage, 
                fosters meaningful connections among residents, and preserves traditional values for future generations. 
                We strive to organize authentic cultural events, promote Malayalam language and arts, and build a 
                supportive network for all Malayalee families.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-100 to-emerald-200 dark:from-teal-900/30 dark:to-emerald-900/30 rounded-2xl p-8 border-2 border-teal-300 dark:border-teal-500 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 dark:from-teal-400 dark:to-emerald-400 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-teal-800 dark:text-teal-200 mb-4">🌟 Our Vision</h3>
              <p className="text-teal-700 dark:text-gray-200 font-medium leading-relaxed">
                To be the premier Malayalam cultural association in Bangalore, known for organizing spectacular 
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
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-700 to-blue-700 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
              📖 Our Story
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
              From humble beginnings to a thriving community
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-2xl p-8 border-2 border-green-300 dark:border-green-500 shadow-lg">
            <p className="text-gray-800 dark:text-gray-100 font-medium leading-relaxed mb-6 text-lg">
              Infinity Malayalees was born from a simple desire - to recreate the warmth and joy of Kerala's 
              festivals in our new home at Ajmera Infinity, Bangalore. What started as informal gatherings 
              among a few Malayalee families has blossomed into a vibrant community association.
            </p>
            
            <p className="text-gray-800 dark:text-gray-100 font-medium leading-relaxed mb-6 text-lg">
              In 2023, we officially formed the Infinity Malayalees Association with the goal of preserving 
              our rich cultural heritage while building lasting friendships. Our first Onam celebration was 
              a modest affair with 50 participants, but the enthusiasm and joy were infectious.
            </p>
            
            <p className="text-gray-800 dark:text-gray-100 font-medium leading-relaxed text-lg">
              Today, we're proud to organize grand celebrations that bring together over 200 community members, 
              featuring authentic Sadya, spectacular cultural programs, and the spirit of Kerala that makes 
              everyone feel at home. Our journey continues as we work to make every festival a memorable 
              experience for our growing Malayalam family.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-4">
              👥 Leadership Team
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
              Dedicated volunteers leading our community with passion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border-2 border-purple-200 dark:border-purple-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <member.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 text-center mb-2">{member.name}</h3>
                <p className="text-purple-700 dark:text-purple-300 font-semibold text-center mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-200 text-sm text-center font-medium">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-700 to-cyan-700 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
              🏛️ Organizational Structure
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
              Our comprehensive team structure for organizing spectacular events
            </p>
          </div>

          {/* Category Legend */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-purple-100 to-indigo-200 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg border border-purple-300 dark:border-purple-500">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
              <span className="text-sm font-bold text-purple-800 dark:text-purple-200">Leadership</span>
            </div>
            <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-blue-100 to-cyan-200 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg border border-blue-300 dark:border-blue-500">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <span className="text-sm font-bold text-blue-800 dark:text-blue-200">Core Team</span>
            </div>
            <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-green-100 to-emerald-200 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg border border-green-300 dark:border-green-500">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
              <span className="text-sm font-bold text-green-800 dark:text-green-200">Operations</span>
            </div>
            <div className="flex items-center space-x-2 p-3 bg-gradient-to-r from-orange-100 to-red-200 dark:from-orange-900/30 dark:to-red-900/30 rounded-lg border border-orange-300 dark:border-orange-500">
              <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              <span className="text-sm font-bold text-orange-800 dark:text-orange-200">Support</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizationalStructure.map((position, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${getCategoryBg(position.category)} rounded-2xl p-6 border-2 ${getCategoryBorder(position.category)} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(position.category)} rounded-full flex items-center justify-center shadow-lg`}>
                    <Users className="text-white" size={20} />
                  </div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(position.category)} text-white text-xs font-bold rounded-full`}>
                    {position.headcount}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">{position.role}</h3>
                <p className="text-gray-700 dark:text-gray-200 text-sm font-medium leading-relaxed">
                  {position.responsibilities}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-indigo-100 to-cyan-100 dark:from-indigo-900/30 dark:to-cyan-900/30 rounded-2xl p-8 border-2 border-indigo-300 dark:border-indigo-500 shadow-lg">
            <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-4 text-center">📌 Key Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">12+</div>
                <p className="text-indigo-600 dark:text-indigo-300 font-semibold">Key Roles</p>
                <p className="text-gray-600 dark:text-gray-200 text-sm">Comprehensive coverage</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">15-20</div>
                <p className="text-indigo-600 dark:text-indigo-300 font-semibold">Total Team Size</p>
                <p className="text-gray-600 dark:text-gray-200 text-sm">Dedicated volunteers</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">4</div>
                <p className="text-indigo-600 dark:text-indigo-300 font-semibold">Core Categories</p>
                <p className="text-gray-600 dark:text-gray-200 text-sm">Structured approach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-700 to-red-700 dark:from-amber-400 dark:to-red-400 bg-clip-text text-transparent mb-4">
              🏆 Our Journey
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
              Milestones that define our community's growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border-2 border-amber-200 dark:border-amber-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">{achievement.icon}</div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            🤝 Join Our Community
          </h2>
          <p className="text-xl text-blue-100 mb-8 font-medium">
            Be part of our growing Malayalam family at Ajmera Infinity. 
            Together, we celebrate traditions and create lasting memories.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Mail size={32} className="text-white mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Email Us</h3>
              <p className="text-blue-100 text-sm">admin@infinitymalayalees.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Phone size={32} className="text-white mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Call Us</h3>
              <p className="text-blue-100 text-sm">+91 98765 43210</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <MapPin size={32} className="text-white mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Visit Us</h3>
              <p className="text-blue-100 text-sm">Ajmera Infinity Community Hall</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/malayalee-registration"
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              👥 Register as Member
              <Users className="ml-2" size={20} />
            </a>
            <a
              href="/events"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition-all duration-200 shadow-lg"
            >
              📅 View Events
              <Calendar className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;