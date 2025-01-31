import React from 'react';
import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';

const UserHome = props => {
     const {user} = useAuth();
     return (
          <div>
               <h2 className='text-3xl'>
                    <span>Hi, Welcome</span>
                    {
                         user?.displayName ? user.displayName : 'Back'
                    }
               </h2>
          </div>
     );
};

UserHome.propTypes = {
     
};

export default UserHome;