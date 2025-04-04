"use client";
import SIPCard from "@/app/components/SIP/SIPCard";
import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import sipImage from "../../components/Images/sip_image.png";
import { useRouter } from "next/navigation";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";

const Page = () => {
  const [currentPage, setCurrentPage] = useState("goal");
  const router = useRouter();
  const investment_plan = [
    {
      id: 1,
      name: "DSP ELSS Tax Saver Fund",
      image: sipImage,
      current_value: "₹1,32,000",
      invested_value: "₹1,22,000",
      month: 6,
      p_l: "+2,870.00(2.31%)",
    },
    {
      id: 2,
      name: "DSP ELSS Tax Saver Fund",
      image: sipImage,
      current_value: "₹1,32,000",
      invested_value: "₹1,22,000",
      month: 9,
      p_l: "+2,870.00(2.31%)",
    },
    {
      id: 3,
      name: "DSP ELSS Tax Saver Fund",
      image: sipImage,
      current_value: "₹1,32,000",
      invested_value: "₹1,22,000",
      month: 3,
      p_l: "+2,870.00(2.31%)",
    },
  ];
  const handleClick = () => {
    router.push("/product");
  };
  return (
    <div className="font-poppins flex flex-col h-screen overflow-hidden">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"SIP"} handleClick={handleClick} />
      </div>
      <div className="overflow-y-auto flex flex-col px-5 pt-28 pb-20">
        <div className="bg-[#551262] rounded-2xl shadow-2xs border-[1px] border-[#794083] p-4">
          <div className="flex justify-center items-center flex-col gap-2">
            <p className="text-[12px] leading-5 font-medium">
              Total SIP Amount
            </p>
            <p className="text-[22px] leading-5 font-medium tracking-wide">
              ₹1,45,000{" "}
            </p>
            <div className="border-[0.5px] border-[#FFFFFF7A] content-none min-w-[130px] mt-1"></div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="flex flex-col gap-2">
              <p className="text-[13px] leading-5 font-medium">
                Current Amount
              </p>
              <p className="text-[16px] leading-5 font-medium">₹1,45,000 </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[13px] leading-5 font-medium">Total Returns</p>
              <p className="text-[16px] text-[#11FF42] leading-5 font-medium">
                +45,000 (5.67%)
              </p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <div className="flex items-center justify-center">
            {" "}
            <p className="text-[13px] leading-5 font-medium">All investments</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-8 my-2">
            <span
              className={`text-[13px] leading-5 font-medium ${
                currentPage == "goal" ? "text-white" : "text-[#FFFFFF70]"
              }`}
              onClick={() => {
                setCurrentPage("goal");
              }}
            >
              Goal
              {currentPage == "goal" && <p className="border-[1px]"></p>}
            </span>
            <span
              className={`text-[13px] leading-5 font-medium  ${
                currentPage == "wealth-creation"
                  ? "text-white"
                  : "text-[#FFFFFF70]"
              }`}
              onClick={() => {
                setCurrentPage("wealth-creation");
              }}
            >
              Wealth Creation
              {currentPage == "wealth-creation" && (
                <p className="border-[1px]"></p>
              )}
            </span>
          </div>
          <div>
            <SIPCard investmentDetails={investment_plan} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
