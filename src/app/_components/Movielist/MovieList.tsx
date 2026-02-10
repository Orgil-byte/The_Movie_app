import { UpComingMovies } from "./MoviesMaps";
import { PopularMovies } from "./MoviesMaps";
import { TopRatedMovies } from "./MoviesMaps";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpComingMovies,
} from "@/lib/api";

const MovieList = async () => {
  const popularMovies = await getPopularMovies();
  const upComingMovies = await getUpComingMovies();
  const topRatedMovies = await getTopRatedMovies();
  return (
    <div className="px-5 flex flex-col w-full min-w-93.75 gap-8 md:px-10 lg:px-20 lg:gap-13 max-w-360">
      <UpComingMovies data={upComingMovies} showSeeMore={true} />
      <PopularMovies data={popularMovies} showSeeMore={true} />
      <TopRatedMovies data={topRatedMovies} showSeeMore={true} />
    </div>
  );
};

export default MovieList;
