import React, {Component} from 'react';

import GlobalFlavors from './globalflavors';
import './css/index.css';

class FeaturedFlavors extends Component {

  render(){
    let flavors = GlobalFlavors.flavors.slice(0, 3);  // First three flavors.
    let flavorNames = GlobalFlavors.names.slice(0,3);
    let details = flavors.map((element, index) => {
      let source = "https://s3.amazonaws.com/bunbunbakeshop/" + element;
      // TODO: Figure out why this isn't showing up. 'require' breaks it w or w/o "./"
      return (
        <div key={index} className="flavor">
          <div><img className="flavorImg" src={source} alt="alt"/></div>
          {flavorNames[index]} <br/>
          <button
            className="addToCartLarge"
            onClick={() => this.props.onAddToCart(index, 1)}
          >
            Add to Cart
          </button>
        </div>
      );
    });
    return (
      <div>
        <div className="featuredHeader">October's Featured Flavors</div>
        <div className="featuredFlavors">
          {details}
        </div>
      </div>
    );
  }
}

export default FeaturedFlavors;