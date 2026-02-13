import { FetchMovieDataType } from "./movie-data-types";
import { MovieDetailsType } from "./movie-data-types";
import { CastCrewsType } from "./movie-data-types";
import { Trailers } from "./movie-data-types";
import { SimilarMovieTypes } from "./movie-data-types";

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

export const getNowPlayingMovies = async (): Promise<FetchMovieDataType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
    options,
  );
  const movies = await response.json();
  return movies;
};
getNowPlayingMovies();

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

// ==================================================================================

export const getDirectorsActors = async (
  movieId: string,
): Promise<CastCrewsType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options,
  );
  const moviesCrews = await response.json();
  return moviesCrews;
};

// ==================================================================================

export const getMovieTrailers = async (movieId: string): Promise<Trailers> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    options,
  );
  const moviesTrailer = await response.json();
  return moviesTrailer;
};

// ==================================================================================

export const getSimilarMovies = async (
  movieId: string,
): Promise<SimilarMovieTypes> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
    options,
  );
  const moviesSimilar = await response.json();
  return moviesSimilar;
};

// ==================================================================================

export const getSearchValue = async (
  searchValue: string,
): Promise<FetchMovieDataType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3//search/movie?query=${searchValue}&language=en-US&page=1`,
    options,
  );
  const moviesSimilar = await response.json();
  return moviesSimilar;
};
