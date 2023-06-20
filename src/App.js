import './App.css';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import Main from './Components/Main'
function App() {
  return (
  <html className ='html'>
  <link href='https://fonts.googleapis.com/css?family=Markazi Text' rel='stylesheet'></link>
  <link href='https://fonts.googleapis.com/css?family=Karla' rel='stylesheet'></link>
  <Router>
    <header className='header' > 
    <nav className ="navbar">
        <div><img src = '/Logo.svg' alt='logo'></img></div>
        <Link to='/'>Home</Link>
        <Link to = '/about'>About</Link>
        <Link to = '/menu'>Menu</Link>
        <Link to = '/reservations'>Reservations</Link>
        <Link to = '/order'>Order Online</Link>
        <Link to = 'login'>Login</Link>
    </nav>
    </header>
    <>
    <Main />
    </>
    </Router>
  </html>
  );
}

export default App;
