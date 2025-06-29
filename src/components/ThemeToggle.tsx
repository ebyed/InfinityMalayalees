import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLocation } from 'react-router-dom';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  
  // Check if we're on Onam-related pages
  const isOnamPage = location.pathname.includes('onam') || 
                    location.pathname.includes('sadya') || 
                    location.pathname.includes('cultural') || 
                    location.pathname.includes('thiruvathira');

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${
        isDark 
          ? isOnamPage
            ? 'bg-gradient-to-r from-tropical-500 to-coral-500 text-white hover:from-tropical-600 hover:to-coral-600' 
            : 'bg-gradient-to-r from-backwater-500 to-serene-500 text-white hover:from-backwater-600 hover:to-serene-600'
          : isOnamPage
            ? 'bg-gradient-to-r from-bloom-500 to-tropical-500 text-white hover:from-bloom-600 hover:to-tropical-600'
            : 'bg-gradient-to-r from-serene-500 to-sage-500 text-white hover:from-serene-600 hover:to-sage-600'
      }`}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-6 h-6">
        <Sun 
          size={24} 
          className={`absolute inset-0 transition-all duration-300 ${
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`} 
        />
        <Moon 
          size={24} 
          className={`absolute inset-0 transition-all duration-300 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          }`} 
        />
      </div>
    </button>
  );
};

export default ThemeToggle;