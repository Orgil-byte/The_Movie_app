import { Button } from "@/components/ui/button";

const WatchLaterBtn = () => {
  return (
    <Button className="h-10 w-36.25 flex justify-center items-center bg-[#18181B] cursor-pointer rounded-md md:h-13 md:w-40">
      <img
        className="w-4 h-4 object-cover md:w-5 md:h-5"
        src="HeroCarousel/play.svg"
        alt="Play Icon"
      />
      <p className="font-medium text-[14px] leading-5 text-[#FAFAFA] md:text-lg">
        Watch Trailer
      </p>
    </Button>
  );
};

export default WatchLaterBtn;
