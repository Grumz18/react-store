import React from 'react'
import FlashCard from './FlashCard';
import './FlashIcons.css'

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className='flash background'>
        <div className="container">
         <div className="heading f_flex">
          <i className='icon-bolt'></i>
          <h1>Flash Deals</h1>
         </div>
         <FlashCard productItems={productItems} addToCart={addToCart}/>
        </div>
      </section>
    </>
  )
}

export default FlashDeals;