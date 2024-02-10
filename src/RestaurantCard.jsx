import React from 'react'
import './RestaurantCard.css'
import yum from './yumgo.png'
function RestaurantCard() {
  return (
    <div className='res-card'>
      <img src={yum} className='res-logo' />
      <h3>megna foods</h3>
      <h4>Briyani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
    </div>
  )
}

export default RestaurantCard