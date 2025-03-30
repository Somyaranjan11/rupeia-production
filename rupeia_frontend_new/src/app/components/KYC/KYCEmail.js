import React from "react";

const KYCEmail = () => {
  return (
    <div>
      <div>
        <p className="text-[18px] font-semibold leading-7 font-poppins">
          Please enter your Email
        </p>
        <p className="text-[14px] font-medium leading-7 font-poppins">
          Email is compulsary for investing in India
        </p>
        <span className="flex items-center gap-2 my-2">
          <p className="text-[14px] font-medium leading-7 font-poppins">
            Name:
          </p>
          <p className="text-[15px] font-semibold leading-7 font-poppins">
            Aryan Singh
          </p>
        </span>
      </div>
      <div>
        <p className="text-[14px] font-medium leading-7 font-poppins">Email ID</p>
        <input
          type="text"
          placeholder="Please enter your Email"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
        />
      </div>
    </div>
  );
};

export default KYCEmail;
