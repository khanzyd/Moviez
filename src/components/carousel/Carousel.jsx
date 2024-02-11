import React from 'react'
import "./style.scss"

const carousel = () => {
  return (
    <>
      <div className="bg-lime-600 px-[7%] pb-1 sm:pt-2 pt-8">
        <h3 className="md:text-3xl sm:text-2xl text-xl font-extrabold text-slate-100 xl:mt-8 md:mt-6 mt-3 mb-3">
          Trending
        </h3>
        <div className="cardsContainerWrapper w-full overflow-x-scroll bg-red-700">
          <div className="cardContainer flex py-8 min-h-60 border-y-indigo-700">
            
          </div>
        </div>
      </div>
      {/* <div className="h-full px-[7%] pb-1 sm:pt-2 pt-8 ">
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
      </div> */}
    </>
  );
}

export default carousel