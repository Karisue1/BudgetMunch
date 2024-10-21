import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'; 

import { FavoritesPage } from './pages/FavoritesPage';
import { NotesDetailPage } from './pages/Profile'; 
import { NotFoundPage } from './pages/NotFoundPage';


function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <br></br>
      <ul>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/> 
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ul>
    </div>
  );
}

export default App;