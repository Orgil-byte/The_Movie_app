import { UpComingMovies } from "./MoviesMaps";
import { PopularMovies } from "./MoviesMaps";
import { TopRatedMovies } from "./MoviesMaps";

const MovieList = () => {
  return (
    <div className="px-5 flex flex-col w-full min-w-93.75 gap-8 md:px-10 lg:px-20 lg:gap-13 max-w-360">
      <UpComingMovies />
      <PopularMovies />
      <TopRatedMovies />
    </div>
  );
};

export default MovieList;
