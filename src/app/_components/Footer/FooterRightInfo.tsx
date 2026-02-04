const FooterRightInfo = () => {
  return (
    <div className="flex flex-col gap-3 sm:absolute sm:right-[9%] sm:top-[13.5%] lg:static">
      <p className="text-sm text-[#FAFAFA]">Follow us</p>
      <div className="flex flex-col gap-3 lg:flex-row">
        <p className="text-sm text-[#FAFAFA] font-medium">Facebook</p>
        <p className="text-sm text-[#FAFAFA] font-medium">Instagram</p>
        <p className="text-sm text-[#FAFAFA] font-medium">Twitter</p>
        <p className="text-sm text-[#FAFAFA] font-medium">Youtube</p>
      </div>
    </div>
  );
};

export default FooterRightInfo;
