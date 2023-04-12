import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className="static top-0 w-full ease-in-out bg-white">
      <div className="block mx-auto">
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className="block w-32 h-20 mx-auto cursor-pointer sm:w-36 md:w-40 md:h-24"
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
