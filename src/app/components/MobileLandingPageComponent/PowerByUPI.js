import React from "react";
import UPI from "../../components/Images/UPI.png";
import BharatSarkar from "../../components/Images/BharatSarkar.png";

const PowerByUPI = () => {
  return (
    <div>
      <div className="bg-[#D9D9D914] border-[1px] border-[#FFFFFF61] rounded-[40px] h-[150px] font-poppins  justify-between items-center hidden lg:flex">
        <div className="border-r-[1px] border-[#916C99] w-[33.33%] flex items-center justify-center gap-10">
          <p className="text-[28px] font-medium text-[#CAC6C5]">Powered By</p>
          <img src={UPI.src} className="h-[78px] w-[150px]" alt="UPI" />
        </div>
        <div className="border-r-[1px] border-[#916C99] w-[33.33%] flex items-center justify-center gap-10">
          <img src={BharatSarkar.src} className="h-[75px] w-[80px]" alt="UPI" />
          <p className="text-[28px] font-medium text-[#CAC6C5]">
            Backed by GOI
          </p>
        </div>
        <div className="w-[33.33%] flex items-center justify-center gap-6">
          <p className="text-[38px] font-medium text-[#F62866] ">SEBI</p>
          <p className="text-[28px] font-medium">Registered MFD</p>
        </div>
      </div>
      <div className="flex flex-col lg:hidden gap-6 mt-5">
        <div className="bg-[#D9D9D914] border-[1px] border-[#FFFFFF61] rounded-[15px] h-[90px] font-poppins justify-between items-center flex mx-4">
          <div className="border-r-[1px] border-[#916C99] w-[50%] flex items-center justify-center gap-5">
            <p className="text-[14px] font-medium text-[#CAC6C5]">Powered By</p>
            <img src={UPI.src} className="h-[35px] w-[55px]" alt="UPI" />
          </div>
          <div className="w-[50%] flex items-center justify-center gap-5">
            <img
              src={BharatSarkar.src}
              className="h-[31px] sm:h-[75px] w-[31px] sm:w-[80px]"
              alt="UPI"
            />
            <p className="text-[14px] font-medium text-[#CAC6C5]">
              Backed by GOI
            </p>
          </div>
        </div>
        <div className="bg-[#D9D9D914] border-[1px] border-[#FFFFFF61] rounded-[15px] h-[90px] w-[50%] mx-auto font-poppins flex items-center justify-center gap-5">
          <p className="text-[18px] font-medium text-[#F62866] ">SEBI</p>
          <p className="text-[14px] font-medium">Registered MFD</p>
        </div>
      </div>
    </div>
  );
};

export default PowerByUPI;
