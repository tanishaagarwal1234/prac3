import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>}/>
        </Routes>

    </div>
  );
}

export default App;
