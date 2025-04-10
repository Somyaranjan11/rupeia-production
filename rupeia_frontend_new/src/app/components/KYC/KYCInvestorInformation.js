import React from "react";

const KYCInvestorInformation = () => {
  return (
    <div>
      <div>
        <p className="text-[18px] font-semibold leading-7 font-poppins">
          Just a few more questions
        </p>
      </div>
      <div>
        <div className="flex flex-col mt-5">
          <button className="bg-[#370841] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[50px] w-full rounded-3xl focus:outline-none">
            Resident Individual
          </button>
        </div>
        <div className="flex flex-col gap-1  mt-5">
          <div>
            <p className="text-[14px] font-normal leading-7">
              Is your tax residency other than India?
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <button className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[44px] w-full rounded-3xl focus:outline-none">
              Yes
            </button>
            <button className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 py-1 w-full h-[44px] rounded-3xl focus:outline-none">
              No
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1  mt-5">
          <div>
            <p className="text-[14px] font-normal leading-7">
              Are you a politically exposed person (PEP)?
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <button className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3  h-[44px] w-full rounded-3xl focus:outline-none">
              Yes
            </button>
            <button className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 py-1 w-full  h-[44px] rounded-3xl focus:outline-none">
              No
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1  mt-5">
          <div>
            <p className="text-[14px] font-normal leading-7">
              Are you a politically related person?
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <button className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3  h-[44px] w-full rounded-3xl focus:outline-none">
              Yes
            </button>
            <button className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 py-1 w-full  h-[44px] rounded-3xl focus:outline-none">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCInvestorInformation;
