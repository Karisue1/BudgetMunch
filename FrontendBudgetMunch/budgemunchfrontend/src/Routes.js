import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesPage } from './pages/FavoritesPage';
import { NotesDetailPage } from './pages/NoteDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import Login from './pages/Login/Login';
import Home from './pages/Home'; 


export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/notes/:id" element={<NotesDetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}
