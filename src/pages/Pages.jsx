import React from 'react'
import FlashDeals from '../components/flashDeals/FlashDeals.jsx';
import Home from '../components/mainpage/Home.jsx'
import Shop from '../components/shop/Shop.jsx';

const Pages = ({ productItems,cartItem,addToCart,shopItems,catgData }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart}/>
      <Shop shopItems={shopItems} addToCart={addToCart} catgData={catgData}/>
    </>
  )
}
 
export default Pages;