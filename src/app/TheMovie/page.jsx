import { MovieTrailer } from "../_components/TheMovieTrailer/MovieTrailer";

const TheMovie = () => {
  return (
    <div className="pt-8 w-full flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <MovieTrailer />
      </div>
    </div>
  );
};

export default TheMovie;
