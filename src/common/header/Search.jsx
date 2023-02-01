import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../icon-pictures/logo.svg'
import "./Search.css"

function Search({ cartItem }) {
  window.addEventListener("scroll", function(){
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  return (
    <>
      <section className='search'>
        <div className="container-search">
          <div className="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div className="search-box f_flex">
            <i className='search-icon'></i>
            <input type="text" placeholder='Search and hit enter... '/>
            <span>All Category</span>
          </div>
          <div className="icon-for-uc f_flex">
          <div className='icon-circel'>
            <i className='icon-user'></i>
            </div>
             <div className="cart">
                <Link to="/cart" className='icon-circel'>
                  <i className='shopping-bag'></i>
                </Link>
                <span> {cartItem.length === 0 ? "" : cartItem.length} </span>
             </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default Search;