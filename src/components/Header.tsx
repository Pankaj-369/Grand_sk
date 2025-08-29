import React, { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo & Branding */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center shadow-lg shadow-amber-300/40">
              <span className="text-white font-extrabold text-xl tracking-wide">G</span>
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                The <span className="text-amber-600">Grand SK</span>
              </h1>
              <p className="text-sm text-gray-600 italic">
                Vibes hotter than your coffee ☕
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-gray-700 font-medium transition-all duration-300 hover:text-amber-600 group"
              >
                {item}
                <span className="absolute bottom-[-6px] left-0 w-0 h-[2px] bg-amber-600 group-hover:w-full transition-all duration-300 rounded"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info (desktop only) */}
          <div className="hidden lg:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4 text-amber-600" />
              <span>+91 8587885015</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>Satya Niketan</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-fadeInUp">
            <nav
              className="flex flex-col space-y-3"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {["Home", "About", "Menu", "Gallery", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 font-medium py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-1 text-sm text-gray-600 mb-2">
                <Phone className="w-4 h-4 text-amber-600" />
                <span>+91 8700560190</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Building No-9 Satya Niketan, South Campus</span>
              </div>
            </div>
          </div>
        )}:
      </div>
    </header>
  );
};

export default Header;
