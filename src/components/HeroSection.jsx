import React from "react";
import {} from "react-router-dom";

import heroSectionBanner from "../assets/avengers-end-game.jpg";
import { FaPlay } from "react-icons/fa";


const HeroSection = () => {
  return (
    // shadow-[inset_550px_0px_190px_50px_#000000]
    <>
      <div className="hero-container h-full w-screen max-w-full bg-black">
        <div className="img-main absolute z-30 h-screen w-screen max-w-full">
          <img
            src={heroSectionBanner}
            alt="hero background image"
            className="absolute z-10 h-full w-10/12 right-0 object-cover constrast-125 shadow-myshadow "
          />
          <div className="absolute z-10 img-container h-full w-10/12 right-0 shadow-[inset_350px_0px_190px_50px_black]"></div>
        </div>

        <div className="relative z-40 top-32 px-10 text-slate-100 ">
          <span className="rounded-full text-red-600 border-2 border-slate-100 px-3.5 py-2 text-lg font-bold select-none">
            <span className="text-slate-100">#</span>Trending🔥
          </span>

          <div className="h-56 w-[50%] mt-36 ">
            <button className="rounded-full border-2 border-slate-100 px-3.5 py-1 mr-5 text-sm font-semibold">
              Animation
            </button>
            <button className="rounded-full border-2 border-slate-100 px-3.5 py-1 text-sm font-semibold">
              Sci-Fi
            </button>
            <div className="h-auto py-6">
              <h2 className="text-6xl font-semibold">
                spider-man : Across the spider verse
              </h2>
              <p className="my-5 font-medium text tracking-wide">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                nisi at esse voluptatibus sequi, itaque suscipit! Distinctio, ab
                recusandae sapiente aut in natus sit necessitatibus esse.
                Ducimus atque repellat at, culpa soluta dicta magni enim in
                facilis eum perferendis incidunt natus quam mollitia qui?
              </p>
              <button className="text-xl font-semibold border-2 border-transparent text-black bg-slate-100 rounded-full px-5 py-1 mr-7 hover:border-2 hover:text-slate-100 hover:bg-black hover:border-slate-100 inline-flex justify-center items-center">
                <span>
                  <FaPlay className="mr-2 text-lg" />
                </span>
                Trailer
              </button>
              <button className="text-xl font-medium border-2 border-slate-100 rounded-full px-5 py-1">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
