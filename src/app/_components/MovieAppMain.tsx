import HeroCarousel from "./HeroCarousel/HeroCarousel";
import MovieList from "./Movielist/MovieList";
import { getPopularMovies } from "@/lib/api";

const MovieAppMain = async () => {
  const data = await getPopularMovies();
  return (
    <div className="flex justify-center w-full">
      <div className="w-full h-fit flex flex-col items-center max-w-360">
        <HeroCarousel data={data} />
        <MovieList data={data} />
      </div>
    </div>
  );
};

export default MovieAppMain;
