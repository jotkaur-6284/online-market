import React from 'react';
import './Home.css';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$120',
    rating: 4.5,
    totalBuys: 320,
    img: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$230',
    rating: 4.7,
    totalBuys: 220,
    img: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Gaming Laptop',
    price: '$1350',
    rating: 4.8,
    totalBuys: 150,
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Bluetooth Speaker',
    price: '$90',
    rating: 4.3,
    totalBuys: 400,
    img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80',
  },
];

export default function Home({
  onBuyClick,
  onLoginClick,
  onSignupClick,
  onLogoutClick,
  onSellClick,   // <-- receive onSellClick prop here
  user,
}) {
  return (
    <div>
      <nav>
        <button onClick={onBuyClick}>Buy</button>
        <button onClick={onSellClick}>Sell</button> {/* use prop here */}
        <button>Product Catalog</button>

        {!user ? (
          <>
            <button onClick={onLoginClick}>Login</button>
            <button onClick={onSignupClick}>Signup</button>
          </>
        ) : (
          <>
            <span style={{ marginRight: '10px' }}>👤 {user.username}</span>
            <button onClick={onLogoutClick}>Logout</button>
          </>
        )}
      </nav>

      <section className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
          alt="Marketing Hero"
          style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
        />
      </section>

      <section className="products-grid">
        {products.map(({ id, name, price, rating, totalBuys, img }) => (
          <div key={id} className="product-card" tabIndex={0}>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <p className="rating">Rating: {rating} ⭐</p>
            <p className="total-buys">Total Buys: {totalBuys}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
