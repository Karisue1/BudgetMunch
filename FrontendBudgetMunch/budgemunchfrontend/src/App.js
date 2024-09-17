import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { AppRoutes } from './Routes';
import { Link } from 'react-router-dom';
import Login from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom';
import { FavoritesPage } from './pages/FavoritesPage';
import { NotesDetailPage } from './pages/NoteDetailPage'; 
import { NotFoundPage } from './pages/NotFoundPage';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
     
    </div>
  );
}

export default App;
