import NavBars from "./NavBars";

const NavigationMain = () => {
  return (
    <div className="w-full h-14.75 flex justify-between px-5 items-center">
      <div className=" flex w-23 h-5 gap-2 items-center">
        <img
          className="w-5 h-5 object-cover text-indigo-700"
          src="NavImages/film.svg"
          alt="logo"
        />
        <p className="italic font-bold text-indigo-700">Movie Z</p>
      </div>
      <div className="w-21 h-9 flex gap-3">
        <NavBars bar="NavImages/search.svg" barInfo="Search bar" />
        <NavBars
          bar="NavImages/moon.svg"
          barInfo="Dark, Light mode switch bar"
        />
      </div>
    </div>
  );
};

export default NavigationMain;
