import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children})=> {
    const user = null;


    if (!user) return <Navigate to="/login" replace/>

    return children;
}