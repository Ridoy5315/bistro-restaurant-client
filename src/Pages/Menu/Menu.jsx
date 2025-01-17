import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuImage from '../../assets/menu/banner3.jpg'
import dessertImage from '../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../assets/menu/pizza-bg.jpg'
import saladImage from '../../assets/menu/salad-bg.jpg'
import soupImage from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = (props) => {
     const [menu] = useMenu();
     const desserts = menu.filter(item => item.category === 'dessert')
     const soups = menu.filter(item => item.category === 'soup')
     const salads = menu.filter(item => item.category === 'salad')
     const pizzas = menu.filter(item => item.category === 'pizza')
     const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover image={menuImage} title='our menu'></Cover>
      {/* main cover */}
      <SectionTitle heading="today's offer" subHeading="Don't miss"></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu item */}
      <MenuCategory items={desserts} title='dessert' img={dessertImage}></MenuCategory>
      {/* pizza menu item */}
      <MenuCategory items={pizzas} title='pizza' img={pizzaImage}></MenuCategory>
      {/* Salad menu item */}
      <MenuCategory items={salads} title='salad' img={saladImage}></MenuCategory>
      {/* Soup menu item */}
      <MenuCategory items={soups} title='soup' img={soupImage}></MenuCategory>
    </div>
  );
};

Menu.propTypes = {};

export default Menu;
