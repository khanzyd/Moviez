import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import fetchMovies from "../utils/fetchMovies";
import MovieDetailBanner from "../components/movieDetailBanner/MovieDetailBanner";

export async function loader({ params }) {
  console.log(params);
  return await fetchMovies(`${params.type}/${params.id}`, null);
}

const MovieDetail = () => {
  const details = useLoaderData();
  console.log(details);

  return (
    <>
      <div className="text-slate-100 bg-zinc-950">
        <MovieDetailBanner details={details}/>
      </div>
    </>
  );
};

export default MovieDetail;
