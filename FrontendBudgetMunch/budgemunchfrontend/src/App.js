import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { AppRoutes } from './Routes';
import { Link } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  return (
    <><div className="App">
      <Navbar />
      <div>
        <Login />
      </div>
      <ul>
        <Home />
        <Link to="/">Favorites</Link>

      </ul>
      <ul>
        <AppRoutes />
        <Link to="/favorites/:listID">Details</Link>

      </ul>
    </div><Routes>
        <Route path="/" element={<FavoritesPage />} />
        <Route path="/favorites/:listID" element={<NotesDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes></>
  );
}

export default App;
