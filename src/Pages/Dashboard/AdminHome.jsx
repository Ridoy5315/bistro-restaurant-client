import React from "react";
import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaMoneyBill1Wave, FaProductHunt, FaUsers } from "react-icons/fa6";
import { GiFoodTruck } from "react-icons/gi";

const AdminHome = (props) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome</span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="grid grid-cols-4 gap-3 my-8">
        {/* number - one */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white p-5 rounded-2xl">
          <FaMoneyBill1Wave className="text-5xl"></FaMoneyBill1Wave>
          <div>
          <div className="stat-value">${stats?.revenue}</div>
          <div className="stat-title text-white">Revenue</div>
          </div>
        </div>
        {/* number - two */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white p-5  rounded-2xl">
          <FaUsers className="text-5xl"></FaUsers>
          <div>
          <div className="stat-value">{stats?.users}</div>
          <div className="stat-title text-white">Customers</div>
          </div>
        </div>
        {/* number - three */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white p-5  rounded-2xl">
          <FaProductHunt className="text-5xl"></FaProductHunt>
          <div>
          <div className="stat-value">{stats?.menuItems}</div>
          <div className="stat-title text-white">Products</div>
          </div>
        </div>
        {/* number - four */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white p-5 rounded-2xl">
          <GiFoodTruck className="text-5xl"></GiFoodTruck>
          <div>
          <div className="stat-value">{stats?.orders}</div>
          <div className="stat-title text-white">Orders</div>
          </div>
        </div>
      </div>
    </div>
  );
};

AdminHome.propTypes = {};

export default AdminHome;
