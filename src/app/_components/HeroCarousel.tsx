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
import { dataHeroCarousel } from "../_data/hero-carousel-data";

const HeroCarousel = () => {
  const [carouselData, setCarouselData] = useState(dataHeroCarousel);

  return (
    <div className="min-93.75 w-full overflow-hidden mb-8">
      <Carousel className="min-w-93.75 w-full">
        <CarouselContent id="animation">
          {carouselData.map(({ img, id, name, text }) => (
            <CarouselItem id={name} key={id} className="relative">
              <img
                className="min-w-93.75 w-full h-61.5 object-cover overflow-hidden md:h-120"
                src={img}
                alt="Movie Img"
              />
              <div className="flex absolute items-center gap-1 top-[45%] left-[50%] md:top-[60%] md:gap-2">
                <a className="w-1 h-1 bg-white rounded-full opacity-80 md:w-2 md:h-2"></a>
                <a className="w-1 h-1 bg-white rounded-full opacity-80 md:w-2 md:h-2"></a>
                <a className="w-1 h-1 bg-white rounded-full opacity-80 md:w-2 md:h-2"></a>
              </div>
              <div className="p-5 w-full h-66 flex flex-col gap-4">
                <NameReviewStatus name={name} />
                <p className="text-sm font-normal text-[14px] leading-5 text-[#09090B]">
                  {text}
                </p>
                <WatchLaterBtn />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
