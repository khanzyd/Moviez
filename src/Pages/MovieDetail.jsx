import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import fetchMovies from "../utils/fetchMovies";

export async function loader({ params }) {
  return await fetchMovies(`movie/${params.movieId}`, null);
}

const MovieDetail = () => {
  const details = useLoaderData();
  console.log(details);

  return <div className="text-slate-100 bg-zinc-950"></div>;
};

export default MovieDetail;
