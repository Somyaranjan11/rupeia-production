import WealthCard1 from "@/app/components/Wealth/WealthCard1";
import React from "react";

const page = () => {
  return (
    <div className="px-8 font-poppins flex flex-col h-full relative overflow-hidden">
      <div className="pr-16 pt-12">
        <p className="text-[35px] font-semibold leading-16">Hi!</p>
        <p className="flex flex-row flex-wrap text-[16px] font-semibold items-center gap-1">
          I am your <p className="text-[#D9B9E2]">Wealth Manager ,</p> I will be
          helping you To fulfill your financial goals
        </p>
      </div>
      <div className="mt-7 mb-4 h-full">
        <WealthCard1 />
      </div>
      <button className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#551262] w-full max-w-[calc(100%-64px)] py-2 rounded-full text-[15px] leading-7 font-semibold text-white">
        Continue
      </button>
    </div>
  );
};

export default page;
