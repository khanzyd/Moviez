import React from 'react'
import { useLocation } from 'react-router-dom';
import fetchMovies from '../utils/fetchMovies';

export async function loader({params}){
    let url = `search/movie`;
    let parameters = `query=${params.movie}&include_adult=false&language=en-US&page=1`;
    let data = await fetchMovies(url,parameters)
    console.log(data);
    return null
}

const SearchResult = () => {
  return (
    <div>SearchResult</div>
  )
}

export default SearchResult