import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, Settings, Info } from 'lucide-react';
import { KeralaLogoIcon } from './components/KeralaSVGIcons';

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
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl border-2 border-white transition-all duration-300 ${
              isOnamPage 
                ? 'bg-gradient-to-br from-terracotta-500 via-terracotta-600 to-terracotta-700' 
                : 'bg-gradient-to-br from-emerald-500 via-emerald-600 to-sapphire-700'
            }`}>
              <KeralaLogoIcon className="text-white" size={28} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl transition-all duration-300 ${
                isOnamPage 
                  ? 'text-terracotta-700' 
                  : 'text-sapphire-700'
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
                      ? 'bg-gradient-to-r from-terracotta-500 to-terracotta-600 dark:from-terracotta-400 dark:to-terracotta-500 text-white shadow-lg border-2 border-terracotta-300 dark:border-terracotta-400'
                      : 'bg-gradient-to-r from-emerald-500 to-sapphire-500 dark:from-emerald-400 dark:to-sapphire-400 text-white shadow-lg border-2 border-gold-accent-300 dark:border-gold-accent-400'
                    : `text-stone-700 dark:text-stone-300 hover:shadow-md transition-all duration-300 ${
                        isOnamPage
                          ? 'hover:text-terracotta-700 dark:hover:text-terracotta-400 hover:bg-sand-100 dark:hover:bg-charcoal-800'
                          : 'hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-stone-100 dark:hover:bg-charcoal-800'
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
                  ? 'text-stone-700 dark:text-stone-300 hover:text-terracotta-700 dark:hover:text-terracotta-400 hover:bg-sand-100 dark:hover:bg-charcoal-800'
                  : 'text-stone-700 dark:text-stone-300 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-stone-100 dark:hover:bg-charcoal-800'
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
          ? 'border-terracotta-200 dark:border-charcoal-700 bg-sand-50 dark:from-charcoal-800 dark:to-charcoal-900' 
          : 'border-emerald-200 dark:border-charcoal-700 bg-stone-50 dark:from-charcoal-800 dark:to-charcoal-900'
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
                    ? 'bg-gradient-to-r from-terracotta-500 to-terracotta-600 dark:from-terracotta-400 dark:to-terracotta-500 text-white shadow-lg'
                    : 'bg-gradient-to-r from-emerald-500 to-sapphire-500 dark:from-emerald-400 dark:to-sapphire-400 text-white shadow-lg'
                  : `text-stone-700 dark:text-stone-300 transition-all duration-300 ${
                      isOnamPage
                        ? 'hover:text-terracotta-700 dark:hover:text-terracotta-400 hover:bg-sand-100 dark:hover:bg-charcoal-700'
                        : 'hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-stone-100 dark:hover:bg-charcoal-700'
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