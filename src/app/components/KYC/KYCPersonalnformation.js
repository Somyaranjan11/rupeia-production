import React from "react";

const KYCPersonalnformation = () => {
  return (
    <div>
      <div>
        <p className="text-[18px] font-semibold leading-7 font-poppins">
          What’s your Marital Status?
        </p>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <button className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[50px] w-full rounded-3xl focus:outline-none">
          Single
        </button>
        <button className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 py-1 w-full h-[50px] rounded-3xl focus:outline-none">
          Married
        </button>
      </div>
    </div>
  );
};

export default KYCPersonalnformation;
