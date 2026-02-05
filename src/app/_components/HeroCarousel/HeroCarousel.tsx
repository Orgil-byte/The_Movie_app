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
import { useState, useEffect } from "react";
import { dataHeroCarousel } from "../../_data/hero-carousel-data";

const HeroCarousel = () => {
  const [carouselData, setCarouselData] = useState(dataHeroCarousel);

  return (
    <div className="min-93.75 w-full overflow-hidden lg:mb-8 relative">
      <Carousel className="min-w-93.75 w-full">
        <CarouselNext className="hidden absolute w-10 h-10 right-[3%] z-30 cursor-pointer lg:flex"></CarouselNext>
        <CarouselContent>
          {carouselData.map(({ img, id, name, text, imgObjTop, rate }) => (
            <CarouselItem key={id}>
              <img
                className={`h-full w-full max-h-61.5 object-cover overflow-hidden sm:max-h-100 md:max-h-125 lg:max-h-150 xl:max-h-200 ${imgObjTop} rounded-[5px]`}
                src={img}
                alt="Movie Img"
              />
              <div className="p-5 w-full flex flex-col h-72  gap-4 md:p-10 md:gap-7 md:h-100 lg:absolute lg:ml-25 lg:text-white lg:gap-2 lg:h-fit lg:w-fit lg:top-[20%] xl:top-[30%]">
                <NameReviewStatus name={name} rate={rate} />
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
    </div>
  );
};

export default HeroCarousel;
