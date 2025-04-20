"use client";
import React from "react";
import "../globals.css";
import { GoGoal } from "react-icons/go";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";
import { MdSip } from "react-icons/md";
import LandingPageCard from "../components/LandingPageCard";
import { GoArrowUpRight } from "react-icons/go";
import Bag from "../icons/Bag";
import { useRouter } from "next/navigation";
import LandingPageNewsCard from "../components/LandingPageNewsCard";
import LandingPageBlogsCard from "../components/LandingPageBlogsCard";
export const dynamic = "force-dynamic";
import { useUser } from "@clerk/nextjs";
const Page = () => {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col font-poppins mt-5 pb-20 w-full">
      <div className="flex justify-center items-center flex-col gap-1">
        <p className="text-[32px] font-semibold leading-7 font-poppins">
          Hi Aryan!
        </p>
        <p className="text-[16px] font-medium leading-7 font-poppins">
          Welcome Back{" "}
        </p>
      </div>

      <div className="bg-white rounded-4xl flex flex-col h-full mt-3 mb-10 p-2 relative">
        {/* Landing page boxes */}
        <div className="flex justify-between items-center px-5 pb-4 pt-4 gap-3">
          <div className="relative border-[1px] border-[#9563A2] w-full flex justify-center items-center flex-col rounded-xl pt-1 pb-2">
            <div className="bg-primary p-[7px] w-fit rounded-xl absolute -top-4">
              <GoGoal className="text-[18px]" />
            </div>
            <p className="text-[12px] text-black font-medium leading-7 pt-2">
              Pulse
            </p>
            <p className="text-[11px] text-black font-medium">60%</p>
          </div>
          <div
            className="relative border-[1px] border-[#9563A2] w-full flex justify-center items-center flex-col rounded-xl pt-1 pb-2"
            onClick={() => {
              router.push("/product/portfolio");
            }}
          >
            <div className="bg-primary p-[7px] w-fit rounded-xl absolute -top-4">
              <Bag />
            </div>
            <p className="text-[12px] text-black font-medium leading-7 pt-2">
              Portfolio
            </p>
            <p className="text-[11px] text-black font-medium">₹4,7k </p>
          </div>
          <div
            className="relative border-[1px] border-[#9563A2] w-full flex justify-center items-center flex-col rounded-xl pt-1 pb-2"
            onClick={() => {
              router.push("/product/sip");
            }}
          >
            <div className="bg-primary p-[7px] w-fit rounded-xl absolute -top-4">
              <MdSip className="text-[18px]" />
            </div>
            <p className="text-[12px] text-black font-medium leading-7 pt-2">
              SIP
            </p>
            <p className="text-[11px] text-black font-medium">(₹5,6k)</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-5">
          <p className="text-[16px] font-medium leading-6 text-black">
            Let’s Grow Your Wealth
          </p>
          <span>
            <GoArrowUpRight className="text-black" />
          </span>
        </div>
        <div className="h-full  w-full mt-3 overflow-y-hidden overflow-x-auto flex gap-3  mb-12 ">
          <div className="min-w-[320px]">
            <LandingPageCard />
          </div>
          <div className="min-w-[320px]">
            <LandingPageNewsCard />
          </div>
          <div className="min-w-[320px]">
            <LandingPageBlogsCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
