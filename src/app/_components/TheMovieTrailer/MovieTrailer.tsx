import { Play } from "lucide-react";

export const MovieTrailer = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-10 px-5">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-[24px] dark:text-white">Wicked</h1>
          <p className="text-sm dark:text-white">2024.11.26 · PG · 2h 40m</p>
        </div>
        <div className="flex items-center gap-1">
          <img
            className="h-4 w-4 object-cover"
            src="HeroCarousel/Vector.svg"
            alt="Star review"
          />
          <div>
            <p className="text-sm font-semibold text-[#09090B] xl:text-[14px] dark:text-[#fafafa]">
              6.9
              <span className="font-normal  text-[#71717A]">/10</span>
            </p>
            <p className="text-[#71717A] text-xs">37k</p>
          </div>
        </div>
      </div>
      <div className="w-fit h-fit relative">
        <img
          src="/TheWatchMovie/wicked.jpg"
          alt="ewd"
          className="w-full aspect-9/5 object-cover"
        />
        <div className="absolute flex top-80% left-3 items-center gap-2">
          <div className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
            <Play className="w-4 h-4 text-black" />
          </div>
          <p className="text-white">Play Trailer</p>
          <p className="text-white">2:35</p>
        </div>
      </div>
    </div>
  );
};
