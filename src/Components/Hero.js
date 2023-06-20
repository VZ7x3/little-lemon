import React from 'react'
import { useNavigate } from 'react-router-dom'   
export default function Hero() {
  const navigate = useNavigate()
  return (
    <div class='heroDiv'>
    <h1 class = 'herotitle'>Little Lemon</h1>
    <h3 class = 'herosub-title'> Chicago </h3>
    <p class = 'herobody'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.</p>
    <img class = 'heroimg' src = './restauranfood.jpg' ></img>
    <button class='reserve' onClick={() => navigate("/reservations")}>Reserve a Table</button>
    </div>
  )
}
