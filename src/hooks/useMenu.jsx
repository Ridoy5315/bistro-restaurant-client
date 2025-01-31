import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = (props) => {
  const axiosPublic = useAxiosPublic();

  const {data: menu=[], isPending: loading, refetch} = useQuery({
    queryKey: ['menu'],
    queryFn: async() => {
      const res = await axiosPublic.get('/menu');
      return res.data;
    }
  })
  return [menu, loading, refetch];
  
};

useMenu.propTypes = {};

export default useMenu;
