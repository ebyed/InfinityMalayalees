import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Onam2025 from './pages/Onam2025';
import SadyaInformation from './pages/SadyaInformation';
import CulturalEvents from './pages/CulturalEvents';
import ThiruvathiraRegistration from './pages/ThiruvathiraRegistration';
import MegaThiruvathiraRegistration from './pages/MegaThiruvathiraRegistration';
import AdminPortal from './pages/AdminPortal';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50 dark:bg-charcoal-900 transition-colors duration-300">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/onam-2025" element={<Onam2025 />} />
            <Route path="/sadya-registration" element={<SadyaInformation />} />
            <Route path="/cultural-events" element={<CulturalEvents />} />
            <Route path="/thiruvathira-registration" element={<ThiruvathiraRegistration />} />
            <Route path="/mega-thiruvathira-registration" element={<MegaThiruvathiraRegistration />} />
            <Route path="/admin" element={<AdminPortal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;