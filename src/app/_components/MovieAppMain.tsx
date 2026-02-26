import { getNowPlayingMovies } from "@/lib/api";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
import MovieList from "./Movielist/MovieList";

const MovieAppMain = async () => {
  const { results } = await getNowPlayingMovies();
  return (
    <div className="flex justify-center w-full">
      <div className="w-full h-fit flex flex-col items-center">
        <HeroCarousel movies={results} />
        <MovieList />
      </div>
    </div>
  );
};

export default MovieAppMain;
