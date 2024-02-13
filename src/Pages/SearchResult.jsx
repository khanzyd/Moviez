import React from 'react'
import { useLocation } from 'react-router-dom';

export function loader({params}){
    console.log(params);
    
    return null
}

const SearchResult = () => {
  return (
    <div>SearchResult</div>
  )
}

export default SearchResult