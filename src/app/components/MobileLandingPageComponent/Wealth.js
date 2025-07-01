import React from "react";
import WealthImage from "../Images/wealth.png";
import RuppiesImage from "../Images/ruppies.png";
import AiGem from "../Images/AiGem.png";

const Wealth = () => {
  return (
    <div className="px-5 mt-5">
      <div className="flex flex-col gap-2">
        <p className="text-[25px] font-medium leading-6 text-right">
          Wealth Creation
        </p>
        <p className="text-[14px] font-medium leading-5 pl-10 text-right">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="flex flex-row gap-4 mt-10 w-full pl-5">
        <div className="pl-5">
          <span className="text-[20px] flex flex-col gap-1 text-[#AF7BB6] leading-6 font-black italic text-right">
            <p>Increase</p>
            <p> Your</p>
            <p>Profits</p>
          </span>
        </div>
        <div className="why-rupeia-blur border-[1px] border-[#FFFFFF61] rounded-3xl p-4 flex flex-row items-center justify-center w-full">
          <img src={WealthImage.src} className="h-[80px] w-[80px]" />
          <img src={RuppiesImage.src} className="h-[70px] w-[70px]" />
        </div>
      </div>
      <div className="flex flex-row gap-8 mt-5 w-full pl-5">
        <div className="">
          <img src={AiGem.src} className="h-[100px] w-[100px]" />
        </div>
        <div className="">
          <span className="text-[20px] flex flex-col gap-1 text-[#AF7BB6] leading-6 font-black italic">
            <p className="">From Our </p>
            <p> Suggested</p>
            <p>Investments</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Wealth;
