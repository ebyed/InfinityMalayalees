import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  
  // Check if we're on Onam-related pages
  const isOnamPage = location.pathname.includes('onam') || 
                    location.pathname.includes('sadya') || 
                    location.pathname.includes('cultural') || 
                    location.pathname.includes('thiruvathira');

  return (
    <footer className={`text-white mt-16 relative overflow-hidden transition-all duration-300 ${
      isOnamPage 
        ? 'bg-gradient-to-r from-orange-900 via-red-900 to-pink-900 dark:from-charcoal-900 dark:via-charcoal-800 dark:to-charcoal-900' 
        : 'bg-gradient-to-r from-deep-maroon-800 via-kerala-green-800 to-festive-gold-800 dark:from-charcoal-900 dark:via-charcoal-800 dark:to-charcoal-900'
    }`}>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                isOnamPage 
                  ? 'bg-gradient-to-br from-orange-400 to-red-500 dark:from-orange-400 dark:to-red-500' 
                  : 'bg-gradient-to-br from-festive-gold-400 to-kerala-green-500 dark:from-festive-gold-400 dark:to-kerala-green-500'
              }`}>
                <span className="text-white dark:text-charcoal-900 font-bold text-lg">∞</span>
              </div>
              <span className={`text-2xl font-bold bg-clip-text text-transparent transition-all duration-300 ${
                isOnamPage 
                  ? 'bg-gradient-to-r from-orange-300 to-red-300 dark:from-orange-300 dark:to-red-300' 
                  : 'bg-gradient-to-r from-festive-gold-300 to-kerala-green-300 dark:from-festive-gold-300 dark:to-kerala-green-300'
              }`}>
                Infinity Malayalees
              </span>
            </Link>
            <p className={`mb-6 font-medium text-lg leading-relaxed transition-all duration-300 ${
              isOnamPage 
                ? 'text-orange-100 dark:text-ash-grey-300' 
                : 'text-ivory-100 dark:text-ash-grey-300'
            }`}>
              Celebrating Malayalam culture and traditions at Ajmera Infinity. 
              {isOnamPage ? 'Join us for Onam 2025 celebrations!' : 'Building community through heritage!'}
            </p>
            <div className="flex items-center space-x-2">
              <Heart size={18} className={`transition-all duration-300 ${
                isOnamPage ? 'text-red-400 dark:text-red-300' : 'text-festive-gold-400 dark:text-festive-gold-300'
              }`} />
              <span className="text-sm font-medium">Made with love for our community</span>
            </div>
          </div>

          <div>
            <h3 className={`text-xl font-bold mb-6 bg-clip-text text-transparent transition-all duration-300 ${
              isOnamPage 
                ? 'bg-gradient-to-r from-orange-300 to-red-300 dark:from-orange-300 dark:to-red-300' 
                : 'bg-gradient-to-r from-festive-gold-300 to-kerala-green-300 dark:from-festive-gold-300 dark:to-kerala-green-300'
            }`}>
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className={`flex items-center space-x-3 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                isOnamPage 
                  ? 'bg-white/10 dark:bg-charcoal-700/50' 
                  : 'bg-white/10 dark:bg-charcoal-700/50'
              }`}>
                <Mail size={18} className={`transition-all duration-300 ${
                  isOnamPage ? 'text-orange-300 dark:text-orange-300' : 'text-festive-gold-300 dark:text-festive-gold-300'
                }`} />
                <span className="text-sm font-medium">infinitymalayalees@gmail.com</span>
              </div>
              <div className={`flex items-center space-x-3 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                isOnamPage 
                  ? 'bg-white/10 dark:bg-charcoal-700/50' 
                  : 'bg-white/10 dark:bg-charcoal-700/50'
              }`}>
                <Phone size={18} className={`transition-all duration-300 ${
                  isOnamPage ? 'text-orange-300 dark:text-orange-300' : 'text-festive-gold-300 dark:text-festive-gold-300'
                }`} />
                <span className="text-sm font-medium">+91 9686 900488</span>
              </div>
              <div className={`flex items-start space-x-3 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                isOnamPage 
                  ? 'bg-white/10 dark:bg-charcoal-700/50' 
                  : 'bg-white/10 dark:bg-charcoal-700/50'
              }`}>
                <MapPin size={18} className={`mt-0.5 transition-all duration-300 ${
                  isOnamPage ? 'text-orange-300 dark:text-orange-300' : 'text-festive-gold-300 dark:text-festive-gold-300'
                }`} />
                <div className="text-sm font-medium">
                  <div>Ajmera Infinity</div>
                  <div>Neeladri Road, Karuna Nagar</div>
                  <div>Electronic City Phase 1</div>
                  <div>Bangalore - 560100</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className={`text-xl font-bold mb-6 bg-clip-text text-transparent transition-all duration-300 ${
              isOnamPage 
                ? 'bg-gradient-to-r from-orange-300 to-red-300 dark:from-orange-300 dark:to-red-300' 
                : 'bg-gradient-to-r from-festive-gold-300 to-kerala-green-300 dark:from-festive-gold-300 dark:to-kerala-green-300'
            }`}>
              {isOnamPage ? 'Onam 2025' : 'Community Info'}
            </h3>
            <div className="space-y-3">
              {isOnamPage ? (
                <>
                  <div className={`p-3 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                    'bg-white/10 dark:bg-charcoal-700/50'
                  }`}>
                    <p className="text-sm"><span className={`font-bold transition-all duration-300 ${
                      'text-orange-300 dark:text-orange-300'
                    }`}>Dates:</span> September 13-14, 2025</p>
                  </div>
                  <div className={`p-3 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                    'bg-white/10 dark:bg-charcoal-700/50'
                  }`}>
                    <p className="text-sm"><span className={`font-bold transition-all duration-300 ${
                      'text-orange-300 dark:text-orange-300'
                    }`}>Venue:</span> Ajmera Infinity Community Hall</p>
                  </div>
                  <div className={`p-3 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                    'bg-white/10 dark:bg-charcoal-700/50'
                  }`}>
                    <p className="text-sm"><span className={`font-bold transition-all duration-300 ${
                      'text-orange-300 dark:text-orange-300'
                    }`}>Sadya:</span> ₹400 per person</p>
                  </div>
                  <div className={`p-3 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                    'bg-white/10 dark:bg-charcoal-700/50'
                  }`}>
                    <p className="text-sm"><span className={`font-bold transition-all duration-300 ${
                      'text-orange-300 dark:text-orange-300'
                    }`}>Registration:</span> Open now!</p>
                  </div>
                </>
              ) : (
                <>
                  <div className={`p-3 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                    'bg-white/10 dark:bg-charcoal-700/50'
                  }`}>
                    <p className="text-sm"><span className={`font-bold transition-all duration-300 ${
                      'text-festive-gold-300 dark:text-festive-gold-300'
                    }`}>Location:</span> Ajmera Infinity</p>
                  </div>
                  <div className={`p-3 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                    'bg-white/10 dark:bg-charcoal-700/50'
                  }`}>
                    <p className="text-sm"><span className={`font-bold transition-all duration-300 ${
                      'text-festive-gold-300 dark:text-festive-gold-300'
                    }`}>Members:</span> 200+ Families</p>
                  </div>
                  <div className={`p-3 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                    'bg-white/10 dark:bg-charcoal-700/50'
                  }`}>
                    <p className="text-sm"><span className={`font-bold transition-all duration-300 ${
                      'text-festive-gold-300 dark:text-festive-gold-300'
                    }`}>Events:</span> Year-round celebrations</p>
                  </div>
                  <div className={`p-3 rounded-lg backdrop-blur-sm transition-all duration-300 ${
                    'bg-white/10 dark:bg-charcoal-700/50'
                  }`}>
                    <p className="text-sm"><span className={`font-bold transition-all duration-300 ${
                      'text-festive-gold-300 dark:text-festive-gold-300'
                    }`}>Culture:</span> Malayalam heritage</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className={`border-t-2 mt-12 pt-8 text-center transition-all duration-300 ${
          isOnamPage 
            ? 'border-orange-500 dark:border-orange-500' 
            : 'border-kerala-green-500 dark:border-kerala-green-500'
        }`}>
          <div className={`rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 ${
            isOnamPage 
              ? 'bg-white/10 dark:bg-charcoal-700/30' 
              : 'bg-white/10 dark:bg-charcoal-700/30'
          }`}>
            <p className={`text-lg font-medium transition-all duration-300 ${
              isOnamPage 
                ? 'text-orange-100 dark:text-ash-grey-300' 
                : 'text-ivory-100 dark:text-ash-grey-300'
            }`}>
              © 2025 Infinity Malayalees Association. All rights reserved.
            </p>
            <p className={`mt-2 text-2xl font-bold bg-clip-text text-transparent transition-all duration-300 ${
              isOnamPage 
                ? 'bg-gradient-to-r from-orange-300 to-red-300 dark:from-orange-300 dark:to-red-300' 
                : 'bg-gradient-to-r from-festive-gold-300 to-kerala-green-300 dark:from-festive-gold-300 dark:to-kerala-green-300'
            }`}>
              {isOnamPage ? 'Onam Ashamsakal!' : 'Namaskaram!'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;