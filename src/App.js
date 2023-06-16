import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import BookingPage from './Components/BookingPage';
import HomePage from './Components/HomePage';
function App() {
  return (
  <html class='html'>
  <link href='https://fonts.googleapis.com/css?family=Markazi Text' rel='stylesheet'></link>
  <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'></link>
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
    </header>
    <Routes>
    <Route exact path='/' element={< HomePage/>}></Route>
    <Route exact path='/reservations' element={< BookingPage />}></Route>
    </Routes>
    </Router>
  </html>
  );
}

export default App;
