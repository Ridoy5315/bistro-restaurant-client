import React from 'react';
import PropTypes from 'prop-types';
import { FaGoogle } from 'react-icons/fa6';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = props => {
     const {googleSignIn} = useAuth();
     const axiosPublic = useAxiosPublic();
     const navigate = useNavigate();
     const handleGoogleSignIn = () => {
          googleSignIn()
          .then(res => {
               console.log(res)
               const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                    image: res.user?.photoURL
               }
               axiosPublic.post('/users', userInfo)
               .then(res => {
                    console.log(res.data);
                    navigate('/');
               })
          })
     }
     return (
          <div className=''>
               <div className='flex justify-center'>
                    <button onClick={handleGoogleSignIn} className='flex items-center  gap-1 text-2xl'><FaGoogle></FaGoogle>Google</button>
               </div>
          </div>
     );
};

SocialLogin.propTypes = {
     
};

export default SocialLogin;