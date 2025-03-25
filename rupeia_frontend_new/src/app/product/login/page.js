import React from "react";
import LoginComponent from "@/app/components/Login/LoginComponent";
import { IoArrowUpCircle } from "react-icons/io5";

const page = () => {
  return (
    <div className="flex justify-between flex-col h-full">
      <div className="flex justify-center items-center flex-col gap-[2px] px-10">
        <p className="text-[#807B98] text-[12px] font-medium text-center">
          Choose your dream and fulfill them with the help of mutual funds
        </p>
        <span>
          <IoArrowUpCircle className="text-yellow-400" />
        </span>
        <p className="text-[#807B98] text-[12px] font-medium text-center">
          Save money as well
        </p>
        <span>
          <IoArrowUpCircle className="text-yellow-400" />
        </span>
        <p className="text-[#807B98] text-[12px] font-medium text-center">
          Get expertise mutual fund suggestions from us{" "}
        </p>
        <span>
          <IoArrowUpCircle className="text-yellow-400" />
        </span>
        <p className="text-[#807B98] text-[12px] font-medium text-center">
          Read our updated exclusive news and blogs{" "}
        </p>
      </div>
      <LoginComponent />
    </div>
  );
};

export default page;
