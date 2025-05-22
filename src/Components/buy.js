import React, { useState } from 'react';
import './buy.css';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 120,
    rating: 4.5,
    totalBuys: 320,
    img: 'https://i.pinimg.com/736x/ea/87/fd/ea87fdf0f02c3805299858596b64026d.jpg',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 230,
    rating: 4.7,
    totalBuys: 220,
    img: 'https://i.pinimg.com/736x/c3/b4/1a/c3b41a448fa8443360a3da495b06bddd.jpg',
  },
  {
    id: 3,
    name: 'Gaming Laptop',
    price: 1350,
    rating: 4.8,
    totalBuys: 150,
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: 90,
    rating: 4.3,
    totalBuys: 400,
    img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'LED Monitor',
    price: 300,
    rating: 4.6,
    totalBuys: 175,
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Mechanical Keyboard',
    price: 85,
    rating: 4.5,
    totalBuys: 140,
    img: 'https://ix-marketing.imgix.net/autocompress.png?auto=format,compress&w=1946',
  },
  {
    id: 7,
    name: 'Noise Cancelling Earbuds',
    price: 150,
    rating: 4.6,
    totalBuys: 200,
    img: 'https://ix-marketing.imgix.net/autotagging.png?auto=format,compress&w=1946',
  },
  {
    id: 8,
    name: 'Tablet',
    price: 450,
    rating: 4.4,
    totalBuys: 190,
    img: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 9,
    name: 'External SSD',
    price: 99,
    rating: 4.8,
    totalBuys: 300,
    img: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 10,
    name: 'Fitness Band',
    price: 60,
    rating: 4.2,
    totalBuys: 250,
    img: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 11,
    name: 'VR Headset',
    price: 399,
    rating: 4.7,
    totalBuys: 180,
    img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 12,
    name: 'Portable Charger',
    price: 45,
    rating: 4.3,
    totalBuys: 360,
    img: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=400&q=80',
  },
];

export default function Buy({ user, onBack }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleProductClick = (product) => {
    if (!user) {
      alert('Please log in.');
      return;
    }
    setSelectedProduct(product);
    setQuantity(1);
  };

  const handleBuy = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedProduct(null);
  };

  return (
  <div className="buy-page">
    <button onClick={onBack}>← Back</button>
    <h1>Buy Products</h1>

    {/* Move selected product details to top */}
    {selectedProduct && (
      <div className="buy-options top">
        <h2>{selectedProduct.name}</h2>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button className="buy-button" onClick={handleBuy}>
          Buy (${selectedProduct.price * quantity})
        </button>
      </div>
    )}

    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>

    {popupVisible && (
      <div className="popup-overlay">
        <div className="popup-content">
          <h2>Success!</h2>
          <p>
            You bought {quantity} × {selectedProduct.name} for ${selectedProduct.price * quantity}
          </p>
          <button onClick={closePopup}>Close</button>
        </div>
      </div>
    )}
  </div>
);

}
