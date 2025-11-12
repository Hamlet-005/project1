import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About'
import Home from './Home'
import Header from './Header';

function App() {

  return (
    <div>
      <Header/>
       <Router>
      <nav>
        <Link to="/">Home</Link> or <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
