"use client";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product/plan/list");
  };
  const plan_array = [
    {
      id: 1,
      months: "3",
      price: "$955",
      best_value: "Best value",
    },
    {
      id: 2,
      months: "6",
      price: "$654",
    },
    {
      id: 3,
      months: "12",
      price: "$455",
    },
  ];
  return (
    <div className="px-5 overflow-y-auto font-poppins flex flex-col h-screen pt-24 pb-28">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Membership"} handleClick={handleClick} />
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <span className="text-[19px] font-semibold leading-6 text-center px-5">
          <p>Choose Your Plan</p>
        </span>
        <p className="text-[16px] font-semibold leading-6 text-center">
          Plans for you
        </p>
        <p className="text-[13px] font-medium leading-5 text-center">
          It is a long established fact that a reader will be distracted by the
          readable
        </p>
        <p className="text-[13px] font-medium leading-5 text-center text-[#E2AAED]">
          Restrictions apply.
        </p>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        {plan_array?.map((data, index) => (
          <div
            key={index}
            className="plan-card1 rounded-3xl px-5 py-2 flex flex-row items-center gap-5"
          >
            <div>
              <input
                name="customRadio"
                value={data?.months}
                type="radio"
                className="appearance-none h-[28px] w-[28px] rounded-[10px] bg-transparent border-2 border-white checked:bg-white checked:border-white p-1"
              />
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="text-[12px] font-normal leading-4 text-[#FFFFFFB0]">
                {data?.best_value}
              </p>
              <p className="text-[15px] font-normal leading-4">
                {data?.months} Months
              </p>
              <p className="text-[13px] font-normal leading-4">{data?.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 mt-8">
        <p className="text-[16px] font-semibold leading-5 text-center">
          Monthly Plans
        </p>
        <p className="text-[13px] font-medium leading-5 text-center text-[#E2AAED]">
          Restrictions apply.
        </p>
        <div className="plan-card1 rounded-3xl px-5 py-2 flex flex-row items-center gap-5 mt-3">
          <div>
            <input
              name="customRadio"
              value="individual"
              type="radio"
              className="appearance-none h-[28px] w-[28px] rounded-[10px] bg-transparent border-2 border-white checked:bg-white checked:border-white p-1"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="text-[15px] font-normal leading-4">Individual</p>
            <p className="text-[13px] font-normal leading-4">
              1-month free trail. Then $150/month
            </p>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-[#65636394] bg-[#270330] py-3 px-3 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl flex flex-row items-center gap-5">
        <button
          className="bg-[#551262] w-full py-2 rounded-full text-[15px] leading-7 font-medium text-white"
          type="button"
        >
          Cancel
        </button>
        <button
          className="w-full py-2 rounded-full text-[15px] leading-7 font-medium text-white border-[1px] border-[#4B3A4D]"
          type="button"
        >
          Try 1 month
        </button>
      </div>
    </div>
  );
};

export default Page;
