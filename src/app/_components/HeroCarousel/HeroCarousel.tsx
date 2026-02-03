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
    <div className="min-93.75 w-full overflow-hidden mb-8 relative">
      <Carousel className="min-w-93.75 w-full">
        <CarouselContent>
          {carouselData.map(({ img, id, name, text }) => (
            <CarouselItem key={id}>
              <img
                className={`min-w-93.75 w-full h-61.5 object-cover overflow-hidden sm:h-100 md:h-125 lg:h-150`}
                src={img}
                alt="Movie Img"
              />
              <div className="p-5 w-full flex flex-col h-66  gap-4 md:p-10 md:gap-7 md:h-90">
                <NameReviewStatus name={name} />
                <p className="text-sm font-normal text-[14px] leading-5 text-[#09090B] md:text-xl md:leading-7">
                  {text}
                </p>
                <WatchLaterBtn />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex absolute items-center gap-1 top-[45%] left-[50%] sm:top-[58%] md:top-[55%] md:gap-2">
        <a className="w-1 h-1 bg-white rounded-full opacity-100 md:w-2 md:h-2"></a>
        <a className="w-1 h-1 bg-white rounded-full opacity-70 md:w-2 md:h-2"></a>
        <a className="w-1 h-1 bg-white rounded-full opacity-70 md:w-2 md:h-2"></a>
      </div>
    </div>
  );
};

export default HeroCarousel;
