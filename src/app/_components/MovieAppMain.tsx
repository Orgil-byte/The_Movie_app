import NavigationMain from "./Navigation/Navigation";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
// import MovieList from "./MovieList";

const MovieAppMain = () => {
  return (
    <div className="w-full h-screen">
      <NavigationMain />
      <HeroCarousel />
      {/* <MovieList /> */}
    </div>
  );
};

export default MovieAppMain;
