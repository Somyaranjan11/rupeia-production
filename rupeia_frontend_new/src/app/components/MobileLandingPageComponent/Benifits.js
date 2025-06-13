import React from "react";
import GoalsImage1 from "../../components/Images/goalsImage1.png";
import GoalsImage2 from "../../components/Images/goalsImage2.png";
import GoalsImage3 from "../../components/Images/goalsImage3.png";
import GoalsImage4 from "../../components/Images/goalsImage4.png";
import GoalsImage5 from "../../components/Images/goalsImage5.png";
import GoalsImage6 from "../../components/Images/goalsImage6.png";
import GoalsImage7 from "../../components/Images/goalsImage7.png";
import WealthImage1 from "../../components/Images/wealthImage1.png";

const Benifits = () => {
  return (
    <div className="wealth-backgroud flex flex-col gap-10 py-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <p className="text-[45px] font-semibold tracking-wide text-[#ECE6ED] text-center ">
            Goals-First Investing
          </p>
          <p className="text-[19px] font-semibold  text-[#CD90D6] text-center">
            Every dream deserves a plan.
          </p>
          <p className="text-[16px] font-normal leading-5  text-[#CD90D6] text-center">
            We all have goals some we've chased, some we've put on hold. At
            Rupeia, we believe it’s never too late to start.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <div>
            <img src={GoalsImage1.src} className="h-[250px] w-[200px]" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={GoalsImage2.src} className="h-[230px] w-[230px]" />
            <img src={GoalsImage3.src} className="h-[230px] w-[230px]" />
          </div>
          <div>
            <img src={GoalsImage4.src} className="h-[480px] w-[260px]" />
          </div>
          <div className="flex flex-col gap-4">
            <img src={GoalsImage5.src} className="h-[230px] w-[230px]" />
            <img src={GoalsImage6.src} className="h-[230px] w-[230px]" />
          </div>
          <div>
            <img src={GoalsImage7.src} className="h-[250px] w-[200px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 ">
        <div className="flex flex-col">
          <p className="text-[45px] font-semibold tracking-wide text-[#ECE6ED] text-center ">
            Wealth+
          </p>
          <p className="text-[19px] font-semibold  text-[#CD90D6] text-center">
            Tried investing… but gave up after a loss?
          </p>
          <p className="text-[16px] px-[20%] font-normal leading-6  text-[#CD90D6] text-center mt-2">
            Many of us stop when markets dip, lose confidence, and feel left
            behind. At Rupeia, we ensure your confidence stays strong so you can
            invest with a long-term focus.
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4  pb-14">
          <div>
            <img src={WealthImage1.src} className="h-[400px] w-[300px]" />
          </div>
          <div>
            <img src={WealthImage1.src} className="h-[400px] w-[300px]" />
          </div>
          <div>
            <img src={WealthImage1.src} className="h-[400px] w-[300px]" />
          </div>
          <div>
            <img src={WealthImage1.src} className="h-[400px] w-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
