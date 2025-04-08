import { Divider } from '@mui/material';
import React from 'react';
import './Shoping.css';
import Subtotal from './Subtotal';

const Shoping_cart = () => {

  const cartItems = [
    {
      id: 1,
      name: 'Molife Sense 500 Smartwatch (Black strap, freesize)',
      category: 'Smart Watches',
      price: 499,
      image: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Apple iPhone 15',
      category: 'Smartphone',
      price: 79900,
      image: 'https://m.media-amazon.com/images/I/71d7rfSl0wL._SL1500_.jpg',
      quantity: 1,
    }
  ];

  const pairWithCart = [
    {
      id: 3,
      name: 'boAt BassHeads 100 in-Ear Wired Headphones',
      price: 399,
      image: 'https://m.media-amazon.com/images/I/719elVA3FvL._SL1500_.jpg',
    },
    {
      id: 4,
      name: 'Amazon Basics Backpack',
      price: 599,
      image: 'https://m.media-amazon.com/images/I/719elVA3FvL._SL1500_.jpg',
    }
  ];

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  

  return (
    <div className='buynow_section'>
      <div className='buynow_container'>
        {/* Left Side - Shopping Cart */}
        <div className='left_buy'>
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className='leftbuyprice'>price</span>
          <Subtotal totalAmount={calculateSubtotal()} itemCount={cartItems.length} />
          <Divider />
          
          {cartItems.map(item => (
            <div className='item_containert' key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className='item_details'>
                <h3>{item.name}</h3>
                <h3>{item.category}</h3>
                <h3>₹{item.price.toLocaleString()}</h3>
                <h4>#1 Best Seller in {item.category}</h4>
                <h5>In stock</h5>
                <h4>Eligible for FREE Shipping</h4>

                <div className='quantity_control'>
                  <button>-</button>
                  <span>{item.quantity}</span>
                  <button>+</button>
                </div>

                <div className='action_buttons'>
                  <button>Remove</button>
                  <button>Save for later</button>
                </div>
              </div>
            </div>
            
          ))}
        </div>
        <Divider />
        

        {/* Right Side - Subtotal + Pair with your cart */}
        <div className='right_section'>
          <div className='right_buy'>
            <h3>Subtotal (2 items): ₹80,399</h3>
            <button className='rightbuy_btn'>Proceed to Buy</button>
          </div>

          <div className='pair_with_cart'>
            <h3>Pair with your cart</h3>
            {pairWithCart.map(item => (
              <div className='pair_item' key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className='pair_details'>
                  <p>{item.name}</p>
                  <p className='pair_price'>₹{item.price.toLocaleString()}</p>
                  <button className='add_btn'>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shoping_cart;

