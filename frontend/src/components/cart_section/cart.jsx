
import React from 'react';
import { useParams } from 'react-router-dom';
import './cart.css';
import { useFetchByProductId } from '../../hooks/useFetchProduct';
import { useFetchAddtocart } from '../../hooks/userFetchCart';

const Cart = () => {
  const { _id } = useParams();
  const { data, isLoading, error } = useFetchByProductId(_id);
  const { mutate, isLoading: isAdding } = useFetchAddtocart();

  const product = data?.product;

  const handleAddToCart = () => {
    mutate(_id);
  };

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

        <button className="add_to_cart_btn" onClick={handleAddToCart} disabled={isAdding}>
          {isAdding ? "Adding..." : "Add to Cart"}
        </button>
        <button className="buy_now_btn">Buy Now</button>

        <p className="secure">🔒 Secure transaction</p>
      </div>
    </div>
  );
};

export default Cart;
