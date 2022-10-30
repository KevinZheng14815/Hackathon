import './App.css';
import Home from './pages/Home'
import Prediction from './pages/Prediction';
import Navbar from './components/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
    </BrowserRouter>
    
  );
}

export default App;
