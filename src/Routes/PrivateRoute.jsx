import React from 'react';
import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
     const location = useLocation();
     const {user, loading} = useAuth();

     if(loading){
          return <span className="loading loading-ring loading-lg"></span>
     }

     if(user){
          return children;
     }
     return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

PrivateRoute.propTypes = {
     
};

export default PrivateRoute;