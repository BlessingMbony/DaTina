import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Company from './components/Company';
import About from './components/About';
import Blog from './components/Blog';
import Careers from './components/Careers';
import Mission from './components/Mission';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Tina from './components/Tina';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Load saved language preference
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <div className="bg-white text-gray-800">
      <Header language={language} toggleLanguage={toggleLanguage} />
      
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero language={language} />
              <Services language={language} />
              <Mission language={language} />
              <Company language={language} />
              <Contact language={language} />
              <Careers language={language} />
              <About language={language} />
              <Blog language={language} />
            </>
          } />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      
      <Footer language={language} />
      <Tina />
    </div>
  );
}

export default App;