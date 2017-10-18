import React, {Component} from 'react';

import "./css/modal.css";

class HoverButton extends Component {
  constructor(props){
    super(props);
    this.id = this.props.productId;
    this.class = this.props.className;
    this.sign = this.props.sign;
    this.state = {
      hover: false,
    }
  }

  mouseOver(){
    this.setState({
      hover: true
    })
  }

  mouseOut(){
    this.setState({
      hover: false
    })
  }

  render(){
    const URL = "https://s3.amazonaws.com/bunbunbakeshop/svg/";
    const source = URL + this.sign + (this.state.hover === true ? "hover" : "") + ".svg";
    return (
      <img
        id={this.props.id}
        className={this.props.className}
        src={source}
        onMouseOver={() => this.mouseOver()}
        onMouseOut={() => this.mouseOut()}
        alt={this.sign}
        onClick={() => this.props.onUpdate(this.id)}
      />
    );
  }
}

export default HoverButton;