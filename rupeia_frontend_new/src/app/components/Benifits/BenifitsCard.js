import React, { useState } from "react";
import graphImage from "../Images/protpolio_graph.png";
import graphImage1 from "../Images/protfolio_graph_2.png";
import BenifitsCard2 from "./BenifitsCard2";
import BenifitsCard3 from "./BenifitsCard3";

const BenifitsCard = () => {
  const [investmentYear, setInvestmentYear] = useState("10");
  return (
    <div>
      <div className="flex flex-col gap-3">
        <p className="text-[21px] font-poppins text-center font-semibold text-[#FFFFFF]">
          Suggested Investment
        </p>
        <p className="text-[13px] font-medium text-white text-center">
          Great news! We've handpicked the best funds just for you. Sit back and
          start your journey!
        </p>
      </div>
      <div className="flex justify-center items-center flex-col my-3">
        <p className="text-[13px] font-poppins font-medium text-[#FFFFFF]">
          Performance
        </p>
        <p className="content-none border-[1px] border-[#FFFFFF] bg-red-300 my-2 w-[80px]"></p>
      </div>
      <div className="investment-card-background p-4 py-6 rounded-3xl border-[1px] border-[#794083] relative">
        <p className="text-[13px] font-poppins font-semibold leading-5">
          ₹1L invested for 10 years could become
        </p>
        <div className="flex gap-4">
          <div className="flex flex-col gap-0.5 py-2">
            <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
              Rupiea Portfolio
            </p>
            <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
              {investmentYear == "10"
                ? "₹5,42,800"
                : investmentYear == 5
                ? "₹3,32,800"
                : "1,45,900"}
            </p>
            <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
              {investmentYear == "10"
                ? "(18.4% p.a)"
                : investmentYear == 5
                ? "(13.4% p.a)"
                : "(10.4% p.a)"}
            </p>
          </div>
          <div className="content-none border-[1px] border-[#FFFFFF] my-2"></div>
          <div className="flex flex-col gap-0.5 px-2 py-2">
            <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
              Nifty 50
            </p>
            <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
              {investmentYear == "10"
                ? "₹3,42,800"
                : investmentYear == 5
                ? "₹2,13,800"
                : "1,11,900"}
            </p>
            <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
              {investmentYear == "10"
                ? "(14.4% p.a)"
                : investmentYear == 5
                ? "(10.4% p.a)"
                : "(7.4% p.a)"}
            </p>
          </div>
        </div>
        <div className="relative mb-5">
          <img
            src={graphImage.src}
            className={`h-[100px] w-full absolute  ${
              investmentYear == "10"
                ? "-top-10"
                : investmentYear == 5
                ? "-top-5"
                : "-top-2"
            }`}
          />
          <img src={graphImage1.src} className="h-[100px] w-full " />
        </div>
        <div className="bg-[#D9D9D9DE] flex justify-between items-center rounded-3xl h-9 my-2 px-1 gap-2">
          <p
            className={`text-[13px] font-semibold leading-5 font-poppins  w-full h-8 rounded-3xl flex justify-center items-center ${
              investmentYear == "3" && "bg-[#270330]"
            }`}
            onClick={() => {
              setInvestmentYear("3");
            }}
          >
            3Y
          </p>
          <p
            className={`text-[13px] font-semibold leading-5 font-poppins  w-full h-8 rounded-3xl flex justify-center items-center ${
              investmentYear == "5" && "bg-[#270330]"
            }`}
            onClick={() => {
              setInvestmentYear("5");
            }}
          >
            5Y
          </p>
          <p
            className={`text-[13px] font-semibold leading-5 font-poppins  w-full h-8 rounded-3xl flex justify-center items-center ${
              investmentYear == "10" && "bg-[#270330]"
            }`}
            onClick={() => {
              setInvestmentYear("10");
            }}
          >
            10Y
          </p>
        </div>
      </div>
      <div className="my-3">
        <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF]">
          Past performance based on back tested data Disclaimer
        </p>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-[13px] font-poppins font-medium text-[#FFFFFF]">
          Benefits
        </p>
        <p className="content-none border-[1px] border-[#FFFFFF] bg-red-300 my-2 w-[50px]"></p>
      </div>
      <div>
        <BenifitsCard2 />
        <BenifitsCard3 />
      </div>
    </div>
  );
};

export default BenifitsCard;
