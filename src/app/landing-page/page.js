"use client";
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
import React, { useState } from "react";
import LandingNavbar from "../components/LandingComponent/LandingNavbar";
import SteeeFree from "../components/MobileLandingPageComponent/SteeeFree";
import PowerByUPI from "../components/MobileLandingPageComponent/PowerByUPI";
import DownloadRupeia from "../components/MobileLandingPageComponent/DownloadRupeia";
import SceduleCall from "../components/MobileLandingPageComponent/SceduleCall";

const Page = () => {
  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);
  const [isScheduleCall, setIsScheduleCall] = useState(false);
  const closePopUp = () => {
    setIsQRCodeOpen(false);
  };
  const openPopUp = () => {
    setIsQRCodeOpen(true);
  };
  const openScheduleCall = () => {
    setIsScheduleCall(true);
  };
  const closeScheduleCall = () => {
    setIsScheduleCall(false);
  };
  return (
    <div className="min-h-screen flex flex-col bg-[#350040] relative">
      <LandingNavbar from="landing-page" openPopUp={openPopUp} />
      <SteeeFree
        openPopUp={openPopUp}
        openScheduleCall={openScheduleCall}
      />
      <PowerByUPI />
      <Howitworks />
      {/* <Goal />
        <Wealth /> */}
      <Benifits id="benefits"/>
      <Graph />
      <SIPCalculate />
      <CustomerReview />
      <Brand />
      <MobileBlogs />
      <FAQS />
      <Footer />
      {isQRCodeOpen && <DownloadRupeia closePopUp={closePopUp} />}
      {isScheduleCall && <SceduleCall closeScheduleCall={closeScheduleCall} />}
    </div>
  );
};

export default Page;
