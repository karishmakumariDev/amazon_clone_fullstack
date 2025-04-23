import { Divider } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import "./Shoping.css";
import Subtotal from "./Subtotal";
import { useGetCartList, useFetchAddtocart,useIncreaseQuantity,useDecreaseQuantity } from "../../hooks/userFetchCart";

const Shoping_cart = () => {
  const { _id } = useParams();

  const { data, isLoading, isError } = useGetCartList();
  console.log("data", data);
  const { mutate, isLoading: isAdding } = useFetchAddtocart();
  const { mutate: increase } = useIncreaseQuantity();
  const { mutate: decrease } = useDecreaseQuantity();

  const handleIncrease = (productId) => {
    increase(productId);
  };

  const handleDecrease = (productId) => {
    decrease(productId);
  };

  const handleAddToCart = () => {
    mutate(_id);
  };

  const calculateSubtotal = () => {
    return data?.cartList?.reduce((total, item) => {
      return total + item.productId.price.cost * item.quantity;
    }, 0);
  };

  const pairWithCart = [
    {
      id: "pair1",
      name: "Philips LED Bulb 9-Watt Pack of 2",
      price: 225,
      image: "https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg",
    },
    {
      id: "pair2",
      name: "boAt BassHeads 100 Wired Earphones",
      price: 399,
      image: "https://m.media-amazon.com/images/I/719elVA3FvL._SL1500_.jpg",
    },
    {
      id: "pair3",
      name: "Amazon Basics Wireless Mouse",
      price: 649,
      image: "https://m.media-amazon.com/images/I/61LtuGzXeaL._SL1500_.jpg",
    },
  ];

  if (isLoading) {
    return <div className="loading_cart">Loading your cart...</div>;
  }

  if (isError) {
    return (
      <div className="error_cart">
        Failed to load cart. Please try again later.
      </div>
    );
  }

  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>
          <p>Select all items</p>
          <span className="leftbuyprice">price</span>
          <Subtotal
            totalAmount={calculateSubtotal()}
            itemCount={data?.cartList?.length}
          />
          <Divider />

          {data?.cartList?.map((item) => (
            <div className="item_containert" key={item.productId._id}>
              <img
                src={item.productId.url}
                alt={item.productId.title.longTitle}
              />
              <div className="item_details">
                <h3>{item.productId.title.longTitle}</h3>
                <h3>{item.productId.title.shortTitle}</h3>
                <h3>₹{item.productId.price.cost.toLocaleString()}</h3>
                <h4>#1 Best Seller in {item.productId.title.shortTitle}</h4>
                <h5>In stock</h5>
                <h4>Eligible for FREE Shipping</h4>

                <div className="quantity_control">
                  <button onClick={() => handleDecrease(item.productId._id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.productId._id)}>
                    +
                  </button>
                </div>

                <div className="action_buttons">
                  <button>Remove</button>
                  <button>Save for later</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Divider />

        <div className="right_section">
          <div className="right_buy">
            <h3>
              Subtotal ({data?.cartList?.length} items): ₹
              {calculateSubtotal().toLocaleString()}
            </h3>
            <p>
              Your order is eligible for FREE Delivery. Choose FREE Delivery
              option at checkout.
            </p>
            <button className="rightbuy_btn">Proceed to Buy</button>
          </div>

          <div className="pair_with_cart">
            <h3>Pair with your cart</h3>
            {pairWithCart.map((item) => (
              <div className="pair_item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="pair_details">
                  <p>{item.name}</p>
                  <p className="pair_price">₹{item.price.toLocaleString()}</p>
                  <button
                    className="add_to_cart_btn"
                    onClick={handleAddToCart}
                    disabled={isAdding}
                  >
                    {isAdding ? "Adding..." : "Add to Cart"}
                  </button>
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
