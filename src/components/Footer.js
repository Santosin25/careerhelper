import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bottom-0 left-0 right-0 w-full bg-slate-900">
      <div className="flex pt-8 text-gray-50 font-medium flex-row items-center gap-5 justify-center text-left">
        <NavLink
          className="hover:text-indigo-600"
          to="privacyPolicy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy
        </NavLink>
        <NavLink
          className="hover:text-indigo-600"
          to="contract"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </NavLink>
        <NavLink
          className="hover:text-indigo-600"
          to="about"
          target="_blank"
          rel="noopener noreferrer"
        >
          about
        </NavLink>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center w-full h-16">
          <span className="block mx-auto text-xs xs:text-sm text-center font-sm text-gray-50 md:text-md xl:text-lg">
            Copyright &copy;2023 Careerhelper.crypto All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
