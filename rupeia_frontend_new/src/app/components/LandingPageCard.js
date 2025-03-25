"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LandingPageCard = () => {
  const router = useRouter();
  return (
    <div
      className="bg-primary h-full rounded-2xl flex justify-between flex-col font-poppins"
      onClick={() => {
        router.push("product/wealth");
      }}
    >
      <div className="pl-[30px] pt-12">
        <h3 className="text-3xl font-bold bg-gradient-to-b from-[#ffffff] to-[#747474] bg-clip-text text-transparent">
          GROWTH
        </h3>
        <p className="text-[20px] font-medium leading-7">Steady Wealth </p>
        <p className="text-[11px] font-medium leading-7">
          You get 2x the gain if you make gain
        </p>
      </div>
      <div className="flex justify-center items-center pb-6">
        <button className="bg-[#551262] text-white text-[13px] font-semibold px-5 rounded-full py-2">
          Start Now
        </button>
      </div>
    </div>
  );
};

export default LandingPageCard;
