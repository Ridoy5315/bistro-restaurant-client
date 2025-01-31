import React from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = (props) => {
  const {name, category, recipe, price, _id} = useLoaderData();
  console.log(name)

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  
    const onSubmit = async (data) => {
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        const menuItem = {
          name: data.name,
          category: data.category,
          recipe: data.recipe,
          image: res.data.data.display_url,
          price: parseFloat(data.price),
        };
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
        if (menuRes.data.modifiedCount > 0) {
          reset();
          Swal.fire({
            title: `${data.name} is updated to the menu!`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    };
  return (
    <div>
      <h2 className="text-3xl">UPDATE ITEM</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              type="text"
              defaultValue={name}
              placeholder="Recipe name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-6 my-5">
            {/* category */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            {/* Price */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                placeholder="Price"
                defaultValue={price}
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Recipe details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
          <div className="my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn">
            Updated menu item
          </button>
        </form>
      </div>
    </div>
  );
};

UpdateItem.propTypes = {};

export default UpdateItem;
