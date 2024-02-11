import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { HiSearch } from "react-icons/hi";
import "./style.scss";

const SearchForm = () => {
  let [searching, setSearching] = useState(false);
  let [query, setQuery] = useState('');
  let searchInput = useRef(null)
  let searchButton = useRef(null)

  let navigate = useNavigate()

  let checkIfSearching = (e) => {
    if(searchButton.contains(e.target)){
      setSearching(true)
    } else if (!(searchInput.contains(e.target)) && !searchInput.value && searching) {
      setSearching(false);
    } 
  }

  let handleSubmit = async (e) => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmM3YzgxODFiMjhjNWQ5NDM0YjY0NjJkMTNhMDc3ZSIsInN1YiI6IjY1YWZhNDZlNjdiNjEzMDEwYzYwYmQ2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7KVkBXGW5ZP4omCYMfLE53bO4fnMAQoUb-FZQbA8ajs",
        },
      };
    e.preventDefault();
    console.log(query);
    let res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,options)
    // navigate('/explore/')
    let data = await res.json()
    console.log(data);
    setQuery('')
  }

  useEffect(()=>{
    document.body.addEventListener('click',checkIfSearching)

    return () => {
      document.body.removeEventListener('click',checkIfSearching)
    }
  })

  return (
    <>
      <span className={`` + (searching ? ` hidden` : ``)}>
        <button
          className={`searchButton`}
          onClick={() => setSearching(true)}
          ref={el => searchButton = el}
        >
          <HiSearch />
        </button>
      </span>

      <form
        className={
          `searchForm px-2 w-[100%] ` + (searching
            ? ` flex justify-end active`
            : ` hidden`)
        }
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="searchInput"
          placeholder="Search"
          ref={el => searchInput=el}
          value={query}
          onChange={(e)=>{setQuery(e.target.value)}}
        />
      </form>
    </>
  );
};

export default SearchForm;
