import React, { useState, useEffect } from 'react';
import { X, Download, Mail, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { generateSadyaQRCodes } from '../utils/qrCodeGenerator';
import { sendEmail, generateSadyaEmailTemplate } from '../utils/emailService';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  registration: any;
  onEmailSent?: () => void;
}

const QRCodeModal: React.FC<QRCodeModalProps> = ({ 
  isOpen, 
  onClose, 
  registration, 
  onEmailSent 
}) => {
  const [qrCodes, setQrCodes] = useState<Array<{ couponId: string; qrData: string; qrDataUrl: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && registration) {
      generateQRCodes();
    }
  }, [isOpen, registration]);

  const generateQRCodes = async () => {
    try {
      setLoading(true);
      setError(null);
      const codes = await generateSadyaQRCodes(registration);
      setQrCodes(codes);
    } catch (err) {
      console.error('Error generating QR codes:', err);
      setError('Failed to generate QR codes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSendEmail = async () => {
    try {
      setSendingEmail(true);
      setError(null);

      const emailTemplate = generateSadyaEmailTemplate(
        registration.full_name,
        registration.sadya_count,
        registration.registration_id,
        qrCodes
      );

      const emailData = {
        to: registration.email,
        subject: `Onam 2025 Sadya Confirmation - ${registration.sadya_count} Coupons`,
        html: emailTemplate
      };

      const success = await sendEmail(emailData);
      
      if (success) {
        setEmailSent(true);
        onEmailSent?.();
        setTimeout(() => {
          setEmailSent(false);
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send email. Please try again.');
    } finally {
      setSendingEmail(false);
    }
  };

  const downloadQRCode = (qrDataUrl: string, couponId: string) => {
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = `${couponId}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAllQRCodes = () => {
    qrCodes.forEach((qr, index) => {
      setTimeout(() => {
        downloadQRCode(qr.qrDataUrl, qr.couponId);
      }, index * 500); // Stagger downloads
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-500 dark:to-emerald-500 px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <div>
            <h3 className="text-xl font-bold text-white">
              🎫 Sadya QR Codes
            </h3>
            <p className="text-green-100">
              {registration?.full_name} - {registration?.sadya_count} meals
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {loading ? (
            <div className="text-center py-8">
              <Loader2 className="animate-spin mx-auto mb-4 text-green-600 dark:text-green-400" size={48} />
              <p className="text-gray-600 dark:text-gray-400">Generating QR codes...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <AlertCircle className="mx-auto mb-4 text-red-600 dark:text-red-400" size={48} />
              <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
              <button
                onClick={generateQRCodes}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <>
              {/* Registration Details */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">📋 Registration Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Name:</strong> {registration.full_name}</p>
                    <p><strong>Email:</strong> {registration.email}</p>
                    <p><strong>Phone:</strong> {registration.phone}</p>
                  </div>
                  <div>
                    <p><strong>Flat:</strong> {registration.flat_number}</p>
                    <p><strong>Sadya Count:</strong> {registration.sadya_count}</p>
                    <p><strong>Total Amount:</strong> ₹{registration.total_amount}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  <strong>Registration ID:</strong> {registration.registration_id}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  onClick={handleSendEmail}
                  disabled={sendingEmail}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sendingEmail ? (
                    <Loader2 className="animate-spin" size={16} />
                  ) : (
                    <Mail size={16} />
                  )}
                  <span>{sendingEmail ? 'Sending...' : 'Send Email'}</span>
                </button>

                <button
                  onClick={downloadAllQRCodes}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                >
                  <Download size={16} />
                  <span>Download All</span>
                </button>

                {emailSent && (
                  <div className="flex items-center space-x-2 px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-lg">
                    <CheckCircle size={16} />
                    <span>Email sent successfully!</span>
                  </div>
                )}
              </div>

              {/* QR Codes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {qrCodes.map((qr, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-600">
                    <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-3">
                      Sadya Coupon {index + 1}
                    </h5>
                    
                    <div className="bg-white dark:bg-gray-600 rounded-lg p-4 mb-3">
                      <img 
                        src={qr.qrDataUrl} 
                        alt={`QR Code ${index + 1}`}
                        className="w-32 h-32 mx-auto"
                      />
                    </div>
                    
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-mono mb-3 break-all">
                      {qr.couponId}
                    </p>
                    
                    <button
                      onClick={() => downloadQRCode(qr.qrDataUrl, qr.couponId)}
                      className="flex items-center space-x-1 px-3 py-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded text-sm hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors mx-auto"
                    >
                      <Download size={12} />
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mt-6 border border-blue-200 dark:border-blue-600">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">📱 Instructions for Use:</h4>
                <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                  <li>• Each QR code is valid for one person's Sadya entry</li>
                  <li>• Save QR codes on your phone or print them</li>
                  <li>• Present QR codes at the registration desk on event day</li>
                  <li>• Sadya will be served from 11:30 AM onwards on September 14, 2025</li>
                  <li>• Keep the registration ID for reference: {registration.registration_id}</li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCodeModal;