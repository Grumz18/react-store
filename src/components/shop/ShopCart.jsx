import React, { useState } from 'react'

const ShopCart = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  };
  return (
    <>
    {
      shopItems.map((shopItems) => {
      return(
       <div className="box">
        <div className="product mtop">
          <div className="img">
            <span className='discount'>{shopItems.discount}% Off</span>
            <img className='image-size' src={require(`../flashDeals/${shopItems.cover}`)} alt="" />
            <div className="product-like">
              <label>{count}</label>
              <i className='icon-like' onClick={increment}></i>
            </div>
          </div>
          <div className="product-details">
            <h3>{shopItems.name}</h3>
            <div className="rate">
              <i className='icon-star'></i>
              <i className='icon-star'></i>
              <i className='icon-star'></i>
              <i className='icon-star'></i>
              <i className='icon-star'></i>
            </div>
            <div className="price">
              <h4>{shopItems.price}.00</h4>
              <button onClick={() => addToCart(shopItems)}>
                <i className='icon-plus'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      )
     })
    }
    </>
  )
}

export default ShopCart;