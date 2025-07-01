import React from "react";

const Confirmation = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full">
      <div className="flex justify-center items-center flex-col gap-3">
        <p className="text-white text-[36px] font-poppins leading-7 font-bold">
          Thank You
        </p>
        <p className="text-white text-[20px] font-poppins leading-7 font-semibold">
          Order Confirmed
        </p>
      </div>
      <div className="flex justify-center items-center flex-col font-poppins gap-3 mt-6">
        <p className="text-white text-[15px] font-poppins leading-5 font-medium text-center">Your SIP has been set up!</p>
        <p className="text-white text-[15px] font-poppins leading-5 font-medium items-center text-center">Check your portfolios on your homepage </p>
      </div>
    </div>
  );
};

export default Confirmation;
