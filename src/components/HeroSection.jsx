import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import GenreButton from "./GenreButton";

import { FaPlay } from "react-icons/fa";
import { updateHeroMovieData } from "./heroSectionFuncs";

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
  let imgRef = useRef(null);


  let movies = useLoaderData().results;
  movies = movies.slice(0, 10);

  function updateHeroMovie(current) {
    updateHeroMovieData(movies[current]).then((data) => setHeroMovie(data));
  }

  useEffect(() => {
    updateHeroMovie(currentMovie.current);

    let interval = setInterval(() => {
      if (currentMovie.current < 9) {
        currentMovie.current = currentMovie.current + 1;
      } else {
        currentMovie.current = 0;
      }
      updateHeroMovie(currentMovie.current);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {console.log(heroMovie?.bannerImage)}
      <div className="hero-container h-full w-screen max-w-full bg-black">
        <div className="img-main absolute z-30 h-screen w-screen max-w-full">
          <img
            src={`${heroMovie?.bannerImage}`}
            alt="hero background image"
            className="absolute z-10 h-full w-10/12 right-0 object-cover constrast-125 shadow-myshadow "
            ref={(el) => imgRef = el}
          />
          <div className="absolute z-10 img-container h-full w-10/12 right-0 shadow-[inset_350px_0px_190px_50px_black]"></div>
        </div>

        <div className="relative z-40 top-32 px-10 text-slate-100 ">
          <span className="rounded-full text-red-600 border-2 border-slate-100 px-3.5 py-2 text-lg font-bold select-none">
            <span className="text-slate-100">#</span>Trending🔥
          </span>

          <div className="h-56 w-[50%] mt-36 ">
            {heroMovie?.movieGenres.map((genre) => {
              return <GenreButton key={genre.id} genre={genre} />;
            })}
            <div className="h-auto py-6">
              <h2 className="text-6xl font-semibold">
                {heroMovie?.movieTittle}
              </h2>
              <p className="my-5 font-medium text tracking-wide">
                {heroMovie?.movieOverview}
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
