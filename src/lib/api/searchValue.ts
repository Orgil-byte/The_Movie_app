import { FetchMovieDataType } from "../movie-data-types";
import { options } from "./option";

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
