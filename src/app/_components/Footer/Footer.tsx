import FooterLeftInfo from "./FooterLeftInfo";
import FooterRightInfo from "./FooterRightInfo";

const Footer = () => {
  return (
    <div className="py-10 px-5 w-full h-77 bg-indigo-700 flex flex-col gap-7 sm:relative sm:px-10 lg:h-70 lg:py-10 lg:px-20 lg:flex-row lg:justify-between mt-8">
      <div className="h-13 flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <img
            className="w-5 h-5 object-cover text-indigo-700 cursor-pointer"
            src="/Footer/white-film.svg"
            alt="logo"
          />
          <p className="italic font-bold text-[#FAFAFA] cursor-pointer">
            Movie Z
          </p>
        </div>
        <p className="text-sm text-[#FAFAFA]">
          © 2026 Movie Z. All Rights Reserved.
        </p>
      </div>
      <div className="flex gap-12 lg:gap-20">
        <FooterLeftInfo />
        <FooterRightInfo />
      </div>
    </div>
  );
};

export default Footer;
