"use client";
import { useRouter } from "next/navigation";
import React from "react";
import LandingImage from "../components/Images/landingpage.png";
import LandingImageCard from "../components/Images/landingcard.png";

const LandingPageCard = () => {
  const router = useRouter();
  return (
    <div
      className="bg-primary rounded-2xl flex flex-col font-poppins h-[370px] relative w-[280x]"
      onClick={() => {
        router.push("product/wealth");
      }}
    >
      <div className="pt-5 flex flex-row justify-between relative">
        <div className="pl-[30px]">
          <h3 className="text-3xl font-bold bg-gradient-to-b from-[#ffffff] to-[#747474] bg-clip-text text-transparent">
            GROWTH
          </h3>
          <p className="text-[22px] font-medium leading-7 mt-2">
            Steady Wealth{" "}
          </p>
          <p className="text-[11px] font-medium mt-1">
            You get 2x the gain if <br />
            you make gain
          </p>
        </div>
        <div className="bg-[#9563A257] flex justify-center items-center h-[100px] w-[100px] rounded-l-full image-card-class">
          <img src={LandingImageCard.src} className="" />
        </div>
      </div>
      <div className="w-full h-[120px] flex justify-center items-center">
        <img src={LandingImage.src} className="h-[200px] w-full" />
      </div>
      <div className="flex justify-center items-center pb-6 mt-5 absolute -bottom-4 left-0 right-0">
        <button className="bg-[#551262] text-white text-[13px] font-semibold px-5 rounded-full py-2">
          Start Now
        </button>
      </div>
    </div>
  );
};

export default LandingPageCard;
