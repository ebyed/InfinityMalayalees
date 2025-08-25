# Infinity Malayalees - Onam 2025 Website

A comprehensive web application for the Infinity Malayalees community at Ajmera Infinity, Bangalore, featuring Onam 2025 celebrations, event registrations, and community management.

## 🌟 Features

- **Event Management**: Complete Onam 2025 celebration with multiple events
- **Registration System**: Sadya bookings, Cultural events, Thiruvathira dance
- **Admin Portal**: Comprehensive dashboard for managing registrations and data
- **QR Code Generation**: Automated coupon generation for Sadya bookings
- **Email Integration**: Automated confirmation emails with QR codes
- **Responsive Design**: Beautiful, mobile-first design with Kerala-inspired themes
- **Community Features**: About us, events calendar, and community information

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Authentication, Edge Functions)
- **Deployment**: Netlify
- **Email**: Custom email service with QR code generation
- **Icons**: Lucide React + Custom Kerala-themed SVG icons

## 🎯 Live Demo

Visit the live application: [https://infinitymalayalees.netlify.app](https://infinitymalayalees.netlify.app)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/infinity-malayalees.git
   cd infinity-malayalees
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Fill in your Supabase credentials in the `.env` file.

4. **Database Setup**
   - Create a new Supabase project
   - Run the migrations in the `supabase/migrations` folder
   - Update your `.env` file with Supabase URL and keys

5. **Start Development Server**
   ```bash
   npm run dev
   ```

## 📱 Key Pages & Features

### Public Pages
- **Homepage**: Welcome page with Onam 2025 highlights
- **About Us**: Community information and history
- **Events**: Complete event calendar and information
- **Onam 2025**: Main celebration page with tabs for different events

### Registration Pages
- **Sadya Information**: Traditional feast booking information
- **Cultural Events**: Performance and volunteer registration
- **Thiruvathira Registration**: Traditional dance registration

### Admin Features
- **Admin Portal**: Secure login with comprehensive dashboard
- **Data Management**: View, export, and manage all registrations
- **QR Code Generation**: Generate and email Sadya coupons
- **Statistics**: Real-time event and registration analytics

## 🎨 Design Features

- **Kerala-Inspired Theme**: Custom color palette with traditional elements
- **Responsive Design**: Mobile-first approach with beautiful breakpoints
- **Custom Icons**: Hand-crafted SVG icons for Kerala cultural elements
- **Smooth Animations**: Thoughtful micro-interactions and transitions
- **Accessibility**: WCAG compliant with proper contrast and navigation

## 🗄️ Database Schema

The application uses Supabase with the following main tables:
- `malayalee_registrations`: Community member registrations
- `sadya_registrations`: Traditional feast bookings with QR codes
- `thiruvathira_registrations`: Dance event participants
- `cultural_registrations`: Cultural event participants
- `donations`: Community donations tracking
- `admin_users`: Admin authentication and management

## 🔧 Configuration

### Environment Variables
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Admin Access
- Default admin credentials: `admin` / `admin`
- Change these in production via the admin portal

## 🚀 Deployment

The application is configured for easy deployment on Netlify:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variables in Netlify dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Infinity Malayalees Community** at Ajmera Infinity, Bangalore
- **Sponsors**: Agarwals Eye Hospital, The Oterra Electronics City, Maruti Ceramics
- **Kerala Cultural Heritage** for inspiration and traditional elements

## 📞 Contact

- **Email**: infinitymalayalees@gmail.com
- **Community**: Ajmera Infinity, Electronic City Phase 1, Bangalore

---

**Onam Ashamsakal!** 🌺 Join us in celebrating the spirit of Kerala at Ajmera Infinity!
