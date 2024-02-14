import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import SearchForm from "./searchForm/SearchForm";

const Navbar = () => {
  let location = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);

  return (
    <>
      <div
        className={
          "navbar z-50 h-28 w-full px-[7%] flex items-center justify-between text-slate-50 absolute" 
          // +
          // (!(location.pathname == "/") ? " bg-zinc-500" : " absolute")
        }
      >
        <div className="flex">
          <NavLink className={"text-xl font-bold mr-7"} to="/">
            Home
          </NavLink>
          <NavLink className={"text-xl font-bold mr-7"} to="/">
            movies
          </NavLink>
          <NavLink className={"text-xl font-bold mr-7"} to="/">
            Web series
          </NavLink>
          <NavLink className={"text-xl font-bold mr-7"} to="/">
            more
          </NavLink>
        </div>

        <div className="w-[40%] flex justify-end">
          <SearchForm />
        </div>
      </div>
    </>
  );
};

export default Navbar;
