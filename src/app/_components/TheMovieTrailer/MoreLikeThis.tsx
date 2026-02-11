import { ArrowRight } from "lucide-react";
import Movies from "../Movielist/Movies";
import { ResultSimilar } from "@/lib/movie-data-types";
import Link from "next/link";

type SimilarMovieProps = {
  movies?: ResultSimilar[];
};

export const MoreLikeThis = ({ movies = [] }: SimilarMovieProps) => {
  return (
    <div className="flex flex-col gap-8 px-5">
      <div className="flex justify-between">
        <h2 className="font-semibold text-[24px] dark:text-white">
          More like this
        </h2>
        <div className="flex gap-1 items-center">
          <p className="font-medium dark:text-white">See more</p>
          <ArrowRight className="w-4 h-4 dark:text-white" />
        </div>
      </div>
      <div className="flex gap-5 overflow-y-scroll overflow-x-hidden no-scrollbar">
        {movies.slice(0, 5).map((movie) => (
          <Link href={`/${movie.id}`} key={movie.id}>
            <Movies
              key={movie.id}
              img={movie.poster_path ?? "/HeroCarousel/moana2.jpg"}
              title={movie.title}
              rate={movie.vote_average}
              id={movie.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
