import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

import GenreButton from "./GenreButton";

import { FaPlay } from "react-icons/fa";
import { updateHeroMovieData, heroRevealAnimation } from "./heroSectionFuncs";

export async function loader() {
  const promise = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=US",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmM3YzgxODFiMjhjNWQ5NDM0YjY0NjJkMTNhMDc3ZSIsInN1YiI6IjY1YWZhNDZlNjdiNjEzMDEwYzYwYmQ2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7KVkBXGW5ZP4omCYMfLE53bO4fnMAQoUb-FZQbA8ajs",
      },
    }
  );
  const data = await promise.json();
  return data;
}

const HeroSection = () => {
  let [heroMovie, setHeroMovie] = useState(null);
  let currentMovie = useRef(0);

  let movies = useLoaderData().results;
  // movies = movies.slice(6, 16);

  function updateHeroMovie(next) {
    let newSrc;
    updateHeroMovieData(movies[next]).then((data) => {
      newSrc = data.bannerImage;
      setHeroMovie(data);
      heroRevealAnimation(newSrc);
    });
  }

  useEffect(() => {
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
    <>
      {console.log(heroMovie?.bannerImage)}
      <div className="hero-container h-full  w-screen max-w-full bg-black">
        <div className="img-main sm:absolute relative sm:z-30 sm:h-screen w-screen max-w-full h-[50%]">
          <img
            src={``}
            alt="hero background image"
            className="imgCont sm:absolute z-10  lg:w-10/12 sm:w-[90%] h-full w-full right-0 object-cover constrast-125 shadow-myshadow bg-center "
          />
          <span className="sm:hidden visible absolute bottom-4 left-4 z-20 rounded-full text-red-600 border-2 border-slate-100 select-none font-semibold text-base px-2 py-[2px]">
            <span className="text-slate-100">#</span>Trending🔥
          </span>

          <div className="absolute z-10 img-container sm:h-full lg:w-10/12 sm:w-[90%] sm:shadow-[inset_250px_0px_190px_50px_black] w-full shadow-[inset_0px_-50px_32px_0px_black] sm:right-0 lg:shadow-[inset_350px_0px_190px_50px_black] h-[100%] top-0"></div>
        </div>

        <div className="relative z-40 sm:h-[calc(100%-7rem)] sm:top-28 pl-[5%] h-[50%] text-slate-100 ">
          <span className="hidden sm:inline-block rounded-full text-red-600 border-2 border-slate-100 sm:px-3 sm:py-2 sm:text-lg sm:font-bold select-none font-semibold text-base px-2 py-[3px]">
            <span className="text-slate-100">#</span>Trending🔥
          </span>

          <div className="hero-text 2xl:max-h-[50%] lg:w-[50%] sm:w-[45%] sm:max-h-[65%] w-[90%] sm:absolute sm:top-[30%] py-5  overflow-y-scroll scrollbar-hide h-[90%]">
            {heroMovie?.movieGenres.map((genre) => {
              return <GenreButton key={genre.id} genre={genre} />;
            })}
            <div className="h-auto py-2 ">
              <h2 className="hero-text lg:text-6xl sm:text-4xl text-3xl font-semibold">
                {heroMovie?.movieTittle}
              </h2>
              <div className="">
                <p className="hero-text my-5 lg:font-medium font-normal lg:text-base text-sm tracking-wide">
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
    </>
  );
};

export default HeroSection;
