import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/2308526/pexels-photo-2308526.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      alt: 'Artisan Coffee',
      title: 'Artisan Coffee'
    },
    {
      url: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      alt: 'Elegant Interior',
      title: 'Elegant Interior'
    },
    {
      url: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      alt: 'Gourmet Dishes',
      title: 'Gourmet Dishes'
    },
    {
      url: 'https://images.pexels.com/photos/1833586/pexels-photo-1833586.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      alt: 'Fresh Pastries',
      title: 'Fresh Pastries'
    },
    {
      url: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      alt: 'Lounge Area',
      title: 'Lounge Area'
    },
    {
      url: 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      alt: 'Evening Ambiance',
      title: 'Evening Ambiance'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience The Ambiance
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Step into our world through these glimpses of The Grand SK's sophisticated atmosphere and culinary artistry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;