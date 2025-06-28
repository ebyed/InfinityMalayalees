import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Users, Heart, Settings, Info } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/events', label: 'Events', icon: Calendar },
    { path: '/donations', label: 'Donate', icon: Heart },
  ];

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-2xl border-b-4 border-gradient-to-r from-yellow-400 via-orange-400 to-red-400 dark:border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 dark:from-amber-500 dark:via-orange-500 dark:to-red-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white dark:border-gray-700">
              <span className="text-white font-bold text-xl">∞</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-gradient-to-r from-orange-600 to-red-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
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
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 dark:from-amber-500 dark:to-orange-500 text-white shadow-lg border-2 border-yellow-300 dark:border-amber-300'
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-amber-400 hover:bg-gradient-to-r hover:from-orange-100 hover:to-yellow-100 dark:hover:from-gray-800 dark:hover:to-gray-700 hover:shadow-md'
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
              className="flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 text-white hover:from-blue-600 hover:to-cyan-600 dark:hover:from-blue-500 dark:hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Users size={18} />
              <span className="hidden sm:block">Register</span>
            </Link>
            <ThemeToggle />
            <Link
              to="/admin"
              className="flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-amber-400 hover:bg-gradient-to-r hover:from-orange-100 hover:to-yellow-100 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              <Settings size={18} />
              <span className="hidden sm:block">Admin</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t-2 border-orange-200 dark:border-gray-700 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-bold transition-all duration-300 ${
                location.pathname === path || 
                (path === '/events' && (location.pathname === '/onam-2025' || location.pathname === '/sadya-registration' || location.pathname === '/cultural-events'))
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 dark:from-amber-500 dark:to-orange-500 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-amber-400 hover:bg-gradient-to-r hover:from-orange-100 hover:to-yellow-100 dark:hover:from-gray-700 dark:hover:to-gray-600'
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
          <Link
            to="/malayalee-registration"
            className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-bold bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 text-white shadow-lg"
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