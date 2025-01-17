import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../components/SectionTitle";
import featuredItem from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = (props) => {
  return (
    <div className="featured-item bg-fixed text-white ">
      <div className="content pt-1 my-20">
        <SectionTitle
          heading="featured item"
          subHeading="Check it out"
        ></SectionTitle>
        <div className="flex gap-10 justify-center items-center pb-20 pt-10 px-36 ">
          <div>
            <img src={featuredItem} alt="" />
          </div>
          <div className="space-y-1">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can i get some?</p>
            <p className="text-sm">
              This week, we're thrilled to introduce our Chef's Special:
              Truffle-Infused Wild Mushroom Risotto 🍄✨—a creamy and aromatic
              delight made with handpicked wild mushrooms, perfectly cooked
              Arborio rice, and a hint of luxurious truffle oil. Served with a
              sprinkle of Parmesan and fresh herbs, it's the ultimate comfort
              dish to warm your soul. Stop by and savor this culinary
              masterpiece! 🍴
            </p>
            <button className="btn btn-outline uppercase border-0 border-b-4 text-white">read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Featured.propTypes = {};

export default Featured;
