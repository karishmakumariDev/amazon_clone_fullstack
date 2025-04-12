// import React, { useEffect, useState } from 'react'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Divider } from '@mui/material';
// //import { products } from './product';
// import "./Slide.css";

//  const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 4
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1
//     }
// };

// const slide = ({title}) => {
    
//     const[product , setProduct] = useState([])

//     useEffect(() => {
//         const fetchData = async() => {
//          const response = await fetch('http://localhost:8000/api/getproduct')
//          console.log(response);
//          const data = await response.json()

//          setProduct(data);
//         }
//         fetchData()
//     },[])

//   return (
//     <div className='products_section'>
//         <div>
//             <h3>{title}</h3>
//             <button className="view_btn">View All</button>
//         </div>
//         <Divider/>

//         <Carousel
//         responsive={responsive}
//         infinite={true}
//         draggable={false}
//         swipeable={true}
//         centerMode={true}
//         autoPlay={true}
//         autoPlaySpeed={4000}
//         keyBoardControl={true}
//         showDots={false}
//         removeArrowOnDeviceType={["tablet", "mobile"]}
//         dotListClass="custom-dot-list-style"
//         itemClass="carousel-item-padding-40-px"
//         containerClass="carousel-container" 
//         >
         
//          {
//             products.map((e) => {
//                 console.log(e);
//                 return(
//                     <div className="products_items">
//                        <div className="product_img">
//                         <img src={e.url} alt="product" />
//                        </div>
//                         <p className="products_name">{e.title.shortTitle}</p>
//                         <p className="products_offer" style={{ color: "#  007185" }}>{e.discount}</p>
//                         <p className="products_explore">{e.tagline}</p>
//                    </div>
//                 ) 
//             })
//          }
//         </Carousel>
        
//     </div>
    
//   )
// }

// export default slide


import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from '@mui/material';
import "./Slide.css";

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

const Slide = ({ title }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:8000/api/getproduct');
            console.log("response")
            const data = await response.json();
            console.log("data",data);
            setProduct(data);
        };
        fetchData();
    }, []);

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
                    <div className="products_items" key={e.id}>
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
