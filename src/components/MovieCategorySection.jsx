import React,{ useEffect } from 'react'
import MovieCard from './MovieCard';

const MovieCategorySection = ({url,category,genre}) => {

  
  async function fetchMovies() {
    // "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=IN",
    const topratedMoviesPromise = await fetch(url,
      {
        method: "GET",
        headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmM3YzgxODFiMjhjNWQ5NDM0YjY0NjJkMTNhMDc3ZSIsInN1YiI6IjY1YWZhNDZlNjdiNjEzMDEwYzYwYmQ2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7KVkBXGW5ZP4omCYMfLE53bO4fnMAQoUb-FZQbA8ajs",
        },
      }
    );
    const topratedMoviesData = await topratedMoviesPromise.json()
    return topratedMoviesData;
  }

  useEffect(() => {
    let Movies;
    fetchMovies().then((data)=>{Movies = data
    console.log(Movies);

    })
    
  }, [])
 
  return (
    <div className="h-full px-[7%] py-4">
      <h3 className="text-3xl font-extrabold text-slate-100 border-t-2 py-3">{}</h3>

      <div className="cardsContainerWrapper w-[100%] overflow-x-scroll">
        <div className="cardsContainer flex py-3 ">
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
        </div>
      </div>
    </div>
  );
}

export default MovieCategorySection