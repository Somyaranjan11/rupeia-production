import React from "react";

const BenifitsCard3 = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-2">
        <p className="text-[13px] font-poppins font-medium text-[#FFFFFF]">
          Benefits
        </p>
        <p className="content-none border-[1px] border-[#FFFFFF] bg-red-300 my-2 w-[50px]"></p>
      </div>
      <div className="investment-card-background px-5 mt-3 py-5 rounded-3xl border-[1px] border-[#794083]">
        <div className="flex justify-between">
          <div className="flex gap-1 w-[50%]">
            <div className="content-none border-[0.5px] border-[#FFFFFF6E] my-2"></div>
            <div className="flex flex-col gap-0.5 px-2 py-2">
              <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
                Returns (10Yr)
              </p>
              <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
                18.4% p.a
              </p>
            </div>
          </div>
          <div className="flex gap-1 w-[50%]">
            <div className="content-none border-[0.5px] border-[#FFFFFF6E] my-2"></div>
            <div className="flex flex-col gap-0.5 px-2 py-2">
              <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
                Ideals holding
              </p>
              <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
                5+ years
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1 w-[50%]">
            <div className="content-none border-[0.5px] border-[#FFFFFF6E] my-2"></div>
            <div className="flex flex-col gap-0.5 px-2 py-2">
              <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
                Volatility
              </p>
              <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
                High
              </p>
            </div>
          </div>
          <div className="flex gap-1 w-[50%]">
            <div className="content-none border-[0.5px] border-[#FFFFFF6E] my-2"></div>
            <div className="flex flex-col gap-0.5 px-2 py-2">
              <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
                Portfolio type
              </p>
              <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
                Equity
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[13px] font-poppins font-medium text-[#FFFFFF]">
            Best funds for You
          </p>
          <p className="text-[#FFFFFF8F] text-[13px] font-poppins font-medium leading-5">
            It is a long established fact that a reader will be distracted by
            the readable.
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-[13px] font-poppins font-medium text-[#FFFFFF]">
            24/7 Monitoring*
          </p>
          <p className="text-[#FFFFFF8F] text-[12px] font-poppins font-medium leading-5">
            It is a long established fact that a reader will be distracted by
            the readable.
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-[13px] font-poppins font-medium text-[#FFFFFF]">
            Loss Prevention*
          </p>
          <p className="text-[#FFFFFF8F] text-[12px] font-poppins font-medium leading-5">
            It is a long established fact that a reader will be distracted by
            the readable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenifitsCard3;
