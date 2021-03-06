import React, {Component} from 'react';
import './css/nav.css';


class Nav extends Component{
  checkActivePage(query){
    let activePage = this.props.active;
    let activeClass = "";
    if(activePage === query){
      activeClass = "activeNav";
    }
    return activeClass;
  }

  render(){
    return (
      <div className="navContainer">
        <ul>
          <li><a className={this.checkActivePage("home")} onClick={() => this.props.onClick("home")}>HOME</a></li>
          <li><a className={this.checkActivePage("shop")} onClick={() => this.props.onClick("shop")}>SHOP</a></li>
          
          <svg id="cartContainer" width="46px" height="40px" viewBox="0 0 46 40" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={() => this.props.onToggleModal()}>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="HiFi-Cinnabon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Artboard" transform="translate(-1265.000000, -487.000000)" fill="#FAFAFA">
                    <g id="cart" transform="translate(1265.000000, 487.000000)">
                        <path d="M45.2727273,7.63636364 C45.1010415,7.40744923 44.8315975,7.27272727 44.5454545,7.27272727 L10.9090909,7.27272727 C10.8481003,7.27233824 10.7872138,7.27781803 10.7272727,7.28909091 L9.41454545,2.01636364 C9.09349117,0.827276248 8.01530344,0.000938868622 6.78363636,0 L0.909090909,0 C0.407013864,0 6.14867046e-17,0.407013864 0,0.909090909 C-6.14867046e-17,1.41116795 0.407013864,1.81818182 0.909090909,1.81818182 L6.78363636,1.81818182 C7.18987144,1.81807201 7.54687342,2.08749346 7.65818182,2.47818182 L14.5672727,30.22 C14.6687328,30.6268239 15.0352674,30.9114891 15.4545455,30.9090909 L15.5236364,30.9090909 L15.8145455,30.8872727 L14.6418182,33.2327273 C14.5023293,33.5142252 14.5180678,33.8477928 14.6834416,34.1149066 C14.8488153,34.3820203 15.1403833,34.5448181 15.4545455,34.5454545 L37.2727273,34.5454545 C37.7748043,34.5454545 38.1818182,34.1384407 38.1818182,33.6363636 C38.1818182,33.1342866 37.7748043,32.7272727 37.2727273,32.7272727 L16.9254545,32.7272727 L17.9290909,30.7272727 L39.16,29.0909091 C39.5430552,29.06141 39.8662125,28.7942957 39.9672727,28.4236364 L45.4218182,8.42363636 C45.4966879,8.15228265 45.4416305,7.8615525 45.2727273,7.63636364 Z M38.3818182,27.3236364 L16.1490909,29.0345455 L11.18,9.09090909 L43.3618182,9.09090909 L38.3818182,27.3236364 Z" id="Shape" fillRule="nonzero"></path>
                        <circle id="Oval" fillRule="nonzero" cx="18.1818182" cy="38.1818182" r="1.81818182"></circle>
                        <circle id="Oval" fillRule="nonzero" cx="34.5454545" cy="38.1818182" r="1.81818182"></circle>
                        <text fontFamily="Poppins-ExtraLight, Poppins" fontSize="20" fontWeight="300" letterSpacing="0.800000012">
                            <tspan id="cartNumber" x="21.86" y="25">{this.props.cartSize}</tspan>
                        </text>
                    </g>
                </g>
            </g>
          </svg>

        </ul>
      </div>
    );
  }
  
}

export default Nav;