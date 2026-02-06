import HeroCarousel from "./HeroCarousel/HeroCarousel";
import MovieList from "./Movielist/MovieList";

const MovieAppMain = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full h-fit flex flex-col items-center max-w-360">
        <HeroCarousel />
        <MovieList />
      </div>
    </div>
  );
};

export default MovieAppMain;
