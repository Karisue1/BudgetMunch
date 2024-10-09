import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'; 

import { FavoritesPage } from './pages/FavoritesPage';
import { NotesDetailPage } from './pages/NoteDetailPage'; 
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
          <Route path="/notes/:id" element={<NotesDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ul>
    </div>
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