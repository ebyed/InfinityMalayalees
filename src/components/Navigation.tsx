import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Settings, Info } from 'lucide-react';
import { KeralaLogoIcon } from './KeralaSVGIcons';
import ThemeToggle from './ThemeToggle';

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
    <nav className={`backdrop-blur-md shadow-2xl border-b-4 transition-all duration-300 bg-festive-gold-500/95 dark:bg-charcoal-900/95 border-kerala-green-500 dark:border-kerala-green-400 ${
      isOnamPage 
        ? 'bg-tropical-50/95 dark:bg-charcoal-900/95 border-tropical-400 dark:border-tropical-500' 
        : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <Link to="/" className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl border-2 border-white dark:border-charcoal-700 transition-all duration-300 ${
              isOnamPage 
                ? 'bg-gradient-to-br from-tropical-500 via-bloom-500 to-coral-500 dark:from-tropical-400 dark:via-bloom-400 dark:to-coral-400' 
                : 'bg-gradient-to-br from-festive-gold-500 via-kerala-green-500 to-deep-maroon-600 dark:from-festive-gold-400 dark:via-kerala-green-400 dark:to-deep-maroon-500'
            }`}>
              <KeralaLogoIcon className="text-white" size={28} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl bg-clip-text text-transparent transition-all duration-300 ${
                isOnamPage 
                  ? 'bg-gradient-to-r from-tropical-600 to-coral-600 dark:from-tropical-400 dark:to-coral-400' 
                  : 'bg-gradient-to-r from-deep-maroon-700 to-charcoal-800 dark:from-festive-gold-400 dark:to-kerala-green-400'
              }`}>
                Infinity Malayalees
              </span>
              <span className="text-xs text-charcoal-600 dark:text-ash-grey-400 font-medium">Ajmera Infinity, Bangalore</span>
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
                      ? 'bg-gradient-to-r from-tropical-500 to-coral-500 dark:from-tropical-400 dark:to-coral-400 text-white shadow-lg border-2 border-bloom-300 dark:border-bloom-400'
                      : 'bg-gradient-to-r from-kerala-green-500 to-festive-gold-500 dark:from-kerala-green-400 dark:to-festive-gold-400 text-white shadow-lg border-2 border-festive-gold-300 dark:border-festive-gold-400'
                    : `text-charcoal-700 dark:text-ash-grey-300 hover:shadow-md transition-all duration-300 ${
                        isOnamPage
                          ? 'hover:text-tropical-700 dark:hover:text-tropical-400 hover:bg-gradient-to-r hover:from-tropical-100 hover:to-bloom-100 dark:hover:from-charcoal-800 dark:hover:to-charcoal-700'
                          : 'hover:text-kerala-green-700 dark:hover:text-kerala-green-400 hover:bg-gradient-to-r hover:from-kerala-green-100 hover:to-festive-gold-100 dark:hover:from-charcoal-800 dark:hover:to-charcoal-700'
                      }`
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link
              to="/admin"
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-md ${
                isOnamPage
                  ? 'text-charcoal-700 dark:text-ash-grey-300 hover:text-tropical-700 dark:hover:text-tropical-400 hover:bg-gradient-to-r hover:from-tropical-100 hover:to-bloom-100 dark:hover:from-charcoal-800 dark:hover:to-charcoal-700'
                  : 'text-charcoal-700 dark:text-ash-grey-300 hover:text-kerala-green-700 dark:hover:text-kerala-green-400 hover:bg-gradient-to-r hover:from-kerala-green-100 hover:to-festive-gold-100 dark:hover:from-charcoal-800 dark:hover:to-charcoal-700'
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
          ? 'border-tropical-200 dark:border-charcoal-700 bg-gradient-to-r from-tropical-50 to-bloom-50 dark:from-charcoal-800 dark:to-charcoal-900' 
          : 'border-kerala-green-200 dark:border-charcoal-700 bg-gradient-to-r from-ivory-50 to-festive-gold-50 dark:from-charcoal-800 dark:to-charcoal-900'
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
                    ? 'bg-gradient-to-r from-tropical-500 to-coral-500 dark:from-tropical-400 dark:to-coral-400 text-white shadow-lg'
                    : 'bg-gradient-to-r from-kerala-green-500 to-festive-gold-500 dark:from-kerala-green-400 dark:to-festive-gold-400 text-white shadow-lg'
                  : `text-charcoal-700 dark:text-ash-grey-300 transition-all duration-300 ${
                      isOnamPage
                        ? 'hover:text-tropical-700 dark:hover:text-tropical-400 hover:bg-gradient-to-r hover:from-tropical-100 hover:to-bloom-100 dark:hover:from-charcoal-700 dark:hover:to-charcoal-600'
                        : 'hover:text-kerala-green-700 dark:hover:text-kerala-green-400 hover:bg-gradient-to-r hover:from-kerala-green-100 hover:to-festive-gold-100 dark:hover:from-charcoal-700 dark:hover:to-charcoal-600'
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