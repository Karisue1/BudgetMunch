import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { AppRoutes } from './Routes';
import { Link, Router } from 'react-router-dom';
import Login from './pages/Login/Login'; 
import { Routes, Route } from 'react-router-dom';
import { FavoritesPage } from './pages/FavoritesPage';
import { NotesDetailPage } from './pages/Details/NoteDetailPage'; 
import { NotFoundPage }  from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className='NavigatingBar'>
        <Navbar />
      </div>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          
          <li><Link to="/login">Login</Link></li>
        </ul>

        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
 
