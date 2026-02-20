import { FetchMovieDataType } from "../movie-data-types";
import { options } from "./option";

export const getTopRatedMovies = async (
  page: number = 1,
): Promise<FetchMovieDataType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
    options,
  );
  const movies = await response.json();
  return movies;
};
