"use client";
import BenifitsCard from "@/app/components/Benifits/BenifitsCard";
import GaolsCard2 from "@/app/components/Goals/GaolsCard2";
import GoalsCard1 from "@/app/components/Goals/GoalsCard1";
import WealthCard1 from "@/app/components/Wealth/WealthCard1";
import WealthCard2 from "@/app/components/Wealth/WealthCard2";
import { BsArrowLeftShort } from "react-icons/bs";

import React, { useState } from "react";
import BenifitsCard2 from "@/app/components/Benifits/BenifitsCard2";
import BenifitsCard3 from "@/app/components/Benifits/BenifitsCard3";
import Confirmation from "@/app/components/Confirmation/Confirmation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const page = () => {
  const [pageStep, setPageStep] = useState(1);
  return (
    <div className="px-8 font-poppins flex flex-col h-full relative overflow-y-auto">
      <div
        className="bg-[#551262D4] p-1 rounded-full border-[1px] border-[#794083] w-fit mt-2"
        onClick={() => {
          if (pageStep > 1) {
            setPageStep(pageStep - 1);
          }
        }}
      >
        <BsArrowLeftShort className="text-[22px]" />
      </div>
      {pageStep == 1 && (
        <div className="pr-16 pt-2">
          <p className="text-[35px] font-semibold leading-16">Hi!</p>
          <span className="flex flex-row flex-wrap text-[16px] font-semibold items-center gap-1">
            I am your <p className="text-[#D9B9E2]">Wealth Manager ,</p> I will
            be helping you To fulfill your financial goals
          </span>
        </div>
      )}
      {pageStep == 3 && (
        <div className="pr-16 pt-2">
          <p className="text-[35px] font-semibold leading-16">Gaols</p>
          <span className="flex flex-row flex-wrap text-[16px] font-semibold items-center gap-1">
            I am your <p className="text-[#D9B9E2]">Goals Manager ,</p>
            Help me identify and Fulfill your goals
          </span>
        </div>
      )}

      <div className="mt-5 mb-4 h-full">
        {pageStep == 1 && <WealthCard1 />}
        {pageStep == 2 && <WealthCard2 />}
        {pageStep == 3 && <GoalsCard1 />}
        {pageStep == 4 && <GaolsCard2 />}
        {pageStep == 5 && <BenifitsCard />}
        {pageStep == 6 && <BenifitsCard2 />}
        {pageStep == 7 && <BenifitsCard3 />}
        {pageStep == 8 && <Confirmation />}
      </div>
      {/* <button className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#551262] w-full max-w-[calc(100%-64px)] py-2 rounded-full text-[15px] leading-7 font-semibold text-white">
        Continue
      </button> */}
      {[1, 2, 3, 4, 8].includes(pageStep) && (
        <button
          className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#551262] w-full max-w-[calc(100%-64px)] py-2 rounded-full text-[15px] leading-7 font-medium text-white"
          type="button"
          onClick={() => {
            if (pageStep > 0 && pageStep < 8) {
              setPageStep(pageStep + 1);
            }
          }}
        >
          Continue
        </button>
      )}
      {[5, 6, 7].includes(pageStep) && (
        <button
          className="fixed flex flex-row items-center gap-6 px-1 bottom-5 left-1/2 -translate-x-1/2 bg-[#551262] w-full max-w-[calc(100%-64px)] py-2 rounded-full text-[15px] leading-7 font-medium text-white"
          type="button"
          onClick={() => {
            if (pageStep > 0 && pageStep < 8) {
              setPageStep(pageStep + 1);
            }
          }}
        >
          <span className="flex flex-row items-center">
            <p className="flex justify-center items-center p-[6px] bg-[#FFFFFF4F] w-fit rounded-full ">
              <MdOutlineKeyboardArrowRight className="text-white text-[20px]" />
            </p>
            <MdOutlineKeyboardArrowRight className="text-[#FFFFFF99] text-[20px]" />
            <MdOutlineKeyboardArrowRight className="text-[#FFFFFF4D] text-[20px]" />
          </span>
          Swipe to Start
        </button>
      )}
    </div>
  );
};

export default page;
