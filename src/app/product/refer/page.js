"use client";
import React, { useState } from "react";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import referFriendImage from "../../components/Images/refer-content.png";
import ReferalNews from "@/app/components/ScratchCard/ReferalNews";
import ScratchCard from "@/app/components/ScratchCard/ScarathCard";

const Page = () => {
  const handleClick = () => {
    console.log("hello");
    if (step == 2) {
      setStep(step - 1);
    }
  };
  const [step, setStep] = useState(1);
  return (
    <div className="px-5 overflow-y-auto font-poppins flex flex-col h-screen pt-24 pb-16">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Refer a friend"} handleClick={handleClick} />
      </div>
      {step == 1 && <ReferalNews />}
      {step == 2 && <ScratchCard secretCode={21678} />}

      <div className="border-[1px] border-[#65636394] bg-[#270330] z-50 py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl">
        <button
          className="bg-[#551262] w-full py-2 rounded-full text-[15px] leading-7 font-medium text-white"
          type="button"
          onClick={() => {
            setStep(step + 1);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Page;
