import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

type NavigationSearchProps = {
  closeSearch: () => void;
};
export const NavigationSearch = ({ closeSearch }: NavigationSearchProps) => {
  return (
    <div className="w-full h-14.75 flex justify-between items-center lg:mb-3">
      <button className="w-9 h-9 border border-[#e4e4e7] rounded-md flex justify-center items-center shadow-sm drop-shadow-[2px] cursor-pointer">
        <img
          className="w-4 h-4 object-cover"
          src="NavImages/chevron-down.svg"
          alt="Dark, Light mode switch bar"
        />
      </button>
      <div className="flex w-63">
        <button className="cursor-pointer">
          <img className="opacity-50" src="NavImages/search.svg" alt="Search" />
        </button>
        <InputGroup className="border-none shadow-none">
          <InputGroupInput
            className="focus:shadow-none outline-none focus:outline-none focus:ring-0"
            placeholder="Search"
          />
        </InputGroup>
      </div>
      <button onClick={closeSearch} className="cursor-pointer">
        <img src="NavImages/x.svg" alt="Close Button" />
      </button>
    </div>
  );
};
