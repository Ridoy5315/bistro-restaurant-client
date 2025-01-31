import React from "react";
import PropTypes from "prop-types";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaMoneyBill,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensilSpoon,
} from "react-icons/fa";
import { FaAddressCard, FaEnvelope } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";

const Dashboard = (props) => {

  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  return (
    <div className="flex gap-10">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-400 p-8">
        <ul className="space-y-4">
          {isAdmin ? (
            <>
              <li className="flex items-center gap-2">
                <FaHome className="text-xl"></FaHome>
                <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <FaUtensilSpoon className="text-xl"></FaUtensilSpoon>
                <NavLink to="/dashboard/addItems">Add Items</NavLink>
              </li>
              {/* <li className="flex items-center gap-2">
                <FaMoneyBill className="text-xl"></FaMoneyBill>
                <NavLink to="/dashboard/paymentHistory">
                  Payment History
                </NavLink>
              </li> */}
              <li className="flex items-center gap-2">
                <FaList className="text-xl"></FaList>
                <NavLink to="/dashboard/manageItems">Manage Items</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <FaAd className="text-xl"></FaAd>
                <NavLink to="/dashboard/manageBookings">Mange Bookings</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <FaUsers className="text-xl"></FaUsers>
                <NavLink to="/dashboard/users">All Users</NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-center gap-2">
                <FaHome className="text-xl"></FaHome>
                <NavLink to="/dashboard/userHome">User Home</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <FaCalendar className="text-xl"></FaCalendar>
                <NavLink to="/dashboard/reservation">Reservation</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <FaMoneyBill className="text-xl"></FaMoneyBill>
                <NavLink to="/dashboard/paymentHistory">
                  Payment History
                </NavLink>
              </li>
              <li className="flex items-center gap-2">
                <FaShoppingCart className="text-xl"></FaShoppingCart>
                <NavLink to="/dashboard/cart">My Cart</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <FaAddressCard className="text-xl"></FaAddressCard>
                <NavLink to="/dashboard/review">Review</NavLink>
              </li>
              <li className="flex items-center gap-2">
                <FaList className="text-xl"></FaList>
                <NavLink to="/dashboard/bookings">My Booking</NavLink>
              </li>
            </>
          )}
          {/* Shared nav links */}
          <div className="divider"></div>
          <li className="flex items-center gap-2">
            <FaHome className="text-xl"></FaHome>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaSearch className="text-xl"></FaSearch>
            <NavLink to="/order/salad">Menu</NavLink>
          </li>
          <li className="flex items-center gap-2">
            <FaEnvelope className="text-xl"></FaEnvelope>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
