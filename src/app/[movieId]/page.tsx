import { MovieTrailer } from "../_components/TheMovieTrailer/MovieTrailer";
import { MovieInfo } from "../_components/TheMovieTrailer/MovieInfo";
import { MoreLikeThis } from "../_components/TheMovieTrailer/MoreLikeThis";
import { getDirectorsActors, getPopularMovieById } from "@/lib/api";

type MoviePagePropsType = {
  params: Promise<{ movieId: string }>;
};

const TheMovie = async ({ params }: MoviePagePropsType) => {
  const { movieId } = await params;
  const castCrew = await getDirectorsActors(movieId);
  const movie = await getPopularMovieById(movieId);
  return (
    <div className="pt-8 w-full flex flex-col gap-8 items-center">
      <div className="flex flex-col gap-8 w-full max-w-270">
        <MovieTrailer movie={movie} castCrew={castCrew} />
        <MovieInfo movie={movie} castCrew={castCrew} />
        <MoreLikeThis />
      </div>
    </div>
  );
};

export default TheMovie;
