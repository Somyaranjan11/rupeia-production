"use client";
import React from "react";
import rupeiaLogo from "../../components/Images/rupeia_footer_logo.png";
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "@/app/SVG/Logo";

const LandingNavbar = ({ from, openPopUp = () => {} }) => {
  const router = useRouter();
  return (
    <div
      className={`h-[75px]  flex items-center justify-between px-4 sm:px-28 ${
        from == "landing-page" ? "bg-[#350040]" : "bg-[#551262]"
      }`}
    >
      <div className="">
        {/* <img
          src={rupeiaLogo.src}
          className="h-[30px] w-[120px] sm:w-[140px] cursor-pointer"
          onClick={() => {
            router.push("/landing-page");
          }}
        /> */}

        <div
          onClick={() => {
            router.push("/landing-page");
          }}
          className="cursor-pointer"
        >
          <Logo />
        </div>
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
        <p
          className="text-[#ECE6ED] text-[18px] font-medium cursor-pointer"
          onClick={() => {
            router.push("/blog");
          }}
        >
          BLOGS
        </p>
        <p
          className="text-[#ECE6ED] text-[18px] font-medium cursor-pointer hidden"
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
        <button
          className="bg-[#270330] cursor-pointer flex items-center justify-center gap-1 px-5 py-[10px] text-[#ECE6ED] text-[14px] font-medium shadow-2xl rounded-[8px]"
          onClick={()=>{
            openPopUp()
          }}
        >
          START INVESTING
          <GoArrowUpRight className="text-[20px]" />
        </button>
      </div>
      <div className="block sm:hidden">
        <GiHamburgerMenu className="text-[26px] text-white" />
      </div>
    </div>
  );
};

export default LandingNavbar;
