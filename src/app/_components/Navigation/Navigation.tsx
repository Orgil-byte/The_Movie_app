import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

const NavigationMain = () => {
  return (
    <div className="w-full max-w-7xl h-14.75 flex justify-between px-5 items-center lg:mb-3">
      <div className=" flex w-23 h-5 gap-2 items-center">
        <img
          className="w-5 h-5 object-cover text-indigo-700 cursor-pointer"
          src="NavImages/film.svg"
          alt="logo"
        />
        <p className="italic font-bold text-indigo-700 cursor-pointer">
          Movie Z
        </p>
      </div>
      <InputGroup className="w-94.75 hidden lg:block">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon></InputGroupAddon>
      </InputGroup>
      <div className="w-21 h-9 flex gap-3">
        <button className="w-9 h-9 border border-[#e4e4e7] rounded-md flex justify-center items-center shadow-sm drop-shadow-[2px] cursor-pointer lg:hidden">
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
    </div>
  );
};

export default NavigationMain;
