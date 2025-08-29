import React from 'react';
import { Coffee, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">The Grand SK</h3>
                  <p className="text-amber-400">Vibes hotter than your coffee ☕🔥</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Founded by Nitesh Chhabra and managed by Vishal Hasija, The Grand SK is where sophistication meets comfort. 
                We're committed to providing exceptional experiences through premium quality food, 
                beverages, and unparalleled hospitality.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-amber-600 transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                  <div>
                    <p className="text-gray-300">Building No-9 Satya Niketan</p>
                    <p className="text-sm text-gray-400">Moti Bagh, 110021 (South Campus)</p>
                    <p className="text-sm text-gray-400">Near Durgabai Deshmukh Metro</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <div>
                    <p className="text-gray-300">+91 +91 8587885015</p>
                    <p className="text-sm text-gray-400">Nitesh Chhabra</p>
                    <p className="text-gray-300">+91 8700560190</p>
                    <p className="text-sm text-gray-400">Vishal Hasija</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <p className="text-gray-300">niteshchhabra2001@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Opening Hours</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-amber-400" />
                  <div>
                    <p className="text-gray-300">Everyday:</p>
                    <p className="text-sm text-gray-400">11:00 AM - 12:00 PM</p>
                  </div>
                </div>
               
              </div>
              
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <p className="text-sm text-amber-400 font-semibold">Special Note:</p>
                <p className="text-sm text-gray-300">Extended hours on weekends for your convenience</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 The Grand SK Cafe and Lounge. All rights reserved. Founded by Nitesh Chhabra, Managed by Vishal Hasija.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Careers</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;