import React from 'react'
import "./style.scss"
import GenreButton from '../GenreButton';
import { FaPlay } from "react-icons/fa";

const MovieDetailBanner = ({ details }) => {
  return (
    <div className="relative h-screen w-screen bg-white px-[7%]">
      <div className="img-main absolute z-0 w-full bg-gray-500 h-full ">
        <img
          className="bannerBackgroundImg h-full w-[90%] float-right object-cover "
          src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="absolute z-10 img-container h-full w-full lg:shadow-[inset_350px_0px_190px_50px_black] sm:shadow-[inset_250px_-150px_190px_50px_black] shadow-[inset_0px_-50px_32px_0px_black] sm:right-0 bottom-0"></div>
      <div className="absolute top-0 left-0 z-10 w-full h-screen shadow-[0px_23px_30px_13px_black]"></div>

      <div className="bannerPoster relative top-28 z-30 h-[calc(100%-7rem)] w-full flex justify-between items-center">
        <img
          className="min-w-[300px] w-[25%] rounded-xl"
          src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
          alt=""
        />
        <div className="h-full w-[70%] py-10 pl-20 flex justify-center">
          <div className="bannerInfoBox border h-full bg-zinc-800 bg-opacity-80 p-10 rounded-xl max-w-[900px] flex-1 ">
            <div>
              <h3 className="tittle text-4xl font-bold tracking-wide">
                {details.original_title || details.name}
              </h3>
            </div>
            <div>
              <p className="tagline mt-1 text-lg font-medium tracking-wide italic">
                {details.tagline}
              </p>
            </div>
            <div>
              <div className="my-4">
                {details?.genres.map((genre) => {
                  return <GenreButton key={genre.id} genre={genre} />
                })}
              </div>
            </div>
            <div>
              <span className="font-bold mr-5">
                rating : <span className="font-light">9.0</span>
              </span>
              <button className="sm:text-lg sm:font-medium sm:px-3 sm:mr-7 text-xs font-normal px-[2px] mr-5 border-2 border-transparent text-black bg-slate-100 rounded-full hover:text-slate-100 hover:bg-black hover:border-slate-100 inline-flex justify-center items-center">
                <span>
                  <FaPlay className="mr-2 sm:text-lg text-base" />
                </span>
                Trailer
              </button>
            </div>
            <div className="my-5">
              <div className="text-2xl font-semibold mb-2">overview</div>
              <span className="text-lg font-normal">{details.overview}</span>
            </div>
            {details?.status == "Released" && (
              <div>
                <span className='font-bold text-lg'>{`${details.status} : `}</span>
                <span>{`${details.release_date}`}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailBanner