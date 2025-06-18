import Benifits from "@/app/components/MobileLandingPageComponent/Benifits";
import Brand from "@/app/components/MobileLandingPageComponent/Brand";
import CustomerReview from "@/app/components/MobileLandingPageComponent/CustomerReview";
import FAQS from "@/app/components/MobileLandingPageComponent/FAQS";
import Footer from "@/app/components/MobileLandingPageComponent/Footer";
import Goal from "@/app/components/MobileLandingPageComponent/Goal";
import Graph from "@/app/components/MobileLandingPageComponent/Graph";
import Howitworks from "@/app/components/MobileLandingPageComponent/Howitworks";
import MobileBlogs from "@/app/components/MobileLandingPageComponent/MobileBlogs";
import SIPCalculate from "@/app/components/MobileLandingPageComponent/SIPCalculate";
import Wealth from "@/app/components/MobileLandingPageComponent/Wealth";
import Whyrupeia from "@/app/components/MobileLandingPageComponent/Whyrupeia";
import React from "react";
import LandingNavbar from "../components/LandingComponent/LandingNavbar";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <LandingNavbar />
      {/* <Howitworks /> */}
      {/* <Goal />
        <Wealth /> */}
      <Benifits />
      <Graph />
      <SIPCalculate />
      <CustomerReview />
      <Brand />
      <MobileBlogs />
      <FAQS />
      <Footer />
    </div>
  );
};

export default Page;
