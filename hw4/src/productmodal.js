import React, {Component} from 'react';

import './css/shop.css';
import './css/modal.css';
import GlobalFlavors from "./globalflavors";
import HoverButton from "./hoverbutton";


class ProductModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayedQuantity: 1,
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
    });
  }

  render(){
    console.log("What modal props are: " + this.props.activeDetailId);
    let source = "https://s3.amazonaws.com/bunbunbakeshop/" + GlobalFlavors.flavors[this.props.activeDetailId];
    const modalDisplayToggle = (this.props.isDetailModalShowing === true ? "block" : "none");
    const modalStyle = {
      display: modalDisplayToggle
    };
    return (
      <div id="detailModal" className="modal" style={modalStyle}>
        <div className="detailContent">
          <span id="detailClose" onClick={() => this.props.onToggleDetailModalClick(this.props.activeDetailId)}>&times;</span>
          <div id="detailName">{GlobalFlavors.names[this.props.activeDetailId]}</div>
          <div className="detailRow">
            <div className="detailImageContainer">
              <img className="detailImage" src={source} alt="detail" />
            </div>
            <div className="detailPurchaseInfo">
              <div className="detailDescription">
                <div className="detailNumber">{this.state.displayedQuantity}</div>
                <div className="detailToggles">
                  <HoverButton id="detailPlus" productId={this.props.activeDetailId} sign="plus" onUpdate={(id) => this.updateDisplayedQuantity("plus")}/>
                  <HoverButton id="detailMinus" productId={this.props.activeDetailId} sign="minus" onUpdate={(id) => this.updateDisplayedQuantity("minus")}/>
                </div>
              </div>
              <button className="detailAdd" onClick={() => this.props.onDetailAddClick(this.props.activeDetailId, this.state.displayedQuantity)}>Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductModal;