type NavigationButtonsProps = {
  search: () => void;
};
export const NavigationButtons = ({ search }: NavigationButtonsProps) => {
  return (
    <div className="w-21 h-9 flex gap-3">
      <button
        onClick={search}
        className="w-9 h-9 border border-[#e4e4e7] rounded-md flex justify-center items-center shadow-sm drop-shadow-[2px] cursor-pointer lg:hidden"
      >
        <img
          className="w-4 h-4 object-cover"
          src="NavImages/search.svg"
          alt="Search bar"
        />
      </button>
      <button className="w-9 h-9 border border-[#e4e4e7] rounded-md flex justify-center items-center shadow-sm drop-shadow-[2px] cursor-pointer">
        <img
          className="w-4 h-4 object-cover"
          src="NavImages/moon.svg"
          alt="Dark, Light mode switch bar"
        />
      </button>
    </div>
  );
};
