export async function generateGenreList() {
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

export async function updateHeroMovieData(movie) {
  let genreList = await generateGenreList();
  let movieGenres = movie.genre_ids.map((id) => {
    return genreList.find((genre) => {
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
