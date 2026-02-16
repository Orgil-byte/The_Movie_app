import { FetchMovieDataType } from "../movie-data-types";
import { options } from "./option";

export const getPopularMovies = async (): Promise<FetchMovieDataType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    options,
  );
  const movies = await response.json();
  return movies;
};
