

import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from '@mui/material';
import "./Slide.css";
import { useFetchProduct } from '../../hooks/useFetchProduct'; // Import the custom hook
import { useNavigate } from 'react-router-dom';


const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Slide = ({ title }) => {
  const navigate = useNavigate();


  const { data: product = [], isLoading, error } = useFetchProduct();

  console.log("data",product);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleClick = (id) => {
    navigate(`/cart-section/${id}`);
  };
  
  return (
    <div className='products_section'>
      <div>
        <h3>{title}</h3>
        <button className="view_btn">View All</button>
      </div>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite
        draggable={false}
        swipeable
        centerMode
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {product.map((e) => (
          <div className="products_items" key={e.id} onClick={() => handleClick(e._id)} style={{ cursor: "pointer" }}>
            <div className="product_img">
              <img src={e.url} alt="product" />
            </div>
            <p className="products_name">{e.title.shortTitle}</p>
            <p className="products_offer" style={{ color: "#007185" }}>{e.discount}</p>
            <p className="products_explore">{e.tagline}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slide;
