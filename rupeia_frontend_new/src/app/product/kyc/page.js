"use client";
import KYCAddessInformation from "@/app/components/KYC/KYCAddessInformation";
import KYCAddNominee from "@/app/components/KYC/KYCAddNominee";
import KYCBankDetails from "@/app/components/KYC/KYCBankDetails";
import KYCEmail from "@/app/components/KYC/KYCEmail";
import KYCInvestorInformation from "@/app/components/KYC/KYCInvestorInformation";
import KYCPancard from "@/app/components/KYC/KYCPancard";
import KYCPersonalnformation from "@/app/components/KYC/KYCPersonalnformation";
import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const page = () => {
  const [pageStep, setPageStep] = useState(1);
  return (
    <div className=" px-5 font-poppins flex flex-col h-full relative overflow-y-auto">
      <div className="flex items-center justify-between mt-4">
        <div
          className="kyc-back-button p-1 rounded-full border-[1px] border-[#794083] w-fit"
          onClick={() => {
            if (pageStep > 1) {
              setPageStep(pageStep - 1);
            }
          }}
        >
          <BsArrowLeftShort className="text-[22px]" />
        </div>
        <div>
          <p className="text-[16px] leading-7 font-semibold">
            {pageStep == 1 && "KYC Verification"}
            {pageStep == 2 && "Email Verification"}
            {pageStep == 3 && "Personal Information"}
            {pageStep == 4 && "Address Information"}
            {pageStep == 5 && "Investor Information"}
            {pageStep == 6 && "Nominee"}
            {pageStep == 7 && "Manage Bank"}
          </p>
        </div>
        <div>
          <RxCross2 />
        </div>
      </div>
      <div className="mt-4">
        <div className="border-[2px] rounded-3xl border-[#D9D9D975]"></div>
      </div>

      <div className="mt-5 mb-4 h-full">
        {pageStep == 1 && <KYCPancard />} {pageStep == 2 && <KYCEmail />}{" "}
        {pageStep == 3 && <KYCPersonalnformation />}
        {pageStep == 4 && <KYCAddessInformation />}
        {pageStep == 5 && <KYCInvestorInformation />}
        {pageStep == 6 && <KYCAddNominee />}
        {pageStep == 7 && <KYCBankDetails />}
      </div>
      <div className="border-[1px] border-[#65636394] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl ">
        <button
          className=" bg-[#551262] w-full  py-2 rounded-full text-[15px] leading-7 font-medium text-white"
          type="button"
          onClick={() => {
            if (pageStep > 0 && pageStep < 7) {
              setPageStep(pageStep + 1);
            }
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default page;
