import React from "react";
// import sipImage from "../../components/Images/sip_image.png";
import sipImage from "../../components/Images/sip_image.png";

const SIPCard = ({ investmentDetails }) => {
  console.log("investmentDetails", investmentDetails);
  function formatIndianCurrency(num) {
    return new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  }
  return (
    <div>
      {investmentDetails?.funds?.length > 0 ? (
        <div className="bg-[#551262] rounded-[18px]">
          {investmentDetails?.funds?.map((data, index) => (
            <div
              className="shadow-2xs mt-4 m-3 py-3 border-b-[0.5px] border-white"
              key={index}
            >
              <div className="flex items-center gap-3">
                <img
                  src={sipImage.src}
                  className="h-[38px] w-[38px]"
                  alt="sip-image"
                />
                <p className="text-[14px] leading-5 font-semibold">
                  {data?.fundName}
                </p>
              </div>
              <div className="flex justify-between my-2 ml-[15%] w-[85%] ">
                <div className="flex flex-col gap-1  w-[50%]">
                  <p className="text-[12px] leading-5 font-medium">
                    Current Value
                  </p>
                  <span className="text-[14px] text-white leading-5 font-medium flex items-center gap-1">
                    ₹{formatIndianCurrency(data?.currentAmount)}
                    <p className="text-[12px] text-[#11FF42]">
                      (+{data?.growthPercentage}%)
                    </p>
                  </span>
                </div>
                <div className="flex flex-col gap-1  w-[50%]">
                  <p className="text-[12px] leading-5 font-medium">
                    Invested Amount
                  </p>
                  <p className="text-[14px] leading-5 font-medium">
                    ₹{formatIndianCurrency(data?.investedAmount)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center pt-2 font-semibold text-[15px]">No data found</div>
      )}
    </div>
  );
};

export default SIPCard;
