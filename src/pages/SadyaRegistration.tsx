import React, { useState } from 'react';
import { Utensils, Users, CreditCard, QrCode, CheckCircle, User, Mail, Phone, Plus, Minus } from 'lucide-react';
import { generateUniqueId, generateCouponId, generateQRCodeData } from '../utils/qrCodeGenerator';

const SadyaRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    flatNumber: '',
    sadyaCount: 1,
    totalAmount: 350,
    upiId: '',
    transactionId: '',
    registrationId: generateUniqueId()
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'sadyaCount') {
      const count = parseInt(value) || 1;
      setFormData(prev => ({
        ...prev,
        [name]: count,
        totalAmount: count * 350
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const incrementCount = () => {
    if (formData.sadyaCount < 10) {
      setFormData(prev => ({
        ...prev,
        sadyaCount: prev.sadyaCount + 1,
        totalAmount: (prev.sadyaCount + 1) * 350
      }));
    }
  };

  const decrementCount = () => {
    if (formData.sadyaCount > 1) {
      setFormData(prev => ({
        ...prev,
        sadyaCount: prev.sadyaCount - 1,
        totalAmount: (prev.sadyaCount - 1) * 350
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate unique coupon IDs for each Sadya
    const coupons = Array.from({ length: formData.sadyaCount }, (_, index) => {
      const couponId = generateCouponId(Date.now(), index);
      const qrData = generateQRCodeData(couponId, {
        name: formData.fullName,
        flat: formData.flatNumber
      });
      return { couponId, qrData };
    });
    
    console.log('Sadya registration:', { ...formData, coupons });
    setIsSubmitted(true);
  };

  const nextStep = () => setCurrentStep(curr => Math.min(curr + 1, 3));
  const prevStep = () => setCurrentStep(curr => Math.max(curr - 1, 1));

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 rounded-3xl p-8 text-center border-2 border-green-300 dark:border-green-500 shadow-2xl">
          <CheckCircle className="mx-auto text-green-600 dark:text-green-400 mb-6" size={80} />
          <h2 className="text-3xl font-bold text-green-800 dark:text-green-300 mb-4">🎉 Registration Successful!</h2>
          <p className="text-green-700 dark:text-green-300 mb-6 text-lg font-medium">
            Your Sadya registration has been submitted successfully. Our admin team will verify your payment 
            and send Sadya coupons to your email within 24 hours. 📧
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border-2 border-green-300 dark:border-green-500 mb-6">
            <p className="text-sm text-gray-700 dark:text-gray-300 font-bold">
              📋 Order Summary:<br />
              🍛 {formData.sadyaCount} Sadya tickets × ₹350 = ₹{formData.totalAmount}<br />
              📝 Registration ID: {formData.registrationId}
            </p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                flatNumber: '',
                sadyaCount: 1,
                totalAmount: 350,
                upiId: '',
                transactionId: '',
                registrationId: generateUniqueId()
              });
            }}
            className="bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 text-white px-8 py-3 rounded-full hover:from-green-600 hover:to-emerald-600 dark:hover:from-green-500 dark:hover:to-emerald-500 transition-all transform hover:scale-105 shadow-lg font-bold"
          >
            Register Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent mb-4">
          🍛 Onam Sadya Registration
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
          Book your authentic Kerala Sadya experience! Traditional feast with 20+ dishes 
          served on banana leaves. ₹350 per person. 🌿
        </p>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg ${
                step <= currentStep 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-20 h-2 mx-3 rounded-full ${
                  step < currentStep ? 'bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400' : 'bg-gray-200 dark:bg-gray-700'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border-2 border-green-200 dark:border-green-600 overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 px-8 py-8">
          <h2 className="text-3xl font-bold text-white flex items-center">
            <Utensils className="mr-3" size={32} />
            {currentStep === 1 && '👤 Personal Details'}
            {currentStep === 2 && '💳 Payment Details'}
            {currentStep === 3 && '✅ Confirm & Submit'}
          </h2>
          <p className="text-green-100 mt-2 font-medium">
            Step {currentStep} of 3 - {currentStep === 1 ? 'Enter your information' : currentStep === 2 ? 'Make payment' : 'Review and confirm'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    <User size={18} className="inline mr-2 text-green-600 dark:text-green-400" />
                    👤 Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-green-500/20 focus:border-green-500 dark:focus:border-green-400 transition-all shadow-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    <Mail size={18} className="inline mr-2 text-green-600 dark:text-green-400" />
                    📧 Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-green-500/20 focus:border-green-500 dark:focus:border-green-400 transition-all shadow-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    <Phone size={18} className="inline mr-2 text-green-600 dark:text-green-400" />
                    📱 Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-green-500/20 focus:border-green-500 dark:focus:border-green-400 transition-all shadow-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    🏠 Flat Number *
                  </label>
                  <input
                    type="text"
                    name="flatNumber"
                    required
                    value={formData.flatNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-green-500/20 focus:border-green-500 dark:focus:border-green-400 transition-all shadow-sm"
                    placeholder="e.g., A-1205"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    <Users size={18} className="inline mr-2 text-green-600 dark:text-green-400" />
                    🍛 Number of Sadya *
                  </label>
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={decrementCount}
                      disabled={formData.sadyaCount <= 1}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 dark:from-red-400 dark:to-pink-400 text-white font-bold text-xl hover:from-red-600 hover:to-pink-600 dark:hover:from-red-500 dark:hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                    >
                      <Minus size={20} />
                    </button>
                    <div className="flex-1">
                      <input
                        type="number"
                        name="sadyaCount"
                        required
                        min="1"
                        max="10"
                        value={formData.sadyaCount}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-green-500/20 focus:border-green-500 dark:focus:border-green-400 transition-all shadow-sm text-center font-bold text-lg"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={incrementCount}
                      disabled={formData.sadyaCount >= 10}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 text-white font-bold text-xl hover:from-green-600 hover:to-emerald-600 dark:hover:from-green-500 dark:hover:to-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                    Use buttons or type directly (Max: 10)
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    💰 Total Amount
                  </label>
                  <div className="w-full px-4 py-4 rounded-xl border-2 border-green-300 dark:border-green-500 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-300 font-bold text-lg text-center">
                    ₹{formData.totalAmount}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                    ₹350 × {formData.sadyaCount} person{formData.sadyaCount > 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 border-2 border-green-300 dark:border-green-500">
                <h3 className="font-bold text-green-800 dark:text-green-300 mb-4 text-lg">🍽️ Sadya Includes:</h3>
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

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-emerald-600 dark:hover:from-green-500 dark:hover:to-emerald-500 transition-all transform hover:scale-105 shadow-lg font-bold"
                >
                  Continue to Payment →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Payment */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">💳 Payment: ₹{formData.totalAmount}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">Scan the QR code below to make payment via UPI 📱</p>
              </div>

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 text-center">
                  <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 mb-4 border-2 border-gray-300 dark:border-gray-500">
                    <QrCode size={200} className="mx-auto text-gray-500 dark:text-gray-400 mb-4" />
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-bold">📱 UPI QR Code</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      Scan with any UPI app to pay ₹{formData.totalAmount}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl p-4 border-2 border-blue-300 dark:border-blue-500">
                    <p className="text-sm text-blue-800 dark:text-blue-300 font-bold">💳 UPI ID:</p>
                    <p className="text-blue-700 dark:text-blue-400 font-mono text-lg font-bold">infinitymalayalees@paytm</p>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                      💳 Your UPI ID (for verification)
                    </label>
                    <input
                      type="text"
                      name="upiId"
                      value={formData.upiId}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-green-500/20 focus:border-green-500 dark:focus:border-green-400 transition-all shadow-sm"
                      placeholder="yourname@paytm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                      🔢 Transaction ID (After payment)
                    </label>
                    <input
                      type="text"
                      name="transactionId"
                      value={formData.transactionId}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-green-500/20 focus:border-green-500 dark:focus:border-green-400 transition-all shadow-sm"
                      placeholder="Enter transaction ID after payment"
                    />
                  </div>

                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl p-6 border-2 border-yellow-300 dark:border-yellow-500">
                    <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-4 text-lg">📋 Payment Instructions:</h4>
                    <ol className="text-yellow-700 dark:text-yellow-300 font-medium space-y-2">
                      <li>1️⃣ Scan the QR code with your UPI app</li>
                      <li>2️⃣ Enter amount: ₹{formData.totalAmount}</li>
                      <li>3️⃣ Complete the payment</li>
                      <li>4️⃣ Enter your UPI ID and Transaction ID above</li>
                      <li>5️⃣ Click continue to submit registration</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 dark:bg-gray-600 text-white px-8 py-4 rounded-xl hover:bg-gray-600 dark:hover:bg-gray-700 transition-all shadow-lg font-bold"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-emerald-600 dark:hover:from-green-500 dark:hover:to-emerald-500 transition-all transform hover:scale-105 shadow-lg font-bold"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 border-2 border-gray-300 dark:border-gray-500">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">✅ Confirm Your Registration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm font-medium">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300"><strong>👤 Name:</strong> {formData.fullName}</p>
                    <p className="text-gray-700 dark:text-gray-300"><strong>📧 Email:</strong> {formData.email}</p>
                    <p className="text-gray-700 dark:text-gray-300"><strong>📱 Phone:</strong> {formData.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300"><strong>🏠 Flat:</strong> {formData.flatNumber}</p>
                    <p className="text-gray-700 dark:text-gray-300"><strong>🍛 Sadya Count:</strong> {formData.sadyaCount}</p>
                    <p className="text-gray-700 dark:text-gray-300"><strong>💰 Total Amount:</strong> ₹{formData.totalAmount}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-500">
                  <p className="text-gray-700 dark:text-gray-300 text-xs"><strong>📝 Registration ID:</strong> {formData.registrationId}</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 border-2 border-green-300 dark:border-green-500">
                <p className="text-green-800 dark:text-green-300 font-medium">
                  <strong>📋 Next Steps:</strong> After submission, our admin team will verify your payment 
                  and send {formData.sadyaCount} unique Sadya entry coupon{formData.sadyaCount > 1 ? 's' : ''} with QR codes to your email within 24 hours. 📧
                </p>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 dark:bg-gray-600 text-white px-8 py-4 rounded-xl hover:bg-gray-600 dark:hover:bg-gray-700 transition-all shadow-lg font-bold"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 dark:from-green-400 dark:to-emerald-400 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-emerald-600 dark:hover:from-green-500 dark:hover:to-emerald-500 transition-all transform hover:scale-105 shadow-lg font-bold"
                >
                  🎉 Complete Registration
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SadyaRegistration;