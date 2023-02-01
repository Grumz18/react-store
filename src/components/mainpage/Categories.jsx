import React from 'react'

const Categories = () => {
  const data = [
    {
      cateImg: './images/Categories/cat1.png',
      cateName: "Fashion",
    },
    {
      cateImg: './images/Categories/cat2.png',
      cateName: "Electronic",
    },
    {
      cateImg: './images/Categories/cat3.png',
      cateName: "Cars",
    },
    {
      cateImg: './images/Categories/cat4.png',
      cateName: "Home & Garden",
    },
    {
      cateImg: './images/Categories/cat5.png',
      cateName: "Gifts",
    },
    {
      cateImg: './images/Categories/cat6.png',
      cateName: "Music",
    },
    {
      cateImg: './images/Categories/cat7.png',
      cateName: "Health & Beauty",
    },
    {
      cateImg: './images/Categories/cat8.png',
      cateName: "Pets",
    },
    {
      cateImg: './images/Categories/cat9.png',
      cateName: "Toys",
    },
    {
      cateImg: './images/Categories/cat10.png',
      cateName: "Groceries",
    },
    {
      cateImg: './images/Categories/cat11.png',
      cateName: "Books",
    },
    
  ]
  return (
    <>
      <div className="category">
        {
          data.map((value,index) => {
            return(
              <div className="box f_flex" key={index}>
                <img src={require(`${value.cateImg}`)}></img>
                <span>{value.cateName}</span>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Categories