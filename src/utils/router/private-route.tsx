import {Navigate, Outlet} from 'react-router-dom';
// import {useAuth} from '../hooks';

export const PrivateRoute = () => {
    // const auth = useAuth();
    const auth = true;
    return (
            auth ? <Outlet/> : <Navigate to='login'/>
    );
};

