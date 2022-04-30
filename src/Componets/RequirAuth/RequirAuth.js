import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.int';
import Loading from '../Loading/Loading';

const RequirAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const location = useLocation()
    if(!user){
        if(loading){
            return <Loading></Loading>
        }
        return <Navigate to="/login" state={{from: location}} replace />
    } return children;
};

export default RequirAuth;