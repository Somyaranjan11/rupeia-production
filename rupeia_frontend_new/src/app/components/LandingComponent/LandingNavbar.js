"use client";
import React from "react";
import rupeiaLogo from "../../components/Images/rupeia_footer_logo.png";
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";

const LandingNavbar = () => {
  const router = useRouter();
  return (
    <div className="bg-[#551262] h-[70px] flex items-center justify-between px-28">
      <div>
        <img
          src={rupeiaLogo.src}
          className="h-[30px] w-[140px] cursor-pointer"
          onClick={() => {
            router.push("/landing-page");
          }}
        />
      </div>
      <div className="flex items-center flex-row gap-20">
        <p
          className="text-[#ECE6ED] text-[16px] font-medium cursor-pointer"
          onClick={() => {
            router.push("/features-page");
          }}
        >
          FEATURES
        </p>
        <p className="text-[#ECE6ED] text-[16px] font-medium cursor-pointer">
          NEWS
        </p>
        <p className="text-[#ECE6ED] text-[16px] font-medium cursor-pointer">
          BLOGS
        </p>
        <p
          className="text-[#ECE6ED] text-[16px] font-medium cursor-pointer"
          onClick={() => {
            router.push("/pricing-page");
          }}
        >
          PRICING
        </p>
        <p
          className="text-[#ECE6ED] text-[16px] font-medium cursor-pointer"
          onClick={() => {
            router.push("/contactus");
          }}
        >
          CONTACT US
        </p>
      </div>
      <div>
        <button className="bg-[#270330] flex items-center justify-center gap-1 px-5 py-[10px] text-[#ECE6ED] text-[14px] font-medium shadow-2xl rounded-[8px]">
          START INVESTING
          <GoArrowUpRight className="text-[20px]" />
        </button>
      </div>
    </div>
  );
};

export default LandingNavbar;
