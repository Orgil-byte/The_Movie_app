import { MovieDetailsType, Trailers } from "@/lib/movie-data-types";
import { Play } from "lucide-react";

type MovieTrailerProps = {
  movie: MovieDetailsType;
  trailers: Trailers;
};

export const MovieTrailer = ({ movie, trailers }: MovieTrailerProps) => {
  return (
    <div className="flex flex-col gap-4 relative">
      <div className="flex gap-10 px-5 lg:justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-[24px] dark:text-white">
            {movie.title}
          </h1>
          <p className="text-sm dark:text-white">
            {movie.release_date} · PG · {movie.runtime} minute
          </p>
        </div>
        <div className="flex items-center gap-1">
          <img
            className="h-4 w-4 object-cover"
            src="HeroCarousel/Vector.svg"
            alt="Star review"
          />
          <div>
            <p className="text-sm font-semibold text-[#09090B] xl:text-[14px] dark:text-[#fafafa]">
              {movie.vote_average}
              <span className="font-normal  text-[#71717A]">/10</span>
            </p>
            <p className="text-[#71717A] text-xs">{movie.popularity}k</p>
          </div>
        </div>
      </div>
      <div className="w-fit h-fit relative">
        <div className="flex gap-8">
          <img
            className="hidden w-full max-h-107 max-w-72.5 object-cover rounded-sm lg:block"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="ehd"
          />
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="ewd"
            className="w-full lg:max-w-190 aspect-9/5 object-cover brightness-60 lg:rounded-sm"
          />
        </div>
        <div className="absolute flex top-[75%] left-[5%] items-center gap-2 sm:top-[80%] md:top-[85%] lg:left-[35%]">
          <div className="bg-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <Play className="w-4 h-4 text-black" />
          </div>
          <p className="text-white">Play Trailer</p>
          <p className="text-white">2:35</p>
        </div>
      </div>
    </div>
  );
};
