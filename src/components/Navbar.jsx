import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar z-50 h-28 w-full px-10 flex items-center text-slate-50 absolute">
        <NavLink
        className={"text-xl font-bold"} 
        to="/"

        >Home</NavLink>
      </div>
    </>
  );
};

export default Navbar;
