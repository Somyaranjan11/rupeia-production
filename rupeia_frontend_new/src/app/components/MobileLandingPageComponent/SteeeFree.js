import React from "react";
import landingImage from "../../components/Images/stree-free-final-image.png";
import downloadRupeia from "../../components/Images/download-rupeia.png";
import leftImage from "../../components/Images/image copy 5.png";
import rightImage from "../../components/Images/right-stree-free-image.png";
import capImage from "../../components/Images/stree-free-cap-image.png";
import scheduleMobileImage from "../../components/Images/schedule-mobile-image.png";

import { IoCallOutline } from "react-icons/io5";

const SteeeFree = () => {
  return (
    <div className="px-4 sm:px-16 py-5 sm:py-10 bg-[#350040]">
      <div className="flex justify-center items-center flex-col gap-5 mt-10 relative">
        <span className="text-[#FFFFFF] text-[36px] sm:text-[64px] leading-5 sm:tracking-wider relative">
          Stress free
          <img
            src={capImage.src}
            className="h-[30px] w-[30px] absolute -right-3 -top-6 z-50 "
          />
        </span>
        <p className="text-[#AF7BB6] font-semibold text-[32px] sm:text-[45px] leading-5">
          Investing
        </p>
        <div>
          <img
            src={rightImage.src}
            className="w-[400px] sm:w-[1000px] h-[500px] absolute -right-28 -top-20  "
          />
          <div className=" absolute -right-5 sm:-right-16  top-5 sm:-top-0 ">
            <div className="recomended-blogs  flex-row items-center justify-center gap-2 h-[48px] w-fit px-7 rounded-l-full hidden sm:flex">
              <IoCallOutline className="text-[20px] hidden sm:block" />
              <p className="text-[16px] font-normal tracking-wide hidden sm:block">
                Schedule a call
              </p>
            </div>
            <img
              src={scheduleMobileImage.src}
              className="w-[39px] h-[148px] block sm:hidden"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center w-full justify-end gap-5 sm:gap-20 mt-5 sm:mt-10 relative">
        <div className="flex flex-row sm:flex-row items-center sm:gap-30  ">
          <img
            src={leftImage.src}
            className="w-full sm:w-[1200px] h-[800px] absolute -left-28 "
          />
          <div className="w-fit  h-fit  justify-center sm:justify-start flex sm:hidden absolute -top-2">
            <div className=" border-[1px] border-[#FFFFFF61] h-fit py-4 sm:py-10 w-[100px] sm:w-[210px] sm:px-10 justify-s flex flex-row gap-1 items-center justify-center rounded-2xl bg-[#D9D9D914] ">
              <p className="text-[#CAC6C5] sm:text-[16px] text-[18px]">AI</p>
              <p className="text-[#CAC6C5E5] text-[12px] sm:text-[13px]">
                Powered
              </p>
            </div>
          </div>
          <div className="w-fit  h-fit  justify-center sm:justify-start hidden sm:flex ">
            <div className=" border-[1px] border-[#FFFFFF61] h-fit py-4 sm:py-10 w-[150px] sm:w-[210px] px-10 justify-s flex flex-row gap-1 items-center sm:rounded-4xl bg-[#D9D9D914] ">
              <p className="text-[#CAC6C5] text-[18px]">AI</p>
              <p className="text-[#CAC6C5E5] text-[13px]">Powered</p>
            </div>
          </div>
          <div className="w-full sm:w-[550px] flex justify-end ">
            <img
              src={landingImage.src}
              className="h-[350px] sm:h-fit sm:w-[100%] "
            />
          </div>
        </div>
        <div className="flex flex-col justify-start gap-6 sm:gap-16 w-full sm:w-[30%]  ">
          <div className="w-full flex flex-col justify-center sm:items-start items-center sm:justify-start gap-5 sm:gap-7 px-12 sm:px-0 ">
            <div className="flex flex-col gap-4">
              <p className="landing-page-text text-center sm:text-left text-[24px] sm:text-[30px] leading-5">
                Start your Investment
              </p>
              <p className="landing-page-text text-center sm:text-left text-[24px] sm:text-[30px] leading-5 ">
                Journey now!
              </p>
            </div>
            <button className="text-[13px] sm:text-[20px] w-[130px] sm:w-[200px] px-4 h-[60px] sm:h-[70px] border-[4px] sm:border-[8px] border-[#AF7BB6C7] landing-page-button-shadow bg-[#ECE6ED] rounded-full text-[#270330]">
              INVEST NOW
            </button>
          </div>
          <div className="w-full justify-center sm:justify-end  items-center sm:items-end mt-10 hidden md:flex">
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
