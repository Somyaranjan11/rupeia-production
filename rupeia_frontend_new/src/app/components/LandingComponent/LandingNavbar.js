"use client";
import React from "react";
import rupeiaLogo from "../../components/Images/rupeia_footer_logo.png";
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";

const LandingNavbar = () => {
  const router = useRouter();
  return (
    <div className="bg-[#551262] h-[75px] flex items-center justify-between px-4 sm:px-28">
      <div className="">
        <img
          src={rupeiaLogo.src}
          className="h-[30px] w-[120px] sm:w-[140px] cursor-pointer"
          onClick={() => {
            router.push("/landing-page");
          }}
        />
      </div>
      <div className="items-center flex-row gap-14 hidden sm:flex">
        <p
          className="text-[#ECE6ED] text-[18px] font-medium cursor-pointer"
          onClick={() => {
            router.push("/features-page");
          }}
        >
          FEATURES
        </p>
        <p className="text-[#ECE6ED] text-[18px] font-medium cursor-pointer">
          NEWS
        </p>
        <p className="text-[#ECE6ED] text-[18px] font-medium cursor-pointer">
          BLOGS
        </p>
        <p
          className="text-[#ECE6ED] text-[18px] font-medium cursor-pointer"
          onClick={() => {
            router.push("/pricing-page");
          }}
        >
          PRICING
        </p>
        <p
          className="text-[#ECE6ED] text-[18px] font-medium cursor-pointer"
          onClick={() => {
            router.push("/contactus");
          }}
        >
          CONTACT US
        </p>
        <p
          className="text-[#ECE6ED] text-[18px] font-medium cursor-pointer"
          onClick={() => {
            router.push("/about-us");
          }}
        >
          ABOUT US
        </p>
      </div>
      <div className="hidden sm:block">
        <button className="bg-[#270330] flex items-center justify-center gap-1 px-5 py-[10px] text-[#ECE6ED] text-[14px] font-medium shadow-2xl rounded-[8px]">
          START INVESTING
          <GoArrowUpRight className="text-[20px]" />
        </button>
      </div>
      <div className="block sm:hidden">
        <GiHamburgerMenu className="text-[26px]"/>
      </div>
    </div>
  );
};

export default LandingNavbar;
