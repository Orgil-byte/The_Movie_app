export type FetchMovieDataType = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mzk5MzRjZmY0ZTZkYzYxYjM3OGYyZDI0NjQ1MDIyNiIsIm5iZiI6MTc3MDYwNzgwMy45MDgsInN1YiI6IjY5ODk1NGJiYjljNmUwNTAxMDhjOTQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADU9lSBgWoG_Xg1CZAqAwxrYCvdJu7STsz4cxQu-PNI";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const getPopularMovies = async (): Promise<FetchMovieDataType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    options,
  );
  const movies = await response.json();
  return movies;
};
getPopularMovies();

export const getUpComingMovies = async (): Promise<FetchMovieDataType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
    options,
  );
  const movies = await response.json();
  return movies;
};
getUpComingMovies();

export const getTopRatedMovies = async (): Promise<FetchMovieDataType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    options,
  );
  const movies = await response.json();
  return movies;
};
getTopRatedMovies();
