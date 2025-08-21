"use client";
import React from "react";
import iosScreen1 from "../../components/Images/ios-download-screen1.png";
import iosScreen2 from "../../components/Images/ios-download-screen2.png";
import iosScreen3 from "../../components/Images/ios-download-screen3.png";
import { BsArrowLeftShort } from "react-icons/bs";
import Mobile from "@/app/icons/Mobile";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="bg-[#3E004E] w-full min-h-screen flex justify-center items-center flex-col gap-5 relative">
      <div
        className={`fixed top-0 left-0 w-full z-10 shadow-md flex flex-row items-center justify-between px-4 py-6 font-poppins 
          border-b-[0.5px] bg-[#3E004E]`}
      >
        <div className="flex flex-row items-center gap-2">
          <div
            onClick={() => {
              router.push("/webapp-download");
            }}
          >
            <BsArrowLeftShort className="text-[29px]" />
          </div>
          <div>
            <p className="text-[16px] font-semibold leading-7">
              Download Rupeia for iOS
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span
            className={`hidden items-center justify-center bg-[#FFFFFF] rounded-[5px] px-1 py-[3px]  `}
          >
            <Mobile className={`#551262`} />
            <p className={`text-[12px] font-normal leading-5 text-[#551262]`}>
              Lite
            </p>
          </span>
          <div
            onClick={() => {
              router.push("/landing-page");
            }}
          >
            <RxCross2 className="text-[20px]" />
          </div>
        </div>
      </div>
      <div className="mt-28">
        <p className="text-[#F8C2FF] text-[20px] font-medium text-center">
          Add Rupeia Shortcut in 3 Steps
        </p>
      </div>
      <div className="flex flex-col gap-7 mb-16">
        <img src={iosScreen1.src} className="h-[150px] w-[290px]" />
        <img src={iosScreen2.src} className="h-[210px] w-[290px]" />
        <img src={iosScreen3.src} className="h-[180px] w-[290px]" />
      </div>
    </div>
  );
};

export default Page;
