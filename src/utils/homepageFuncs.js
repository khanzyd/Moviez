import gsap, { Power3 } from "gsap";

export let homepageCarouselInfo = [
  {
    Genre: null,
    url: "trending/all/day",
    params: "language=en-US",
    category: "Trending",
  },
  {
    Genre: "action",
    url: "discover/movie",
    params: "api_key=12c7c8181b28c5d9434b6462d13a077e&with_genres=28",
    category: "Action",
  },
  {
    Genre: null,
    url: "movie/top_rated",
    params: "?language=en-US&page=1&region=IN",
    category: "Top Rated Movies",
  },
  {
    Genre: "comedy",
    url: "discover/movie",
    params: "?api_key=12c7c8181b28c5d9434b6462d13a077e&with_genres=35",
    category: "Comedy",
  },
];

export async function generateGenreList() {
  // console.log("generation of genre list");
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmM3YzgxODFiMjhjNWQ5NDM0YjY0NjJkMTNhMDc3ZSIsInN1YiI6IjY1YWZhNDZlNjdiNjEzMDEwYzYwYmQ2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7KVkBXGW5ZP4omCYMfLE53bO4fnMAQoUb-FZQbA8ajs",
    },
  };

  let res = await fetch(url, options);
  let genreList = await res.json();
  return genreList.genres;
}
let genreList = await generateGenreList();

export async function constructMovieData(movie) {
  let allGenrelist = genreList;
  let movieGenres = movie.genre_ids.map((id) => {
    return allGenrelist.find((genre) => {
      return genre.id == id;
    });
  });

  return {
    movieId: movie.id,
    movieTittle: movie.title,
    bannerImage: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
    posterImage: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
    movieOverview: movie.overview,
    movieGenres,
  };
}

export function heroRevealAnimation(newSrc) {
  let tl = gsap.timeline();
  tl.seek(0);
  gsap.from(".hero-text", {
    delay: 0.5,
    xPercent: -5,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: Power3.easeInOut,
  });

  tl.to(".imgCont", {
    opacity: 0,
    attr: { src: newSrc },
  }).to(".imgCont", {
    opacity: 1,
    duration: 1,
    ease: Power3.easeInOut,
  });
}
