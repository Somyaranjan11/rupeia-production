"use client";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import React, { useState } from "react";

const Page = () => {
  const [open, setOpen] = useState("analysis");
  const handleClick = () => {
    console.log("Hello");
  };
  return (
    <div className="font-poppins flex flex-col h-screen overflow-y-auto">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#1A0120]">
        <NavbarCommonPage page={"Actions"} handleClick={handleClick} />
      </div>
      <div className="pt-25 px-5">
        <div className="flex flex-row items-center justify-center gap-10">
          <div>
            <p
              className={` text-[14px] font-medium ${
                open == "analysis"
                  ? "text-[#FFFFFF] border-b-[1px] border-[#FFFFFF]  pb-[2px]"
                  : "text-[#FFFFFF73]"
              }`}
              onClick={() => {
                setOpen("analysis");
              }}
            >
              Analysis
            </p>
          </div>
          <div>
            <p
              className={`text-[14px] font-medium ${
                open == "alert"
                  ? "text-[#FFFFFF] border-b-[1px] border-[#FFFFFF]  pb-[2px]"
                  : "text-[#FFFFFF73]"
              }`}
              onClick={() => {
                setOpen("alert");
              }}
            >
              Alert
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
