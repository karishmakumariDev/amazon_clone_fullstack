import React from 'react'
import Banner from './Banner'
import './Home.css';
import Slide from './Slide';
import Footer from '../footer/footer';


const Maincamp = () => {
  return (
    <div className='home_section'>
        <div>
            <Banner/>
            <Slide title="Deal of the Day" />
            <Slide title="Best Sellers in Sports & Outdoors"/>
            <Slide title="Popular items this season"/>
            <Slide title="Best Sellers in Clothing, Shoes & Jewelry"/>
        </div>
        <Footer/>
    </div>
  )
}

export default Maincamp