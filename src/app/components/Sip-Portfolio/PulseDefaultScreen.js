"use client";
import React from "react";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import { useRouter } from "next/navigation";
import { MdAddCircle } from "react-icons/md";

import { PiWaveformBold } from "react-icons/pi";
import pulseBlog from "../Images/DefaultScreen/pulse-blog.png";

const PulseDefaultScreen = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };
  return (
    <div className="font-poppins flex flex-col h-screen overflow-y-auto bg-[#1A0120]">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#1A0120]">
        <NavbarCommonPage page={"Pulse"} handleClick={handleClick} />
      </div>
      <div className="py-25 px-5">
        <div className=" flex flex-col gap-5">
          <p className="text-[#FFFFFF] text-[18px] font-semibold pr-10">
            Welcome to your pulse dashboard!
          </p>
          <p className="text-[#FFFFFFB8] text-[15px] font-medium">
            Pulse measures your daily performance
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-3">
          <div className="bg-[#551262] border-[1px] border-[#916d98] rounded-[20px] p-4 flex justify-center items-center flex-col gap-[8px]">
            <p className="text-[#FFFFFFB8] text-[12px] font-medium">
              Overall Returns
            </p>
            <p className="text-[#FFFFFF] text-[22px] font-semibold">
              <PiWaveformBold className="text-white text-[30px]" />
            </p>
            <p className="text-[11px] text-[#FFFFFF80] font-medium text-center">
              Last updated on 3 May. Updates at 3:30 pm IST today.
            </p>
          </div>
          <div className="p-[1px] rounded-3xl bg-gradient-to-b from-[#916D98] to-[#302432]">
            <div className="rounded-3xl bg-[#1A0120] p-3 flex justify-center items-center flex-col gap-1">
              <p className="text-[#5F5F5F] text-[12px] font-medium">
                Wedding Money
              </p>
              <p className="text-[#5F5F5F] text-[22px] font-semibold">
                {2.68} %
              </p>
            </div>
          </div>
          <div className="p-[1px] rounded-3xl bg-gradient-to-b from-[#916D98] to-[#302432]">
            <div className="rounded-3xl bg-[#1A0120] p-3 flex justify-center items-center flex-col gap-1">
              <p className="text-[#5F5F5F] text-[12px] font-medium">Whealt+</p>
              <p className="text-[#5F5F5F] text-[22px] font-semibold">
                {1.58}%
              </p>
            </div>
          </div>
        </div>

        <div
          className="flex flex-row items-center gap-1 mt-3 hidden"
          onClick={() => {
            router.push("/product/wealth");
          }}
        >
          <MdAddCircle className="text-[21px]" />
          <p className="text-[14px] font-semibold text-[#FFFFFFCC]">Add Goal</p>
        </div>
        <div className="mt-6">
          <img
            src={pulseBlog.src}
            onClick={() => {
              router.push("/product/blogs/content");
            }}
          />
        </div>
      </div>
      <div className="py-4 px-5 fixed z-50 bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl ">
        <button
          className={` bg-[#551262] w-full py-2 rounded-full text-[14px] leading-7 font-medium text-white`}
          type="button"
          // onClick={() => {
          //   setStep(step + 1);
          // }}
        >
          Actions
        </button>
      </div>
    </div>
  );
};

export default PulseDefaultScreen;
