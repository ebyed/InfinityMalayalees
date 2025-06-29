import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Onam2025 from './pages/Onam2025';
import MalayaleeRegistration from './pages/MalayaleeRegistration';
import SadyaRegistration from './pages/SadyaRegistration';
import CulturalEvents from './pages/CulturalEvents';
import ThiruvathiraRegistration from './pages/ThiruvathiraRegistration';
import Donations from './pages/Donations';
import AdminPortal from './pages/AdminPortal';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-golden-gradient dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/onam-2025" element={<Onam2025 />} />
            <Route path="/malayalee-registration" element={<MalayaleeRegistration />} />
            <Route path="/sadya-registration" element={<SadyaRegistration />} />
            <Route path="/cultural-events" element={<CulturalEvents />} />
            <Route path="/thiruvathira-registration" element={<ThiruvathiraRegistration />} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/admin" element={<AdminPortal />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;