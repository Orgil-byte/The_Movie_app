import { SimilarMovieTypes } from "../movie-data-types";
import { options } from "./option";

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
