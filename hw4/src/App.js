import React, {Component} from 'react';

import Home from './home';
import Nav from "./nav";
import ShoppingCart from './shoppingcart';
import Shop from './shop';
import ProductModal from "./productmodal";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShopPage: false,
      currentCart: [],
      cartSize: 0,
      isCartShowing: false,
      activeDetailId: 0,
      isDetailModalShowing: false
    };
  }

  onTogglePage(pageName){
    let shopPage = false;
    if(pageName === "shop"){
      shopPage = true;
    }
    if(pageName === "home"){
      shopPage = false;
    }
    this.setState({
      isShopPage: shopPage,
      currentCart: this.state.currentCart,
      cartSize: this.state.cartSize,
      isCartShowing: false,
      activeDetailId: this.state.activeDetailId,
      isDetailModalShowing: false
    });
  }

  onToggleModal(){
    this.setState({
      isShopPage: this.state.isShopPage,
      currentCart: this.state.currentCart,
      cartSize: this.state.cartSize,
      isCartShowing: !this.state.isCartShowing,
      activeDetailId: this.state.activeDetailId,
      isDetailModalShowing: this.state.isDetailModalShowing
    });
  }

  onToggleDetailModal(flavorIndex){
    console.log("Toggle Index: " + flavorIndex);
    this.setState({
      isShopPage: this.state.isShopPage,
      currentCart: this.state.currentCart,
      cartSize: this.state.cartSize,
      isCartShowing: this.state.isCartShowing,
      activeDetailId: flavorIndex,
      isDetailModalShowing: !this.state.isDetailModalShowing
    });
  }

  handleAddToCart(id, quantity){
    if(quantity === 0){
      return;
    }
    let currentCart = this.state.currentCart.slice();
    if(currentCart.length === 0){
      currentCart.push({
        index: id,
        quantity: quantity,
      });
    }else {
      let itemAddedAlready = false;
      for(let obj = 0; obj < currentCart.length; obj++){
        if(currentCart[obj].index === id){
          currentCart[obj].quantity += quantity;
          itemAddedAlready = true;
        }
        if(itemAddedAlready) break;
      }
      if(!itemAddedAlready){
        currentCart.push({
          index: id,
          quantity: quantity,
        })
      }
    }
    this.setState({
      isShopPage: this.state.isShopPage,
      currentCart: currentCart,
      cartSize: this.state.cartSize + quantity,
      isCartShowing: !this.state.isCartShowing,
      activeDetailId: this.state.activeDetailId,
      isDetailModalShowing: false
    });
  }

  handleUpdate(id, sign){
    let currentCart = this.state.currentCart.slice();
    let cartSize = this.state.cartSize;
    for(let i = 0; i < currentCart.length; i++){
      if(currentCart[i].index === id){
        let quantity = currentCart[i].quantity;
        if(sign === "plus"){
          currentCart[i].quantity = quantity + 1;
          cartSize += 1;
        }
        if(sign === "minus"){
          if(quantity === 1){
            return;
          }
          currentCart[i].quantity = quantity - 1;
          cartSize -= 1;
        }
        break;
      }
    }
    this.setState({
      isShopPage: this.state.isShopPage,
      currentCart: currentCart,
      cartSize: cartSize,
      isCartShowing: this.state.isCartShowing,
      activeDetailId: this.state.activeDetailId,
      isDetailModalShowing: this.state.isDetailModalShowing
    })
  }

  handleRemove(id){
    let currentCart = this.state.currentCart.slice();
    let quantity = 0;
    for(let i = 0; i < currentCart.length; i++){
      if(currentCart[i].index === id){
        quantity = currentCart[i].quantity;
        currentCart.splice(i, 1);
        break;
      }
    }
    this.setState({
      isShopPage: this.state.isShopPage,
      currentCart: currentCart,
      cartSize: this.state.cartSize - quantity,
      isCartShowing: this.state.isCartShowing,
      activeDetailId: this.state.activeDetailId,
      isDetailModalShowing: this.state.isDetailModalShowing
    })
  }

  render(){
    console.log("what's being passed in state: " + this.state.activeDetailId);
    const isShopPage = this.state.isShopPage;
    let appContent;
    if(isShopPage){
      appContent = (
        <div id="shopContent">
          <Shop
            onAddToCart={(flavorIndex, displayedQuantity) => this.handleAddToCart(flavorIndex, displayedQuantity)}
            onDetailClick={(flavorIndex) => this.onToggleDetailModal(flavorIndex)}
          />
          <ProductModal
            activeDetailId={this.state.activeDetailId}
            isDetailModalShowing={this.state.isDetailModalShowing}
            onDetailAddClick={(flavorIndex, displayedQuantity) => this.handleAddToCart(flavorIndex, displayedQuantity)}
            onToggleDetailModalClick={(index) => this.onToggleDetailModal(index)}
          />
        </div>
      );
    }else{
      appContent = (
        <Home onAddToCart={(index, quantity) => this.handleAddToCart(index, quantity)}/>
      );
    }
    return (
      <div>
        <h1>Bun Bun Bake Shop</h1>
        <Nav
          active="home"
          onClick={(pageName) => this.onTogglePage(pageName)}
          onToggleModal={() => this.onToggleModal()}
          cartSize={this.state.cartSize}
        />
        <ShoppingCart
          currentCart={this.state.currentCart}
          isCartShowing={this.state.isCartShowing}
          onToggleModal={() => this.onToggleModal()}
          onUpdate={(id, sign) => this.handleUpdate(id, sign)}
          onRemove={(id) => this.handleRemove(id)}
        />
        {appContent}
      </div>
    );
  }
}

export default App;