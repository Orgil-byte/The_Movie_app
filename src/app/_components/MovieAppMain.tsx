import NavigationMain from "./Navigation";
import HeroCarousel from "./HeroCarousel";
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
