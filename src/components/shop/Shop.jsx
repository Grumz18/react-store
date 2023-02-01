import React from 'react'
import Catg from './Catg';
import ShopCart from './ShopCart';
import "./ShopStyles.css";

const Shop = ({shopItems, addToCart,catgData}) => {
  return (
    <>
      <section className='shop background'>
        <div className="container d_flex">
          <Catg catgData={catgData}/>
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row f_flex">
                <h2>Mobile Phones</h2>
              </div>
              <div className="heading-right">
                <span>View All</span>
                <i className='icon-caret-right'></i>
              </div>
            </div>
            <div className="product-content grid3">
              <ShopCart shopItems={shopItems} addToCart={addToCart} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shop;