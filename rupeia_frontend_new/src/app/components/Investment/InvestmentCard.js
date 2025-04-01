import React from "react";

const InvestmentCard = ({ investmentDetails }) => {
  return (
    <div>
      {investmentDetails?.map((data, index) => (
        <div
          className="bg-[#551262] rounded-xl shadow-2xs mt-4 p-3"
          key={index}
        >
          <div className="flex items-center gap-3">
            <img src={data?.image.src} className="h-[38px] w-[38px]" />
            <p className="text-[14px] leading-5 font-semibold">{data?.name}</p>
          </div>
          <div className="flex justify-between my-2  ml-[50px]">
            <div className="flex flex-col gap-1">
              <p className="text-[12px] leading-5 font-medium">Current Value</p>
              <span className="text-[15px] text-white leading-5 font-medium flex items-center gap-1">
                {data?.invested_value}{" "}
                <p className="text-[12px] text-[#11FF42]">(+2.31%)</p>
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[12px] leading-5 font-medium">
                Invested Amount
              </p>
              <p className="text-[15px] leading-5 font-medium">
                {data?.current_value}{" "}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvestmentCard;
