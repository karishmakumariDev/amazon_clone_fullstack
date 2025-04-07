import React from 'react'
import Banner from './Banner'
import './Home.css';
import Slide from './Slide';

const Maincamp = () => {
  return (
    <div className='home_section'>
        <div>
            <Banner/>
            <Slide/>
        </div>
    </div>
  )
}

export default Maincamp