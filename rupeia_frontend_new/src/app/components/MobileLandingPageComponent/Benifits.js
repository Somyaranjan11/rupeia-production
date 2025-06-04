import React from "react";
import BenifitsAI from "../Images/BenifitsAI.png";
import BenifitsRisk from "../Images/BenifitsRisk.png";
import BenifitsCalculator from "../Images/BeniifitsCalculator.png";
import BenifitsProtofilio from "../Images/BenifitsProtfolio.png";
import BenifitsGoal from "../Images/BenifitsGoal.png";

const Benifits = () => {
  const benifitsItems = [
    {
      id: 1,
      name: "AI-Driven Portfolio Strategies",
      content:
        "Everyone deserves personalized investment solutions, and we deliver them.",
      image: BenifitsAI,
    },
    {
      id: 2,
      name: "Risk & Loss Prevention",
      content:
        "AI-driven protection to minimize losses because your hard-earned wealth is our top priority.",
      image: BenifitsRisk,
    },
    {
      id: 3,
      name: "Smart Investment Amount Calculation",
      content:
        "We help you decide how much to invest because you have other expenses too.",
      image: BenifitsCalculator,
    },
    {
      id: 4,
      name: "Portfolio Reshuffling",
      content:
        "Adjustments to maximize your returns in all conditions because we genuinely care about growing your wealth.",
      image: BenifitsProtofilio,
    },
    {
      id: 5,
      name: "Goal-Based Planning",
      content:
        "Whether it's a car, home, education, or retirement, your goals matter to us. Your dreams deserve the best financial planning.",
      image: BenifitsGoal,
    },
  ];
  return (
    <div className="px-5">
      <div className="py-5">
        <p className="text-[35px] font-black text-[#AF7BB6] text-center">
          Benefits
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 items-center">
        {benifitsItems?.map((data, index) => (
          <div
            key={index}
            className={`why-rupeia-blur border-[1px] border-[#FFFFFF61] rounded-3xl h-[210px] py-4 gap-2
        ${
          index === benifitsItems.length - 1 && benifitsItems.length % 2 !== 0
            ? "col-span-2 justify-self-center w-1/2" // Center last item if odd
            : ""
        }`}
          >
            <div className="flex justify-center items-center h-[40%] mb-1">
              <img src={data?.image.src} className="w-fit h-[70px] my-1" />
            </div>
            <div className="border-[1px] border-[#896C8F] px-2 py-1 h-[20%] flex justify-center items-center">
              <p className="text-[9px] font-medium text-center">{data?.name}</p>
            </div>
            <div className="px-4 text-center mt-4 h-[40%]">
              <p className="text-[9px] font-medium text-center">
                {data?.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benifits;
