import React from "react";
import landingImage from "../../components/Images/landing-page-main-image.png";
import downloadRupeia from "../../components/Images/download-rupeia.png";

const SteeeFree = () => {
  return (
    <div className="px-4 sm:px-28 py-5 sm:py-10 bg-[#350040]">
      <div className="flex justify-center items-center flex-col">
        <p className="text-[#FFFFFF] text-[30px] sm:text-[128px]">Stress free</p>
        <p className="text-[#AF7BB6] font-semibold text-[20px] sm:text-[35px]">Investing</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center mt-5 sm:mt-0">
        <div className="w-full sm:w-[25%] h-fit flex justify-center sm:justify-start ">
          <div className=" border-[1px] border-[#FFFFFF61] h-fit py-4 sm:py-10 w-[150px] sm:w-[210px] px-10 justify-s flex flex-row gap-1 items-center rounded-4xl bg-[#D9D9D914] ">
            <p className="text-[#CAC6C5] text-[18px]">AI</p>
            <p className="text-[#CAC6C5E5] text-[13px]">Powered</p>
          </div>
        </div>
        <div className="w-full sm:w-[50%] flex justify-end">
          <img src={landingImage.src} className="h-[350px] sm:h-[700px] w-full" />
        </div>
        <div className="flex flex-col gap-6 sm:gap-16 w-full sm:w-[25%]">
          <div className="flex flex-col justify-center items-center gap-7">
            <p className="landing-page-text text-[22px] sm:text-[30px] text-center">
              Start your Investment Journey now!
            </p>
            <button className="text-[20px] w-[200px] px-4 h-[70px] border-[8px] border-[#AF7BB6C7] landing-page-button-shadow bg-[#ECE6ED] rounded-full text-[#270330]">
              INVEST NOW
            </button>
          </div>
          <div className="w-full flex justify-center sm:justify-end  items-center sm:items-end ">
            <div className="bg-[#DBDBDB14] border-[1px] border-[#FFFFFF61] p-2 rounded-3xl ">
              <img src={downloadRupeia.src} className="h-[120px] w-[250px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteeeFree;
