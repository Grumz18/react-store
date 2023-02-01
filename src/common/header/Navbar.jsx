import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbaricons.css';

const Navbar = () => {

  const [MobileMenu , setMobileMenu] = useState(false)

  return (
    <>
      <header className='header'>
        <div className="container d_flex">
          <div className="categories">
            <i className="icon-border"></i>
            <h4>Categories <i className='icon-chevron-down'></i></h4>
          </div>
          <div className="navlink">
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/">pages</Link>
              </li>
              <li>
                <Link to="/">user account</Link>
              </li>
              <li>
                <Link to="/">vendor account</Link>
              </li>
              <li>
                <Link to="/">track my order</Link>
              </li>
              <li>
                <Link to="/">contact</Link>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {
                MobileMenu?
                 <i className='close home-bth icon-close'></i> :
                  <i className="open icon-open"></i>
              }
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar;