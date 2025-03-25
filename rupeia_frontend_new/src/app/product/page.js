import React from "react";
import "../globals.css";
import { GoGoal } from "react-icons/go";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";
import { MdSip } from "react-icons/md";
import LandingPageCard from "../components/LandingPageCard";
import { GoArrowUpRight } from "react-icons/go";

const page = () => {
  return (
    <div className="h-full flex flex-col font-poppins">
      <div className="flex justify-center items-center flex-col">
        <p className="text-[32px] font-semibold leading-7">Hi Aryan!</p>
        <p className="text-[16px] font-medium leading-7">Welcome Back </p>
      </div>

      <div className="bg-white rounded-4xl flex flex-col  h-full mt-3">
        {/* Landing page boxes */}
        <div className="flex justify-between items-center px-5 pb-4 pt-8 gap-3">
          <div className="relative border-[1px] border-[#9563A2] w-full flex justify-center items-center flex-col rounded-md py-1">
            <div className="bg-primary p-[6px] w-fit rounded-full absolute -top-4">
              <GoGoal />
            </div>
            <p className="text-[12px] text-black font-medium leading-7 pt-2">
              Pulse
            </p>
            <p className="text-[11px] text-black font-medium">60%</p>
          </div>
          <div className="relative border-[1px] border-[#9563A2] w-full flex justify-center items-center flex-col rounded-md py-1">
            <div className="bg-primary p-[6px] w-fit rounded-full absolute -top-4">
              <PiShoppingBagOpenDuotone />
            </div>
            <p className="text-[12px] text-black font-medium leading-7 pt-2">
              Portfolio
            </p>
            <p className="text-[11px] text-black font-medium">₹4,700 </p>
          </div>
          <div className="relative border-[1px] border-[#9563A2] w-full flex justify-center items-center flex-col rounded-md py-1">
            <div className="bg-primary p-[6px] w-fit rounded-full absolute -top-4">
              <MdSip />
            </div>
            <p className="text-[12px] text-black font-medium leading-7 pt-2">
              SIP
            </p>
            <p className="text-[11px] text-black font-medium">(₹5,600)</p>
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
        <div className="h-full p-5">
          <LandingPageCard />
        </div>
      </div>
    </div>
  );
};

export default page;
