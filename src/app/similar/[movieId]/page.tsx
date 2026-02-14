import { getSimilarMovies } from "@/lib/api";
import Movies from "@/app/_components/Movielist/Movies";
import Link from "next/link";

type MoreLikeThisPageProps = {
  params: Promise<{ movieId: string }>;
};

const MoreLikeThisPage = async ({ params }: MoreLikeThisPageProps) => {
  const { movieId } = await params;

  const data = await getSimilarMovies(movieId);

  const moviesToDisplay = data.results.filter(
    (movie) => movie.poster_path !== null && movie.backdrop_path !== null,
  );

  return (
    <div className="w-full flex flex-col items-center my-10">
      <div className="px-5 flex flex-col w-full min-w-93.75 gap-8 md:px-10 lg:px-20 lg:gap-13 max-w-360">
        <div className="h-9 flex justify-between items-center w-full">
          <p className="font-semibold text-[24px] leading-8 tracking-[-2.5%] dark:text-[#fafafa]">
            More Like This
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:gap-5 md:grid-cols-4 lg:gap-6 lg:grid-cols-5">
          {moviesToDisplay.map((movie) => (
            <Link href={`/${movie.id}`} key={movie.id}>
              <Movies
                img={movie.poster_path ?? ""}
                title={movie.title}
                rate={movie.vote_average}
                id={movie.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreLikeThisPage;
