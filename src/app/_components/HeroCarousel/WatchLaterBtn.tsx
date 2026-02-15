import { Button } from "@/components/ui/button";

const WatchLaterBtn = () => {
  return (
    <Button className="h-10 w-36.25 flex justify-center items-center bg-[#18181B] cursor-pointer rounded-md md:h-12 md:w-40 lg:w-36.25 lg:h-10 lg:bg-white lg:mt-1.5  lg:hover:bg-indigo-100 transition-all ease-in-out duration-200 delay-75">
      <img
        className="w-4 h-4 object-cover md:w-5 md:h-5 lg:hidden"
        src="/HeroCarousel/play.svg"
        alt="Play Icon"
      />
      <img
        className="w-4 h-4 object-cover hidden lg:block"
        src="/HeroCarousel/play-dark.svg"
        alt="Play Icon"
      />
      <p className="font-medium text-[14px] leading-5 text-[#FAFAFA] md:text-lg lg:text-black lg:text-[14px]">
        Watch Trailer
      </p>
    </Button>
  );
};

export default WatchLaterBtn;
