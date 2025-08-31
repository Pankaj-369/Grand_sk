import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Coffee } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-amber-700 group-hover:to-amber-600 transition-all duration-300">
                The Grand SK
              </h1>
              <p className="text-xs text-amber-600 font-medium tracking-wide opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                CAFE & LOUNGE
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="nav-item text-gray-700 hover:text-amber-700 transition-all duration-300 font-medium relative px-4 py-2 rounded-lg hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Navigate to home section"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="nav-item text-gray-700 hover:text-amber-700 transition-all duration-300 font-medium relative px-4 py-2 rounded-lg hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Navigate to about section"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('menu')} 
              className="nav-item text-gray-700 hover:text-amber-700 transition-all duration-300 font-medium relative px-4 py-2 rounded-lg hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Navigate to menu section"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="nav-item text-gray-700 hover:text-amber-700 transition-all duration-300 font-medium relative px-4 py-2 rounded-lg hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Navigate to gallery section"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="nav-item text-gray-700 hover:text-amber-700 transition-all duration-300 font-medium relative px-4 py-2 rounded-lg hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label="Navigate to contact section"
            >
              Contact
            </button>
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Reserve Table
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-amber-600 transition-colors duration-300">
              <Phone className="w-4 h-4" />
              <span className="font-medium">+91 8587885015</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-amber-600 transition-colors duration-300">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">Satya Niketan</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded-lg"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 animate-fadeInUp bg-white/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-3" role="navigation" aria-label="Mobile navigation">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-all duration-300 font-medium py-4 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 border-l-4 border-transparent hover:border-amber-600"
                aria-label="Navigate to home section"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-all duration-300 font-medium py-4 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 border-l-4 border-transparent hover:border-amber-600"
                aria-label="Navigate to about section"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('menu')} 
                className="text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-all duration-300 font-medium py-4 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 border-l-4 border-transparent hover:border-amber-600"
                aria-label="Navigate to menu section"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('gallery')} 
                className="text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-all duration-300 font-medium py-4 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 border-l-4 border-transparent hover:border-amber-600"
                aria-label="Navigate to gallery section"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-all duration-300 font-medium py-4 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 border-l-4 border-transparent hover:border-amber-600"
                aria-label="Navigate to contact section"
              >
                Contact
              </button>
              
              {/* Mobile CTA */}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Reserve Your Table
                </button>
              </div>
            </nav>
            
            {/* Mobile Contact Info */}
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3 hover:text-amber-600 transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+91 8700560190 (Vishal Hasija)</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600 hover:text-amber-600 transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Building No-9 Satya Niketan, South Campus</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;