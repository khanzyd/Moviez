import React from "react";
import {} from "react-router-dom";

import heroSectionBanner from "../assets/avengers-end-game.jpg";

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

        <div className="relative z-40 top-28 px-10 text-slate-100 ">
          HeroSection
        </div>
      </div>
    </>
  );
};

export default HeroSection;
