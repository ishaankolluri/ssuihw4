import React, {Component} from 'react';

import './css/shop.css';
import Product from './product';
import GlobalFlavors from "./globalflavors";


class Shop extends Component {
  constructor(props){
    super(props);
    this.state = {
      liveModalId: 0,
      isModalShowing: false
    }
  }
  
  renderRow(flavorIndexes){
    let productRow = flavorIndexes.map((index, i) => {
      return (
        <Product
          key={index}
          flavorIndex={index}
          onShopAdd={(flavorIndex, displayedQuantity) => this.props.onAddToCart(flavorIndex, displayedQuantity)}
          onModalClick={(ind) => this.props.onDetailClick(ind)}
        />
      );
    });
    let val = (
      <div key={(flavorIndexes[0] + 1) * 10} className="productRow">
        {productRow}
      </div>
    );
    return val;
  }


  renderShop(){
    const flavorImages = GlobalFlavors.flavors;
    let products = [];
    let index = 0;
    let currentRow = [];
    while(index < flavorImages.length){
      currentRow.push(index);
      if((index + 1) % 3 === 0){
        products.push(this.renderRow(currentRow));
        currentRow = [];
      }
      index++;
    }
    return products;
  }

  render(){
    let products = this.renderShop();
    return (
      <div id="productContainer">
        {products}
      </div>
    );
  }
}

export default Shop;