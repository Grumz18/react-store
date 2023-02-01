import React from 'react';

const Catg = ({ catgData }) => {
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands</h1>
          <h1>Shops</h1>
        </div>
        {catgData.map((value,index) => {
          return(
            <div className="box f_flex" key={index}>
              <img src={require(`${value.cateIcon}`)} alt="" />
              <span>{value.cateName}</span>
            </div>)
        })}
        <div className="box box2">
          <button>Viev all Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg