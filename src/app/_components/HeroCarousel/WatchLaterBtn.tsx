import { Button } from "@/components/ui/button";
import { MovieDetailsType, Trailers } from "@/lib/movie-data-types";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X } from "lucide-react";

type MovieTrailerProps = {
  trailers: Trailers;
};

const WatchLaterBtn = ({ trailers }: MovieTrailerProps) => {
  const trailer =
    trailers.results.find(
      (t) => t.site === "YouTube" && t.type === "Trailer" && t.official,
    ) ||
    trailers.results.find(
      (t) => t.site === "YouTube" && t.type === "Trailer",
    ) ||
    trailers.results.find((t) => t.site === "YouTube");
  return (
    <Dialog>
      <DialogTrigger
        className="dark:lg:bg-white dark:lg:hover:bg-neutral-800 border-0 text-black bg-neutral-100 h-10 w-36.25 flex justify-center items-center  cursor-pointer rounded-md md:h-12 md:w-40 lg:w-36.25 lg:h-10 lg:bg-white lg:mt-1.5  lg:hover:bg-neutral-800 lg:hover:text-white transition-all ease-in-out duration-200 delay-75"
        asChild
      >
        <Button
          className="font-medium bg-black dark:text-white lg:dark:text-black dark:hover:text-white text-[14px] leading-5 text-[#FAFAFA] md:text-lg lg:text-black lg:text-[14px]"
          variant="outline"
        >
          Watch trailer
        </Button>
      </DialogTrigger>
      <DialogContent
        className="bg-black border-0 flex flex-col items-end p-0 rounded-sm w-full lg:max-w-249.25 aspect-video"
        showCloseButton={false}
      >
        <DialogClose className="h-fit w-fit m-0 p-0 lg:hidden">
          <X className="text-white mt-2 mr-2"></X>
        </DialogClose>

        {trailer ? (
          <iframe
            className="w-full rounded-sm lg:max-w-249.25 aspect-video"
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=0`}
            title={trailer.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full bg-zinc-900 flex items-center justify-center text-white py-8 lg:w-249.25 lg:h-140.25 rounded-sm">
            <span>No trailer available</span>
          </div>
        )}
        <DialogTitle className="h-0 w-0 p-0 m-0"></DialogTitle>
      </DialogContent>
    </Dialog>
  );
};

export default WatchLaterBtn;
