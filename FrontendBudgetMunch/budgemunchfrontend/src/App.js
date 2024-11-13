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

  return (
    <div class name='navbar'>
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
/* 
Steps to pull changes from a branch
1.git status: to see if everything is up to date
2.git branch: to see what branch you are in
3.git checkout Main(or w.e branch): to get into the branch you want to pull changes from
4.git branch: to check you're in the right branch
5.git pull: pulls the current branches changes to your local device
6.git checkout ArelyBranch(or your branch): to get into your branch
7.git merge Main(or the previous branch you pulled):to merge that branches changes, to replace your branches' code
git merge merges the previous branch into your current branch
*/

