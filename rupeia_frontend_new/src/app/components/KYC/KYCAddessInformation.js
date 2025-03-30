import React from "react";

const KYCAddessInformation = () => {
  return (
    <div>
      <div>
        <p className="text-[18px] font-semibold leading-7 font-poppins">
          What’s your Address?
        </p>
        <p className="text-[14px] font-medium leading-7 font-poppins">
          We recommend you use the same address for all investments
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-4">
        <div>
          <p className="text-[14px] font-medium leading-7 font-poppins">
            Address 1
          </p>
          <input
            type="text"
            placeholder="Please enter your Address"
            className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[44px] w-full rounded-3xl focus:outline-none"
          />
        </div>
        <div>
          <p className="text-[14px] font-medium leading-7 font-poppins">
            PIN Code
          </p>
          <input
            type="text"
            placeholder="Please enter your pin code"
            className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3  h-[44px] w-full rounded-3xl focus:outline-none"
          />
        </div>
        <div>
          <p className="text-[14px] font-medium leading-7 font-poppins">
            City{" "}
          </p>
          <input
            type="text"
            placeholder="Please enter your city"
            className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3  h-[44px] w-full rounded-3xl focus:outline-none"
          />
        </div>
        <div>
          <p className="text-[14px] font-medium leading-7 font-poppins">
            State{" "}
          </p>
          <input
            type="text"
            placeholder="Please enter your state"
            className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3  h-[44px] w-full rounded-3xl focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default KYCAddessInformation;
