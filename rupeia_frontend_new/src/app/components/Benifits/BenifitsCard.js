import React from "react";
import graphImage from "../Images/protpolio_graph.png";

const BenifitsCard = () => {
  return (
    <div>
      <div>
        <p className="text-[21px] font-poppins font-semibold text-[#FFFFFF]">
          Suggested Investment
        </p>
      </div>
      <div className="flex justify-center items-center flex-col my-3">
        <p className="text-[13px] font-poppins font-medium text-[#FFFFFF]">
          Performance
        </p>
        <p className="content-none border-[1px] border-[#FFFFFF] bg-red-300 my-2 w-[80px]"></p>
      </div>
      <div className="investment-card-background p-2 py-6 rounded-3xl border-[1px] border-[#794083]">
        <p className="text-[13px] font-poppins font-semibold leading-5 text-center">
          ₹1L invested for 10 years could become
        </p>
        <div className="flex gap-4">
          <div className="flex flex-col gap-0.5 px-2 py-2">
            <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
              Rupiea Portfolio
            </p>
            <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
              ₹5,42,800
            </p>
            <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
              (18.4% p.a)
            </p>
          </div>
          <div className="content-none border-[1px] border-[#FFFFFF] my-2"></div>
          <div className="flex flex-col gap-0.5 px-2 py-2">
            <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
              Nifty 50
            </p>
            <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
              ₹3,77,900
            </p>
            <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
              (14.4% p.a)
            </p>
          </div>
        </div>
        <div className="">
          <img src={graphImage.src} className="h-[100px] w-full" />
        </div>
        <div className="bg-[#D9D9D9DE] flex justify-between items-center rounded-3xl h-9 px-1 gap-2">
          <p className="text-[13px] font-semibold leading-5 font-poppins w-full h-8 rounded-3xl flex justify-center items-center">
            3Y
          </p>
          <p className="text-[13px] font-semibold leading-5 font-poppins w-full h-8 rounded-3xl flex justify-center items-center">
            5Y
          </p>
          <p className="text-[13px] font-semibold leading-5 font-poppins bg-[#270330] w-full h-8 rounded-3xl flex justify-center items-center">
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
    </div>
  );
};

export default BenifitsCard;
