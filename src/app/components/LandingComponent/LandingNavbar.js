"use client";
import React, { useState } from "react";
import rupeiaLogo from "../../components/Images/rupeia_footer_logo.png";
import { GoArrowUpRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "@/app/SVG/Logo";
import { FaAngleRight } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

const LandingNavbar = ({ from, openPopUp = () => {} }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pageName = [
    {
      id: 1,
      name: "Features",
      page: "/features-page",
    },
    {
      id: 2,
      name: "News",
      page: "/news",
    },
    {
      id: 3,
      name: "Blogs",
      page: "/blog",
    },
    {
      id: 4,
      name: "pricing",
      page: "/pricing-page",
    },
    {
      id: 5,
      name: "contact us",
      page: "/contact-us",
    },
    {
      id: 6,
      name: "about us",
      page: "/about-us",
    },
  ];
  return (
    <div
      className={`h-[75px] relative  flex items-center justify-between px-4 sm:px-28 ${
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
        <p
          className="text-[#ECE6ED] text-[18px] font-medium cursor-pointer"
          onClick={() => {
            router.push("/news");
          }}
        >
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
            router.push("/contact-us");
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
      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 hamburger-menu-class w-full h-screen z-[9999] block lg:hidden">
          <div>
            {pageName.map((data, index) => (
              <div
                className="flex justify-between items-center px-7 py-3 border-b-[1px] border-[#FFFFFF80]"
                key={index}
                onClick={()=>{
                  router.push(data?.page)
                }}
              >
                <p className="text-[#ECE6ED] text-[16px] font-medium uppercase">
                  {data?.name}
                </p>
                <span>
                  <FaAngleRight className="text-[#ECE6ED] text-[15px]" />
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-5">
            <button className="w-[75%] bg-[#551262] text-[#ECE6ED] text-[16px] font-semibold flex justify-center items-center gap-1 h-[45px] rounded-[10px]">
              START INVESTING
              <FiArrowUpRight className="text-[26px]" />
            </button>
          </div>
        </div>
      )}
      <div className="hidden sm:block">
        <button
          className="bg-[#270330] cursor-pointer flex items-center justify-center gap-1 px-5 py-[10px] text-[#ECE6ED] text-[14px] font-medium shadow-2xl rounded-[8px]"
          onClick={() => {
            openPopUp();
          }}
        >
          START INVESTING
          <GoArrowUpRight className="text-[20px]" />
        </button>
      </div>
      <div
        className="block sm:hidden"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <GiHamburgerMenu className="text-[26px] text-white" />
      </div>
    </div>
  );
};

export default LandingNavbar;
