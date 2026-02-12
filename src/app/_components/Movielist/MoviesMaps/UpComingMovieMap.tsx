import MovieCategory from "../MovieCategory";
import Movies from "../Movies";
import { FetchMovieDataType } from "@/lib/movie-data-types";
import Link from "next/link";

type MovieListProps = {
  showSeeMore: boolean;
  data: FetchMovieDataType;
};

export const UpComingMovies = ({
  data,
  showSeeMore = true,
}: MovieListProps) => {
  const moviesToDisplay = showSeeMore
    ? data.results.slice(0, 10)
    : data.results;
  return (
    <div className="flex flex-col gap-8">
      <MovieCategory
        categoryName="Upcoming"
        showSeeMore={showSeeMore}
        url="/UpComing"
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:gap-6 lg:grid-cols-5">
        {moviesToDisplay.map((movie) => (
          <Link href={`/${movie.id}`} key={movie.id}>
            <Movies
              key={movie.id}
              img={movie.poster_path}
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
