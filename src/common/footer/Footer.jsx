import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <footer>
      <div className="container grid2">
        <div className="box">
          <h1>Online Shop</h1>
          <p>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Non deserunt libero, 
            reiciendis voluptatum ipsa, in distinctio 
            laboriosam consequatur possimus necessitatibus 
            maxime reprehenderit iusto optio nam ad nobis 
            quo. At, alias.</p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i className="icon-google-play"></i>
                <span>Google Play</span>
                </div>
              <div className="img d_flex">
                <i className="icon-app-store"></i>
                <span>App Store</span>
                </div>
            </div>
        </div>
        <div className="box">
          <h2>About US</h2>
          <ul>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="box">
        <h2>Costumer Care</h2>
          <ul>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Track Your Order</li>
          </ul>
        </div>
        <div className="box">
        <h2>Contact Us</h2>
          <ul>
            <li>Agiou Nikolaou 18, Patra 262 21, Греция</li>
            <li>Email: examlpe@gmail.com</li>
            <li>Phone: +7(900) 998-12-23</li>
          </ul>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;