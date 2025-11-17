// src/App.js
import React, { useState } from 'react';
import './App.css';

// тестовые товары
const products = [
  {
    id: 1,
    title: 'Свитер Gjestal Exclusive',
    price: 4880,
    size: 'M',
    category: 'Свитера',
    images: [
      'https://via.placeholder.com/600x800?text=Sinitsa+1'
    ],
  },
  {
    id: 2,
    title: 'Винтажная куртка Sergio Tacchini',
    price: 6500,
    size: 'L',
    category: 'Куртки',
    images: [
      'https://via.placeholder.com/600x800?text=Sinitsa+2'
    ],
  },
];

// ─── ШАПКА ─────────────────────────────
function TopBar({ cartCount = 0 }) {
  return (
    <div className="topbar">
      <div className="topbar__logo">
        <span className="topbar__logo-text">СИНИЦА</span>
      </div>

      <button className="topbar__cart">
        🛒
        {cartCount > 0 && (
          <span className="topbar__cart-count">{cartCount}</span>
        )}
      </button>
    </div>
  );
}

// ─── БАННЕР С ФОТО ─────────────────────
function BannerImage() {
  return (
    <div className="banner-image">
      <img
        src="https://via.placeholder.com/800x250?text=SINITSA+BANNER"
        alt="Секонд Синица"
      />
    </div>
  );
}

// ─── ОСНОВНОЕ ПРИЛОЖЕНИЕ ───────────────
function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="app">
      <TopBar cartCount={cart.length} />

      <BannerImage />

      <div className="app__section-title">
        Все товары ({products.length})
      </div>

      <div className="products-grid">
        {products.map((prod) => (
          <div className="product-card" key={prod.id}>
            <img src={prod.images[0]} alt={prod.title} />

            <div className="product-card-title">{prod.title}</div>
            <div className="product-card-price">{prod.price} ₽</div>

            <div className="product-size-badge">{prod.size}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;