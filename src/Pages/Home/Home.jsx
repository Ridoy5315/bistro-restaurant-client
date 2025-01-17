import React from "react";
import PropTypes from "prop-types";
import Banner from "./Banner";
import Category from "./Category";
import BestroBoss from "./BestroBoss";
import PopularMenu from "./PopularMenu";
import Featured from "./featured/Featured";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";
const Home = (props) => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <BestroBoss></BestroBoss>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

Home.propTypes = {};

export default Home;
