const DesktopSearch = () => {
  return (
    <div className="w-24.25 rounded-md h-9 shadow py-2 px-4 flex gap-2 items-center cursor-pointer">
      <img
        className="w-4 h-4 object-cover "
        src="NavImages/chevron-down.svg"
        alt="down chevron"
      />
      <p className="font-medium text-[14px]">Genre</p>
    </div>
  );
};

export default DesktopSearch;
