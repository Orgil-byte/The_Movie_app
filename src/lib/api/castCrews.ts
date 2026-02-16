import { options } from "./option";
import { CastCrewsType } from "../movie-data-types";

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
