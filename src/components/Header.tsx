import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">The Grand SK</h1>
              <p className="text-sm text-amber-600 font-medium">Vibes hotter than your coffee ☕🔥</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Navigate to home section"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Navigate to about section"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('menu')} 
              className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Navigate to menu section"
            >
              Menu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Navigate to gallery section"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Navigate to contact section"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+91 8700560190</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>South Campus</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fadeInUp">
            <nav className="flex flex-col space-y-3" role="navigation" aria-label="Mobile navigation">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-left text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Navigate to home section"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Navigate to about section"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('menu')} 
                className="text-left text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Navigate to menu section"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="text-left text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Navigate to gallery section"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Navigate to contact section"
              >
                Contact
              </button>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-1 text-sm text-gray-600 mb-2">
                <Phone className="w-4 h-4" />
                <span>+91 8700560190</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
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