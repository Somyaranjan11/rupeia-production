"use client";
import React from "react";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import Logo from "../../components/Images/rupeia-white-logo.png";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div className="px-5 overflow-y-auto font-poppins flex flex-col h-screen pt-24 pb-16">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Membership"} handleClick={handleClick} />
      </div>
      <div>
        <div className="flex flex-row items-center justify-center mt-10">
          <img src={Logo.src} />
          <p className="text-[35px] font-semibold leading-7">Rupeia</p>
        </div>
        <div className="flex flex-col gap-6 mt-8">
          <span className="text-[19px] font-semibold leading-6 text-center px-5">
            <p>Stress free investing.</p>
            <p>all about stacking savings!.</p>
          </span>
          <p className="text-[15px] font-medium leading-6 text-center">
            Explore our subscription plans to get the most out of our service.
            Upgrade to a plan that matches your needs. (2- 3 lines)
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-28">
          <button
            className="bg-[#551262] w-full  h-[45px] rounded-full px-5 text-[15px] font-medium leading-7 text-center"
            type="button"
            onClick={() => {
              router.push("/product/plan/list");
            }}
          >
            Select our plans
          </button>
          <button className="text-[12px] font-medium leading-7 text-center w-full text-[#FFFFFF7D]">
            I will do it later
          </button>
        </div>
        <div className="mt-12">
          <p className="text-[12px] font-medium leading-5 text-center w-full text-[#FFFFFF9C]">
            By continuing you verify that you are 18 years of age and agree to
            our terms. No refunds for partial billing periods.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
