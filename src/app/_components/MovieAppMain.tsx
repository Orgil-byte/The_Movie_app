import NavigationMain from "./Navigation/Navigation";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
import MovieList from "./Movielist/MovieList";
import Footer from "./Footer/Footer";

const MovieAppMain = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full h-fit max-w-360 flex flex-col gap-8 items-center overflow-y-scroll">
        <NavigationMain />
        <HeroCarousel />
        <MovieList />
        <Footer />
      </div>
    </div>
  );
};

export default MovieAppMain;
