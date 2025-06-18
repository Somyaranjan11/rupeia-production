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
      <div className="py-5 sm:py-20 flex flex-col gap-5">
        <p className="text-[25px] sm:text-[45px] text-[#ECAFFF] text-center font-semibold tracking-wide uppercase">
          About us
        </p>
        <p className="text-[15px] sm:text-[25px] text-[#ECAFFF] text-center font-semibold tracking-wide">
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
