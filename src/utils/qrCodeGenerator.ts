import QRCode from 'qrcode';

// Utility functions for generating unique QR codes and IDs for Sadya coupons

export const generateUniqueId = (): string => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `SADYA-${timestamp}-${randomStr}`.toUpperCase();
};

export const generateCouponId = (registrationId: number, couponIndex: number): string => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 6);
  return `ONAM2025-${registrationId}-${couponIndex + 1}-${timestamp}-${randomStr}`.toUpperCase();
};

export const generateQRCodeData = (couponId: string, registrationData: any): string => {
  const qrData = {
    id: couponId,
    event: 'Onam 2025 Sadya',
    name: registrationData.name,
    flat: registrationData.flat,
    registrationId: registrationData.registrationId,
    date: 'September 13-14, 2025',
    venue: 'Ajmera Infinity Community Hall',
    verified: true,
    timestamp: new Date().toISOString()
  };
  
  return JSON.stringify(qrData);
};

export const generateTransactionId = (): string => {
  const prefix = 'TXN';
  const timestamp = Date.now().toString();
  const random = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  return `${prefix}${timestamp.slice(-6)}${random}`;
};

// Generate actual QR code as data URL
export const generateQRCodeDataURL = async (data: string): Promise<string> => {
  try {
    const qrCodeDataURL = await QRCode.toDataURL(data, {
      width: 200,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      },
      errorCorrectionLevel: 'M'
    });
    return qrCodeDataURL;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return '';
  }
};

// Generate QR code as SVG string
export const generateQRCodeSVG = async (data: string): Promise<string> => {
  try {
    const qrCodeSVG = await QRCode.toString(data, {
      type: 'svg',
      width: 200,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      },
      errorCorrectionLevel: 'M'
    });
    return qrCodeSVG;
  } catch (error) {
    console.error('Error generating QR code SVG:', error);
    return '';
  }
};

// Generate QR codes for Sadya registration
export const generateSadyaQRCodes = async (registration: any) => {
  const coupons = [];
  
  for (let i = 0; i < registration.sadya_count; i++) {
    const couponId = generateCouponId(registration.id || Date.now(), i);
    const qrData = generateQRCodeData(couponId, {
      name: registration.full_name,
      flat: registration.flat_number,
      registrationId: registration.registration_id
    });
    
    try {
      const qrDataUrl = await generateQRCodeDataURL(qrData);
      coupons.push({ couponId, qrData, qrDataUrl });
    } catch (error) {
      console.error('Error generating QR code for coupon:', couponId, error);
      // Fallback: create a placeholder QR code
      coupons.push({ 
        couponId, 
        qrData, 
        qrDataUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==' 
      });
    }
  }
  
  return coupons;
};

// Function to create a simple QR code pattern (for display purposes)
export const createQRPattern = (data: string): string => {
  // This creates a simple pattern based on the data
  // In a real implementation, you'd use a proper QR code library
  const hash = data.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);
  
  return `QR-${hash.toString(16).toUpperCase()}`;
};

// Validate QR code data
export const validateQRCode = (qrData: string): boolean => {
  try {
    const parsed = JSON.parse(qrData);
    return parsed.event === 'Onam 2025 Sadya' && parsed.verified === true;
  } catch {
    return false;
  }
};