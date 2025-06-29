// Email service for sending QR codes and confirmations via Supabase Edge Function

export interface EmailData {
  to: string;
  subject: string;
  html: string;
}

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Default email configuration for infinitymalayalees@gmail.com
const defaultEmailConfig: EmailConfig = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'infinitymalayalees@gmail.com',
    pass: '' // This will be set by admin in settings
  }
};

export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    const config = emailSettings.getConfig();
    
    if (!config.auth.user || !config.auth.pass) {
      console.error('Email not configured properly');
      return false;
    }

    // Get Supabase URL from environment
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    if (!supabaseUrl) {
      console.error('Supabase URL not configured');
      return false;
    }

    // Call the Edge Function to send email
    const response = await fetch(`${supabaseUrl}/functions/v1/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        ...emailData,
        emailConfig: {
          user: config.auth.user,
          pass: config.auth.pass
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Email service error:', errorData);
      return false;
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);
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
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0; 
          background-color: #f8f9fa;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background-color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header { 
          background: linear-gradient(135deg, #f59e0b, #dc2626); 
          color: white; 
          padding: 30px 20px; 
          text-align: center; 
          border-radius: 0;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: bold;
        }
        .header p {
          margin: 10px 0 0 0;
          font-size: 16px;
          opacity: 0.9;
        }
        .content { 
          padding: 30px 20px; 
        }
        .greeting {
          font-size: 18px;
          margin-bottom: 20px;
          color: #2d3748;
        }
        .highlight { 
          background: linear-gradient(135deg, #fef3c7, #fed7aa); 
          padding: 20px; 
          border-radius: 12px; 
          margin: 20px 0; 
          border-left: 4px solid #f59e0b;
        }
        .highlight h3 {
          margin: 0 0 10px 0;
          color: #92400e;
          font-size: 16px;
        }
        .qr-section { 
          background: #f8fafc; 
          padding: 20px; 
          margin: 15px 0; 
          border-radius: 12px; 
          border: 2px solid #e2e8f0; 
          text-align: center;
        }
        .qr-section h4 {
          color: #2d3748;
          margin: 0 0 15px 0;
          font-size: 18px;
        }
        .qr-code { 
          margin: 15px 0; 
        }
        .qr-code img {
          border: 3px solid #e2e8f0;
          border-radius: 8px;
          background: white;
          padding: 10px;
        }
        .coupon-id {
          font-family: 'Courier New', monospace; 
          font-size: 11px; 
          color: #6b7280; 
          margin-top: 10px;
          word-break: break-all;
        }
        .instructions {
          background: linear-gradient(135deg, #dbeafe, #bfdbfe);
          padding: 20px;
          border-radius: 12px;
          margin: 20px 0;
          border-left: 4px solid #3b82f6;
        }
        .instructions h3 {
          margin: 0 0 15px 0;
          color: #1e40af;
          font-size: 16px;
        }
        .instructions ul {
          margin: 0;
          padding-left: 20px;
        }
        .instructions li {
          margin: 8px 0;
          color: #1e3a8a;
        }
        .footer { 
          text-align: center; 
          margin-top: 30px; 
          padding: 20px;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
        }
        .footer h3 {
          color: #f59e0b;
          margin: 0 0 10px 0;
          font-size: 20px;
        }
        .footer p {
          color: #6b7280; 
          font-size: 14px;
          margin: 5px 0;
        }
        .event-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin: 15px 0;
        }
        .event-details div {
          background: white;
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
        }
        .event-details strong {
          color: #92400e;
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        @media (max-width: 600px) {
          .container { margin: 0; }
          .header { padding: 20px 15px; }
          .content { padding: 20px 15px; }
          .event-details { grid-template-columns: 1fr; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Onam 2025 Sadya Confirmation 🎉</h1>
          <p>Infinity Malayalees - Ajmera Infinity</p>
        </div>
        
        <div class="content">
          <div class="greeting">
            <strong>Dear ${name},</strong>
          </div>
          
          <p>Thank you for registering for our Onam 2025 Sadya celebration! Your booking has been confirmed and verified by our admin team.</p>
          
          <div class="highlight">
            <h3>📋 Booking Confirmation Details</h3>
            <div class="event-details">
              <div>
                <strong>Sadya Tickets</strong>
                ${sadyaCount} person${sadyaCount > 1 ? 's' : ''}
              </div>
              <div>
                <strong>Total Amount</strong>
                ₹${sadyaCount * 350}
              </div>
              <div>
                <strong>Registration ID</strong>
                ${registrationId}
              </div>
              <div>
                <strong>Event Dates</strong>
                September 13-14, 2025
              </div>
            </div>
          </div>
          
          <h3 style="color: #2d3748; margin: 30px 0 20px 0;">🎫 Your Sadya Entry Coupons</h3>
          <p>Please save these QR codes and present them at the venue for entry:</p>
          
          ${qrCodes.map((qr, index) => `
            <div class="qr-section">
              <h4>🍛 Sadya Coupon ${index + 1}</h4>
              <div class="qr-code">
                <img src="${qr.qrDataUrl}" alt="QR Code ${index + 1}" width="180" height="180">
              </div>
              <div class="coupon-id">
                Coupon ID: ${qr.couponId}
              </div>
            </div>
          `).join('')}
          
          <div class="instructions">
            <h3>📱 Important Instructions</h3>
            <ul>
              <li><strong>Save QR codes:</strong> Download and save these QR codes on your phone or print them</li>
              <li><strong>Entry requirement:</strong> Each QR code is valid for one person's Sadya entry</li>
              <li><strong>Venue check-in:</strong> Present QR codes at the registration desk on event day</li>
              <li><strong>Sadya timing:</strong> Traditional feast will be served from 11:30 AM onwards on September 14, 2025</li>
              <li><strong>Venue:</strong> Ajmera Infinity Community Hall, Electronic City Phase 1</li>
              <li><strong>Contact:</strong> Keep your registration ID (${registrationId}) for any queries</li>
            </ul>
          </div>
          
          <p style="margin-top: 30px; color: #2d3748;">We look forward to celebrating Onam with you and your family! Get ready for an authentic Kerala Sadya experience with traditional dishes served on banana leaves.</p>
          
          <p style="margin-top: 20px; color: #2d3748;">
            <strong>Best regards,</strong><br>
            <strong>Infinity Malayalees Organizing Committee</strong><br>
            <em>Ajmera Infinity, Bangalore</em>
          </p>
        </div>
        
        <div class="footer">
          <h3>🌺 Onam Ashamsakal! 🌺</h3>
          <p><strong>For any queries:</strong> infinitymalayalees@gmail.com | +91 98765 43210</p>
          <p style="margin-top: 15px; font-size: 12px; color: #9ca3af;">
            This is an automated confirmation email. Please do not reply to this email.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

export const generateDonationThankYouTemplate = (
  donorName: string,
  donationType: string,
  amount: number,
  transactionId?: string,
  message?: string
): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank You for Your Donation - Onam 2025</title>
      <style>
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0; 
          background-color: #f8f9fa;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background-color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header { 
          background: linear-gradient(135deg, #dc2626, #f59e0b); 
          color: white; 
          padding: 30px 20px; 
          text-align: center; 
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: bold;
        }
        .content { 
          padding: 30px 20px; 
        }
        .highlight { 
          background: linear-gradient(135deg, #fef3c7, #fed7aa); 
          padding: 20px; 
          border-radius: 12px; 
          margin: 20px 0; 
          border-left: 4px solid #f59e0b;
        }
        .donation-details {
          background: #f8fafc;
          padding: 20px;
          border-radius: 12px;
          margin: 20px 0;
          border: 2px solid #e2e8f0;
        }
        .footer { 
          text-align: center; 
          margin-top: 30px; 
          padding: 20px;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>💝 Thank You for Your Generous Donation! 💝</h1>
          <p>Infinity Malayalees - Onam 2025</p>
        </div>
        
        <div class="content">
          <div style="font-size: 18px; margin-bottom: 20px;">
            <strong>Dear ${donorName},</strong>
          </div>
          
          <p>We are deeply grateful for your generous contribution to our Onam 2025 celebrations! Your support helps us organize authentic cultural events and bring our Malayalee community together.</p>
          
          <div class="donation-details">
            <h3 style="color: #2d3748; margin: 0 0 15px 0;">📋 Donation Details</h3>
            <p><strong>Donor Name:</strong> ${donorName}</p>
            <p><strong>Donation Type:</strong> ${donationType}</p>
            <p><strong>Amount:</strong> ₹${amount.toLocaleString()}</p>
            ${transactionId ? `<p><strong>Transaction ID:</strong> ${transactionId}</p>` : ''}
            <p><strong>Date:</strong> ${new Date().toLocaleDateString('en-IN', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            ${message ? `<p><strong>Your Message:</strong> "${message}"</p>` : ''}
          </div>
          
          <div class="highlight">
            <h3 style="color: #92400e; margin: 0 0 10px 0;">🌟 How Your Donation Helps</h3>
            <ul style="margin: 0; color: #92400e;">
              <li>Subsidize Sadya costs for community members</li>
              <li>Arrange cultural program equipment and decorations</li>
              <li>Provide prizes and certificates for participants</li>
              <li>Support traditional Pookalam and decoration materials</li>
              <li>Ensure memorable celebration for all families</li>
            </ul>
          </div>
          
          <p>Your contribution is invaluable in preserving and celebrating our rich Malayalam heritage. Together, we create magic that brings our community closer and keeps our traditions alive for future generations.</p>
          
          <p style="margin-top: 30px;">
            <strong>With heartfelt gratitude,</strong><br>
            <strong>Infinity Malayalees Organizing Committee</strong><br>
            <em>Ajmera Infinity, Bangalore</em>
          </p>
        </div>
        
        <div class="footer">
          <h3 style="color: #f59e0b; margin: 0 0 10px 0;">🌺 Onam Ashamsakal! 🌺</h3>
          <p style="color: #6b7280; font-size: 14px;">
            <strong>Contact:</strong> infinitymalayalees@gmail.com | +91 98765 43210
          </p>
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
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0; 
          background-color: #f8f9fa;
        }
        .container { 
          max-width: 600px; 
          margin: 0 auto; 
          background-color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header { 
          background: linear-gradient(135deg, #3b82f6, #1d4ed8); 
          color: white; 
          padding: 30px 20px; 
          text-align: center; 
        }
        .content { 
          padding: 30px 20px; 
        }
        .highlight { 
          background: linear-gradient(135deg, #dbeafe, #bfdbfe); 
          padding: 20px; 
          border-radius: 12px; 
          margin: 20px 0; 
          border-left: 4px solid #3b82f6;
        }
        .footer { 
          text-align: center; 
          margin-top: 30px; 
          padding: 20px;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✅ Registration Confirmed</h1>
          <p>${eventType} - Onam 2025</p>
        </div>
        
        <div class="content">
          <div style="font-size: 18px; margin-bottom: 20px;">
            <strong>Dear ${name},</strong>
          </div>
          
          <p>Your registration for ${eventType} has been successfully confirmed!</p>
          
          <div class="highlight">
            <h3 style="color: #1e40af; margin: 0 0 15px 0;">📋 Registration Details</h3>
            ${Object.entries(details).map(([key, value]) => `<p><strong>${key}:</strong> ${value}</p>`).join('')}
          </div>
          
          <p>Our team will contact you with further details about the event.</p>
          
          <p>Thank you for being part of our Onam 2025 celebrations!</p>
          
          <p style="margin-top: 30px;">
            <strong>Best regards,</strong><br>
            <strong>Infinity Malayalees Organizing Committee</strong>
          </p>
        </div>
        
        <div class="footer">
          <h3 style="color: #3b82f6;">🌺 Onam Ashamsakal! 🌺</h3>
          <p style="color: #6b7280; font-size: 14px;">
            For any queries, contact us at infinitymalayalees@gmail.com
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Email settings management with session storage fallback
export const emailSettings = {
  getConfig(): EmailConfig {
    // Try localStorage first, then sessionStorage, then default
    let savedConfig = localStorage.getItem('email_config');
    if (!savedConfig) {
      savedConfig = sessionStorage.getItem('email_config');
    }
    
    if (savedConfig) {
      try {
        return JSON.parse(savedConfig);
      } catch (e) {
        console.error('Error parsing email config:', e);
      }
    }
    
    return defaultEmailConfig;
  },

  saveConfig(config: EmailConfig): void {
    const configString = JSON.stringify(config);
    // Save to both localStorage and sessionStorage for persistence across devices
    try {
      localStorage.setItem('email_config', configString);
    } catch (e) {
      console.warn('Could not save to localStorage, using sessionStorage:', e);
    }
    sessionStorage.setItem('email_config', configString);
  },

  isConfigured(): boolean {
    const config = this.getConfig();
    return !!(config.auth.user && config.auth.pass);
  },

  clearConfig(): void {
    localStorage.removeItem('email_config');
    sessionStorage.removeItem('email_config');
  }
};