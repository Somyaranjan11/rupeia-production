import React from "react";

const Howitworks = () => {
  return (
    <div className="px-28">
      <div>
        <p className="text-[25px] font-normal text-white text-left">
          How it works?
        </p>
        <p className="text-[16px] font-normal text-[#AF7BB6] text-left">
          See how Rupeia helps you earn more
        </p>
      </div>
      <div className="flex flex-row gap-10">
        <div className=" border-[2px] border-[#FFFFFF61] rounded-3xl p-8 mt-5 flex flex-col gap-2">
          <span className="text-[16px] sm:text-[18px] font-normal text-white flex flex-wrap gap-[2px]">
            <span> Smart</span>
            <span className="text-[#AF7BB6] px-1">Analysis &</span>
            <span>Fund Allocation</span>
          </span>
          <p className="text-[13px] sm:text-[15px] font-normal text-white text-left">
            We analyze your profile and allocate goal-based, expert-curated
            funds.
          </p>
        </div>
        <div className=" border-[2px] border-[#FFFFFF61] rounded-3xl p-7 mt-5 ">
          <span className="text-[16px] sm:text-[18px] font-normal text-white flex flex-wrap gap-[2px]">
            <span className="text-[#AF7BB6] px-1">AI</span>
            <span>powered and seek</span>
            <span className="text-[#AF7BB6] px-1">Risk Appetite</span>
            <span>analysis</span>
          </span>
          <p className="text-[13px] sm:text-[15px]  font-normal text-white text-left">
            Experts track your progress regularly to keep you aligned with your
            goals.
          </p>
        </div>
        <div className=" border-[2px] border-[#FFFFFF61] rounded-3xl p-7 mt-5 ">
          <span className="text-[16px] sm:text-[18px] font-normal text-white flex flex-wrap gap-[2px]">
            <span>Stress Free</span>
            <span className="text-[#AF7BB6] px-1">Investing and </span>
            <span>Money </span>
            <span className="text-[#AF7BB6] px-1">Growth</span>
          </span>
          <p className="text-[13px] sm:text-[15px]  font-normal text-white text-left">
            We monitor your portfolio and reshuffle funds to boost returns,
            reduce losses.
          </p>
        </div>
      </div>
      <div className="mt-5 px-2 flex flex-col gap-3">
        <p className="text-[19px] italic font-semibold leading-6 text-center font-poppins text-[#AF7BB6]">
          Sit back, relax and watch your money grow.
        </p>
        <p className="text-[15px] italic font-semibold leading-6 text-center font-poppins text-[#AF7BB6]">
          Investing has not been more stress free.
        </p>
      </div>
    </div>
  );
};

export default Howitworks;
