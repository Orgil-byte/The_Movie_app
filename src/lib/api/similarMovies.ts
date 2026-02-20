import { SimilarMovieTypes } from "../movie-data-types";
import { options } from "./option";

export const getSimilarMovies = async (
  movieId: string,
  page: number = 1,
): Promise<SimilarMovieTypes> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=${page}`,
    options,
  );
  const moviesSimilar = await response.json();
  return moviesSimilar;
};
