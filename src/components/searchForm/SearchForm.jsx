import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { HiSearch } from "react-icons/hi";
import "./style.scss";
import fetchMovies from "../../utils/fetchMovies";

const SearchForm = () => {
  let [searching, setSearching] = useState(false);
  let [searchString, setsearchString] = useState('');
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
    e.preventDefault();
    navigate(`search/${searchString}`)
    console.log("setting query");
    setsearchString('')
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
          value={searchString}
          onChange={(e)=>{setsearchString(e.target.value)}}
        />
      </form>
    </>
  );
};

export default SearchForm;
