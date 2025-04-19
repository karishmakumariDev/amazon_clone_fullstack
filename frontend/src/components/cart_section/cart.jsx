// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './cart.css';
// import {useFetchByProductId}  from '../../hooks/useFetchProduct';
// const Cart = () => {
//   const { _id } = useParams();
  
//  const {data: product, isLoading, error} = useFetchByProductId(_id)
//    console.log( product);
//    if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Something went wrong 😔</div>;


//   return (
//     <div className="cart_container">
//       <div className="left_image">
//       {product?.url && <img src={product.url} alt="product" />}
//       </div>

     
//       <div className="middle_details">
//         <h2>Product Title Example: Noise ColorFit Icon 2</h2>
//         <p>⭐⭐⭐⭐☆ (4.2 out of 5 stars)</p>
//         <p><strong>Brand:</strong> Noise</p>
//         <p><strong>Price:</strong> ₹1,499</p>
//         <p><strong>Deal of the Day:</strong> ₹1,299 <span className="deal">Limited time deal!</span></p>
//         <p><strong>Save Extra:</strong> No Cost EMI available</p>
//         <p><strong>Warranty:</strong> 1 Year Manufacturer Warranty</p>
//         <p><strong>About this item:</strong></p>
//         <ul>
//           <li>1.85” TFT Display with 550 nits brightness</li>
//           <li>Noise Health Suite: Heart rate, SpO2, Stress monitoring</li>
//           <li>Up to 7 days battery life</li>
//           <li>Bluetooth calling</li>
//         </ul>
//       </div>

//       <div className="right_purchase">
//         <h3>₹1,299</h3>
//         <p><strong>FREE delivery:</strong> Monday, 8 April</p>
//         <p><strong>In stock</strong></p>
//         <p>Sold by <strong>Cloudtail India</strong> and Fulfilled by Amazon.</p>

//         <button className="add_to_cart_btn">Add to Cart</button>
//         <button className="buy_now_btn">Buy Now</button>

//         <p className="secure">🔒 Secure transaction</p>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './cart.css';
// import { useFetchByProductId } from '../../hooks/useFetchProduct';

// const Cart = () => {
//   const { _id } = useParams();
//   console.log("_id",_id);
//   const { data: product, isLoading, error } = useFetchByProductId(_id);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Something went wrong 😔</div>;

//   return (
//     <div className="cart_container">
//       <div className="left_image">
//         <img src={product.url} alt="product" />
//       </div>

//       <div className="middle_details">
//         <h2>{product.title}</h2>
//         <p>⭐⭐⭐⭐☆ (4.2 out of 5 stars)</p>
//         <p><strong>Brand:</strong> {product.brand}</p>
//         <p><strong>Price:</strong> ₹{product.originalPrice}</p>
//         <p><strong>Deal of the Day:</strong> ₹{product.dealPrice} <span className="deal">Limited time deal!</span></p>
//         <p><strong>Save Extra:</strong> No Cost EMI available</p>
//         <p><strong>Warranty:</strong> {product.warranty}</p>
//         <p><strong>About this item:</strong></p>
//         <ul>
//           {product.features?.map((point, index) => (
//             <li key={index}>{point}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="right_purchase">
//         <h3>₹{product.dealPrice}</h3>
//         <p><strong>FREE delivery:</strong> Monday, 8 April</p>
//         <p><strong>In stock</strong></p>
//         <p>Sold by <strong>Cloudtail India</strong> and Fulfilled by Amazon.</p>

//         <button className="add_to_cart_btn">Add to Cart</button>
//         <button className="buy_now_btn">Buy Now</button>

//         <p className="secure">🔒 Secure transaction</p>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React from 'react';
import { useParams } from 'react-router-dom';
import './cart.css';
import { useFetchByProductId } from '../../hooks/useFetchProduct';

const Cart = () => {
  const { _id } = useParams();
  const { data, isLoading, error } = useFetchByProductId(_id);
  const product = data?.product;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div className="cart_container">
      <div className="left_image">
        <img src={product.detailUrl} alt={product.title.longTitle} />
      </div>

      <div className="middle_details">
        <h2>{product.title.longTitle}</h2>
        <p>{product.title.shortTitle}</p>
        <p><strong>MRP:</strong> ₹{product.price.mrp}</p>
        <p><strong>Deal Price:</strong> ₹{product.price.cost}</p>
        <p><strong>Discount:</strong> {product.price.discount}</p>
        <p><strong>Tagline:</strong> {product.tagline}</p>
        <p><strong>Description:</strong> {product.description}</p>
      </div>

      <div className="right_purchase">
        <h3>₹{product.price.cost}</h3>
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

