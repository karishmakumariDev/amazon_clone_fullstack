import React from 'react';
import './cart.css';
//import { useFetchByProductId } from '../../hooks/useFetchProduct';
const Cart = () => {


  const product = {
    id: 'product1',
    url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
    detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
    title: {
      shortTitle: 'Home & Kitchen',
      longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
    },
    price: 999,
    quantity: 1
  };

  return (
    <div className="cart_container">
      <div className="left_image">
      <img src={product.url} alt="product" />
      </div>

     
      <div className="middle_details">
        <h2>Product Title Example: Noise ColorFit Icon 2</h2>
        <p>⭐⭐⭐⭐☆ (4.2 out of 5 stars)</p>
        <p><strong>Brand:</strong> Noise</p>
        <p><strong>Price:</strong> ₹1,499</p>
        <p><strong>Deal of the Day:</strong> ₹1,299 <span className="deal">Limited time deal!</span></p>
        <p><strong>Save Extra:</strong> No Cost EMI available</p>
        <p><strong>Warranty:</strong> 1 Year Manufacturer Warranty</p>
        <p><strong>About this item:</strong></p>
        <ul>
          <li>1.85” TFT Display with 550 nits brightness</li>
          <li>Noise Health Suite: Heart rate, SpO2, Stress monitoring</li>
          <li>Up to 7 days battery life</li>
          <li>Bluetooth calling</li>
        </ul>
      </div>

      <div className="right_purchase">
        <h3>₹1,299</h3>
        <p><strong>FREE delivery:</strong> Monday, 8 April</p>
        <p><strong>In stock</strong></p>
        <p>Sold by <strong>Cloudtail India</strong> and Fulfilled by Amazon.</p>

        <button className="add_to_cart_btn">Add to Cart</button>
        <button className="buy_now_btn">Buy Now</button>

        <p className="secure">🔒 Secure transaction</p>
      </div>
    </div>
  );
};

export default Cart;


