import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 via-orange-900 to-red-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white mt-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23fbbf24%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-amber-400 dark:to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-red-800 dark:text-gray-900 font-bold text-lg">∞</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-amber-300 dark:to-orange-300 bg-clip-text text-transparent">
                Infinity Malayalees
              </span>
            </div>
            <p className="text-green-100 dark:text-gray-300 mb-6 font-medium text-lg leading-relaxed">
              🌺 Celebrating Malayalam culture and traditions at Ajmera Infinity. 
              Join us for Onam 2025 celebrations! 🌺
            </p>
            <div className="flex items-center space-x-2">
              <Heart size={18} className="text-red-400 dark:text-red-300" />
              <span className="text-sm font-medium">Made with love for our community ❤️</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-amber-300 dark:to-orange-300 bg-clip-text text-transparent">
              📞 Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-white/10 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm">
                <Mail size={18} className="text-yellow-300 dark:text-amber-300" />
                <span className="text-sm font-medium">admin@infinitymalayalees.com</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm">
                <Phone size={18} className="text-yellow-300 dark:text-amber-300" />
                <span className="text-sm font-medium">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm">
                <MapPin size={18} className="text-yellow-300 dark:text-amber-300" />
                <span className="text-sm font-medium">Ajmera Infinity, Mumbai</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-amber-300 dark:to-orange-300 bg-clip-text text-transparent">
              🎉 Onam 2025
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-white/10 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm">
                <p className="text-sm"><span className="font-bold text-yellow-300 dark:text-amber-300">📅 Dates:</span> September 13-14, 2025</p>
              </div>
              <div className="p-3 bg-white/10 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm">
                <p className="text-sm"><span className="font-bold text-yellow-300 dark:text-amber-300">🏛️ Venue:</span> Ajmera Infinity Community Hall</p>
              </div>
              <div className="p-3 bg-white/10 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm">
                <p className="text-sm"><span className="font-bold text-yellow-300 dark:text-amber-300">🍛 Sadya:</span> ₹350 per person</p>
              </div>
              <div className="p-3 bg-white/10 dark:bg-gray-700/50 rounded-lg backdrop-blur-sm">
                <p className="text-sm"><span className="font-bold text-yellow-300 dark:text-amber-300">📝 Registration:</span> Open now!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gradient-to-r from-yellow-400 to-orange-400 dark:border-amber-500 mt-12 pt-8 text-center">
          <div className="bg-white/10 dark:bg-gray-700/30 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-green-100 dark:text-gray-300 text-lg font-medium">
              © 2025 Infinity Malayalees Association. All rights reserved.
            </p>
            <p className="mt-2 text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 dark:from-amber-300 dark:to-orange-300 bg-clip-text text-transparent">
              🌺 Onam Ashamsakal! 🌺
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;