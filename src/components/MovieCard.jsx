import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap, { Power3 } from "gsap";

const MovieCard = ({ movie }) => {
  let card = useRef();
  let cardData = useRef();
  const navigate = useNavigate();
  let tween;

  // console.log(movie);
  useEffect(() => {
    tween = gsap.to(cardData, {
      bottom: "0",
      top: "0",
      duration: 0.5,
      ease: Power3.easeOut,
    });
    tween.pause();
  }, []);

  return (
    <>
      {/*  xl:min-w-[22%]  */}
      <div className="h-auto lg:mr-5 mr-3 text-center flex flex-col 2xl:min-w-[18%] lg:min-w-[22%] md:min-w-[24%] sm:min-w-[28%] min-w-[32%]">
        <div
          className="movieCard w-full rounded-2xl mb-1 overflow-hidden bg-transparent border border-slate-300 relative"
          onClick={()=>{
            console.log("navigating");
            navigate(`explore/${movie.movieId}`)
          }}
        >
          <div
            id="temp"
            className="h-full object-cover"
            onMouseEnter={() => {
              // showCardData(cardData);
              tween.timeScale(1).play();
            }}
            onMouseLeave={() => {
              // hideCardData(cardData);
              tween.timeScale(3).reverse();
            }}
          >
            <div
              className="absolute h-full w-full z-20 top-0 left-0"
              ref={(el) => {
                card = el;
              }}
            ></div>
            <img
              src={movie.posterImage}
              alt=""
              className="h-full m-auto rounded-xl"
            />
          </div>
          <div
            className="px-3 py-2 absolute bottom-[-100%] w-full h-full bg-[#000000a4] backdrop-blur flex flex-col justify-center overflow-y-scroll scrollbar-hide"
            ref={(el) => {
              cardData = el;
            }}
          >
            <p className="text-center my-2 smob:text-lg text-sm font-bold text-slate-100">
              {movie.movieTittle ? movie.movieTittle : "Not Available"}
            </p>
            <span className="text-xs font-medium text-slate-300 text-center">
              {movie.movieGenres.map((genre, index) => {
                if (index == movie.movieGenres.length - 1) {
                  return genre?.name;
                }
                return genre?.name + ", ";
              })}
            </span>
          </div>
        </div>
        <div className="mt-1 text-slate-100 xl:text-xl font-semibold lg:text-lg md:text-base sm:text-sm text-xs">
          {movie.movieTittle}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
