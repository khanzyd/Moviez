import React from 'react'

let showCardData = () =>{
  console.log("card");
}

const MovieCard = () => {
  return (
    <div className="movieCard min-w-[18%] max-w-[18%]  mr-14 rounded-2xl mb-1 overflow-x-hidden bg-transparent border border-slate-300 "
      onMouseOver={()=>{showCardData()}}
    >
      {/* https://image.tmdb.org/t/p/original/kQs6keheMwCxJxrzV83VUwFtHkB.jpg */}
      <div className="h-48 object-cover my-4">
        <img
          src="https://image.tmdb.org/t/p/original/kQs6keheMwCxJxrzV83VUwFtHkB.jpg"
          alt=""
          className="h-full m-auto rounded-xl"
        />
      </div>
      <div className="px-3 py-2">
        <p className="text-center my-2 text-lg font-bold text-slate-100">
          Spiderman : Across the spiderVerse
        </p>
        <span className="text-xs font-medium text-slate-300">
          Action, sci-fi, comedy, drama, emotions{" "}
        </span>
      </div>
    </div>
  );
}

export default MovieCard