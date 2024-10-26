import React, { useState } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'; 

import { FavoritesPage } from './pages/FavoritesPage';
import Profile from './pages/Profile'; 
import { NotFoundPage } from './pages/NotFoundPage';


function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <><div class name='navbar'>
      <Navbar/>
      <br></br>
    </div>
    <div className="App">
        <ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ul>
      </div></>
  );
}

export default App;