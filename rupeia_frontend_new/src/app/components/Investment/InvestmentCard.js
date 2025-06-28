import React from "react";
import sipImage from "../../components/Images/SIP_2.png";

const InvestmentCard = ({ investmentDetails, currentPage }) => {
  function formatIndianCurrency(num) {
    return new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  }
  return (
    <div>
      {investmentDetails?.length > 0 ? (
        investmentDetails?.map((data, index) => (
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
              {currentPage == "goal" ? (
                <p className="text-[14px] leading-5 font-semibold">
                  Goal #{index + 1}
                </p>
              ) : (
                <p className="text-[14px] leading-5 font-semibold">
                  Wealth Creation #{index + 1}
                </p>
              )}
            </div>
            <div className="flex justify-between my-2 ">
              <div className="flex flex-col gap-1  w-[50%]">
                <p className="text-[12px] leading-5 font-medium">
                  Invested Value
                </p>
                <span className="text-[15px] text-white leading-5 font-medium flex items-center gap-1">
                  ₹{formatIndianCurrency(data?.totalInvested)}{" "}
                  <p className="text-[12px] text-[#11FF42]">
                    (+{data?.returnsPercentage}%)
                  </p>
                </span>
              </div>
              <div className="flex flex-col gap-1  w-[50%]">
                <p className="text-[12px] leading-5 font-medium">
                  No. of Months Invested
                </p>
                <p className="text-[15px] leading-5 font-medium">
                  {data?.monthsElapsed}/{data?.monthsRemaining}
                </p>
              </div>
            </div>
            <div className="flex justify-between mb-2 mt-4">
              <div className="flex flex-col gap-1 w-[50%]">
                <p className="text-[12px] leading-5 font-medium">
                  Goal Amount Left
                </p>
                <span className="text-[15px] text-white leading-5 font-medium flex items-center gap-1">
                  ₹{formatIndianCurrency(data?.amountLeft)}
                </span>
              </div>
              <div className="flex flex-col gap-1 w-[50%]">
                <p className="text-[12px] leading-5 font-medium">P&L</p>
                <p className="text-[15px] text-[#11FF42]">
                  +{formatIndianCurrency(data?.returns)} (
                  {data?.returnsPercentage}
                  %)
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center">
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};

export default InvestmentCard;
