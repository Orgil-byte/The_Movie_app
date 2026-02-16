import { Trailers } from "../movie-data-types";
import { options } from "./option";

export const getMovieTrailers = async (movieId: string): Promise<Trailers> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    options,
  );
  const moviesTrailer = await response.json();
  return moviesTrailer;
};
