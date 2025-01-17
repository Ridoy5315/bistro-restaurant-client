
import PropTypes from "prop-types";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = (props) => {
  const  [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <section className="mb-20">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-8">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
      <button className="btn btn-outline uppercase border-0 border-b-4 mt-10 ">view all menu</button>
      </div>
    </section>
  );
};

PopularMenu.propTypes = {};

export default PopularMenu;
