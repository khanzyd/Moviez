import React from "react";

const GenreButton = ({ genre }) => {
  return (
    <button className="rounded-full border-2 border-slate-100 lg:px-3.5 px-3 lg:py-1 py-[3px] mr-2 mb-1 lg:text-sm 
    text-[0.7rem] font-semibold hover:border-zinc-900 hover:bg-slate-100 hover:text-zinc-900 hover:font-bold">
      {genre.name}
    </button>
  );
};

export default GenreButton;
