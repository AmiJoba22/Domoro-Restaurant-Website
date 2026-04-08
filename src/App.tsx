import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react'
import Navbar from './components/navbar';
import './App.css'

import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Reserve from './pages/Reserve';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Router>
          <div className="min-h-screen bg-domo-bg">
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer is OUTSIDE Routes so it stays at the bottom of every page */}
    
      </div>
      </Router>

  );
}

export default App
