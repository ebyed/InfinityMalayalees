import React from 'react';
import { Calendar, MapPin, Clock, Info } from 'lucide-react';
import { SadyaIcon } from '../components/KeralaSVGIcons';

const SadyaInformation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-4">
          🍛 Onam Sadya Information
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto font-medium">
          Experience authentic Kerala Sadya with 20+ traditional dishes served on banana leaves. Limited Seats Only !🌿
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-2 border-green-200 dark:border-green-600 overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 px-8 py-8">
          <h2 className="text-3xl font-bold text-white flex items-center">
            <SadyaIcon size={32} className="mr-3 text-white" />
            🍽️ Sadya Availability
          </h2>
          <p className="text-green-100 mt-2 font-medium">Traditional Kerala feast for Onam 2025</p>
        </div>

        <div className="p-8 space-y-8">
          {/* Main Information */}
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-8 border-2 border-green-300 dark:border-green-500 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Calendar size={40} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-4">
              🏛️ Available at Clubhouse
            </h3>
            <p className="text-xl text-green-700 dark:text-green-300 font-bold mb-2">
              September 1 - 9, 2025
            </p>
            <p className="text-green-600 dark:text-green-400 font-medium">
              Visit the Ajmera Infinity Clubhouse to get your Onam Sadya coupons
            </p>
            <div className="mt-6 bg-white/70 dark:bg-gray-800/70 rounded-xl p-4 border border-green-300 dark:border-green-500">
              <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">💰 Pricing</h4>
              <div className="text-green-700 dark:text-green-300 font-medium space-y-1">
                <p><strong>Adults:</strong> ₹400 per person</p>
                <p><strong>Children (under 10):</strong> ₹300 per person</p>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-200 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl p-6 border-2 border-blue-300 dark:border-blue-500">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin size={24} className="text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">📍 Location</h3>
              </div>
              <div className="text-blue-700 dark:text-blue-300 font-medium space-y-2">
                <p><strong>Clubhouse:</strong> Ajmera Infinity</p>
                <p><strong>Address:</strong> Neeladri Road, Karuna Nagar</p>
                <p><strong>Area:</strong> Electronic City Phase 1</p>
                <p><strong>City:</strong> Bangalore - 560100</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-red-200 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl p-6 border-2 border-orange-300 dark:border-orange-500">
              <div className="flex items-center space-x-3 mb-4">
                <Clock size={24} className="text-orange-600 dark:text-orange-400" />
                <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200">⏰ Timing</h3>
              </div>
              <div className="text-orange-700 dark:text-orange-300 font-medium space-y-2">
                <p><strong>Coupon Sales:</strong> September 1-9, 2025</p>
                <p><strong>Sadya Service:</strong> September 13-14, 2025</p>
                <p><strong>Service Time:</strong> 11:30 AM onwards</p>
                <p><strong>Venue:</strong> Community Hall</p>
              </div>
            </div>
          </div>

          {/* Sadya Details */}
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 border-2 border-green-300 dark:border-green-500">
            <h3 className="font-bold text-green-800 dark:text-green-300 mb-4 text-lg flex items-center">
              <SadyaIcon size={24} className="mr-2 text-green-600 dark:text-green-400" />
              🍽️ Traditional Sadya Includes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-700 dark:text-green-300 font-medium">
              <div>
                <p>🍚 Traditional rice varieties</p>
                <p>🍲 Sambar & Rasam</p>
                <p>🥗 Aviyal & Thoran</p>
                <p>🥘 Olan & Kaalan</p>
                <p>🥙 Pachadi & Kichadi</p>
              </div>
              <div>
                <p>🍮 Payasam (3 varieties)</p>
                <p>🥨 Banana chips & Papadam</p>
                <p>🥒 Pickle & Banana</p>
                <p>🍛 Traditional sides</p>
                <p>🌿 Served on banana leaf</p>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl p-6 border-2 border-yellow-300 dark:border-yellow-500">
            <div className="flex items-center space-x-3 mb-4">
              <Info size={24} className="text-yellow-600 dark:text-yellow-400" />
              <h3 className="font-bold text-yellow-800 dark:text-yellow-300 text-lg">📋 Important Information</h3>
            </div>
            <ul className="text-yellow-700 dark:text-yellow-300 font-medium space-y-2">
              <li>• Visit the clubhouse between September 1-9 to purchase Sadya coupons</li>
              <li>• Coupons will be required for entry to the Sadya on event days</li>
              <li>• Limited quantities available - first come, first served</li>
              <li>• Sadya will be served on September 13-14, 2025 from 11:30 AM onwards</li>
              <li>• Venue: Ajmera Infinity Community Hall</li>
              <li>• For queries, contact the clubhouse reception</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-500 text-center">
            <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-4 text-lg">📞 Need More Information?</h3>
            <div className="text-purple-700 dark:text-purple-300 font-medium space-y-2">
              <p><strong>📧 Email:</strong> infinitymalayalees@gmail.com</p>
              <p><strong>📱 Phone:</strong> +91 9686 900488</p>
              <p><strong>🏢 Clubhouse:</strong> Ajmera Infinity Reception</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SadyaInformation;