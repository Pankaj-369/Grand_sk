import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

// SVG logo icon example for premium look and custom feel
const GrandSKLogo = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <circle cx="24" cy="24" r="22" stroke="#EAB308" strokeWidth="3" fill="url(#grad)" />
    <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontWeight="bold" fontSize="20" fontFamily="inherit" dy=".3em">G</text>
    <defs>
      <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#CA8A04" />
      </radialGradient>
    </defs>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 font-sans"
      style={{
        backdropFilter: 'blur(10px)',
        background:
          'linear-gradient(90deg, rgba(255,255,255,0.85) 60%, rgba(234,179,8,0.13))',
        boxShadow: '0 4px 22px rgba(186, 123, 0, 0.14)'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Enhanced Logo and Brand Name */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <GrandSKLogo />
              <span className="animate-pulse absolute bottom-0 right-0 block w-3 h-3 rounded-full bg-amber-500 shadow-lg"></span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-wide bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-700 bg-clip-text text-transparent drop-shadow-sm">
                The Grand <span className="text-amber-600">SK</span>
              </h1>
              <p className="text-sm md:text-base mt-1 bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent font-semibold italic drop-shadow">
                Vibes hotter than your coffee
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            {['home', 'about', 'menu', 'gallery', 'contact'].map((sec) => (
              <button
                key={sec}
                onClick={() => scrollToSection(sec)}
                className="
                  relative px-4 py-1 rounded-full font-medium text-lg
                  text-gray-700 hover:text-white
                  hover:bg-gradient-to-br from-amber-600 to-yellow-500 shadow-md
                  transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
                  group"
                aria-label={`Navigate to ${sec} section`}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-500"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+918587885015" className="flex items-center space-x-1 text-sm text-gray-800 font-semibold hover:text-amber-600 transition duration-300">
              <Phone className="w-5 h-5" />
              <span>+91 8587885015</span>
            </a>
            <div className="flex items-center space-x-1 text-sm text-gray-800 font-semibold">
              <MapPin className="w-5 h-5" />
              <span>Satya Niketan</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fadeInUp"
            style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(6px)' }}>
            <nav className="flex flex-col space-y-3" role="navigation" aria-label="Mobile navigation">
              {['home', 'about', 'menu', 'gallery', 'contact'].map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="
                    text-left text-lg text-gray-800 hover:text-amber-700 hover:bg-amber-50
                    transition-all font-semibold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                  aria-label={`Navigate to ${sec} section`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <a href="tel:+918700560190" className="flex items-center space-x-1 text-sm text-gray-700 hover:text-amber-600 font-semibold mb-2">
                <Phone className="w-5 h-5" />
                <span>+91 8700560190</span>
              </a>
              <div className="flex items-center space-x-1 text-sm text-gray-700 font-semibold">
                <MapPin className="w-5 h-5" />
                <span>Building No-9 Satya Niketan, South Campus</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
