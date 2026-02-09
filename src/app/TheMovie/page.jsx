import { MovieTrailer } from "../_components/TheMovieTrailer/MovieTrailer";
import { MovieInfo } from "../_components/TheMovieTrailer/MovieInfo";
import { MoreLikeThis } from "../_components/TheMovieTrailer/MoreLikeThis";

const TheMovie = () => {
  return (
    <div className="pt-8 w-full flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-8 w-full max-w-270">
        <MovieTrailer />
        <MovieInfo />
        <MoreLikeThis />
      </div>
    </div>
  );
};

export default TheMovie;
