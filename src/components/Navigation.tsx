import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Settings, Info, Menu } from 'lucide-react';
import { KeralaLogoIcon } from './KeralaSVGIcons';

const Navigation: React.FC = () => {
  const location = useLocation();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isOnamPage = location.pathname.includes('onam') || 
                     location.pathname.includes('sadya') || 
                     location.pathname.includes('cultural') || 
                     location.pathname.includes('thiruvathira');

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/admin', label: 'Admin', icon: Settings },
  ];

  return (
    <nav className={`backdrop-blur-md shadow-2xl border-b-4 transition-all duration-300 bg-stone-100/95 border-stone-300 ${
      isOnamPage ? 'bg-sand-100/95 border-terracotta-400' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl border-2 border-white dark:border-charcoal-700 overflow-hidden ${
              isOnamPage 
                ? 'bg-gradient-to-br from-terracotta-500 via-terracotta-600 to-terracotta-700' 
                : 'bg-gradient-to-br from-emerald-500 via-emerald-600 to-sapphire-700'
            }`}>
              <img 
                src="/Gemini_Generated_Image_dy77j8dy77j8dy77.png" 
                alt="Infinity Malayalees Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl bg-clip-text text-transparent transition-all duration-300 ${
                isOnamPage 
                  ? 'bg-gradient-to-r from-terracotta-600 to-terracotta-700' 
                  : 'bg-gradient-to-r from-sapphire-700 to-emerald-800'
              }`}>
                Infinity Malayalees
              </span>
              <span className="text-xs text-stone-600 font-medium">Ajmera Infinity, Bangalore</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === path || 
                  (path === '/events' && location.pathname.startsWith('/onam'))
                    ? isOnamPage
                      ? 'bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white shadow-lg border-2 border-terracotta-300'
                      : 'bg-gradient-to-r from-emerald-500 to-sapphire-500 text-white shadow-lg border-2 border-gold-accent-300'
                    : `text-stone-700 hover:shadow-md ${
                        isOnamPage
                          ? 'hover:text-terracotta-700 hover:bg-sand-100'
                          : 'hover:text-emerald-700 hover:bg-stone-100'
                      }`
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-stone-700 hover:bg-stone-200"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav with Tailwind animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } border-t-2 ${
          isOnamPage ? 'border-terracotta-200 bg-sand-50' : 'border-emerald-200 bg-stone-50'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-bold transition-all duration-300 ${
                location.pathname === path
                  ? isOnamPage
                    ? 'bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-emerald-500 to-sapphire-500 text-white shadow-lg'
                  : `text-stone-700 ${
                      isOnamPage
                        ? 'hover:text-terracotta-700 hover:bg-sand-100'
                        : 'hover:text-emerald-700 hover:bg-stone-100'
                    }`
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
