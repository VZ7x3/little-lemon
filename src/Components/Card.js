import React from 'react'

export default function Card({key,image,title,price,description}) {
  return (
  <div class="card">
    <div class = 'cardcontainer'>
  <img class = 'cardimage' src={image}></img></div>
    <h5 class="cardtitle">{title}</h5>
    <h5 class = 'cardprice'>${price}</h5>
    <p class="carddescription">{description}</p>
    <button class="order">Order a Delivery</button>
  </div>
)
}
