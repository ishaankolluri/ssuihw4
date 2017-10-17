import React, {Component} from 'react';

import Home from './home';
import Nav from "./nav";
import ShoppingCart from './shoppingcart';
// import Shop from './shop';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShopPage: false,
      currentCart: [],
      cartSize: 0,
      isCartShowing: false,
    };
  }

  onTogglePage(){
    this.setState({
      isShopPage: !this.state.isShopPage,
    });
  }

  onToggleModal(){
    this.setState({
      isShopPage: this.state.isShopPage,
      currentCart: this.state.currentCart,
      cartSize: this.state.cartSize,
      isCartShowing: !this.state.isCartShowing,
    });
  }

  handleAddToCart(id, quantity){
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
        console.log("Added already!");
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
          if(quantity === 0){
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
    })
  }

  render(){
    const isShopPage = this.state.isShopPage;
    let appContent;
    if(isShopPage){
      // will be <Shop />.
      appContent = (
        <Home onAddToCart={(index, quantity) => this.handleAddToCart(index, quantity)}/>
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
          onClick={() => this.onTogglePage()}
          onToggleModal={() => this.onToggleModal()}
          cartSize={this.state.cartSize}
        />
        <ShoppingCart
          currentCart={this.state.currentCart}
          isCartShowing={this.state.isCartShowing}
          onToggleModal={() => this.onToggleModal()}
          onUpdate={(id, sign) => this.handleUpdate(id, sign)}
        />
        {appContent}
      </div>
    );
  }
}

export default App;