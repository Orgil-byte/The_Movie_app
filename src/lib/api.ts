import { FetchMovieDataType } from "./movie-data-types";
import { MovieDetailsType } from "./movie-data-types";
import { CastCrewsType } from "./movie-data-types";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Mzk5MzRjZmY0ZTZkYzYxYjM3OGYyZDI0NjQ1MDIyNiIsIm5iZiI6MTc3MDYwNzgwMy45MDgsInN1YiI6IjY5ODk1NGJiYjljNmUwNTAxMDhjOTQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ADU9lSBgWoG_Xg1CZAqAwxrYCvdJu7STsz4cxQu-PNI";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

// ==================================================================================

export const getPopularMovies = async (): Promise<FetchMovieDataType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    options,
  );
  const movies = await response.json();
  return movies;
};
getPopularMovies();

// ==================================================================================

export const getUpComingMovies = async (): Promise<FetchMovieDataType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
    options,
  );
  const movies = await response.json();
  return movies;
};
getUpComingMovies();

// ==================================================================================

export const getTopRatedMovies = async (): Promise<FetchMovieDataType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
    options,
  );
  const movies = await response.json();
  return movies;
};
getTopRatedMovies();

// ==================================================================================

export const getPopularMovieById = async (
  movieId: string,
): Promise<MovieDetailsType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&page=1`,
    options,
  );
  const movies = await response.json();
  return movies;
};

export const getDirectorsActors = async (
  movieId: string,
): Promise<CastCrewsType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US&page=1`,
    options,
  );
  const moviesCrews = await response.json();
  return moviesCrews;
};
