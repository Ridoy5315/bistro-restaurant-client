import React from 'react';
import PropTypes from 'prop-types';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
     const [isAdmin, isAdminLoading] = useAdmin();
     const {user, loading} = useAuth();
     const location = useLocation();

     if(loading || isAdminLoading){
          return <span className="loading loading-ring loading-lg"></span>
     }

     if(user && isAdmin){
          return children;
     }
     return <Navigate to='/' state={{from: location}} replace></Navigate>
};

AdminRoute.propTypes = {
     
};

export default AdminRoute;