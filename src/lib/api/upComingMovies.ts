import { FetchMovieDataType } from "../movie-data-types";
import { options } from "./option";

export const getUpComingMovies = async (): Promise<FetchMovieDataType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
    options,
  );
  const movies = await response.json();
  return movies;
};
getUpComingMovies();
