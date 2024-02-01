import React, { useEffect, useRef, useState } from "react";
import gsap, { Power3 } from "gsap";
import { NavLink } from "react-router-dom";

import { HiSearch } from "react-icons/hi";
import { _config } from "gsap/gsap-core";

const Navbar = () => {
  let openSearchBar = useRef(false);
  let searchForm = useRef(null);
  let formOpenbutton = useRef(null);
  let formInput = useRef(null);
  let searchbar = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();
    let anim = tl
      .set(formOpenbutton, {
        display: "none",
      })
      .set(searchForm, {
        display: "block",
      })
      .fromTo(
        searchForm,
        {
          xPercent: 10,
          width: 0,
          height: 0,
          opacity: 0,
        },
        {
          width: "20vw",
          height: "100%",
          opacity: 1,
          xPercent: 0,
          duration: 0.6,
          ease: Power3.easeInOut,
        }
      );
    anim.pause();

    let checkifSearchbarOpen = (e) => {
      if (
        !searchbar.contains(e.target) &&
        openSearchBar.current == true &&
        !formInput.value
      ) {
        // console.log("Clicked outside of searchbar closing search bar");
        anim.reverse();
        openSearchBar.current = false;
      } else if (
        searchbar.contains(e.target) &&
        openSearchBar.current == false
      ) {
        anim.play();
        openSearchBar.current = true;
      }
    };

    // console.log("rendered");
    document.body.addEventListener("click", checkifSearchbarOpen);
    return () => {
      document.body.removeEventListener("click", checkifSearchbarOpen);
    };
  });

  return (
    <>
      <div className="navbar z-50 h-28 w-full px-[7%] flex items-center justify-between text-slate-50 absolute ">
        <div>
          <NavLink className={"text-xl font-bold"} to="/">
            Home
          </NavLink>
        </div>

        <div
          className="flex justify-center items-center p-2"
          ref={(el) => {
            searchbar = el;
          }}
        >
          <button
            className="border-2 rounded-[100%] py-2 px-3"
            ref={(el) => {
              formOpenbutton = el;
            }}
          >
            <HiSearch className="text-xl" />
          </button>

          <div
            className="justify-center items-center overflow-hidden hidden "
            ref={(el) => {
              searchForm = el;
            }}
          >
            <input
              className="bg-sky-200 rounded-full px-4 py-1 text-gray-900 font-semibold tracking-wider selection:bg-neutral-900 w-full selection:text-slate-100 outline-none "
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
