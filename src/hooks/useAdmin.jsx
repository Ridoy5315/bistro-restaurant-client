import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = props => {
     const {user, loading} = useAuth();
     const axiosSecure = useAxiosSecure();
     const {data: isAdmin, isPending: isAdminLoading} = useQuery({
          queryKey: [user?.email, 'isAdmin'],
          enabled: !loading,
          queryFn: async()=> {
               const res = await axiosSecure.get(`/users/admin/${user.email}`);
               return res.data?.admin;
          }
     })
     return [isAdmin, isAdminLoading]
};

useAdmin.propTypes = {
     
};

export default useAdmin;