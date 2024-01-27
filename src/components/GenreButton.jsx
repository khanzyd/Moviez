import React from 'react'

const GenreButton = ({genre}) => {
  return (
    <button className="rounded-full border-2 border-slate-100 px-3.5 py-1 mr-5 text-sm font-semibold hover:border-zinc-900 hover:bg-slate-100 hover:text-zinc-900 hover:font-bold">
      {genre.name}
    </button>
  );
}

export default GenreButton