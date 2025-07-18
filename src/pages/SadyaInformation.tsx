import React from 'react';
import { Calendar, MapPin, Clock, Info } from 'lucide-react';
import { SadyaIcon } from '../components/KeralaSVGIcons';

const SadyaInformation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent mb-4">
          Onam Sadya - 2025
        </h1>
        <p className="text-xl text-yellow-800 max-w-2xl mx-auto font-medium">
          Experience authentic Kerala Sadya with 20+ traditional dishes served on banana leaves. Limited Seats Only!
        </p>
      </div>

      {/* <div className="bg-white rounded-3xl shadow-2xl border-2 border-yellow-300 overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 px-8 py-8">
          <h2 className="text-3xl font-bold text-white flex items-center"> */}
      <div className="bg-white rounded-2xl shadow-xl border border-yellow-300 overflow-hidden"> 
        {/* <div className="bg-gradient-to-r from-yellow-500 to-yellow-500 px-8 py-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <SadyaIcon size={32} className="mr-3 text-white" />
            Onam Sadya - 2025
          </h2>
          
        </div> */}

        <div className="p-8 space-y-8">
          {/* Main Information */}
          <div className="bg-yellow-50 rounded-2xl p-8 border-2 border-yellow-200 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Calendar size={40} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-yellow-800 mb-4">
              Sadya Coupon Information
            </h3>
            <p className="text-xl text-yellow-700 font-bold mb-4">
              Watch this space for how to get your Sadya coupons
            </p>
            <div className="mt-6 bg-white rounded-xl p-4 border border-yellow-300">
              <h4 className="font-bold text-yellow-800 mb-2">Pricing</h4>
              <div className="text-yellow-700 font-medium space-y-1">
                <p><strong>Adults:</strong> INR 400 per person</p>
                <p><strong>Children (under 10):</strong> INR 300 per person</p>
              </div>
            </div>
            <div className="mt-4 bg-yellow-100 rounded-xl p-4 border border-yellow-300">
              <p className="text-yellow-800 font-medium text-sm">
                <strong>Limited seats available - First come, first served!</strong>
              </p>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-300">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin size={24} className="text-yellow-700" />
                <h3 className="text-xl font-bold text-yellow-800">Location</h3>
              </div>
              <div className="text-yellow-700 font-medium space-y-2">
                <p><strong>Clubhouse:</strong> Ajmera Infinity</p>
                <p><strong>Address:</strong> Neeladri Road, Karuna Nagar</p>
                <p><strong>Area:</strong> Electronic City Phase 1</p>
                <p><strong>City:</strong> Bangalore - 560100</p>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-300">
              <div className="flex items-center space-x-3 mb-4">
                <Clock size={24} className="text-yellow-700" />
                <h3 className="text-xl font-bold text-yellow-800">Event Details</h3>
              </div>
              <div className="text-yellow-700 font-medium space-y-2">
                <p><strong>Sadya Date:</strong> September 14, 2025 (Sunday only)</p>
                <p><strong>Service Time:</strong> 11:30 AM onwards</p>
                <p><strong>Venue:</strong> Ajmera Infinity Clubhouse</p>
              </div>
            </div>
          </div>

          {/* Sadya Details */}
          <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-300">
            <h3 className="font-bold text-yellow-800 mb-4 text-lg flex items-center">
              <SadyaIcon size={24} className="mr-2 text-yellow-700" />
              Traditional Sadya Includes:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-yellow-700 font-medium">
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
        </div>
      </div>
    </div>
  );
};

export default SadyaInformation;