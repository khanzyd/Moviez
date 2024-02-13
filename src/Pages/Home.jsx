import React from "react";
import { useLoaderData } from "react-router-dom";

import HeroBanner from "../components/HeroBanner";
import Carousel from "../components/carousel/carousel";
import fetchMovies from "../utils/fetchMovies";
import { homepageCarouselInfo } from "../utils/homepageFuncs";

export async function loader() {
  let params = "language=en-US&page=1&region=US";
  const data = await fetchMovies("movie/now_playing", params);
  return data;
}

const Home = () => {
  let collectedData = useLoaderData();

  return (
    <>
      <HeroBanner movies={collectedData.results} />

      <div className="h-auto relative bg-zinc-950 sm:py-9 py-3">
        {homepageCarouselInfo?.map((info) => {
          return (
            <Carousel
              key={info.category}
              url={info.url}
              params={info.params}
              category={info.category}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
