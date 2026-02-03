type MovieList = {
  title: string;
  img: string;
  rate: number;
};

const Movies = ({ img, rate, title }: MovieList) => {
  return (
    <div>
      <div className="bg-[#F4F4F5] rounded-lg w-[157.5px] h-[309.0999755859375px] xl:w-[218.24324951171875px] xl:h-[417.05px]">
        <img
          className="w-[157.5px] object-cover h-[233.09999084472656] xl:w-[218.24324951171875px] xl:h-80.75"
          src={img}
          alt="Movie"
        />
        <div className="p-2 flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <img
              className="h-4 w-4 object-cover"
              src="HeroCarousel/Vector.svg"
              alt="Star review"
            />
            <p className="text-[12px] font-medium text-[#09090B] xl:text-[14px]">
              {rate}
              <span className="font-normal  text-[#71717A]">/10</span>
            </p>
          </div>
          <p className="text-sm text-[#09090B] xl:text-[18px]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Movies;
