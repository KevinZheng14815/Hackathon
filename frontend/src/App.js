import React from 'react';
import './App.css';
import Home from './pages/Home';
import Prediction from './pages/Prediction';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="prediction" element={<Prediction />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
