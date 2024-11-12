import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ()=> {
    let auth = {'token': false}

    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    ) ;
}
export default PrivateRoute