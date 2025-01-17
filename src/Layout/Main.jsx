import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = props => {
     return (
          <div>
               <Navbar></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
          </div>
     );
};

Main.propTypes = {
     
};

export default Main;