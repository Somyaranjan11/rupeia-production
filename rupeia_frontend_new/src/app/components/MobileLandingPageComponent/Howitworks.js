"use client";
import React, { useState } from "react";
const Howitworks = () => {
  const [howWorks, setHowWorks] = useState(1);
  return (
    <div className="bg-[#350040] flex flex-col gap-3 sm:gap-8 px-4 sm:px-28 py-10 sm:py-20 font-poppins ">
      <div className="why-stress-free w-full sm:w-[75%] flex justify-center items-center p-10 flex-col gap-2 mx-auto rounded-3xl">
        <p className="text-[#ECAFFF] text-[18px] sm:text-[32px] font-semibold text-center ">
          Why Stress-Free Investing?
        </p>
        <p className="text-white text-[14px] sm:text-[21px] font-normal text-center">
          Stress-free investing means your portfolio is monitored round the
          clock
          <p className="text-white text-[14px] sm:text-[21px] font-normal text-center">
            just like having your personal{" "}
            <span className="text-[#FF2FE3] font-semibold">CA</span>, so your
            goals stay on track
          </p>
          <p className="text-white text-[14px] sm:text-[21px] font-normal text-center">
            and you can concentrate your job.
          </p>
        </p>
      </div>
      <div>
        <span className="pb-2 mt-5 sm:mt-0 sm:py-10 text-[28px] leading-7 sm:text-[68px] font-medium text-white flex-wrap text-center flex justify-center items-center gap-2 sm:gap-4">
          <span>Built for</span>
          <span className="text-[#E760D5] hidden sm:flex"> 5 crore</span>
          <span className="text-[#E760D5] flex sm:hidden"> 5 crore</span>
          <span className="text-white flex sm:hidden">proud</span>


          <span className=" hidden sm:flex">proud employees!</span>
          <span className="flex sm:hidden"> employees!</span>
        </span>
        <p className="text-[24px] sm:text-[53px] font-normal text-white text-left  mt-10 sm:mt-0 sm:pl-7">
          How it works?
        </p>
        <p className="text-[18px] sm:text-[32px] font-normal text-[#AF7BB6] text-left sm:pl-7 ">
          See how Rupeia helps you earn more
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 justify-start sm:justify-center lg:overflow-x-auto hide-scrollbar w-full">
        <div
          className={`cursor-pointer border-[1px] lg:border-[3px] border-[#FFFFFF61] w-full lg:w-[450px] rounded-[40px] p-6 lg:p-8 mt-5 flex flex-col gap-5 ${
            howWorks == 1 ? "h-[182px] lg:h-[230px]" : "h-[110px] sm:h-[161px]"
          } bg-[#41114B]`}
          onClick={() => {
            setHowWorks(1);
          }}
        >
          <div className="">
            <span className="text-[20px] sm:text-[24px] font-medium text-white flex flex-wrap gap-[2px]">
              <span> Smart</span>
              <span className="text-[#AF7BB6] px-1">Analysis</span>
              <span className="px-1">and</span>
            </span>
            <span className="text-[20px] sm:text-[24px] font-medium text-white flex flex-wrap gap-[2px]">
              <span>Fund Allocation</span>
            </span>
          </div>
          {howWorks == 1 && (
            <p className="text-[14px] sm:text-[17px] font-normal text-[#C7B7CA] text-left">
              We analyze your profile and allocate goal-based, expert-curated
              funds.
            </p>
          )}
        </div>
        <div className="block lg:hidden">
          {howWorks == 1 && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full border-none rounded-4xl "
            >
              <source src="/how_works_video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div
          className={`cursor-pointer border-[1px] lg:border-[3px] border-[#FFFFFF61] w-full lg:w-[450px] rounded-[40px] p-6 lg:p-8 sm:mt-5 flex flex-col gap-5 ${
            howWorks == 2 ? "h-[192px] lg:h-[230px]" : "h-[110px] sm:h-[161px]"
          } bg-[#41114B]`}
          onClick={() => {
            setHowWorks(2);
          }}
        >
          <span className="text-[20px] sm:text-[24px] font-medium text-white flex flex-wrap gap-[2px]">
            <span className="text-[#AF7BB6] px-1">AI</span>
            <span>powered and seek</span>
            <span className="text-[#AF7BB6] px-1">Risk Appetite</span>
            <span>analysis</span>
          </span>
          {howWorks == 2 && (
            <p className="text-[14px] sm:text-[17px]  font-normal text-[#C7B7CA] text-left">
              Experts track your progress regularly to keep you aligned with
              your goals.
            </p>
          )}
        </div>
        <div
          className={`cursor-pointer border-[1px] lg:border-[3px] border-[#FFFFFF61] min-w-[250px] sm:min-w-0 lg:w-[450px] rounded-[40px] p-6 lg:p-8 sm:mt-5 flex flex-col gap-5 ${
            howWorks == 3 ? "h-[192px] lg:h-[230px]" : "h-[110px] sm:h-[161px]"
          } bg-[#41114B]`}
          onClick={() => {
            setHowWorks(3);
          }}
        >
          <div>
            <span className="text-[20px] sm:text-[24px] font-medium text-white flex flex-wrap gap-[2px]">
              <span className="text-[#AF7BB6]">Stress Free</span>
              <span className=" px-1">Investing and </span>
            </span>
            <span className="text-[20px] sm:text-[24px] font-medium text-white flex flex-wrap gap-[2px]">
              <span>Money </span>
              <span className="text-[#AF7BB6] px-1">Growth</span>
            </span>
          </div>
          {howWorks == 3 && (
            <p className="text-[14px] sm:text-[17px] font-normal text-[#C7B7CA] text-left">
              We monitor your portfolio and reshuffle funds to boost returns,
              reduce losses.
            </p>
          )}
        </div>
      </div>
      <div className="hidden lg:block">
        {howWorks == 1 && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full border-none "
          >
            <source src="/how_works_video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="px-2 flex flex-col gap-3 sm:gap-5 pt-10 sm:py-0 ">
        <p className="text-[24px] sm:text-[42px] font-semibold font-poppins text-center text-[#ECE6ED] tracking-wide">
          Sit back, relax and watch your money grow.
        </p>
        <p className="text-[20px] sm:text-[32px] font-semibold leading-6 text-center font-poppins text-[#AF7BB6]">
          Investing has not been more stress free.
        </p>
      </div>
    </div>
  );
};

export default Howitworks;
