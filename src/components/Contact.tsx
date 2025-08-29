import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, Users } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet + React
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Contact = () => {
  const [reservation, setReservation] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Reservation request submitted! We will contact you shortly to confirm.');
    setReservation({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Visit Us Today
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the warmth of The Grand SK. Make a reservation or simply drop by for an unforgettable experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                    <p className="text-gray-600">
                      Building No-9 Satya Niketan<br />
                      Moti Bagh, 110021 (South Campus)<br />
                      Nearest Metro: Durgabai Deshmukh
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 8587885015</p>
                    <p className="text-gray-600">+91 8700560190</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Contact Person</h4>
                    <p className="text-gray-600">Nitesh Chhabra</p>
                    <p className="text-gray-600">Vishal Hasija</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">niteshchhabra2001@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                    <div className="text-gray-600">
                        <p>Everyday: 11:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="mt-8 h-64 rounded-lg overflow-hidden shadow-lg">
                <MapContainer 
                  center={[28.5855, 77.1642]} // Approx coords for Satya Niketan, Delhi
                  zoom={15} 
                  style={{ height: '100%', width: '100%' }}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[28.5855, 77.1642]} icon={markerIcon}>
                    <Popup>
                      📍 The Grand SK <br /> Satya Niketan, Delhi
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>

            {/* Reservation Form (unchanged) */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Make a Reservation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inputs remain same */}
                ...
              </form>

              <p className="text-sm text-gray-500 mt-4 text-center">
                For large groups (8+) or special events, please call us directly at +91 85878 85015
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
