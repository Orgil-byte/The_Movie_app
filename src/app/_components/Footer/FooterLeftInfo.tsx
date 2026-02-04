const FooterLeftInfo = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-[#FAFAFA]">Contact Information</p>
      <div className="flex flex-col gap-6 sm:flex-row lg:flex-col">
        <div className="flex gap-3 items-center">
          <img
            className="w-4 h-4 object-cover"
            src="Footer/mail.svg"
            alt="Email"
          />
          <div>
            <p className="text-sm text-[#FAFAFA] font-medium">Email:</p>
            <p className="text-sm text-[#FAFAFA]">support@movieZ.com</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <img
            className="w-4 h-4 object-cover"
            src="Footer/phone.svg"
            alt="Email"
          />
          <div>
            <p className="text-sm text-[#FAFAFA] font-medium">Phone:</p>
            <p className="text-sm text-[#FAFAFA]">+976 (11) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLeftInfo;
