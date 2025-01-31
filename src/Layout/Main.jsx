import React from "react";
import PropTypes from "prop-types";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = (props) => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}

      <Outlet></Outlet>

      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

Main.propTypes = {};

export default Main;
