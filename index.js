const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mzk5MzRjZmY0ZTZkYzYxYjM3OGYyZDI0NjQ1MDIyNiIsIm5iZiI6MTc3MDYwNzgwMy45MDgsInN1YiI6IjY5ODk1NGJiYjljNmUwNTAxMDhjOTQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADU9lSBgWoG_Xg1CZAqAwxrYCvdJu7STsz4cxQu-PNI";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getPopularMovies = async () => {
  const response = await fetch(url, options);
  const movies = await response.json();
  console.log(movies);
};

getPopularMovies();
