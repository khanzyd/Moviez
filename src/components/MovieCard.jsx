import React from "react";

let showCardData = () => {
  console.log("card");
};

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div className="movieCard 2xl:min-w-[15%] 2xl:max-w-[15%] xl:min-w-[18%] xl:max-w-[18%] med:min-w-[25%] med:max-w-[25%] mob:min-w-[35%] mob:max-w-[35%] min-w-[40%] max-w-[40%] mob:mr-14 smob:mr-8 mr-5 md:max-h-fit mob:max-h-[350px] smob:max-h-[300px] max-h-[250px] rounded-2xl mb-1 overflow-x-hidden mob:overflow-y-hidden overflow-y-scroll bg-transparent border border-slate-300">
      <div className="mob:h-48 smob:h-36 h-32 object-cover mt-4">
        <img
          src={movie.posterImage}
          alt=""
          className="h-full m-auto rounded-xl"
        />
      </div>
      <div className="px-3 py-2">
        <p className="text-center my-2 smob:text-lg text-sm font-bold text-slate-100">
          {movie.movieTittle}
        </p>
        <span className="text-xs font-medium text-slate-300">
          {movie.movieGenres.map((genre) => {
            return genre?.name + ", ";
          })}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
