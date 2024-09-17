import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'; 
import { FavoritesPage } from './pages/FavoritesPage';
import { NotesDetailPage } from './pages/NoteDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import Login from './pages/Login/Login';
import reportWebVitals from './reportWebVitals';



const router = createBrowserRouter([ {
  path: "/",
  element: <App />,
  children: [
    { path: "favorites", element: <FavoritesPage /> },
    { path: "notes/:id", element: <NotesDetailPage /> },
    { path: "*", element: <NotFoundPage /> },
  ],
},{
    path: "/",
    elemnet: <App/>,
  },
  {
    path: "Login",
    elemnet: <Login/>,
  }
]);
  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

