import React from 'react'
import './HeadIcon.css';

const Head = () => {
  return (
  <>
    <section className='head'>
      <div className="container d_flex">
        <div className="left row">
          <div className='inf-row'>
          <div className='phone'></div>
          <div className='icon-text'>+7(900) 998-12-23</div>
          <div className='envelope'></div>
          <div className='icon-text'>examlpe@gmail.com</div>
          </div>
        </div>
        <div className="right row RText">
        <div className='inf-row'>
          <div className='other-text'>Theme FAQ's</div>
          <div className='other-text'>Need Helps</div>
          <div className='Ru'></div>
          <div className='lang'>RU</div>
          <div className='En'></div>
          <div className='lang'>EN</div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Head