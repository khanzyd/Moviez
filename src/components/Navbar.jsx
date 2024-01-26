import React, { useEffect, useRef, useState } from "react";
import gsap, { Power3 } from "gsap";
import { NavLink } from "react-router-dom";

import { HiSearch } from "react-icons/hi";

const Navbar = () => {
  let [height, setHeight] = useState(0);
  let [searching, setSearching] = useState(false);
  let searchForm = useRef(null);
  let formOpenbutton = useRef(null);
  let formInput = useRef(null);

  let openForm = () => {
    let tl = gsap.timeline();

    tl.set(formOpenbutton, {
      display: "none",
    }).set(searchForm, {
      display: "block",
    }).fromTo(
      searchForm,{
        x: 200,
        width: 0,
        height: 0,
      },
      {
        width: "100%",
        height: "100%",
        x: 0,
        duration: 0.75,
        ease: Power3.easeInOut,
      });
  };

  useEffect(() => {

  }, []);

  return (
    <>
      <div className="navbar z-50 h-28 w-full px-10 flex items-center justify-between text-slate-50 absolute">
        <div>
          <NavLink className={"text-xl font-bold"} to="/">
            Home
          </NavLink>
        </div>

        <div className="flex justify-center items-center p-2">
          <button
            className="border-2 rounded-[100%] py-2 px-3"
            ref={(el) => {
              formOpenbutton = el;
            }}
            onClick={openForm}
          >
            <HiSearch className="text-xl" />
          </button>

          <div
            className="justify-center items-center overflow-hidden hidden"
            ref={(el) => {
              searchForm = el;
            }}
          >
            <input
              className="bg-slate-200 rounded-full px-4 py-1 text-gray-900 font-semibold tracking-wider selection:bg-neutral-900 selection:text-slate-100 outline-none "
              type="text"
              placeholder="Search"
              ref={(el) => {
                formInput = el;
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
