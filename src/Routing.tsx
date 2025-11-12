import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './About'
import Home from './Home'

function Routing(){
    return(
        <div>
        <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> or <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
    )
}
export default Routing;