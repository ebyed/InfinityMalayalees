import React from 'react';
import { Users, Heart, Calendar, Award, MapPin, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutUs: React.FC = () => {
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
      description: 'Rajesh serves as our guiding light, bringing 25+ years of community leadership experience from Kerala. A retired government officer, he provides strategic direction and ensures our cultural authenticity. His deep knowledge of Malayalam traditions and administrative expertise helps navigate complex event planning while maintaining our core values.',
      category: 'leadership'
    },
    {
      role: 'President',
      description: 'Priya leads with infectious enthusiasm and unwavering dedication. A software architect by profession, she seamlessly balances modern organizational skills with traditional values. Her vision of creating a "home away from home" drives every initiative, and her ability to unite diverse perspectives makes her an exceptional leader.',
      category: 'leadership'
    },
    {
      role: 'Vice President',
      description: 'Anil acts as the perfect complement to our President, bringing diplomatic finesse and operational excellence. His background in project management shines through in coordinating between teams. Known for his calm demeanor and problem-solving abilities, he ensures smooth execution of all inter-team collaborations.',
      category: 'leadership'
    },
    {
      role: 'General Secretary',
      description: 'Deepa is the communication backbone of our organization. A former journalist, she crafts compelling narratives that keep our community engaged and informed. Her meticulous meeting minutes and clear communication strategies ensure transparency and keep everyone aligned with our mission and activities.',
      category: 'core'
    },
    {
      role: 'Treasurer',
      description: 'Suresh brings financial discipline with a heart for community service. A chartered accountant, he maintains transparent financial records while optimizing every rupee for maximum community benefit. His innovative fundraising ideas and cost-effective planning ensure sustainable celebrations year after year.',
      category: 'core'
    },
    {
      role: 'Cultural Team Lead',
      description: 'Lakshmi is a classical dance expert who breathes life into our cultural programs. Trained in Bharatanatyam and Mohiniyattam, she identifies talent, conducts auditions, and choreographs performances that showcase authentic Kerala artforms. Her patient teaching style helps beginners shine alongside experienced performers.',
      category: 'operations'
    },
    {
      role: 'Logistics Team Lead',
      description: 'Ravi is our master of behind-the-scenes magic. An event management professional, he transforms empty halls into vibrant celebration spaces. From sound systems to seating arrangements, his attention to detail ensures every guest experiences comfort and every performer has the perfect stage setup.',
      category: 'operations'
    },
    {
      role: 'Food Committee Head',
      description: 'Geetha brings authentic Kerala flavors to every celebration. A culinary expert specializing in traditional recipes, she coordinates with caterers to ensure our Sadya maintains the authentic taste of home. Her volunteer coordination skills mobilize community members to assist in food preparation and service.',
      category: 'operations'
    },
    {
      role: 'Game & Sports Lead',
      description: 'Vinod revives the joy of traditional Onam games with modern safety standards. A sports enthusiast and safety coordinator, he organizes Vadam Vali, Kudam Adi, and other traditional games that bring out the child in every adult. His inclusive approach ensures participation across all age groups.',
      category: 'operations'
    },
    {
      role: 'Publicity & Design Lead',
      description: 'Kavya is our creative visionary who brings our events to life through stunning visuals. A graphic designer with a passion for Malayalam aesthetics, she creates eye-catching posters, manages our social media presence, and produces memorable video content that captures the essence of our celebrations.',
      category: 'support'
    },
    {
      role: 'Photography & Videography',
      description: 'Arjun and Maya form our dynamic documentation duo. Professional photographers with an eye for candid moments, they capture the emotions, traditions, and joy of our celebrations. Their work creates lasting memories and helps absent family members feel connected to our community events.',
      category: 'support'
    },
    {
      role: 'Volunteer Coordinator',
      description: 'Sindhu is the heart that connects our community members to meaningful participation. A natural organizer with exceptional people skills, she identifies volunteer opportunities, matches skills with needs, and ensures every willing hand finds a way to contribute to our collective success.',
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

      {/* Organizational Structure */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-700 to-cyan-700 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent mb-4">
              🏛️ Organizational Structure
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 font-medium">
              Meet the dedicated individuals who make our celebrations possible
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizationalStructure.map((position, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${getCategoryBg(position.category)} rounded-2xl p-6 border-2 ${getCategoryBorder(position.category)} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(position.category)} rounded-full flex items-center justify-center shadow-lg`}>
                    <Users className="text-white" size={20} />
                  </div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(position.category)} text-white text-xs font-bold rounded-full uppercase tracking-wide`}>
                    {position.category}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">{position.role}</h3>
                <p className="text-gray-700 dark:text-gray-200 text-sm font-medium leading-relaxed">
                  {position.description}
                </p>
              </div>
            ))}
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