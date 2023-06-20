import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import BookingPage from './BookingPage';
import HomePage from './HomePage';

export default function Header() {
  return (
    <Router>
    <header class='header'> 
    <nav class="navbar">
        <div><img src = '/Logo.svg' ></img></div>
        <Link to='/'>Home</Link>
        <Link to = '/about'>About</Link>
        <Link to = '/menu'>Menu</Link>
        <Link to = '/reservations'>Reservations</Link>
        <Link to = '/order'>Order Online</Link>
        <Link to = 'login'>Login</Link>
    </nav>
    <Routes>
    <Route exact path='/' element={< HomePage/>}></Route>
    <Route exact path='/reservations' element={< BookingPage />}></Route>
    </Routes>
    </header>
    </Router>
  )
}
