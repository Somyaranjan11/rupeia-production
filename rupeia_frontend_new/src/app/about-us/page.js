import React from "react";
import OurVision from "../components/AboutUs/OurVision";
import Founder from "../components/AboutUs/Founder";
import Brand from "../components/AboutUs/Brand";
import Footer from "../components/MobileLandingPageComponent/Footer";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#551262]">
      <OurVision />
      <Founder />
      <Brand/>
      <Footer/>
    </div>
  );
};

export default Page;
