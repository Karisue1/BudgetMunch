import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesPage } from './pages/FavoritesPage';
import { NotesDetailPage } from './pages/NoteDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FavoritesPage />} />
                <Route path="/favorites/:listID" element={<NotesDetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
}
