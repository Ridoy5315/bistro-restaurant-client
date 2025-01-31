import React from "react";
import PropTypes from "prop-types";
import useCart from "../../hooks/useCart";
import SectionTitle from "../../components/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              confirmButtonText: "Done!",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div>
        <SectionTitle
          heading="wanna add more?"
          subHeading="My Cart"
        ></SectionTitle>
      </div>
      <div className="p-10 bg-gray-100 rounded-2xl ">
        <div className="flex justify-between">
          <h2 className="text-3xl uppercase">Total Orders: {cart.length}</h2>
          <h2 className="text-3xl uppercase">
            Total price: ${totalPrice.toFixed(2)}
          </h2>
          {cart.length ? <Link to='/dashboard/payment'>
            <button className="text-2xl bg-gray-200 py-1 px-6 rounded-xl hover:bg-gray-300">
              Pay
            </button>
          </Link> : <button disabled className="text-2xl bg-gray-200 py-1 px-6 rounded-xl ">
              Pay
            </button>}
        </div>

        {/* table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-lg text-red-600  ml-3"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
