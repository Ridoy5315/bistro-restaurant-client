import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
const axiosSecure = axios.create({
     baseURL: 'https://bistro-boss-server-mu-bice.vercel.app'
})
const useAxiosSecure = props => {
     const navigate = useNavigate();
     const {logOut} = useAuth();
     axiosSecure.interceptors.request.use(function(config) {
          const token = localStorage.getItem('access-token')
          config.headers.authorization = `Bearer ${token}`;
          return config;
     }, function (error){
          return Promise.reject(error);
     });

     //interceptors 401 and 403 status
     axiosSecure.interceptors.response.use(function(response){
          return response;
     }, async(error) => {
          const status = error.response.status;
          if(status === 401 || status === 403){
               await logOut();
               navigate('/login')
          }
          return Promise.reject(error);
     })
     return axiosSecure;
};

useAxiosSecure.propTypes = {
     
};

export default useAxiosSecure;