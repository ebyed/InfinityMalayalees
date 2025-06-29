// Email service for sending QR codes and confirmations
export interface EmailData {
  to: string;
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    content: string;
    encoding: string;
  }>;
}

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    // In a real implementation, you would integrate with an email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Nodemailer with SMTP
    
    console.log('Sending email:', emailData);
    
    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const generateSadyaEmailTemplate = (
  name: string,
  sadyaCount: number,
  registrationId: string,
  qrCodes: Array<{ couponId: string; qrDataUrl: string }>
): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Onam 2025 Sadya Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f59e0b, #dc2626); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 20px; border-radius: 0 0 10px 10px; }
        .qr-section { background: white; padding: 15px; margin: 10px 0; border-radius: 8px; border: 2px solid #e5e7eb; }
        .qr-code { text-align: center; margin: 10px 0; }
        .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
        .highlight { background: #fef3c7; padding: 10px; border-radius: 5px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Onam 2025 Sadya Confirmation 🎉</h1>
          <p>Infinity Malayalees - Ajmera Infinity</p>
        </div>
        
        <div class="content">
          <h2>Dear ${name},</h2>
          
          <p>Thank you for registering for our Onam 2025 Sadya celebration! Your booking has been confirmed.</p>
          
          <div class="highlight">
            <strong>📋 Booking Details:</strong><br>
            • Number of Sadya: ${sadyaCount}<br>
            • Registration ID: ${registrationId}<br>
            • Event Date: September 13-14, 2025<br>
            • Venue: Ajmera Infinity Community Hall
          </div>
          
          <h3>🎫 Your Sadya Entry Coupons:</h3>
          <p>Please save these QR codes and present them at the venue for entry:</p>
          
          ${qrCodes.map((qr, index) => `
            <div class="qr-section">
              <h4>Sadya Coupon ${index + 1}</h4>
              <div class="qr-code">
                <img src="${qr.qrDataUrl}" alt="QR Code ${index + 1}" style="width: 200px; height: 200px;">
              </div>
              <p style="font-family: monospace; font-size: 12px; text-align: center; color: #6b7280;">
                ${qr.couponId}
              </p>
            </div>
          `).join('')}
          
          <div class="highlight">
            <strong>📱 Important Instructions:</strong><br>
            • Save these QR codes on your phone or print them<br>
            • Each QR code is valid for one person<br>
            • Present QR codes at the registration desk<br>
            • Sadya will be served from 11:30 AM onwards on September 14, 2025
          </div>
          
          <p>We look forward to celebrating Onam with you and your family!</p>
          
          <p>Best regards,<br>
          <strong>Infinity Malayalees Organizing Committee</strong></p>
        </div>
        
        <div class="footer">
          <p>🌺 Onam Ashamsakal! 🌺</p>
          <p>For any queries, contact us at admin@infinitymalayalees.com</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const generateConfirmationEmailTemplate = (
  name: string,
  eventType: string,
  details: Record<string, any>
): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Registration Confirmation - ${eventType}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 20px; border-radius: 0 0 10px 10px; }
        .highlight { background: #dbeafe; padding: 10px; border-radius: 5px; margin: 10px 0; }
        .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Registration Confirmed</h1>
          <p>${eventType} - Onam 2025</p>
        </div>
        
        <div class="content">
          <h2>Dear ${name},</h2>
          
          <p>Your registration for ${eventType} has been successfully confirmed!</p>
          
          <div class="highlight">
            <strong>📋 Registration Details:</strong><br>
            ${Object.entries(details).map(([key, value]) => `• ${key}: ${value}`).join('<br>')}
          </div>
          
          <p>Our team will contact you with further details about the event.</p>
          
          <p>Thank you for being part of our Onam 2025 celebrations!</p>
          
          <p>Best regards,<br>
          <strong>Infinity Malayalees Organizing Committee</strong></p>
        </div>
        
        <div class="footer">
          <p>🌺 Onam Ashamsakal! 🌺</p>
          <p>For any queries, contact us at admin@infinitymalayalees.com</p>
        </div>
      </div>
    </body>
    </html>
  `;
};