import React, { useRef, useState,useEffect } from "react";
import gsap from "gsap";

// import { showCardData, hideCardData } from "./heroSectionFuncs";

const MovieCard = ({ movie }) => {
  let card = useRef();
  let cardData = useRef();

  let tl = gsap.timeline({ paused: true });
  useEffect(() => {
      tl.to(cardData, {
        bottom: "0",
        top: "0",
        duration: 0.4,
      });
  }, [])

  return (
    <div className="movieCard 2xl:min-w-[15%] 2xl:max-w-[15%] xl:min-w-[18%] xl:max-w-[18%] med:min-w-[25%] med:max-w-[25%] mob:min-w-[35%] mob:max-w-[35%] min-w-[40%] max-w-[40%] mob:mr-14 smob:mr-8 mr-5 md:max-h-fit mob:max-h-[350px] smob:max-h-[300px] max-h-[250px] rounded-2xl mb-1 overflow-x-hidden mob:overflow-y-hidden overflow-y-scroll bg-transparent border border-slate-300 relative">
      <div
        id="temp"
        className="h-full object-cover"
        onMouseEnter={() => {
          // showCardData(cardData);
          tl.play()
        }}
        onMouseLeave={() => {
          // hideCardData(cardData);
          tl.timeScale(3).reverse()
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
        className="px-3 py-2 absolute bottom-[-100%] w-full h-full bg-[#000000a4] backdrop-blur flex flex-col justify-center"
        ref={(el) => {
          cardData = el;
        }}
      >
        <p className="text-center my-2 smob:text-lg text-sm font-bold text-slate-100">
          {movie.movieTittle ? movie.movieTittle : "Not Available"}
        </p>
        <span className="text-xs font-medium text-slate-300 text-center">
          {movie.movieGenres.map((genre) => {
            return genre?.name + ", ";
          })}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
