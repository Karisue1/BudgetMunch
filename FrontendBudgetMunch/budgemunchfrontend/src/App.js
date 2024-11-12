import React, { useState } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'; 
import { PrivateRoute } from './pages/PrivateRoute';
import { FavoritesPage } from './pages/FavoritesPage';
import Profile from './pages/Profile'; 
import { NotFoundPage } from './pages/NotFoundPage';
import { AboutUs } from './pages/AboutUs';
import ResetPassword from './pages/Login/ResetPassword';


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
            <Route element={<PrivateRoute/>}>
              <Route element={<Home/> }path="/favorites" exact/>
              <Route element={< Profile />} path="/profile" exact/>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/reset-password" element={<ResetPassword/>}/>
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </ul>
      </div></>
  );
}

export default App;