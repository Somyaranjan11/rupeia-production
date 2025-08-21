"use client";
import React from "react";
import ButtonLoader from "../Loader/ButtonLoader";
import proTips from "../Images/Goals/pro-tips.png";
import { addComma } from "@/app/utility/addComma";
const GoalsCard3 = ({
  setGoalDetails,
  goalDetails,
  submitWealth = () => {},
  loading,
}) => {
  const handleChange = (e) => {
    setGoalDetails({ ...goalDetails, wealth_budget: Number(e.target.value) });
  };
  const normalizedValue =
    ((goalDetails?.wealth_budget - 50000) / (5000000 - 50000)) * 100;
  return (
    <div className="font-poppins">
      <p className="text-[18px] font-semibold pr-10 my-3">Wealth+</p>
      <p className="text-[13px] font-medium pr-10">
        SEBI requires you to e-sign an investor agreement for your protection.
      </p>
      <div></div>
      <div className="w-full flex flex-col gap-2 mt-5 bg-goal-slide-card-css h-[120px] rounded-3xl justify-center items-center px-2">
        <div className="text-white border-[1px] border-[#D9D9D9] text-[13px] font-poppins font-medium leading-5 rounded-full px-3 py-1">
          ₹ {addComma(parseInt(goalDetails?.wealth_budget))}
        </div>
        <input
          type="range"
          min="50000"
          max="5000000"
          step="50000" // 👈 ensures increments of 50,000
          value={goalDetails?.wealth_budget}
          onChange={handleChange}
          className="range-slider-education-goal-amount w-full h-[9px] appearance-none rounded-lg overflow-hidden bg-red-500"
          style={{
            background: `linear-gradient(to right, #FFFF 0%, #FFFF ${normalizedValue}%, #FFFFFF87  ${normalizedValue}%, #FFFFFF87 100%)`,
          }}
        />
        <div className="flex justify-between mt-2 w-full">
          <p className="text-white border-[1px] border-[#D9D9D9]  text-[13px] font-poppins font-medium leading-5 rounded-full px-3 py-[2px]">
            ₹ 50k
          </p>
          <p className="text-white border-[1px] border-[#D9D9D9]  text-[13px] rounded-full font-poppins font-medium px-2 leading-5 py-[2px]">
            ₹ 50L
          </p>
        </div>
      </div>
      <div className="web-app-gola-wealth-pro-tips p-6 rounded-[20px] border-[0.5px] border-[#FFFFFF] relative mt-10 hidden">
        <div>
          <p className="text-[16px] font-semibold leading-6 text-center">
            Pro Tips
          </p>
        </div>
        <div className="flex flex-col gap-1 mt-2 ">
          <p className="text-[14px] font-medium leading-6 text-[#FFFFFF9C]">
            1. The cost of an MBA abroad is 32 lakhs.
          </p>
          <p className="text-[14px] font-medium leading-6 text-[#FFFFFF9C]">
            2. The cost of a destination wedding in Bali is 75 lakhs.
          </p>
          <p className="text-[14px] font-medium leading-6 text-[#FFFFFF9C]">
            3. The cost of a BMW M5 car is 2.4 crores..
          </p>
          <img
            src={proTips.src}
            className="absolute h-[49px] w-[49px] -right-3 -top-5"
          />
        </div>
      </div>
      <div className="bg-[#1A0120] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full">
        <button
          className={`w-full py-2 rounded-full text-[15px] leading-7 font-medium ${
            goalDetails?.wealth_budget > 0
              ? "text-white border-[1px] border-white "
              : "cursor-not-allowed text-[#58465C] border-[1px]  border-[#58465C]"
          }`}
          onClick={() => {
            submitWealth();
          }}
        >
          {loading ? <ButtonLoader /> : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default GoalsCard3;
