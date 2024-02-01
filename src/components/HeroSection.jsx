import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { homePageCardsData } from "./heroSectionFuncs";
import MovieCategorySection from "./MovieCategorySection";
import HeroBanner from "./HeroBanner";

export async function loader() {

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmM3YzgxODFiMjhjNWQ5NDM0YjY0NjJkMTNhMDc3ZSIsInN1YiI6IjY1YWZhNDZlNjdiNjEzMDEwYzYwYmQ2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7KVkBXGW5ZP4omCYMfLE53bO4fnMAQoUb-FZQbA8ajs",
    },
  };

  const heroMoviesPromise = await fetch(
    // "https://api.themoviedb.org/3/trending/all/day?language=en-US",
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=US",
    options
  );
  const data = await heroMoviesPromise.json();

  return data;
}

const HeroSection = () => {
  let collectedData = useLoaderData();
  let movies = collectedData.results;

  return (
    <>
    {/* {console.log(heroMovie)} */}
      <HeroBanner movies={movies}/>

      <div className="h-auto relative bg-black sm:py-7">
        <div className="w-full flex flex-col flex-grow ">
          {homePageCardsData.map((section)=>{
            return <MovieCategorySection
            key={section.category}
            url={
              section.url
            }
            category={section.category}
            genre={section.Genre? section.Genre:null}
          />
          })}
          {/* <MovieCategorySection />
            <MovieCategorySection /> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
