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
        ? 'bg-gradient-to-r from-terracotta-900 via-terracotta-800 to-terracotta-950' 
        : 'bg-gradient-to-r from-sapphire-900 via-emerald-800 to-plum-900'
    }`}>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                isOnamPage 
                  ? 'bg-gradient-to-br from-terracotta-400 to-terracotta-500' 
                  : 'bg-gradient-to-br from-emerald-400 to-sapphire-500'
              }`}>
                <span className="text-white font-bold text-lg">∞</span>
              </div>
              <span className={`text-2xl font-bold bg-clip-text text-transparent transition-all duration-300 ${
                isOnamPage 
                  ? 'bg-gradient-to-r from-terracotta-300 to-terracotta-400' 
                  : 'bg-gradient-to-r from-emerald-300 to-sapphire-400'
              }`}>
                Infinity Malayalees
              </span>
            </Link>
            <p className={`mb-6 font-medium text-lg leading-relaxed transition-all duration-300 text-stone-100 ${
              isOnamPage 
                ? 'text-sand-100' 
                : 'text-stone-100'
            }`}>
              Celebrating Malayalam culture and traditions at Ajmera Infinity. 
              {isOnamPage ? 'Join us for Onam 2025 celebrations!' : 'Building community through heritage!'}
            </p>
            <div className="flex items-center space-x-2">
              <Heart size={18} className={`transition-all duration-300 ${
                isOnamPage ? 'text-terracotta-400' : 'text-gold-accent-400'
              }`} />
              <span className="text-sm font-medium">Made with love for our community</span>
            </div>
          </div>

          <div>
            <h3 className={`text-xl font-bold mb-6 bg-clip-text text-transparent transition-all duration-300 ${
              isOnamPage 
                ? 'bg-gradient-to-r from-terracotta-300 to-terracotta-400' 
                : 'bg-gradient-to-r from-emerald-300 to-sapphire-400'
            }`}>
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 bg-white/10">
                <Mail size={18} className={`transition-all duration-300 ${
                  isOnamPage ? 'text-terracotta-300' : 'text-emerald-300'
                }`} />
                <span className="text-sm font-medium">infinitymalayalees@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 bg-white/10">
                <Phone size={18} className={`transition-all duration-300 ${
                  isOnamPage ? 'text-terracotta-300' : 'text-emerald-300'
                }`} />
                <span className="text-sm font-medium">+91 9686 900488</span>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg backdrop-blur-sm transition-all duration-300 bg-white/10">
                <MapPin size={18} className={`mt-0.5 transition-all duration-300 ${
                  isOnamPage ? 'text-terracotta-300' : 'text-emerald-300'
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
                ? 'bg-gradient-to-r from-terracotta-300 to-terracotta-400' 
                : 'bg-gradient-to-r from-emerald-300 to-sapphire-400'
            }`}>
              {isOnamPage ? 'Onam 2025' : 'Community Info'}
            </h3>
            <div className="space-y-3">
              {isOnamPage ? (
                <>
                  <div className="p-3 rounded-lg backdrop-blur-sm transition-all duration-300 bg-white/10">
                    <p className="text-sm"><span className={`font-bold transition-all duration-300 ${
                      'text-terracotta-300'
                    }`}>Dates:</span> September 13-14, 2025</p>
                  </div>
                  <div className="p-3 rounded-lg backdrop-blur-sm transition-all duration-300 bg-white/10">
                    <p className="text-sm"><span className={`font-bold transition-all duration-300 ${
                      'text-terracotta-300'
                    }`}>Venue:</span> Ajmera Infinity Clubhouse</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-3 rounded-lg backdrop-blur-sm transition-all duration-300 bg-white/10">
                    <p className="text-sm"><span className={`font-bold transition-all duration-300 ${
                      'text-emerald-300'
                    }`}>Location:</span> Ajmera Infinity</p>
                  </div>
                  <div className="p-3 rounded-lg backdrop-blur-sm transition-all duration-300 bg-white/10">
                    <p className="text-sm"><span className={`font-bold transition-all duration-300 ${
                      'text-emerald-300'
                    }`}>Members:</span> 200+ Families</p>
                  </div>
                  <div className="p-3 rounded-lg backdrop-blur-sm transition-all duration-300 bg-white/10">
                    <p className="text-sm"><span className={`font-bold transition-all duration-300 ${
                      'text-emerald-300'
                    }`}>Events:</span> Year-round celebrations</p>
                  </div>
                  <div className="p-3 rounded-lg backdrop-blur-sm transition-all duration-300 bg-white/10">
                    <p className="text-sm"><span className={`font-bold transition-all duration-300 ${
                      'text-emerald-300'
                    }`}>Culture:</span> Malayalam heritage</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className={`border-t-2 mt-12 pt-8 text-center transition-all duration-300 ${
          isOnamPage 
            ? 'border-terracotta-500' 
            : 'border-emerald-500'
        }`}>
          <div className="rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 bg-white/10">
            <p className={`text-lg font-medium transition-all duration-300 text-stone-100 ${
              isOnamPage 
                ? 'text-sand-100' 
                : 'text-stone-100'
            }`}>
              © 2025 Infinity Malayalees Association. All rights reserved.
            </p>
            <p className={`mt-2 text-2xl font-bold bg-clip-text text-transparent transition-all duration-300 ${
              isOnamPage 
                ? 'bg-gradient-to-r from-terracotta-300 to-terracotta-400' 
                : 'bg-gradient-to-r from-emerald-300 to-sapphire-400'
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