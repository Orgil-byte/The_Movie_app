import NavigationMain from "./Navigation/Navigation";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
// import MovieList from "./MovieList";

const MovieAppMain = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full h-screen max-w-360 flex flex-col items-center">
        <NavigationMain />
        <HeroCarousel />
        {/* <MovieList /> */}
      </div>
    </div>
  );
};

export default MovieAppMain;
