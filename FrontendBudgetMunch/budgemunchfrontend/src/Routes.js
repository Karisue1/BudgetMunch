import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FavoritesPage } from './pages/FavoritesPage';
import { NotesDetailPage } from './pages/NoteDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
export const Routes =() => {
    return(
        <Router>
            <Switch>
                <Route path="/">
                    <FavoritesPage/>
                </Route>
                <Route path="/favorites/:listID">
                    <NotesDetailPage/>
                </Route>
                <Route>
                    <NotFoundPage/>
                </Route>
            </Switch>
        </Router>
    )

}