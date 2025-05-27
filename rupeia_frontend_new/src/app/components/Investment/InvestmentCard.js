import React from "react";
import sipImage from "../../components/Images/SIP_2.png";

const InvestmentCard = ({ investmentDetails }) => {
  return (
    <div>
      {investmentDetails?.map((data, index) => (
        <div
          className="bg-[#551262] rounded-xl shadow-2xs mt-4 p-3"
          key={index}
        >
          <div className="flex items-center gap-3">
            <img
              src={sipImage.src}
              className="h-[38px] w-[38px]"
              alt="sip-image"
            />
            <p className="text-[14px] leading-5 font-semibold">Goal #{index+1}</p>
          </div>
          <div className="flex justify-between my-2 ">
            <div className="flex flex-col gap-1  w-[50%]">
              <p className="text-[12px] leading-5 font-medium">
                Invested Value
              </p>
              <span className="text-[14px] text-white leading-5 font-medium flex items-center gap-1">
                {data?.goalAmount}{" "}
                <p className="text-[12px] text-[#11FF42]">(+2.31%)</p>
              </span>
            </div>
            <div className="flex flex-col gap-1  w-[50%]">
              <p className="text-[12px] leading-5 font-medium">
                No. of Months Invested
              </p>
              <p className="text-[14px] leading-5 font-medium">
                {data?.duration} months
              </p>
            </div>
          </div>
          <div className="flex justify-between my-2 ">
            <div className="flex flex-col gap-1 w-[50%]">
              <p className="text-[12px] leading-5 font-medium">
                Goal Amount Left
              </p>
              <span className="text-[14px] text-white leading-5 font-medium flex items-center gap-1">
                {data?.invested_value ?? 0}{" "}
                <p className="text-[12px] text-[#11FF42]">(+2.31%)</p>
              </span>
            </div>
            <div className="flex flex-col gap-1 w-[50%]">
              <p className="text-[12px] leading-5 font-medium">P&L</p>
              <p className="text-[14px] text-[#11FF42]">{data?.p_l ?? 0}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvestmentCard;
