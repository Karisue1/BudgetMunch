import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'; 
import { FavoritesPage } from './pages/FavoritesPage';
import { NotFoundPage } from './pages/NotFoundPage';
import Login from './pages/Login/Login';
import reportWebVitals from './reportWebVitals';
import { AboutUs } from './pages/AboutUs';
//import './index.css';

// Create the router with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "favorites", element: <FavoritesPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "/about-us",
    element: <AboutUs />,  // Fixed typo here (elemnet -> element)
  },
]);
//important code to route the pages together
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();



