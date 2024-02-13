import React, { useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./style.scss";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="movieCardWrapper h-auto lg:mr-5 mr-3 text-center flex flex-col 2xl:min-w-[18%] lg:min-w-[22%] md:min-w-[24%] sm:min-w-[28%] min-w-[32%]">
        <div className="movieCard">
          <Link to={`explore/${movie.movieId}`}>
            <div className="h-full object-cover">
              <img
                src={movie.posterImage}
                alt=""
                className="h-full m-auto rounded-xl"
              />
            </div>

            <div className="cardInfoWrapper">
              <p className="text-center my-2 smob:text-lg text-sm font-bold text-slate-100">
                {movie.movieTittle ? movie.movieTittle : "Not Available"}
              </p>
              <span className="text-xs font-medium text-slate-300 text-center">
                {movie.movieGenres.map((genre, index) => {
                  if (!genre) {
                  } else {
                    if (index == movie.movieGenres.length - 1) {
                      return genre ? genre.name : " ";
                    }
                    return genre?.name + ", ";
                  }
                })}
              </span>
            </div>
          </Link>
        </div>

        <div
          className="mt-1 text-slate-100 xl:text-xl font-semibold lg:text-lg md:text-base sm:text-sm text-xs cursor-pointer hover:text-red-600"
          onClick={() => navigate(`explore/${movie.movieId}`)}
        >
          {movie.movieTittle ? movie.movieTittle : "Not Available"}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
