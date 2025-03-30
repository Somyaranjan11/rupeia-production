import Correct from "@/app/icons/Correct";
import React from "react";

const KYCBankDetails = () => {
  return (
    <div>
      <div>
        <p className="text-[18px] font-semibold leading-7 font-poppins">
          Add Bank Details
        </p>
        <p className="text-[14px] font-medium leading-7 font-poppins">
          ₹1 will be credited to you bank account.
        </p>
        <span className="flex flex-col my-2">
          <p className="text-[14px] font-medium leading-7 font-poppins">
            Bank Details
          </p>
          <span className="text-[11px] font-medium font-poppins flex items-center gap-1">
            {" "}
            <p className="bg-green-700 w-fit rounded-full p-[1px]">
              <Correct />
            </p>
            Your bank account has been verified
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <input
          type="text"
          placeholder="Please enter your account number"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
        />
        <input
          type="text"
          placeholder="Please enter your name"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
        />
        <input
          type="text"
          placeholder="Please enter your IFSC code"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
        />
        <input
          type="text"
          placeholder="Please enter your account number"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
        />
      </div>
    </div>
  );
};

export default KYCBankDetails;
