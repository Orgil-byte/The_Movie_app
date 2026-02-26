import { FetchMovieDataType } from "../movie-data-types";
import { options } from "./option";

export const getGenreMoviesPlay = async (
  genreIds: string,
): Promise<FetchMovieDataType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}`,
    options,
  );
  const movies = await response.json();
  return movies;
};
