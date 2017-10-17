import React, {Component} from 'react';

import GlobalFlavors from './globalflavors';
import HoverButton from './hoverbutton';
import './css/modal.css';


class ShoppingCart extends Component {

  calculateTotalCost(currentCart){
    let sum = 0;
    for(let i = 0; i < currentCart.length; i++){
      sum += (currentCart[i].quantity * 4.99);
    }
    return sum;
  }

  calculateItemizedCost(cartItem){
    return cartItem.quantity * 4.99;
  }
  

  renderCartContent(){
    let flavorImages = GlobalFlavors.flavors;
    let flavorNames = GlobalFlavors.names;
    let currentCart = this.props.currentCart;
    let totalCost = this.calculateTotalCost(currentCart); // Only display checkout row if there is a cart to show

    if(currentCart.length === 0){
      return <div className="modalHeaderContent">You have no items in your cart.</div>
    }
    let cartModal = currentCart.map((roll, index) => {
      let source = "https://s3.amazonaws.com/bunbunbakeshop/" + flavorImages[roll.index];
      let name = flavorNames[index];
      return (
        <div key={roll.index} className="modalRow">
          <div className="modalImg">
            <img src={source} alt={name} width="82" height="82"/>
          </div>
          <div className="modalInfo">
            <div className="modalFlavor">{name}</div>
            <div className="modalQuantity">
              <div className="modalNumber">{roll.quantity}</div>
              <div className="modalToggles">
                <HoverButton
                  productId={roll.index}
                  sign="plus"
                  onUpdate={(id) => this.props.onUpdate(id, "plus")}
                />
                <HoverButton
                  productId={roll.index}
                  sign="minus"
                  onUpdate={(id) => this.props.onUpdate(id, "minus")}
                />
              </div>
              <button className="modalRemove" onClick={(id) => this.props.onRemove(roll.index)}>Remove</button>
            </div>
          </div>
          <div className="modalPrice">{this.calculateItemizedCost(roll)}</div>
        </div>
      );
    });
    return (
      <div>
        {cartModal}
        <div id="checkoutRow" className="modalRow">
          <div className="modalTotal">Total Cost: {totalCost}</div>
        </div>
        <button className="checkout" onClick={() => alert('Show\'s over!')}>Checkout</button>
      </div>
    );
  }

  render(){
    const isCartShowing = this.props.isCartShowing;
    const modalDisplayToggle = (isCartShowing === true ? "block" : "none");
    const modalStyle = {
      display: modalDisplayToggle
    };

    return (
      <div id="shoppingCart" className="modal" style={modalStyle}>
        <div className="modal-content">
          <span id="close" onClick={() => this.props.onToggleModal()}>&times;</span>
          <div className="modalHeader">
            <span className="modalHeaderContent">Your Cart</span>
          </div>
          {this.renderCartContent()}
        </div>
      </div>
    )
  }
}

export default ShoppingCart;