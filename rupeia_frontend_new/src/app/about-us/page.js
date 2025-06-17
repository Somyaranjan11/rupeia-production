import React from "react";
import OurVision from "../components/AboutUs/OurVision";
import Founder from "../components/AboutUs/Founder";
import Brand from "../components/AboutUs/Brand";
import Footer from "../components/MobileLandingPageComponent/Footer";
import OurValue from "../components/AboutUs/OurValue";
import BuildingPlatform from "../components/AboutUs/BuildingPlatform";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#551262]">
      <OurVision />
      <Founder />
      <Brand/>
      <OurValue/>
      <BuildingPlatform/>
      <Footer/>
    </div>
  );
};

export default Page;
