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
import NavbarCommonPage from "@/app/components/NavbarCommonPage";

const page = () => {
  const [pageStep, setPageStep] = useState(1);
  const handleClick = () => {
    if (pageStep > 1) {
      setPageStep(pageStep - 1);
    }
  };

  return (
    <div className="font-poppins flex flex-col h-screen overflow-hidden">
      {/* Navbar stays fixed at the top */}
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Wealth"} handleClick={handleClick} />
      </div>

      {/* Scrollable Middle Content */}
      <div className="flex-grow overflow-y-auto px-5 pt-20 pb-20">
        {pageStep == 1 && (
          <div className="pr-16 pt-2">
            <p className="text-[35px] font-semibold leading-16">Hi!</p>
            <span className="flex flex-row flex-wrap text-[16px] font-semibold items-center gap-1">
              I am your <p className="text-[#D9B9E2]">Wealth Manager ,</p> I
              will be helping you To fulfill your financial goals
            </span>
          </div>
        )}
        {pageStep == 3 && (
          <div className="pr-16 pt-2">
            <p className="text-[35px] font-semibold leading-16">Goals</p>
            <span className="flex flex-row flex-wrap text-[16px] font-semibold items-center gap-1">
              I am your <p className="text-[#D9B9E2]">Goals Manager ,</p>
              Help me identify and fulfill your goals
            </span>
          </div>
        )}
        <div className="mt-5 mb-[80px]">
          {pageStep == 1 && <WealthCard1 />}
          {pageStep == 2 && <WealthCard2 />}
          {pageStep == 3 && <GoalsCard1 />}
          {pageStep == 4 && <GaolsCard2 />}
          {pageStep == 5 && <BenifitsCard />}
          {pageStep == 6 && <Confirmation />}
        </div>
      </div>

      {/* Continue Button stays fixed at the bottom */}
      <div className="border-[1px] border-[#65636394] bg-[#270330] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl">
        {[1, 2, 3, 4, 8].includes(pageStep) && (
          <button
            className="bg-[#551262] w-full py-2 rounded-full text-[15px] leading-7 font-medium text-white"
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
            className="bg-[#551262] w-full py-2 rounded-full text-[15px] leading-7 font-medium text-white flex items-center gap-5"
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
    </div>
  );
};
export default page;
