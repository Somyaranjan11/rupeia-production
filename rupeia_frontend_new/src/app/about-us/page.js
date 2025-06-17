import React from "react";
import OurVision from "../components/AboutUs/OurVision";
import Founder from "../components/AboutUs/Founder";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#551262]">
      <OurVision />
      <Founder />
    </div>
  );
};

export default Page;
