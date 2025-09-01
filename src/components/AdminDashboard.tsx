import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LogOut, 
  Users, 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  MapPin,
  Download,
  Search,
  Filter,
  Trash2,
  Eye,
  X
} from 'lucide-react';

interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  timestamp: string;
}

const AdminDashboard = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin is authenticated
    if (!localStorage.getItem('adminAuth')) {
      navigate('/admin');
      return;
    }

    // Load reservations from localStorage
    const savedReservations = localStorage.getItem('cafeReservations');
    if (savedReservations) {
      setReservations(JSON.parse(savedReservations));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
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

  const filteredReservations = reservations.filter(reservation =>
    reservation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.phone.includes(searchTerm)
  );

  const deleteReservation = (id: string) => {
    const updatedReservations = reservations.filter(r => r.id !== id);
    setReservations(updatedReservations);
    localStorage.setItem('cafeReservations', JSON.stringify(updatedReservations));
    setSelectedReservation(null);
  };

  const exportReservations = () => {
    const csvContent = [
      ['Name', 'Email', 'Phone', 'Date', 'Time', 'Guests', 'Submitted'],
      ...reservations.map(r => [
        r.name,
        r.email,
        r.phone,
        formatDate(r.date),
        formatTime(r.time),
        r.guests,
        new Date(r.timestamp).toLocaleString('en-IN')
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `grand-sk-reservations-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
                <p className="text-gray-600">Manage reservations for The Grand SK Cafe & Lounge</p>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <button
                  onClick={exportReservations}
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <Download className="w-4 h-4" />
                  <span>Export CSV</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Reservations</p>
                  <p className="text-2xl font-bold text-gray-800">{reservations.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Today's Bookings</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {reservations.filter(r => r.date === new Date().toISOString().split('T')[0]).length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Guests</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {reservations.reduce((sum, r) => sum + parseInt(r.guests), 0)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-600" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">This Week</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {reservations.filter(r => {
                      const reservationDate = new Date(r.date);
                      const today = new Date();
                      const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
                      return reservationDate >= today && reservationDate <= weekFromNow;
                    }).length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                />
              </div>
              <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-3 rounded-lg transition-colors duration-300">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* Reservations Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Recent Reservations</h3>
            </div>
            
            {filteredReservations.length === 0 ? (
              <div className="p-12 text-center">
                <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Reservations Found</h3>
                <p className="text-gray-500">
                  {searchTerm ? 'No reservations match your search criteria.' : 'No reservations have been made yet.'}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reservation</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guests</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredReservations.map((reservation) => (
                      <tr key={reservation.id} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{reservation.name}</div>
                            <div className="text-sm text-gray-500">{reservation.email}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-900">{reservation.phone}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{formatDate(reservation.date)}</div>
                            <div className="text-sm text-gray-500">{formatTime(reservation.time)}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            {reservation.guests} {reservation.guests === '1' ? 'Guest' : 'Guests'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(reservation.timestamp).toLocaleDateString('en-IN')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setSelectedReservation(reservation)}
                              className="text-blue-600 hover:text-blue-900 transition-colors duration-200"
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => deleteReservation(reservation.id)}
                              className="text-red-600 hover:text-red-900 transition-colors duration-200"
                              title="Delete Reservation"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reservation Details Modal */}
      {selectedReservation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">Reservation Details</h3>
                <button
                  onClick={() => setSelectedReservation(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Customer Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="font-medium text-gray-800">{selectedReservation.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-gray-800">{selectedReservation.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium text-gray-800">{selectedReservation.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">Reservation Details</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium text-gray-800">{formatDate(selectedReservation.date)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Time</p>
                        <p className="font-medium text-gray-800">{formatTime(selectedReservation.time)}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-500">Number of Guests</p>
                        <p className="font-medium text-gray-800">{selectedReservation.guests}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-amber-800 mb-1">Cafe Location</h5>
                    <p className="text-sm text-amber-700">
                      Building No-9 Satya Niketan<br />
                      Moti Bagh, 110021 (South Campus)<br />
                      Nearest Metro: Durgabai Deshmukh
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  Submitted: {new Date(selectedReservation.timestamp).toLocaleString('en-IN')}
                </p>
                <div className="flex space-x-3">
                  <a
                    href={`tel:${selectedReservation.phone}`}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Customer</span>
                  </a>
                  <button
                    onClick={() => deleteReservation(selectedReservation.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;