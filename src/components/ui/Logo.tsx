const Logo = () => {
  return (
    <div className=" flex w-23 h-5 gap-2 items-center">
      <img
        className="w-5 h-5 object-cover text-indigo-700 cursor-pointer"
        src="/NavImages/film.svg"
        alt="logo"
      />
      <p className="italic font-bold text-indigo-700 cursor-pointer">Movie Z</p>
    </div>
  );
};

export default Logo;
