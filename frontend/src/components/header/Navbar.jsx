import React from 'react';
import { ShoppingCart, Menu, Search } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top">
        {/* Logo */}
        <div className="navbar-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="Amazon Logo"
          />
          <span>.in</span>
        </div>

        {/* Search Bar */}
        <div className="navbar-search">
          <input type="text"  />
          <button>
            <Search size={18} />
          </button>
        </div>

        {/* Options */}
        <div className="navbar-options">
          <div>
            <p>Hello, Karishma</p>
            <p className="bold">Account & Lists</p>
          </div>
          <div>
            <p>Returns</p>
            <p className="bold">& Orders</p>
          </div>
          <div className="navbar-cart">
            <ShoppingCart size={20} />
            <span className="cart-count">0</span>
            <p>Cart</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="navbar-bottom">
        <div className="menu">
          <Menu size={16} />
          <p>All</p>
        </div>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>
    </header>
  );
};

export default Navbar;
