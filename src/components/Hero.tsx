import React from 'react';
import { ArrowRight, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The Grand <span className="text-amber-400">SK</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8 text-amber-100">
          Vibes hotter than your coffee ☕🔥
        </h2>
        <p className="text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto text-gray-200">
          Experience the perfect blend of sophisticated dining and relaxed lounge atmosphere. 
          Where every cup tells a story and every moment becomes a cherished memory.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={scrollToMenu}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>Explore Menu</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollToContact}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
          >
            Make Reservation
          </button>
        </div>

        {/* Quick Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-amber-400" />
            <span>Open 7 AM - 11 PM</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>Satya Niketan, Delhi</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;