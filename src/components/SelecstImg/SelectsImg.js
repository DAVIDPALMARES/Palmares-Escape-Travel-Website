import React from 'react'
import './SelectsImgStyles.css'


function SelectImg({bgImg , text}) {
  return (
    <div className='selects-location'>
    <img src={bgImg} alt='/' />
      <div className='overlay'>
      <p>{text}</p>

      </div>
    </div>
  )
}
export default SelectImg
