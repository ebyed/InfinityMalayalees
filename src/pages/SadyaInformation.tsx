import React from 'react';
import { Calendar, MapPin, Clock, Info } from 'lucide-react';
import { SadyaIcon } from '../components/KeralaSVGIcons';

const SadyaInformation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-400 dark:to-emerald-500 bg-clip-text text-transparent mb-4">
          Onam Sadya Information
        </h1>
        <p className="text-xl text-stone-700 dark:text-stone-200 max-w-2xl mx-auto font-medium">
          Experience authentic Kerala Sadya with 20+ traditional dishes served on banana leaves. Limited Seats Only!
        </p>
      </div>

      <div className="bg-stone-50 dark:bg-charcoal-800 rounded-3xl shadow-2xl border-2 border-emerald-200 dark:border-emerald-600 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-500 dark:to-emerald-600 px-8 py-8">
          <h2 className="text-3xl font-bold text-white flex items-center">
            <SadyaIcon size={32} className="mr-3 text-white" />
            Sadya Availability
          </h2>
          <p className="text-emerald-100 mt-2 font-medium">Traditional Kerala feast for Onam 2025</p>
        </div>

        <div className="p-8 space-y-8">
          {/* Main Information */}
          <div className="bg-stone-50 dark:bg-charcoal-700 rounded-2xl p-8 border-2 border-emerald-300 dark:border-emerald-500 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Calendar size={40} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-emerald-800 dark:text-emerald-300 mb-4">
              Sadya Coupon Information
            </h3>
            <p className="text-xl text-emerald-700 dark:text-emerald-300 font-bold mb-4">
              Watch this space for how to get your Sadya coupons
            </p>
            <div className="mt-6 bg-white dark:bg-charcoal-600 rounded-xl p-4 border border-emerald-300 dark:border-emerald-500">
              <h4 className="font-bold text-emerald-800 dark:text-emerald-200 mb-2">Pricing</h4>
              <div className="text-emerald-700 dark:text-emerald-300 font-medium space-y-1">
                <p><strong>Adults:</strong> INR 400 per person</p>
                <p><strong>Children (under 10):</strong> INR 300 per person</p>
              </div>
            </div>
            <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4 border border-yellow-300 dark:border-yellow-500">
              <p className="text-yellow-800 dark:text-yellow-300 font-medium text-sm">
                <strong>Limited seats available - First come, first served!</strong>
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stone-50 dark:bg-charcoal-700 rounded-2xl p-6 border-2 border-sapphire-300 dark:border-sapphire-500">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin size={24} className="text-sapphire-600 dark:text-sapphire-400" />
                <h3 className="text-xl font-bold text-sapphire-800 dark:text-sapphire-200">Location</h3>
              </div>
              <div className="text-sapphire-700 dark:text-sapphire-300 font-medium space-y-2">
                <p><strong>Clubhouse:</strong> Ajmera Infinity</p>
                <p><strong>Address:</strong> Neeladri Road, Karuna Nagar</p>
                <p><strong>Area:</strong> Electronic City Phase 1</p>
                <p><strong>City:</strong> Bangalore - 560100</p>
              </div>
            </div>

            <div className="bg-stone-50 dark:bg-charcoal-700 rounded-2xl p-6 border-2 border-terracotta-300 dark:border-terracotta-500">
              <div className="flex items-center space-x-3 mb-4">
                <Clock size={24} className="text-terracotta-600 dark:text-terracotta-400" />
                <h3 className="text-xl font-bold text-terracotta-800 dark:text-terracotta-200">Event Details</h3>
              </div>
              <div className="text-terracotta-700 dark:text-terracotta-300 font-medium space-y-2">
                <p><strong>Sadya Date:</strong> September 14, 2025 (Sunday only)</p>
                <p><strong>Service Time:</strong> 11:30 AM onwards</p>
                <p><strong>Venue:</strong> Ajmera Infinity Clubhouse</p>
              </div>
            </div>
          </div>

          {/* Sadya Details */}
          <div className="bg-stone-50 dark:bg-charcoal-700 rounded-2xl p-6 border-2 border-emerald-300 dark:border-emerald-500">
            <h3 className="font-bold text-emerald-800 dark:text-emerald-300 mb-4 text-lg flex items-center">
              <SadyaIcon size={24} className="mr-2 text-emerald-600 dark:text-emerald-400" />
              Traditional Sadya Includes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-emerald-700 dark:text-emerald-300 font-medium">
              <div>
                <p>Traditional rice varieties</p>
                <p>Sambar & Rasam</p>
                <p>Aviyal & Thoran</p>
                <p>Olan & Kaalan</p>
                <p>Pachadi & Kichadi</p>
              </div>
              <div>
                <p>Payasam (2 varieties)</p>
                <p>Banana chips & Papadam</p>
                <p>Pickle & Banana</p>
                <p>Traditional sides</p>
                <p>Served on banana leaf</p>
              </div>
            </div>
          </div>

          {/* Important Information */}
          {/* <div className="bg-stone-50 dark:bg-charcoal-700 rounded-2xl p-6 border-2 border-gold-accent-300 dark:border-gold-accent-500">
            <div className="flex items-center space-x-3 mb-4">
              <Info size={24} className="text-gold-accent-600 dark:text-gold-accent-400" />
              <h3 className="font-bold text-gold-accent-800 dark:text-gold-accent-300 text-lg">Important Information</h3>
            </div>
            <ul className="text-gold-accent-700 dark:text-gold-accent-300 font-medium space-y-2">
              <li>Watch this space for Sadya coupon purchase information</li>
              <li>Limited seats available - first come, first served</li>
              <li>Sadya will be served on September 14, 2025 (Sunday only) from 11:30 AM onwards</li>
              <li>Venue: Ajmera Infinity Clubhouse</li>
              <li>For any queries, contact clubhouse reception between September 1 to 9th</li>
            </ul>
          </div> */}

          {/* Contact Information */}
          {/* <div className="bg-stone-50 dark:bg-charcoal-700 rounded-2xl p-6 border-2 border-plum-300 dark:border-plum-500 text-center">
            <h3 className="font-bold text-plum-800 dark:text-plum-300 mb-4 text-lg">Need More Information?</h3>
            <div className="text-plum-700 dark:text-plum-300 font-medium space-y-2">
              <p><strong>Email:</strong> infinitymalayalees@gmail.com</p>
              <p><strong>Phone:</strong> +91 9686 900488</p>
              <p><strong>Clubhouse:</strong> Ajmera Infinity Reception</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SadyaInformation;