import Benifits from "@/app/components/MobileLandingPageComponent/Benifits";
import Brand from "@/app/components/MobileLandingPageComponent/Brand";
import CustomerReview from "@/app/components/MobileLandingPageComponent/CustomerReview";
import FAQS from "@/app/components/MobileLandingPageComponent/FAQS";
import Goal from "@/app/components/MobileLandingPageComponent/Goal";
import Howitworks from "@/app/components/MobileLandingPageComponent/Howitworks";
import SIPCalculate from "@/app/components/MobileLandingPageComponent/SIPCalculate";
import Wealth from "@/app/components/MobileLandingPageComponent/Wealth";
import Whyrupeia from "@/app/components/MobileLandingPageComponent/Whyrupeia";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="font-poppins flex flex-col gap-5 overflow-y-auto">
        <Whyrupeia />
        <Howitworks />
        <Goal />
        <Wealth />
        <Benifits />
        <SIPCalculate />
        <CustomerReview />
        <Brand />
        <FAQS />
      </div>
    </div>
  );
};

export default Page;
