import React from "react";
import GoalsImage1 from "../../components/Images/goalsImage1.png";
import GoalsImage2 from "../../components/Images/goalsImage2.png";
import GoalsImage3 from "../../components/Images/goalsImage3.png";
import GoalsImage4 from "../../components/Images/goalsImage4.png";
import GoalsImage5 from "../../components/Images/goalsImage5.png";
import GoalsImage6 from "../../components/Images/goalsImage6.png";
import GoalsImage7 from "../../components/Images/goalsImage7.png";
import WealthImage1 from "../../components/Images/wealthImage2.png";
import WealthImage2 from "../../components/Images/wealthimage3.png";
import WealthImage3 from "../../components/Images/wealthimage4.png";
import WealthImage4 from "../../components/Images/wealthimage5.png";

const Benifits = () => {
  return (
    <div className="wealth-backgroud flex flex-col gap-10 sm:py-20 px-4 sm:px-28">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <p className="text-[32px] sm:text-[53px] font-semibold tracking-wide text-[#ECE6ED] text-center leading-[100%] ">
            Goals-First Investing
          </p>
          <p className="text-[16px] sm:text-[32px] font-semibold  text-[#F7C1FF] text-center mt-2 sm:mt-5">
            Every dream deserves a plan.
          </p>
          <p className="text-[14px] sm:text-[26px] sm:px-5 font-normal leading-5  text-[#CD90D6] text-center mt-2 sm:mt-4">
            We all have goals some we've chased, some we've put on hold.
          </p>
          <p className="text-[14px] sm:text-[26px] sm:px-5 font-normal leading-5  text-[#CD90D6] text-center mt-2 sm:mt-4">
            At Rupeia, we believe it’s never too late to start.
          </p>
        </div>
        <div className=" flex-row items-center justify-between gap-4 hidden sm:flex mt-6 sm:mt-14">
          <div>
            <img src={GoalsImage1.src} className="h-[280px] w-[228px]" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={GoalsImage2.src} className="h-[290px] w-[286px]" />
            <img src={GoalsImage3.src} className="h-[290px] w-[286px]" />
          </div>
          <div>
            <img src={GoalsImage4.src} className="h-[630px] w-[320px]" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={GoalsImage5.src} className="h-[290px] w-[286px]" />
            <img src={GoalsImage6.src} className="h-[290px] w-[286px]" />
          </div>
          <div>
            <img src={GoalsImage7.src} className="h-[280px] w-[228px]" />
          </div>
        </div>
        <div className="flex-row sm:px-0 items-center justify-between sm:justify-center gap-2 flex sm:hidden w-full">
          <div className="flex flex-col gap-2 w-full">
            <div>
              <img src={GoalsImage4.src} className="h-[305px] w-[100%]" />
            </div>
            <div className="flex flex-col gap-2">
              <img src={GoalsImage2.src} className="h-[167px] w-full" />
              <img src={GoalsImage3.src} className="h-[167px] w-full" />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div>
              <img src={GoalsImage6.src} className="h-[157px] w-full" />
            </div>
            <div>
              <img src={GoalsImage6.src} className="h-[157px] w-full" />
            </div>
            <div>
              <img src={GoalsImage1.src} className="h-[137px] w-full" />
            </div>
            <div>
              <img src={GoalsImage7.src} className="h-[187px] w-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <div className="flex flex-col">
          <p className="text-[32px] sm:text-[53px] font-semibold tracking-wide text-[#ECE6ED] text-center ">
            Wealth+
          </p>
          <p className="text-[16px] sm:text-[32px] font-semibold  text-[#F7C1FF] text-center">
            Tried investing… but gave up after a loss?
          </p>
          <p className="text-[14px] sm:text-[26px] sm:px-5 font-normal leading-5  text-[#CD90D6] text-center mt-2 sm:mt-4">
            Many of us stop when markets dip, lose confidence, and feel left
            behind.
          </p>
          <p className="text-[14px] sm:text-[26px] sm:px-5 font-normal leading-5  text-[#CD90D6] text-center mt-2 sm:mt-4">
            At Rupeia, we ensure your confidence stays strong so you can invest
            with a long-term focus.
          </p>
        </div>
        <div className=" flex-row items-center justify-center gap-4 sm:pb-14 hidden sm:flex mt-7 sm:mt-14 ">
          <div>
            <img src={WealthImage1.src} className="h-[470px] w-[384px]" />
          </div>
          <div>
            <img src={WealthImage2.src} className="h-[470px] w-[384px]" />
          </div>
          <div>
            <img src={WealthImage3.src} className="h-[470px] w-[384px]" />
          </div>
          <div>
            <img src={WealthImage4.src} className="h-[470px] w-[384px]" />
          </div>
        </div>
        <div className="grid-cols-2 gap-4  pb-14 grid sm:hidden sm:px-5 ">
          <div>
            <img src={WealthImage1.src} className="h-[210px] w-full" />
          </div>
          <div>
            <img src={WealthImage2.src} className="h-[210px] w-full" />
          </div>
          <div>
            <img src={WealthImage3.src} className="h-[210px] w-full" />
          </div>
          <div>
            <img src={WealthImage4.src} className="h-[210px] w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
