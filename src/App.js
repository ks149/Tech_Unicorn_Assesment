import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
   <>
   <Router>
   <Navbar/>
   <Hero/>
   <Products/>
   <Routes>
    <Route path='/' exact/>
   </Routes>
   </Router>
   </>
  );
}

export default App;
