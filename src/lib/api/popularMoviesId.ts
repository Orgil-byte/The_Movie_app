import { MovieDetailsType } from "../movie-data-types";
import { options } from "./option";

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
