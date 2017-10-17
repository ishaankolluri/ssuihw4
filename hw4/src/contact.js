import React from 'react';

import './css/index.css';
import './css/nav.css';

function Contact(props){
  return (
    <div className="contact">
      <span className="contactInfo">300 S Craig Street</span>
      <span className="contactInfo">(888) 495-7673</span>
      <span className="contactInfo">contact@bunbunbakeshop.com</span>
    </div>
  );
}

export default Contact;