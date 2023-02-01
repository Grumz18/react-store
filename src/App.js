import './App.css';
import Header from './common/header/Header';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import Cart from './components/cart/Cart';
import ShopData from './components/shop/ShopData';
import CatgData from './components/shop/CatgData';
import Footer from './common/footer/Footer';

function App() {
  const { catgData } = CatgData;
  const { productItems } = Data;
  const { shopItems } = ShopData;
  const [cartItem, setCardItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if(productExit) {
      setCardItem(cartItem.map((item) => 
      (item.id === product.id ?
      {...productExit,qty:productExit.qty +1} : item )));
    } else {
      setCardItem([...cartItem,{...product,qty: 1}]);
    }
  }
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if(productExit.qty === 1 ) {
      setCardItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCardItem(cartItem.map((item) => (item.id === product.id ?
      {...productExit, qty: productExit.qty-1} : item)));
    }
  }
  const clearCart = (product) => {
    setCardItem(cartItem.filter((item) => item.id !== product.id));
  }
  return (
  <>
    <Router>
    <Header cartItem={cartItem}/>
      <Routes>
        <Route path='/' element={<Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} catgData={catgData}/>}/>
        <Route path='/cart' element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} clearCart={clearCart}/>}/>
      </Routes>
      <Footer/>
    </Router>
  </>
  );
}

export default App;
