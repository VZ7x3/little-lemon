import React from 'react'
import { useNavigate } from 'react-router-dom'   
export default function HeroBooking() {
  const navigate = useNavigate()
  return (
    <div className='heroDiv'>
    <h1 className = 'herotitle'>Little Lemon</h1>
    <h3 className = 'herosub-title'> Chicago </h3>
    <p className = 'herobody'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam.</p>
    <img className = 'heroimg' alt='heroimg' src = './restauranfood.jpg' ></img>
    <button className='reserve' onClick={() => navigate("/")}>Go Back</button>
    </div>
  )
}
