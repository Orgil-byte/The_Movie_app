import { UpComingMovies } from "./MoviesMaps";
import { PopularMovies } from "./MoviesMaps";
import { TopRatedMovies } from "./MoviesMaps";
import { FetchMovieDataType } from "@/lib/api";

type MovieListProps = {
  data: FetchMovieDataType;
};

const MovieList = ({ data }: MovieListProps) => {
  return (
    <div className="px-5 flex flex-col w-full min-w-93.75 gap-8 md:px-10 lg:px-20 lg:gap-13 max-w-360">
      <UpComingMovies data={data} showSeeMore={true} />
      <PopularMovies data={data} showSeeMore={true} />
      <TopRatedMovies data={data} showSeeMore={true} />
    </div>
  );
};

export default MovieList;
