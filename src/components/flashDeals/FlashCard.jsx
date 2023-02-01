import React, { useState } from 'react'
import Slider from 'react-slick';
import "./FlashIcons.css"

const NextArrow = (props) => {
  const {onClick} = props;
  return(
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='icon-long-arrow-right'></i>
      </button>
    </div>
  )
}
const PrevArrow = (props) => {
  const {onClick} = props;
  return(
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='icon-long-arrow-left'></i>
      </button>
    </div>
  )
}

const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    <>
    <Slider {...settings}>
    {
      productItems.map((productItems) => {
      return(
       <div className="box">
        <div className="product mtop">
          <div className="img">
            <span className='discount'>{productItems.discount}% Off</span>
            <img className='image-size' src={require(`./${productItems.cover}`)} alt="" />
            <div className="product-like">
              <label>{count}</label>
              <i className='icon-like' onClick={increment}></i>
            </div>
          </div>
          <div className="product-details">
            <h3>{productItems.name}</h3>
            <div className="rate">
              <i className='icon-star'></i>
              <i className='icon-star'></i>
              <i className='icon-star'></i>
              <i className='icon-star'></i>
              <i className='icon-star'></i>
            </div>
            <div className="price">
              <h4>{productItems.price}.00</h4>
              <button onClick={() => addToCart(productItems)}>
                <i className='icon-plus'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      )
     })
    }
    </Slider>
    </>
  )
}

export default FlashCard;