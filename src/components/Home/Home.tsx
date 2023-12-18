import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../App';
import Button from '../CustomButton/ButtonContext';
import "./Home.css"
import Carousel from '../Carousel/Carousel';



export const Home = () => {
  const theme = useContext(ThemeContext);
  const className = 'Home-' + theme;
 
  return (<>
    
    <div className={className}>
    <Carousel></Carousel>
      </div>
      </>
  )
}
