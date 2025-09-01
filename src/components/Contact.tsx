import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, Users, CheckCircle, X } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import { supabase } from '../lib/supabase';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet + React
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
}

const Contact = () => {
  const [reservation, setReservation] = useState<ReservationData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submittedReservation, setSubmittedReservation] = useState<ReservationData | null>(null);

  // Save reservation to Supabase database
  const saveReservation = async (reservationData: ReservationData) => {
    try {
      const { data, error } = await supabase
        .from('cafe_reservations')
        .insert([
          {
            name: reservationData.name,
            email: reservationData.email,
            phone: reservationData.phone,
            reservation_date: reservationData.date,
            reservation_time: reservationData.time,
            guests: parseInt(reservationData.guests),
            status: 'pending'
          }
        ])
        .select();

      if (error) {
        console.error('Error saving reservation:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Failed to save reservation:', error);
      throw error;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString: string) => {
    const [hour] = timeString.split(':');
    const hourNum = parseInt(hour);
    const ampm = hourNum >= 12 ? 'PM' : 'AM';
    const displayHour = hourNum > 12 ? hourNum - 12 : hourNum === 0 ? 12 : hourNum;
    return `${displayHour}:00 ${ampm}`;
  };

  const sendEmails = async (reservationData: ReservationData) => {
    // Initialize EmailJS with your public key
    emailjs.init("Sz7xPDCXEe7Id9he3"); // Replace with your actual EmailJS public key

    const templateParams = {
      customer_name: reservationData.name,
      customer_email: reservationData.email,
      customer_phone: reservationData.phone,
      reservation_date: formatDate(reservationData.date),
      reservation_time: formatTime(reservationData.time),
      number_of_guests: reservationData.guests,
      cafe_name: "The Grand SK Cafe and Lounge",
      cafe_address: "Building No-9 Satya Niketan, Moti Bagh, 110021 (South Campus)",
      cafe_phone: "+91 8700560190",
      owner_email: "niteshchhabra2001@gmail.com"
    };

    try {
      // Send confirmation email to customer
      await emailjs.send(
        "service_aa5kxxe", // Replace with your actual service ID
        "template_91b09db", // Replace with your customer template ID
        templateParams
      );

      // Send notification email to owner
      await emailjs.send(
        "service_aa5kxxe", // Replace with your actual service ID  
        "template_pilbgzh", // Replace with your owner template ID
        templateParams
      );

      return true;
    } catch (error) {
      console.error('Email sending failed:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Store reservation data for confirmation display
      setSubmittedReservation(reservation);
      
      // Save reservation to Supabase database
      await saveReservation(reservation);
      
      // Send confirmation emails
      const emailSuccess = await sendEmails(reservation);
      
      if (!emailSuccess) {
        alert('Reservation confirmed! However, there was an issue sending confirmation emails. We will contact you directly.');
      }
      
      // Show confirmation screen
      setShowConfirmation(true);
      
      // Reset form
      setReservation({ name: '', email: '', phone: '', date: '', time: '', guests: '2' });
      
    } catch (error) {
      alert('There was an error processing your reservation. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value
    });
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    setSubmittedReservation(null);
  };

  // Confirmation Modal
  if (showConfirmation && submittedReservation) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-2xl p-8 relative">
              <button
                onClick={closeConfirmation}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close confirmation"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Reservation Confirmed!</h2>
                <p className="text-lg text-gray-600">Thank you for choosing The Grand SK</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Reservation Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-medium text-gray-800">{submittedReservation.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium text-gray-800">{submittedReservation.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-medium text-gray-800">{submittedReservation.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium text-gray-800">{formatDate(submittedReservation.date)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium text-gray-800">{formatTime(submittedReservation.time)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Guests:</span>
                    <span className="font-medium text-gray-800">{submittedReservation.guests} {submittedReservation.guests === '1' ? 'Guest' : 'Guests'}</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-amber-800 mb-2">📍 Location Details</h4>
                <p className="text-amber-700 text-sm">
                  <strong>The Grand SK Cafe and Lounge</strong><br />
                  Building No-9 Satya Niketan<br />
                  Moti Bagh, 110021 (South Campus)<br />
                  Nearest Metro: Durgabai Deshmukh
                </p>
              </div>

              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  📧 A confirmation email has been sent to <strong>{submittedReservation.email}</strong>
                </p>
                <p className="text-gray-600">
                  📱 We'll contact you at <strong>{submittedReservation.phone}</strong> to confirm your reservation
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                  <a
                    href={`tel:+918700560190`}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Us</span>
                  </a>
                  <button
                    onClick={closeConfirmation}
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                    <p className="text-gray-600">+91 8587885015 (Nitesh Chhabra)</p>
                    <p className="text-gray-600">+91 8700560190 (Vishal Hasija)</p>
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
                        <p>Everyday: 11:00 AM - 12:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="mt-8 h-80 rounded-lg overflow-hidden shadow-lg">
                <MapContainer 
                  center={[28.5855, 77.1642]} // Satya Niketan, Delhi
                  zoom={15} 
                  style={{ height: '100%', width: '100%' }}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://www.maptiler.com/">MapTiler</a>'
                    url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=N6DyApA3NciVe9cOKwMP`}
                    tileSize={512}
                    zoomOffset={-1}
                  />
                  <Marker position={[28.5855, 77.1642]} icon={markerIcon}>
                    <Popup>
                      📍 The Grand SK <br /> Satya Niketan, Delhi
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>

            {/* Reservation Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Make a Reservation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={reservation.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={reservation.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={reservation.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={reservation.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                      Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={reservation.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select Time</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="22:00">10:00 PM</option>
                      <option value="23:00">11:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      Guests *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select
                        id="guests"
                        name="guests"
                        value={reservation.guests}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="7">7 Guests</option>
                        <option value="8">8 Guests</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Reserve Your Table'}
                </button>
              </form>
             

              <p className="text-sm text-gray-500 mt-4 text-center">
                For large groups (8+) or special events, please call us directly at +91 8700560190
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;