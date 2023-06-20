import React from 'react'

export default function Card({image,title,price,description}) {
  return (
  <div className="card">
    <div className = 'cardcontainer'>
  <img className = 'cardimage' alt='cardimage' src={image}></img></div>
    <h5 className="cardtitle">{title}</h5>
    <h5 className = 'cardprice'>${price}</h5>
    <p className="carddescription">{description}</p>
    <button className="order">Order a Delivery</button>
  </div>
)
}
