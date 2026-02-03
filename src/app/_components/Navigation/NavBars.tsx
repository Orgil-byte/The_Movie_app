type NavBarsProps = {
  bar: string;
  barInfo: string;
};

const NavBars = ({ bar, barInfo }: NavBarsProps) => {
  return (
    <button className="w-9 h-9 border border-[#e4e4e7] rounded-md flex justify-center items-center shadow-sm drop-shadow-[2px] cursor-pointer">
      <img className="w-4 h-4 object-cover" src={bar} alt={barInfo} />
    </button>
  );
};

export default NavBars;
