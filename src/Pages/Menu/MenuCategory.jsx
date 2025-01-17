import React from "react";
import PropTypes from "prop-types";
import MenuItem from "../Shared/MenuItem";
import Cover from "../Shared/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title,  img}) => {
  return (
     <div className="pt-8">
          {title && <Cover image={img} title={title}></Cover>}
          <div className="grid grid-cols-2 gap-8 my-16">
            {items.map((item) => (
              <MenuItem key={item._id} item={item}></MenuItem>
            ))}
          </div>
          <Link to={`/order/${title}`} className="btn btn-outline uppercase border-0 border-b-4 text-black">read more</Link>
     </div>
)};

MenuCategory.propTypes = {};

export default MenuCategory;
