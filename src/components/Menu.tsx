import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('beverages');

  const menuCategories = {
    beverages: {
      title: 'Premium Beverages',
      items: [
        { name: 'Grand Signature Espresso', price: '₹180', description: 'Rich, bold espresso with notes of dark chocolate' },
        { name: 'Artisan Cappuccino', price: '₹220', description: 'Perfectly balanced with velvety microfoam art' },
        { name: 'Golden Turmeric Latte', price: '₹250', description: 'Wellness blend with organic turmeric and spices' },
        { name: 'Iced Vanilla Macchiato', price: '₹240', description: 'Refreshing cold brew with vanilla and caramel' },
        { name: 'Himalayan Green Tea', price: '₹160', description: 'Premium loose leaf tea from high altitudes' },
        { name: 'Fresh Juice Blends', price: '₹190', description: 'Seasonal fruits, freshly pressed daily' },
      ]
    },
    appetizers: {
      title: 'Gourmet Appetizers',
      items: [
        { name: 'Truffle Mushroom Bruschetta', price: '₹320', description: 'Wild mushrooms with truffle oil on artisan bread' },
        { name: 'Smoked Salmon Platter', price: '₹480', description: 'Premium salmon with cream cheese and capers' },
        { name: 'Mediterranean Mezze', price: '₹420', description: 'Hummus, olives, feta, and fresh vegetables' },
        { name: 'Crispy Calamari Rings', price: '₹360', description: 'Golden rings with spicy marinara sauce' },
        { name: 'Cheese & Charcuterie Board', price: '₹520', description: 'Curated selection of artisan cheeses and meats' },
        { name: 'Loaded Nachos Supreme', price: '₹340', description: 'House-made chips with multiple cheese blend' },
      ]
    },
    mains: {
      title: 'Signature Mains',
      items: [
        { name: 'Grilled Chicken Supreme', price: '₹580', description: 'Herb-marinated chicken with seasonal vegetables' },
        { name: 'Pan-Seared Salmon', price: '₹680', description: 'Atlantic salmon with lemon butter sauce' },
        { name: 'Vegetarian Buddha Bowl', price: '₹450', description: 'Quinoa, roasted vegetables, and tahini dressing' },
        { name: 'Gourmet Burger Stack', price: '₹520', description: 'Prime beef patty with premium toppings' },
        { name: 'Pasta Primavera', price: '₹480', description: 'Fresh pasta with seasonal vegetables and herbs' },
        { name: 'Tandoori Paneer Wrap', price: '₹420', description: 'Marinated paneer with fresh mint chutney' },
      ]
    },
    desserts: {
      title: 'Decadent Desserts',
      items: [
        { name: 'Chocolate Lava Cake', price: '₹280', description: 'Warm cake with molten chocolate center' },
        { name: 'Tiramisu Classico', price: '₹320', description: 'Traditional Italian dessert with coffee liqueur' },
        { name: 'Berry Cheesecake', price: '₹300', description: 'New York style with fresh berry compote' },
        { name: 'Crème Brûlée', price: '₹340', description: 'Vanilla custard with caramelized sugar top' },
        { name: 'Affogato al Caffè', price: '₹260', description: 'Vanilla gelato "drowned" in hot espresso' },
        { name: 'Seasonal Fruit Tart', price: '₹290', description: 'Pastry cream tart with fresh seasonal fruits' },
      ]
    }
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Exquisite Menu
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium beverages, gourmet dishes, and artisanal treats
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(menuCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid md:grid-cols-2 gap-6">
            {menuCategories[activeCategory as keyof typeof menuCategories].items.map((item, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-amber-600">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;