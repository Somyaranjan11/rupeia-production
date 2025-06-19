import React from "react";
import OurVision from "../components/AboutUs/OurVision";
import Founder from "../components/AboutUs/Founder";
import Brand from "../components/AboutUs/Brand";
import Footer from "../components/MobileLandingPageComponent/Footer";
import OurValue from "../components/AboutUs/OurValue";
import BuildingPlatform from "../components/AboutUs/BuildingPlatform";
import LandingNavbar from "../components/LandingComponent/LandingNavbar";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#350040]">
      <LandingNavbar />
      <div className="py-5 sm:py-14 flex flex-col gap-5 px-28">
        <span className="flex flex-row items-center gap-1 justify-center">
          <p className="text-[25px] sm:text-[64px] text-white text-center font-semibold tracking-wide uppercase">
            About
          </p>
          <p className="text-[25px] sm:text-[64px] text-[#ECAFFF] text-center font-semibold tracking-wide uppercase">
            us
          </p>
        </span>

        <p className="text-[15px] sm:text-[42px] text-[#ECAFFF] text-center font-semibold tracking-wide px-14">
          “Our mission is to help every Indian confidently Up their wealth”
        </p>
      </div>
      <OurVision />
      <Founder />
      <Brand />
      <OurValue />
      <BuildingPlatform />
      <Footer />
    </div>
  );
};

export default Page;
