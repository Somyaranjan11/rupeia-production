import Benifits from "@/app/components/MobileLandingPageComponent/Benifits";
import Goal from "@/app/components/MobileLandingPageComponent/Goal";
import Wealth from "@/app/components/MobileLandingPageComponent/Wealth";
import Whyrupeia from "@/app/components/MobileLandingPageComponent/Whyrupeia";
import React from "react";

const Page = () => {
  return (
    <div className="font-poppins flex flex-col h-screen overflow-y-auto">
      <Whyrupeia />
      <Goal />
      <Wealth/>
      <Benifits/>
    </div>
  );
};

export default Page;
