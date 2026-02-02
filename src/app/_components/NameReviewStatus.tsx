type NameProps = {
  name: string;
};

const NameReviewStatus = ({ name }: NameProps) => {
  return (
    <div className="w-full h-13 flex justify-between">
      <div>
        <p className="font-normal text-sm leading-5 text-[#09090B]">
          Now Playing:
        </p>
        <h3 className="font-semibold text-[24px] leading-8 tracking-[-2.5%]">
          {name}
        </h3>
      </div>
      <div className="w-20.75 h-12 flex gap-1 items-center">
        <img
          className="h-7 w-7 object-cover"
          src="HeroCarousel/Vector.svg"
          alt="Star review"
        />
        <p className="text-[18px] font-semibold leading-7 text-[#09090B]">
          6.9
          <span className="font-normal text-[16px] leading-6 text-[#71717A]">
            /10
          </span>
        </p>
      </div>
    </div>
  );
};

export default NameReviewStatus;
