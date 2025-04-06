
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel ka CSS
import "./Banner.css";
import post1 from "../../assets/post1.png";
//import post2 from '../../assets/post2.png';
import post3 from "../../assets/post3.png";

const Banner = () => {
  const data = [
    {
      name: "Mobile Phones",
      url: "https://www.amazon.in/s?k=mobile+phones",
      //image: post2,
    },
    {
      name: "Laptops",
      url: "https://www.amazon.in/s?k=laptops",
      image: post1,
    },
    {
      name: "Headphones",
      url: "https://www.amazon.in/s?k=headphones",
      image: post3,
    },
    {
      name: "Women's Fashion",
      url: "https://www.amazon.in/s?k=womens+fashion",
      image: post3,
    },
  ];

  return (
    <div>
      <h2>Banner</h2>
      <Carousel
        className="carouesal"
        autoPlay={true}
        animationHandler="solid"
        indicators={false}
        navButtonsAlwaysVisible={false}
        cycleNavigation={true}
        navButtonProps={{
          style: {
            backgroundColor: "black",
            borderRadius: 0,
            color: "black",
          },
        }}
      >
        {data.map((item, index) => (
          <div key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.name} />
              <p className="legend">{item.name}</p>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;

