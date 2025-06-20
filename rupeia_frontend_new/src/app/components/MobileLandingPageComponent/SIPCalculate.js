"use client";
import { calculateSIPDetails } from "@/app/utility/calculateSIPDetails";
import React, { useState, useEffect, useRef } from "react";
import { MdCurrencyRupee } from "react-icons/md";

const SIPCalculate = () => {
  const [value, setValue] = useState(12000); // Initial amount
  const [durationValue, setDurationValue] = useState(12); // Initial duration (months)
  const [loading, setLoading] = useState(false);
  const [totalReturns, setTotalReturn] = useState({
    estimatedReturns: 0,
    totalInvestment: 0,
    finalValue: 0,
    duration: 0,
    monthlySIP: 0,
  });

  // Store last API-triggered value
  const lastTriggeredValue = useRef(value);

  // Normalize values for UI styling
  const normalizedValue = ((value - 12000) / (1000000 - 12000)) * 100;
  const normalizedValueDuration = ((durationValue - 12) / (60 - 12)) * 100;

  const handleChange = (e) => {
    setValue(Number(e.target.value)); // Ensure numeric value
  };

  const handleChangeDuration = (e) => {
    setDurationValue(Number(e.target.value)); // Ensure numeric value
  };

  const fetchGrowCalculation = async () => {
    try {
      setLoading(true);
      const response = await calculateSIPDetails(value, durationValue);
      console.log("API Response:", response);
      if (response) {
        setTotalReturn({
          estimatedReturns: response?.estimatedReturns,
          totalInvestment: response?.totalInvestment,
          finalValue: response?.finalValue,
          duration: response?.finalValue,
          monthlySIP: response?.finalValue,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-poppins px-5 sm:px-20 py-11 flex flex-col gap-7 border-t-[1px] border-b-[1px] border-[#FFFFFF61]">
      <div>
        <p className="text-[#ECE6ED] text-[20px] sm:text-[32px] font-medium font-poppins text-center py-2 sm:py-6">
          Calculate return on your mutual fund investments
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-10 sm:px-28 w-full">
        <div className="border border-[#FFFFFF61] sm:border-none w-full sm:w-[50%] h-auto px-5 py-3 sm:py-5 rounded-3xl ">
          <div className="">
            <div className="p-4 flex flex-col gap-3 rounded-lg">
              <div>
                <p className="text-[#ECE6ED] text-[13px] sm:text-[20px] font-medium">
                  Monthly Amount
                </p>
              </div>
              <div className="w-full flex mt-2 relative">
                {/* Value Bubble */}
                <div
                  className="absolute -top-9 lg:-top-14 transform -translate-x-1/2 text-white font-normal z-10 text-[12px] sm:text-[16px]"
                  style={{
                    left: `calc(${normalizedValue}% + (${
                      8 - normalizedValue * 0.15
                    }px))`,
                  }}
                >
                  <div className="bg-[#794083] w-[60px] sm:w-[108px] h-[25px] lg:h-[55px]  rounded-full relative text-center text-[#ECE6ED] flex flex-row  justify-center items-center">
                    <MdCurrencyRupee className="text-[12px] lg:text-[18px]" />{" "}
                    {value.toLocaleString()}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[6px] w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent  border-t-[white]"></div>
                  </div>
                </div>
                <input
                  type="range"
                  min="12000"
                  max="1000000"
                  value={value}
                  onChange={handleChange}
                  className="range-slider w-full h-[12px] appearance-none rounded-lg overflow-hidden bg-[#FFFFFF3B]"
                  style={{
                    background: `linear-gradient(to right, #FFFFFF 0%, #FFFFFF ${normalizedValue}%, #FFFF  ${normalizedValue}%, #FFFFFF3B 100%)`,
                  }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-[#ECE6ED] border-[1px] border-[#794083] ont-poppins text-[8px] sm:text-[16px] font-semibold px-[10px] rounded-full flex flex-row items-center">
                  <MdCurrencyRupee /> 12,000
                </p>
                <p className="text-[#ECE6ED] border-[1px] border-[#794083] ont-poppins text-[8px] sm:text-[16px] font-semibold px-[10px] py-1 rounded-full flex flex-row items-center ">
                  <MdCurrencyRupee /> 10,00,000
                </p>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-3 rounded-lg">
              <div>
                <p className="text-[#ECE6ED] text-[13px] sm:text-[20px] font-medium">
                  Time Duration
                </p>
              </div>
              <div className="w-full flex mt-2 relative">
                <div
                  className="absolute -top-9 lg:-top-14 left-0 transform -translate-x-1/2 text-white text-sm font-normal z-10 text-[12px] sm:text-[16px]"
                  style={{
                    left: `calc(${normalizedValueDuration}% + (${
                      8 - normalizedValueDuration * 0.15
                    }px))`,
                  }}
                >
                  <div className="bg-[#794083] w-[60px] sm:w-[108px] h-[25px] lg:h-[55px]  rounded-full relative text-center text-[#ECE6ED] flex flex-row justify-center  items-center">
                    {durationValue.toLocaleString()} Years
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-[6px] w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent  border-t-[white]"></div>
                  </div>
                </div>
                <input
                  type="range"
                  min="12"
                  max="60"
                  value={durationValue}
                  onChange={handleChangeDuration}
                  className="range-slider w-full h-[12px] appearance-none rounded-lg overflow-hidden"
                  style={{
                    background: `linear-gradient(to right, #FFFFFF 0%, #FFFFFF ${normalizedValueDuration}%, #FFFF  ${normalizedValueDuration}%, #FFFFFF3B 100%)`,
                  }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-[#ECE6ED] border-[1px] border-[#794083] ont-poppins text-[8px] sm:text-[16px] font-semibold px-[10px] py-1 rounded-full">
                  12 Yr
                </p>
                <p className="text-[#ECE6ED] border-[1px] border-[#794083] ont-poppins text-[8px] sm:text-[16px] font-semibold px-[10px] py-1 rounded-full">
                  30 Yr
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-2 mt-5 sm:mt-10">
              <button
                className="bg-[#B2A8F2] w-[135px] sm:w-[224px] h-[42px] sm:h-[52px] flex justify-center items-center text-[12px] sm:text-[18px] font-semibold font-poppins rounded-full text-[#551262] cursor-pointer"
                type="button"
                onClick={() => {
                  fetchGrowCalculation();
                }}
              >
                CALCULATE
              </button>
              <p className="text-[#ECE6ED7A] text-[12px] sm:text-[16px] font-semibold font-poppins text-center">
                Based on Nifty Fifty
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[100%] sm:w-[50%]">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#632A6D] p-7 rounded-2xl flex flex-col gap-3">
              <p className="flex flex-row items-center gap-0 text-[20px] sm:text-[32px] text-[#ECE6ED] font-poppins font-semibold">
                <MdCurrencyRupee />
                {totalReturns?.totalInvestment}
              </p>
              <p className="text-[13px] sm:text-[18px] text-[#ECE6ED] font-poppins font-medium pl-2">
                Invested Amount
              </p>
            </div>
            <div className="border-[0.5px] bg-[#42004F] border-[#A080A7] p-7 rounded-2xl flex flex-col gap-3">
              <p className="flex flex-row items-center gap-0 text-[20px] sm:text-[32px] text-[#ECE6ED] font-poppins font-semibold">
                <MdCurrencyRupee />
                {totalReturns?.estimatedReturns}
              </p>
              <p className="text-[13px] sm:text-[18px] text-[#ECE6ED] font-poppins font-medium pl-2">
                Estimated Returns
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className=" p-7 rounded-2xl flex flex-col gap-3">
              <p className="text-[13px] sm:text-[18px] text-[#ECE6ED] font-poppins font-medium">
                Total Returns
              </p>
              <p className="flex flex-row items-center gap-0  text-[#FEC857] font-poppins font-semibold text-[20px] sm:text-[32px]">
                <MdCurrencyRupee />
                {totalReturns?.finalValue}
              </p>
            </div>
            <div className="bg-[#9563A2] p-7 rounded-2xl flex flex-col gap-3">
              <p className="flex flex-row items-center gap-0 text-[20px] sm:text-[32px] text-white font-poppins font-semibold">
                14.5%
              </p>
              <p className="text-[13px] sm:text-[18px] text-[#270330] font-poppins font-medium">
                Return %
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#ECE6ED] text-[24px] sm:text-[42px] font-semibold font-poppins text-center">
          Do SIP, Withdraw anytime
        </p>
        <p className="text-[#B17CB5] text-[24px] sm:text-[42px] font-semibold font-poppins text-center">
          The choice is yours.
        </p>
      </div>
    </div>
  );
};

export default SIPCalculate;
