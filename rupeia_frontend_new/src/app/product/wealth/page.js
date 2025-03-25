import WealthCard1 from "@/app/components/Wealth/WealthCard1";
import React from "react";

const page = () => {
  return (
    <div className="px-3 font-poppins justify-between flex flex-col h-full">
      <div className=" pr-16">
        <p className="text-[35px] font-semibold leading-16">Hi!</p>
        <p className="flex flex-row flex-wrap text-[16px] font-semibold items-center gap-1">
          I am your <p className="text-[#D9B9E2]">Wealth Manager ,</p> I will be
          helping you To fulfill your financial goals
        </p>
      </div>
      <div className="mt-7 h-full">
        <WealthCard1 />
      </div>
      <div className="mt-5">
        <button className="bg-[#551262] w-full py-2 rounded-full text-[15px] leading-7 font-semibold">Continue</button>
      </div>
    </div>
  );
};

export default page;
