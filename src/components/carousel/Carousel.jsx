import React, { useEffect, useState } from "react";
import fetchMovies from "../../utils/fetchMovies";
import { constructMovieData } from "../../utils/homepageFuncs";
import MovieCard from "../movieCard/MovieCard";
import "./style.scss";

const carousel = ({ url, params, category }) => {
  let [carouselMovies, setCarouselMovies] = useState(null);

  let generateMoviesList = async (fetchedMovies) => {
    let data = await Promise.all(
      fetchedMovies.results?.map(async (movie) => {
        return await constructMovieData(movie);
      })
    );
    return data;
  };

  useEffect(() => {
    fetchMovies(url, params).then((data) => {
      console.log(data);
      generateMoviesList(data).then((movies) => {
        setCarouselMovies(movies);
      });
    });
  }, []);

  return (
    <>
      <div className=" px-[7%] pb-1 sm:pt-2 pt-8">
        <h3 className="md:text-3xl sm:text-2xl text-xl font-extrabold text-slate-100 xl:mt-8 md:mt-6 mt-3 mb-3">
          {category}
        </h3>
        <div className="cardsContainerWrapper w-full overflow-x-scroll">
          <div className="cardContainer flex pt-8 pb-4 min-h-60 ">
            {carouselMovies?.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default carousel;
