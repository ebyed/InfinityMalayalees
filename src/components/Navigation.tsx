import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Settings, Info } from 'lucide-react';
import { KeralaLogoIcon } from './KeralaSVGIcons';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  // Check if we're on Onam-related pages
  const isOnamPage = location.pathname.includes('onam') || 
                    location.pathname.includes('sadya') || 
                    location.pathname.includes('cultural') || 
                    location.pathname.includes('thiruvathira');

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/events', label: 'Events', icon: Calendar },
  ];

  return (
    <nav className={`backdrop-blur-md shadow-2xl border-b-4 transition-all duration-300 bg-stone-100/95 border-stone-300 ${
      isOnamPage 
        ? 'bg-sand-100/95 border-terracotta-400' 
        : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <Link to="/" className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl border-2 border-white dark:border-charcoal-700 transition-all duration-300 ${
              isOnamPage 
                ? 'bg-gradient-to-br from-terracotta-500 via-terracotta-600 to-terracotta-700' 
                : 'bg-gradient-to-br from-emerald-500 via-emerald-600 to-sapphire-700'
            }`}>
              <KeralaLogoIcon className="text-white" size={28} />
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

          <div className="hidden md:flex space-x-6">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === path || 
                  (path === '/events' && (location.pathname === '/onam-2025' || location.pathname === '/sadya-registration' || location.pathname === '/cultural-events'))
                    ? isOnamPage
                      ? 'bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white shadow-lg border-2 border-terracotta-300'
                      : 'bg-gradient-to-r from-emerald-500 to-sapphire-500 text-white shadow-lg border-2 border-gold-accent-300'
                    : `text-stone-700 hover:shadow-md transition-all duration-300 ${
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

          <div className="flex items-center space-x-4">
            <Link
              to="/admin"
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-md ${
                isOnamPage
                  ? 'text-stone-700 hover:text-terracotta-700 hover:bg-sand-100'
                  : 'text-stone-700 hover:text-emerald-700 hover:bg-stone-100'
              }`}
            >
              <Settings size={18} />
              <span className="hidden sm:block">Admin</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden border-t-2 transition-all duration-300 ${
        isOnamPage 
          ? 'border-terracotta-200 bg-sand-50' 
          : 'border-emerald-200 bg-stone-50'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-bold transition-all duration-300 ${
                location.pathname === path || 
                (path === '/events' && (location.pathname === '/onam-2025' || location.pathname === '/sadya-registration' || location.pathname === '/cultural-events'))
                  ? isOnamPage
                    ? 'bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-emerald-500 to-sapphire-500 text-white shadow-lg'
                  : `text-stone-700 transition-all duration-300 ${
                      isOnamPage
                        ? 'hover:text-terracotta-700 hover:bg-sand-100'
                        : 'hover:text-emerald-700 hover:bg-stone-100'
                    }`
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;