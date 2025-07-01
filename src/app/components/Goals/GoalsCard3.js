"use client";
import React from "react";

const GoalsCard3 = ({ setGoalDetails, goalDetails }) => {
  const handleChange = (e) => {
    setGoalDetails({ ...goalDetails, wealth_budget: Number(e.target.value) });
  };
  const normalizedValue =
    ((goalDetails?.wealth_budget - 12000) / (1000000 - 12000)) * 100;
  return (
    <div className="font-poppins">
      <p className="text-[18px] font-semibold pr-10 my-3">Wealth+</p>
      <p className="text-[13px] font-medium pr-10">
        SEBI requires you to e-sign an investor agreement for your protection.
      </p>
      <div></div>
      <div className="w-full flex flex-col gap-2 mt-5 goal-range-class h-[100px] rounded-3xl justify-center items-center border-[1px] border-[#794083] px-2">
        <div className="text-white bg-[#794083] text-[13px] font-poppins font-medium leading-5 rounded-full px-3">
          ₹ {parseInt(goalDetails?.wealth_budget)}
        </div>
        <input
          type="range"
          min="50000"
          max="1000000"
          value={goalDetails?.wealth_budget}
          onChange={handleChange}
          className="range-slider-education-goal-amount w-full h-[9px] appearance-none rounded-lg overflow-hidden bg-red-500"
          style={{
            background: `linear-gradient(to right, #FFFF 0%, #FFFF ${normalizedValue}%, #FFFFFF87  ${normalizedValue}%, #FFFFFF87 100%)`,
          }}
        />
        <div className="flex justify-between mt-2 w-full">
          <p className="text-white border-[1px] border-[#794083] text-[13px] font-poppins font-medium leading-5 rounded-full px-3 py-[2px]">
            ₹ 50k
          </p>
          <p className="text-white border-[1px] border-[#794083] text-[13px] rounded-full font-poppins font-medium px-2 leading-5 py-[2px]">
            ₹ 10L
          </p>
        </div>
      </div>
    </div>
  );
};

export default GoalsCard3;
