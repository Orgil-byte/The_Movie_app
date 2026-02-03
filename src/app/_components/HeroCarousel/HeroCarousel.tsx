"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NameReviewStatus from "./NameReviewStatus";
import WatchLaterBtn from "./WatchLaterBtn";
import { useState } from "react";
import { dataHeroCarousel } from "../../_data/hero-carousel-data";

const HeroCarousel = () => {
  const [carouselData, setCarouselData] = useState(dataHeroCarousel);

  return (
    <div className="min-93.75 w-full overflow-hidden lg:mb-8 relative">
      <Carousel className="min-w-93.75 w-full">
        <CarouselNext className="hidden absolute w-10 h-10 right-[3%] z-30 cursor-pointer lg:flex"></CarouselNext>
        <CarouselContent>
          {carouselData.map(({ img, id, name, text, imgObjTop }) => (
            <CarouselItem key={id}>
              <img
                className={`min-w-93.75 w-full h-61.5 object-cover overflow-hidden sm:h-100 md:h-125 lg:h-150 ${imgObjTop}`}
                src={img}
                alt="Movie Img"
              />
              <div className="p-5 w-full flex flex-col h-66  gap-4 md:p-10 md:gap-7 md:h-90 lg:absolute lg:top-[20%] lg:ml-25 lg:text-white lg:gap-2 lg:w-fit">
                <NameReviewStatus name={name} />
                <p className="text-sm font-normal text-[14px] leading-5 text-[#09090B] md:text-xl md:leading-7 lg:text-white lg:text-[12px] lg:leading-normal lg:w-75.5">
                  {text}
                </p>
                <WatchLaterBtn />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden absolute w-10 h-10 left-[3%] z-40 cursor-pointer lg:flex"></CarouselPrevious>
      </Carousel>
      <div className="flex absolute items-center gap-1 top-[45%] left-[50%] sm:top-[58%] md:top-[55%] md:gap-2 lg:top-[92%] lg:left-[48.7%]">
        <a className="w-1 h-1 bg-white rounded-full opacity-100 md:w-2 md:h-2"></a>
        <a className="w-1 h-1 bg-white rounded-full opacity-70 md:w-2 md:h-2"></a>
        <a className="w-1 h-1 bg-white rounded-full opacity-70 md:w-2 md:h-2"></a>
      </div>
    </div>
  );
};

export default HeroCarousel;
