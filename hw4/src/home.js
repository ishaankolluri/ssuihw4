import React, { Component } from 'react';

import Hero from './hero';
import Contact from './contact';
import FeaturedFlavors from './featured';
import './css/index.css'


// Not sure if the alert modal is needed.
// ShoppingCart has state. Home may need to handle its count.
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      numCartItems: 0,
    }
  }

  render(){
    return (
      <div id="Home">
        <Hero />
        <Contact />
        <FeaturedFlavors
          onAddToCart={(index, quantity) => this.props.onAddToCart(index, quantity)}
        />
      </div>
      );
  }
}

export default Home;