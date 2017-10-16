import React, {Component} from 'react';

import Home from './home';
// import Shop from './shop';


class App extends Component {
  constructor(props){
    super(props);    
    this.state = {
      isShopPage: false,
    }
  }

  togglePage(){
    this.setState({
      isShopPage: !this.state.isShopPage,
    });
  } 

  render(){
    const isShopPage = this.state.isShopPage;
    if(isShopPage){
      // This will be return <Shop /> in due time.
      console.log("Should return Shop!");
      return <Home onClick={() => this.togglePage()}/>;
    }else{
      console.log("Should render Home!");
      return <Home onClick={() => this.togglePage()}/>;
    }
  }
}

export default App;