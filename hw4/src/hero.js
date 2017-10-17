import React from 'react';

import './css/index.css';
import heroImage from './img/hero/Hero@2x.jpg';


function Hero(props){
  return (
    <div className="heroContainer"><img className="heroImg" src={heroImage} alt="Hero"></img></div>
  );
}

export default Hero;