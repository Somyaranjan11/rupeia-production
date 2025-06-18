import React from "react";
const Howitworks = () => {
  return (
    <div className="bg-[#3E004A] flex flex-col gap-3 sm:gap-8 px-4 sm:px-28 py-10 font-poppins ">
      <div className="why-stress-free w-full sm:w-[55%] flex justify-center items-center p-10 flex-col gap-2 mx-auto">
        <p className="text-[#ECAFFF] text-[20px] sm:text-[30px] font-semibold text-center ">
          Why Stress-Free Investing?
        </p>
        <p className="text-white text-[12px] sm:text-[15px] font-normal px-2 sm:px-20 text-center">
          Stress-free investing means your portfolio is monitored round the
          clock just like having your personal CA, so your goals stay on track
          and you can concentrate your job.
        </p>
      </div>
      <div>
        <span className="pb-2 sm:pb-7 text-[23px] sm:text-[38px] font-medium -tracking-wide text-white flex-wrap gap-[2px] text-center flex justify-center items-center">
          <span> Built</span>
          <span className="text-[#AF7BB6] px-1">for 5 crore</span>
          <span>proud employees!</span>
        </span>
        <p className="text-[22px] sm:text-[35px] font-normal text-white text-left">
          How it works?
        </p>
        <p className="text-[14px] sm:text-[20px] font-normal text-[#AF7BB6] text-left">
          See how Rupeia helps you earn more
        </p>
      </div>
      <div className="flex flex-row gap-3 sm:gap-10 justify-start sm:justify-center items-center overflow-x-auto">
        <div className=" border-[2px] border-[#FFFFFF61] min-w-[250px] sm:min-w-0 sm:w-fit rounded-3xl p-8 sm:mt-5 flex flex-col gap-5">
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
        <div className=" border-[2px] border-[#FFFFFF61]  min-w-[250px] sm:min-w-0 sm:w-fit rounded-3xl p-7 sm:mt-5 flex flex-col gap-5 ">
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
        <div className=" border-[2px] border-[#FFFFFF61] min-w-[250px] sm:min-w-0 sm:w-fit rounded-3xl p-7 sm:mt-5 flex flex-col gap-5 ">
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
      <div>
        <video autoPlay loop muted playsInline className="w-full border-none">
          <source src="/how_works_video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="px-2 flex flex-col gap-5">
        <p className="text-[19px] sm:text-[25px] font-semibold leading-6 text-center font-poppins text-[#ECE6ED] tracking-wide">
          Sit back, relax and watch your money grow.
        </p>
        <p className="text-[15px] sm:text-[20px] font-semibold leading-6 text-center font-poppins text-[#AF7BB6]">
          Investing has not been more stress free.
        </p>
      </div>
    </div>
  );
};

export default Howitworks;
