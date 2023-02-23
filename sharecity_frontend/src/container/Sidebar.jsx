import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { cultures } from "../utils/data";
import PropTypes from "prop-types";
import { fetchUser } from "../utils/fetchUser";

import logo from "../assets/logo1.png";
const isNotActiveStyle = "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle = "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  hover:text-black transition-all duration-200 ease-in-out capitalize";

const Sidebar = ({ closeToggle }) => {
  const handleCloseSidebar = () => {
    if (closeToggle) closeToggle(false);
  };

  const user = fetchUser();

  console.log(user);

  return (
    <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
      <div className="flex flex-col">
        <Link to="/" className="flex px-5 my-6 w-190 pt-1 items-center" onClick={handleCloseSidebar}>
          <img src={logo} className="w-full" alt="Logo" />
        </Link>
        <div className="flex flex-col gap-5">
          <NavLink to="/" className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)} onClick={handleCloseSidebar}>
            <RiHomeFill /> Home
          </NavLink>
          <h3 className="mt-2 px-5 text-base 2xl:text-xl">Discover Culture</h3>
          {cultures.map((culture) => (
            <NavLink to={`/culture/${culture.name}`} className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)} onClick={handleCloseSidebar} key={culture.name}>
              {culture.name}
            </NavLink>
          ))}
        </div>
      </div>
      {user && (
        <Link to={`user-profile/${user._id}`} className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3" onClick={handleCloseSidebar}>
          <img src={user?.photoURL} className="w-10 h-10 rounded-full " alt="user-profile" />
          <p>{user?.displayName}</p>
        </Link>
      )}
    </div>
  );
};

export default Sidebar;
