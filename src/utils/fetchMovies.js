export default async function fetchData(_url) {
  // "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=IN",
  const res = await fetch(
    `https://api.themoviedb.org/3/${_url}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMmM3YzgxODFiMjhjNWQ5NDM0YjY0NjJkMTNhMDc3ZSIsInN1YiI6IjY1YWZhNDZlNjdiNjEzMDEwYzYwYmQ2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7KVkBXGW5ZP4omCYMfLE53bO4fnMAQoUb-FZQbA8ajs",
      },
    }
  );
  const data = await res.json();
  return data;
}
