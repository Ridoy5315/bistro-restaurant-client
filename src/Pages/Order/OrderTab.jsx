import React from "react";
import PropTypes from "prop-types";
import FoodCard from "../../components/FoodCard";

const OrderTab = ({items}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

OrderTab.propTypes = {};

export default OrderTab;
