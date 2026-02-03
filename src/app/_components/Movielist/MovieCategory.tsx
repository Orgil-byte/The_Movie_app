type Category = {
  categoryName: string;
};

const MovieCategory = ({ categoryName }: Category) => {
  return (
    <div className="h-9 flex justify-between items-center w-full">
      <p className="font-semibold text-[24px] leading-8 tracking-[-2.5%]">
        {categoryName}
      </p>
      <div className="flex items-center justify-center w-30 gap-2 cursor-pointer">
        <button className="font-medium text-[14px] leading-5 cursor-pointer">
          See more
        </button>
        <img
          className="w-4 h-4 object-cover"
          src="MovieList/arrow-right.svg"
          alt="See more arrow"
        />
      </div>
    </div>
  );
};

export default MovieCategory;
