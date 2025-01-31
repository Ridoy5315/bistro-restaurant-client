import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const axiosPublic = axios.create({
     baseURL: 'https://bistro-boss-server-mu-bice.vercel.app'
})

const useAxiosPublic = props => {
     return axiosPublic;
};

useAxiosPublic.propTypes = {
     
};

export default useAxiosPublic;