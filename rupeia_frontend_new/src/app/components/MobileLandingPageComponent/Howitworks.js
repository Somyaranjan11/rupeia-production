import React from "react";

const Howitworks = () => {
  return (
    <div className="p-5">
      <div>
        <p className="text-[25px] font-normal text-white text-left">
          How it works?
        </p>
        <p className="text-[16px] font-normal text-[#AF7BB6] text-left">
          See how Rupeia helps you earn more
        </p>
      </div>
      <div className=" border-[2px] border-[#FFFFFF61] rounded-3xl p-8 mt-5 flex flex-col gap-2">
        <p className="text-[16px] font-normal text-[#AF7BB6] text-left leading-6">
          Stress free Investing and Money Growth
        </p>
        <p className="text-[13px] font-normal text-white text-left">
          Set a daily amount. Turn autosave on. Before you know, your savings
          will grow
        </p>
      </div>
      <div>GIF</div>
      <div className=" border-[2px] border-[#FFFFFF61] rounded-3xl p-7 mt-5 ">
        <span className="text-[16px] font-normal text-white flex flex-wrap gap-[2px]">
          <span>AI powered and seek</span>
          <span className="text-[#AF7BB6]">Risk Appetite</span>
          <span>analysis</span>
        </span>
      </div>
      <div className=" border-[2px] border-[#FFFFFF61] rounded-3xl p-7 mt-5 ">
        <span className="text-[16px] font-normal text-white flex flex-wrap gap-[2px]">
          <span>Stress Free</span>
          <span className="text-[#AF7BB6]">Investing and </span>
          <span>Money Growth</span>
        </span>
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
