"use client";
import React, { useState } from "react";

const GaolsCard2 = () => {
  const type = [
    { id: 1, name: "Phones" },
    { id: 2, name: "Laptops" },
    { id: 3, name: "Tablets" },
  ];
  const [value, setValue] = useState(0); // Initial amount
  const [educationValue, setEducationValue] = useState(9); // Initial amount

  const handleChange = (e) => {
    setValue(Number(e.target.value)); // Ensure numeric value
  };
  const handleChangeEducation = (e) => {
    setEducationValue(Number(e.target.value)); // Ensure numeric value
  };
  const normalizedValue = ((value - 12000) / (1000000 - 12000)) * 100;
  const normalizedEductionValue = ((educationValue - 6) / (60 - 6)) * 100;
  return (
    <div className="font-poppins">
      <p className="text-[13px] font-medium pr-10">
        Okay, tell me about education goal range and duration
      </p>
      <div></div>
      <div className="w-full flex flex-col gap-2 mt-5 goal-range-class h-[100px] rounded-3xl justify-center items-center border-[1px] border-[#794083] px-2">
        <div className="text-white bg-[#794083] text-[13px] font-poppins font-medium leading-5 rounded-full px-3">
          ₹ {parseInt(value)}
        </div>
        <input
          type="range"
          min="12000"
          max="1000000"
          value={value}
          onChange={handleChange}
          className="range-slider-education-goal-amount w-full h-[9px] appearance-none rounded-lg overflow-hidden bg-red-500"
          style={{
            background: `linear-gradient(to right, #FFFF 0%, #FFFF ${normalizedValue}%, #FFFFFF87  ${normalizedValue}%, #FFFFFF87 100%)`,
          }}
        />
        <div className="flex justify-between mt-2 w-full">
          <p className="text-white border-[1px] border-[#794083] text-[13px] font-poppins font-medium leading-5 rounded-full px-3 py-[2px]">
            ₹ 12k
          </p>
          <p className="text-white border-[1px] border-[#794083] text-[13px] rounded-full font-poppins font-medium px-2 leading-5 py-[2px]">
            ₹ 10L
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 mt-10 goal-range-class h-[100px] rounded-3xl justify-center items-center border-[1px] border-[#794083] px-2">
        <div className="text-white bg-[#794083] text-[13px] font-poppins font-medium leading-5 rounded-full px-3">
          ₹ {parseInt(educationValue)}
        </div>
        <input
          type="range"
          min="6"
          max="60"
          value={educationValue}
          onChange={handleChangeEducation}
          className="range-slider-education-goal-amount w-full h-[9px] appearance-none rounded-lg overflow-hidden bg-red-500"
          style={{
            background: `linear-gradient(to right, #FFFF 0%, #FFFF ${normalizedEductionValue}%, #FFFFFF87  ${normalizedEductionValue}%, #FFFFFF87 100%)`,
          }}
        />
        <div className="flex justify-between mt-2 w-full">
          <p className="text-white border-[1px] border-[#794083] text-[13px] font-poppins font-medium leading-5 rounded-full px-3 py-[2px]">
            6 Y
          </p>
          <p className="text-white border-[1px] border-[#794083] text-[13px] rounded-full font-poppins font-medium px-2 leading-5 py-[2px]">
            30 Y
          </p>
        </div>
      </div>
    </div>
  );
};

export default GaolsCard2;
