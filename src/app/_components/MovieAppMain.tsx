import NavigationMain from "./Navigation/Navigation";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
import MovieList from "./Movielist/MovieList";

const MovieAppMain = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full h-fit max-w-360 flex flex-col items-center overflow-y-scroll">
        <NavigationMain />
        <HeroCarousel />
        <MovieList />
      </div>
    </div>
  );
};

export default MovieAppMain;
