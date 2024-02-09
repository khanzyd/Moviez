import React, { useEffect, useState } from "react";

import { constructMovieData } from "../utils/heroSectionFuncs";
import MovieCard from "./MovieCard";

const MovieCategorySection = ({ url, category }) => {
  let [moviesData, setMoviesData] = useState();

  async function fetchMovies(URL) {
    // "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=IN",
    const MoviesPromise = await fetch(URL, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmM3YzgxODFiMjhjNWQ5NDM0YjY0NjJkMTNhMDc3ZSIsInN1YiI6IjY1YWZhNDZlNjdiNjEzMDEwYzYwYmQ2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7KVkBXGW5ZP4omCYMfLE53bO4fnMAQoUb-FZQbA8ajs",
      },
    });
    const MoviesData = await MoviesPromise.json();
    return MoviesData;
  }

  let generateMoviesList = async (fetchedMovies) => {
    let data = await Promise.all(
      fetchedMovies.results?.map(async (movie) => {
        return await constructMovieData(movie);
      })
    );
    return data;
  };

  useEffect(() => {
    // console.log("running section useEffect");
    fetchMovies(url).then((data) => {
      generateMoviesList(data).then((movies) => {
        setMoviesData(movies);
      });
    });
  }, []);

  return (
    <>
      {/* {console.log(moviesData)} */}
      <div className="h-full px-[7%] pb-1 ">
        <h3 className="md:text-3xl sm:text-2xl text-xl font-extrabold text-slate-100 xl:mt-8 md:mt-6 mt-3 mb-3">
          {category ? category : "Movies"}
        </h3>

        <div className="cardsContainerWrapper w-[100%] overflow-x-scroll">
          <div className="cardsContainer flex py-3 min-h-48">
            {moviesData &&
              moviesData?.map((movie) => {
                return <MovieCard key={movie.movieId} movie={movie} />;
              })}
            {}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCategorySection;
