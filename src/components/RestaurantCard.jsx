import React from 'react'
import '../RestaurantCard.css'
import yum from '../utils/Assets/yumgo.png'
function RestaurantCard(props) {
  console.log(props)
  return (
    <div className='res-card'>
      <img src={yum} className='res-logo' />
      <h3>{props?.e?.info?.name}</h3>
      <h4></h4>
      <h4>{props?.e?.info?.avgRating} stars</h4>
    </div>
  )
}

export default RestaurantCard