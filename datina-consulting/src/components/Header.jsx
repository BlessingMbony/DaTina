import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ language, toggleLanguage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="fixed w-full bg-[#0f172a] text-white z-50 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold">
              <span className="text-primary">Da</span><span className="text-white">T</span><span className="text-primary">i</span><span className="text-white">na</span>
              <span className="text-secondary text-3xl">•</span>
            </Link>
            <span className="ml-2 text-lg text-gray-300">Consulting</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 relative">
            <Link to="/services" className="hover:text-primary transition-colors nav-link">Services</Link>
            
            {/* Company with Dropdown */}
            <div
              className="relative group nav-link dropdown-container"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span className="hover:text-primary cursor-pointer transition-colors nav-link">Company</span>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-md rounded-md p-3 w-48 z-50">
                  <Link to="/about" className="flex items-center p-2 hover:bg-gray-100 rounded-md transition ">
                    <i className="ri-information-line"></i>
                    About Us
                  </Link>
                  <Link to="/blog" className="flex items-center p-2 hover:bg-gray-100 rounded-md transition">
                    <i className="ri-article-line"></i>
                    Blog
                  </Link>
                  <Link to="/careers" className="flex items-center p-2 hover:bg-gray-100 rounded-md transition">
                    <i className="ri-briefcase-line"></i>
                    Career
                  </Link>
                </div>
              )}
            </div>
            <Link to="/contact" className="hover:text-primary transition-colors nav-link">Contact</Link>
          </div>

          {/* Language & CTA */}
          <div className="flex items-center space-x-4">
          <div className="language-switcher flex items-center">
          <button 
         onClick={toggleLanguage}
         className="text-sm px-3 py-1 rounded-md hover:bg-gray-700 transition-colors">
         {language === 'en' ? 'FR' : 'EN'}
         </button>
         </div>

  <Link
    to="/#contact"
    className="hidden md:block bg-primary text-[#0f172a] px-5 py-2 !rounded-button font-medium hover:bg-opacity-90 transition-all whitespace-nowrap">
    Get in Touch
  </Link>
  </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
