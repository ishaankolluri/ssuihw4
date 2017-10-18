import React, {Component} from 'react';

import './css/shop.css';
import GlobalFlavors from "./globalflavors";
import HoverButton from "./hoverbutton";

class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayedQuantity: 1,
      activeIndex: this.props.flavorIndex
    }
  }

  updateDisplayedQuantity(sign){
    let quant = this.state.displayedQuantity;
    if(sign === "plus"){
      quant = quant + 1;
    }
    if(sign === "minus") {
      if(quant === 1){
        return;
      }
      quant = quant - 1;
    }
    this.setState({
      displayedQuantity: quant,
      activeIndex: this.state.activeIndex
    });
  }

  render(){
    const imageSource = "https://s3.amazonaws.com/bunbunbakeshop/" + GlobalFlavors.flavors[this.state.activeIndex];
    return (
      <div className="product">
        <div className="labelContainer">
          <span className="label">{GlobalFlavors.names[this.state.activeIndex]}</span>
        </div>
        <img
          className="productImage"
          src={imageSource}
          alt="Alt"
          onClick={() => this.props.onModalClick(this.state.activeIndex)}
        />
        <div className="cartContainer">
          <HoverButton className="number" productId={this.state.activeIndex} sign="plus" onUpdate={(id) => this.updateDisplayedQuantity("plus")}/>
          <HoverButton className="number" productId={this.state.activeIndex} sign="minus" onUpdate={(id) => this.updateDisplayedQuantity("minus")}/>
          <span className="counter">{this.state.displayedQuantity}</span>
          <button className="addToCart" onClick={() => this.props.onShopAdd(this.state.activeIndex, this.state.displayedQuantity)}>Add</button>
        </div>
      </div>)
    ;
  }
}

export default Product;