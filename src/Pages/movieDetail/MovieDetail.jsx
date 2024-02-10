import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom' 
import fetchData from '../../utils/fetchMovies'

export async function loader({params}) {
  return await fetchData(`movie/${params.movieId}`)
}

const MovieDetail = () => {
  const details = useLoaderData()
  console.log(details);
  
  return (
    <div className='text-slate-100 bg-zinc-950'>
      
    </div>
  )
}

export default MovieDetail