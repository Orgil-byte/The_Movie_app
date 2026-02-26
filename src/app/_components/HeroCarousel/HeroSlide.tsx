"use client";
import NameReviewStatus from "./NameReviewStatus";
import WatchLaterBtn from "./WatchLaterBtn";
import { Movie, Trailers } from "@/lib/movie-data-types";
import { useRouter } from "next/navigation";

type HeroSlideProps = {
  movie: Movie;
  trailers: Trailers;
};

const HeroSlide = ({ movie, trailers }: HeroSlideProps) => {
  const router = useRouter();
  const basImgurl = "https://image.tmdb.org/t/p/original";

  return (
    <div className="cursor-pointer" onClick={() => router.push(`/${movie.id}`)}>
      <img
        className="w-full object-cover overflow-hidden lg:aspect-16/7 rounded-[5px]"
        src={basImgurl + movie.backdrop_path}
        alt="Movie Img"
      />
      <div className="p-5 w-full mb-4 flex flex-col gap-4 md:p-10 md:gap-7 min-h-72 md:mb-8 lg:absolute lg:ml-25 lg:text-white lg:gap-2 lg:w-fit lg:top-[20%] xl:top-[30%]">
        <NameReviewStatus name={movie.title} rate={movie.vote_average} />
        <p className="text-sm font-normal text-[14px] leading-5 text-[#09090B] md:text-xl md:leading-7 lg:text-white lg:text-[12px] lg:leading-normal lg:w-75.5 dark:text-[#fafafa]">
          {movie.overview}
        </p>
        <div onClick={(e) => e.stopPropagation()}>
          <WatchLaterBtn trailers={trailers} />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
