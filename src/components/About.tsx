import React from 'react';
import { Coffee, Users, Award, Heart } from 'lucide-react';

const InstagramIcon = () => (
  <svg
    className="w-6 h-6 mr-2"
    fill="#E4405F"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.75-.88a1.13 1.13 0 11-2.26 0 1.13 1.13 0 012.26 0z" />
  </svg>
);

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Story
            </h2>

            {/* Instagram Link Button Below Heading */}
            <a
              href="https://www.instagram.com/thegrand_sk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:brightness-110 transition"
              style={{ boxShadow: "0 4px 15px rgba(229, 64, 95, 0.6)" }}
            >
              <InstagramIcon />
              Follow us on Instagram
            </a>

            <div className="w-24 h-1 bg-amber-600 mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                Where Passion Meets Excellence
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by visionary entrepreneur{" "}
                <span className="font-semibold text-amber-600">
                  Nitesh Chhabra
                </span>
                , The Grand SK Cafe and Lounge represents the perfect fusion of
                contemporary cafe culture and sophisticated lounge elegance.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Located in the heart of Satya Niketan, our establishment offers
                a sanctuary where coffee enthusiasts, food lovers, and social
                butterflies converge to create unforgettable experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From meticulously crafted artisanal beverages to gourmet
                culinary creations, every detail at The Grand SK is designed to
                exceed your expectations and create lasting memories.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                alt="Cafe Interior"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-lg shadow-xl">
                <p className="text-sm font-semibold">EST. 2024</p>
                <p className="text-lg font-bold">Premium Quality</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white p-6 rounded-full shadow-lg w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                <Coffee className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Premium Coffee
              </h4>
              <p className="text-gray-600">Ethically sourced beans, expertly roasted</p>
            </div>
            <div className="text-center group">
              <div className="bg-white p-6 rounded-full shadow-lg w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                <Users className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Community Hub
              </h4>
              <p className="text-gray-600">Where connections flourish and ideas bloom</p>
            </div>
            <div className="text-center group">
              <div className="bg-white p-6 rounded-full shadow-lg w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                <Award className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Award Winning
              </h4>
              <p className="text-gray-600">Recognized for excellence in hospitality</p>
            </div>
            <div className="text-center group">
              <div className="bg-white p-6 rounded-full shadow-lg w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-600 transition-colors duration-300">
                <Heart className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Made with Love
              </h4>
              <p className="text-gray-600">
                Every dish crafted with passion and care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
