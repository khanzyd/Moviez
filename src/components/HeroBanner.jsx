import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

import GenreButton from "./GenreButton";
import {
  constructMovieData,
  heroRevealAnimation,
} from "../utils/heroSectionFuncs";

const HeroBanner = ({ movies }) => {
  let [heroMovie, setHeroMovie] = useState(null);
  let currentMovie = useRef(0);

  function updateHeroMovie(next) {
    let newSrc;
    constructMovieData(movies[next]).then((data) => {
      newSrc = data.bannerImage;
      setHeroMovie(data);
      heroRevealAnimation(newSrc);
    });
  }

  useEffect(() => {
    // console.log("runnig banner useeffect");
    updateHeroMovie(currentMovie.current);
    let interval = setInterval(() => {
      if (currentMovie.current < movies.length - 1) {
        currentMovie.current = currentMovie.current + 1;
      } else {
        currentMovie.current = 0;
      }
      updateHeroMovie(currentMovie.current);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hero-container h-full  w-screen max-w-full bg-black">
      <div className="img-main sm:absolute relative sm:z-30 sm:h-screen w-screen max-w-full h-[60%]">
        <img
          src={``}
          alt="hero background image"
          className="imgCont sm:absolute z-10  lg:w-10/12 sm:w-[85%] h-full w-full right-0 object-cover constrast-125 shadow-myshadow bg-center "
        />
        <span className="sm:hidden visible absolute bottom-4 left-[7%] z-20 rounded-full text-red-600 border-2 border-slate-100 select-none font-semibold text-base px-2 py-[2px]">
          <span className="text-slate-100">#</span>Trending🔥
        </span>

        <div className="absolute z-10 img-container sm:h-full lg:w-10/12 sm:w-[85%] sm:shadow-[inset_250px_-150px_190px_50px_black] w-full shadow-[inset_0px_-50px_32px_0px_black] sm:right-0 lg:shadow-[inset_350px_-150px_190px_50px_black] h-[100%] bottom-0"></div>
      </div>

      <div className="relative z-40 sm:h-[calc(100%-7rem)] sm:top-28 pl-[7%] h-[40%] text-slate-100 ">
        <span className="hidden sm:inline-block rounded-full text-red-600 border-2 border-slate-100 sm:px-3 sm:py-2 sm:text-lg sm:font-bold select-none font-semibold text-base px-2 py-[3px]">
          <span className="text-slate-100">#</span>Trending🔥
        </span>

        <div className="hero-text 2xl:max-h-[50%] lg:w-[50%] sm:w-[45%] sm:max-h-[65%] w-[90%] sm:absolute sm:top-[30%] py-5  overflow-y-scroll scrollbar-hide h-[90%]">
          {heroMovie?.movieGenres.map((genre) => {
            if (genre) {
              return <GenreButton key={genre.id} genre={genre} />;
            } else {
              return;
            }
          })}
          <div className="h-auto py-2 ">
            <h2 className="hero-text lg:text-6xl sm:text-4xl text-2xl font-semibold">
              {heroMovie?.movieTittle}
            </h2>
            <div className="">
              <p className="hero-text sm:my-5 lg:font-medium font-normal lg:text-base text-sm tracking-wide my-2">
                {heroMovie?.movieOverview}
              </p>
            </div>
            <div className="hero-text">
              <button className="sm:text-xl sm:font-semibold sm:px-5 sm:py-1 sm:mr-7 text-sm font-medium px-3 py-[2px] mr-5 border-2 border-transparent text-black bg-slate-100 rounded-full hover:text-slate-100 hover:bg-black hover:border-slate-100 inline-flex justify-center items-center">
                <span>
                  <FaPlay className="mr-2 sm:text-lg text-base" />
                </span>
                Trailer
              </button>
              <button className="sm:text-xl sm:font-medium sm:px-5 sm:py-1 text-sm font-medium px-3 py-[2px] mr-5 border-2 border-slate-100 rounded-full">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
