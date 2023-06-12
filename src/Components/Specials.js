import React from 'react'
import Card from './Card.js'
export default function Specials() {
  const specials = [
    {
      title: "Greek Salad",
      price: "12.99",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.",
      getImageSrc: () => require("../images/Greek Salad.jpg"),
    },
    {
      title: "Bruchetta",
      price: "5.99",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.",
      getImageSrc: () => require("../images/Bruchetta.jpg"),
    },
    {
      title: "Lemon Dessert",
      price: "5.00",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.",
      getImageSrc: () => require("../images/Lemon Dessert.jpg"),
    },]
  return (
    <div class='specials'>
      <h1 class='thisweek'>This week specials!</h1>
      <button class='onlinemenu'>Online Menu</button>
      <div class = 'cards'>
      {specials.map((special)=>(
        <Card
         key = {specials.indexOf(special)}
         title = {special.title}
         price = {special.price}
         description ={special.description}
         image = {special.getImageSrc()}
         />
      ))
      }
      </div>

      </div>

  )
}
