import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NameReviewStatus from "./NameReviewStatus";
import WatchLaterBtn from "./WatchLaterBtn";
import { Movie } from "@/lib/movie-data-types";
import Link from "next/link";
import { getMovieTrailers } from "@/lib/api";

type HeroCarouselProps = {
  movies: Movie[];

  params?: { movieId?: string } | Promise<{ movieId: string }>;
};

const HeroCarousel = async ({ params, movies }: HeroCarouselProps) => {
  let movieId: string | undefined;
  if (params) {
    const maybePromise = params as any;
    const resolved =
      typeof maybePromise?.then === "function"
        ? await maybePromise
        : maybePromise;
    movieId = resolved?.movieId;
  }

  if (!movieId) movieId = movies?.[0]?.id?.toString();

  const emptyTrailers = { id: 0, results: [] };
  const trailers = movieId
    ? await getMovieTrailers(movieId)
    : (emptyTrailers as any);
  const basImgurl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="min-93.75 w-full overflow-hidden mb-12 relative">
      <Carousel className="min-w-93.75 w-full">
        <CarouselNext className="hidden absolute w-10 h-10 right-[3%] z-30 cursor-pointer lg:flex"></CarouselNext>
        <CarouselContent>
          {movies.slice(0, 3).map((movie) => (
            <CarouselItem key={movie.id}>
              {/* <Link href={`/${movie.id}`} key={movie.id}> */}
              <img
                className={`h-full w-full max-h-61.5  object-cover overflow-hidden sm:max-h-100 md:max-h-125 lg:max-h-150 xl:max-h-200  rounded-[5px]`}
                src={basImgurl + movie.backdrop_path}
                alt="Movie Img"
              />
              <div className="p-5 w-full mb-4 flex flex-col gap-4 md:p-10 md:gap-7 min-h-72 md:mb-8  lg:absolute lg:ml-25 lg:text-white lg:gap-2  lg:w-fit lg:top-[20%] xl:top-[30%]">
                <NameReviewStatus
                  name={movie.title}
                  rate={movie.vote_average}
                />
                <p className="text-sm font-normal text-[14px] leading-5 text-[#09090B] md:text-xl md:leading-7 lg:text-white lg:text-[12px] lg:leading-normal lg:w-75.5  dark:text-[#fafafa]">
                  {movie.overview}
                </p>
                <WatchLaterBtn trailers={trailers} />
              </div>
              {/* </Link> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden absolute w-10 h-10 left-[3%] z-40 cursor-pointer lg:flex"></CarouselPrevious>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
