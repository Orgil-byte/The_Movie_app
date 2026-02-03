type MovieList = {
  title: string;
  img: string;
  rate: number;
  id: number;
};

const Movies = ({ img, rate, title, id }: MovieList) => {
  return (
    <div key={id} className="grid grid-cols-2 gap-5 ">
      <div className="bg-[#F4F4F5] rounded-lg w-[157.5px] h-[309.0999755859375px]">
        <img
          className="w-[157.5px] object-cover h-[233.09999084472656]"
          src="MovieList/movie1.jpg"
          alt="Movie"
        />
        <div className="p-2 flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <img className="h-4 w-4 object-cover" src={img} alt="Star review" />
            <p className="text-[12px] font-medium text-[#09090B]">
              {rate}
              <span className="font-normal  text-[#71717A]">/10</span>
            </p>
          </div>
          <p className="text-sm text-[#09090B]">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Movies;
