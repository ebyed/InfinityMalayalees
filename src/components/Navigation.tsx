import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Users, Heart, Settings, Info } from 'lucide-react';
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
    { path: '/donations', label: 'Donate', icon: Heart },
  ];

  return (
    <nav className={`backdrop-blur-md shadow-2xl border-b-4 transition-all duration-300 ${
      isOnamPage 
        ? 'bg-tropical-50/95 dark:bg-gray-900/95 border-tropical-400 dark:border-tropical-500' 
        : 'bg-golden-50/95 dark:bg-gray-900/95 border-golden-400 dark:border-golden-500'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <Link to="/" className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl border-2 border-white dark:border-gray-700 transition-all duration-300 ${
              isOnamPage 
                ? 'bg-gradient-to-br from-tropical-500 via-bloom-500 to-coral-500 dark:from-tropical-400 dark:via-bloom-400 dark:to-coral-400' 
                : 'bg-gradient-to-br from-golden-500 via-harvest-500 to-amber-500 dark:from-golden-400 dark:via-harvest-400 dark:to-amber-400'
            }`}>
              <span className="text-white font-bold text-xl">∞</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl bg-clip-text text-transparent transition-all duration-300 ${
                isOnamPage 
                  ? 'bg-gradient-to-r from-tropical-600 to-coral-600 dark:from-tropical-400 dark:to-coral-400' 
                  : 'bg-gradient-to-r from-golden-600 to-harvest-600 dark:from-golden-400 dark:to-harvest-400'
              }`}>
                Infinity Malayalees
              </span>
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Ajmera Infinity, Bangalore</span>
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
                      : 'bg-gradient-to-r from-golden-500 to-harvest-500 dark:from-golden-400 dark:to-harvest-400 text-white shadow-lg border-2 border-amber-300 dark:border-amber-400'
                    : `text-gray-700 dark:text-gray-300 hover:shadow-md transition-all duration-300 ${
                        isOnamPage
                          ? 'hover:text-tropical-700 dark:hover:text-tropical-400 hover:bg-gradient-to-r hover:from-tropical-100 hover:to-bloom-100 dark:hover:from-gray-800 dark:hover:to-gray-700'
                          : 'hover:text-golden-700 dark:hover:text-golden-400 hover:bg-gradient-to-r hover:from-golden-100 hover:to-harvest-100 dark:hover:from-gray-800 dark:hover:to-gray-700'
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
              to="/malayalee-registration"
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 transform hover:scale-105 shadow-lg ${
                isOnamPage
                  ? 'bg-gradient-to-r from-bloom-500 to-coral-500 dark:from-bloom-400 dark:to-coral-400 hover:from-bloom-600 hover:to-coral-600 dark:hover:from-bloom-500 dark:hover:to-coral-500'
                  : 'bg-gradient-to-r from-golden-500 to-amber-500 dark:from-golden-400 dark:to-amber-400 hover:from-golden-600 hover:to-amber-600 dark:hover:from-golden-500 dark:hover:to-amber-500'
              }`}
            >
              <Users size={18} />
              <span className="hidden sm:block">Register</span>
            </Link>
            <ThemeToggle />
            <Link
              to="/admin"
              className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-md ${
                isOnamPage
                  ? 'text-gray-700 dark:text-gray-300 hover:text-tropical-700 dark:hover:text-tropical-400 hover:bg-gradient-to-r hover:from-tropical-100 hover:to-bloom-100 dark:hover:from-gray-800 dark:hover:to-gray-700'
                  : 'text-gray-700 dark:text-gray-300 hover:text-golden-700 dark:hover:text-golden-400 hover:bg-gradient-to-r hover:from-golden-100 hover:to-harvest-100 dark:hover:from-gray-800 dark:hover:to-gray-700'
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
          ? 'border-tropical-200 dark:border-gray-700 bg-gradient-to-r from-tropical-50 to-bloom-50 dark:from-gray-800 dark:to-gray-900' 
          : 'border-golden-200 dark:border-gray-700 bg-gradient-to-r from-golden-50 to-harvest-50 dark:from-gray-800 dark:to-gray-900'
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
                    : 'bg-gradient-to-r from-golden-500 to-harvest-500 dark:from-golden-400 dark:to-harvest-400 text-white shadow-lg'
                  : `text-gray-700 dark:text-gray-300 transition-all duration-300 ${
                      isOnamPage
                        ? 'hover:text-tropical-700 dark:hover:text-tropical-400 hover:bg-gradient-to-r hover:from-tropical-100 hover:to-bloom-100 dark:hover:from-gray-700 dark:hover:to-gray-600'
                        : 'hover:text-golden-700 dark:hover:text-golden-400 hover:bg-gradient-to-r hover:from-golden-100 hover:to-harvest-100 dark:hover:from-gray-700 dark:hover:to-gray-600'
                    }`
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
          <Link
            to="/malayalee-registration"
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-bold text-white shadow-lg transition-all duration-300 ${
              isOnamPage
                ? 'bg-gradient-to-r from-bloom-500 to-coral-500 dark:from-bloom-400 dark:to-coral-400'
                : 'bg-gradient-to-r from-golden-500 to-amber-500 dark:from-golden-400 dark:to-amber-400'
            }`}
          >
            <Users size={20} />
            <span>Register</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;