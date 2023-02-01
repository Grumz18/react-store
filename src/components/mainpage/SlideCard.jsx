import React from 'react';
import Sdata from './Sdata';
import './SlideCard.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    SlidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 12000,
    appendDots: (dots) => {
      return <ul style={{margin: "0px"}}>{dots}</ul>
    },
  };
  return (
    <>
    <Slider {...settings}>
    {Sdata.map((value,index) => {
      return (
        <div className="box d_flex top" key={index}>
          <div className="left">
            <h1>{value.title}</h1>
            <p>{value.desc}</p>
            <button className='btn-primary'>Visit Collections</button>
          </div>
          <div className="right">
            <img className='SlideCardImg' src={require(`${value.cover}`)} alt="" />
          </div>
        </div>
        )
      })}
      </Slider>
    </>
  )
}
export default SlideCard;