"use client";
import { useRouter } from "next/navigation";
import React from "react";
import LandingImage from "../components/Images/landingpage-image3.png";
import LandingImageCard from "../components/Images/landingpage-image4.png";

const LandingPageBlogsCard = () => {
  const router = useRouter();
  return (
    <div
      className="bg-primary rounded-2xl flex flex-col font-poppins h-[370px] relative w-[480px]"
      onClick={() => {
        router.push("product/blogs");
      }}
    >
      <div className="pt-5 flex flex-row justify-between relative">
        <div className="pl-[30px]">
          <h3 className="text-3xl font-bold bg-gradient-to-b from-[#ffffff] to-[#747474] bg-clip-text text-transparent">
            BLOGS
          </h3>
          <p className="text-[22px] font-medium leading-7 mt-2">Personalized</p>
          <p className="text-[11px] font-medium mt-1">
            Curated blogs tailored to your financial journey!
          </p>
        </div>
        <div className="bg-[#9563A257] flex justify-center items-center h-[100px] w-[110px] rounded-l-full image-card-class">
          <img src={LandingImage.src} className="h-[100px] w-[130px]" />
        </div>
      </div>
      <div className="w-full h-[180px] flex justify-center items-center">
        <img src={LandingImageCard.src} className="h-[150px] w-full" />
      </div>
      <div className="flex justify-center items-center pb-6 mt-5 absolute -bottom-4 left-0 right-0">
        <button className="bg-[#551262] text-white text-[13px] font-semibold px-5 rounded-full py-2">
          Start Now
        </button>
      </div>
    </div>
  );
};

export default LandingPageBlogsCard;
