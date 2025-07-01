import React from "react";
import Ai from "@/app/icons/Ai";
import Download from "@/app/icons/Download";
import ExportMF from "@/app/icons/ExportMF";
import Onboard from "@/app/icons/Onboard";
import AI from "../Images/rupeia-ai.png";
import { IndexKind } from "typescript";

const Whyrupeia = () => {
  const why_rupeia_list = [
    {
      id: 1,
      name: "AI-powered funds selection",
      icon: <Ai />,
    },
    {
      id: 2,
      name: "Onboard digitally and execute your trade orders with the click of button.",
      icon: <Onboard />,
    },
    {
      id: 3,
      name: "Safe download with full guarantee",
      icon: <Download />,
    },
    {
      id: 3,
      name: "Expert Mutual Fund Suggestion from our experts ",
      icon: <ExportMF />,
    },
  ];
  return (
    <div className="border-[1px] border-[#FFFFFF61] why-rupeia-blur rounded-3xl px-5 pt-5 m-5">
      <div>
        <p className="text-[#AF7BB6] text-[28px] font-extrabold font-poppins leading-20 text-center">
          Why Rupeia?
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {why_rupeia_list?.map((data, index) => (
          <div className="flex flex-row items-center gap-3" key={index}>
            <span>{data?.icon}</span>
            <p className="text-[14px] font-medium leading-6">{data?.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-5">
        <img src={AI.src} className="h-[190px] w-[190px]" />
      </div>
    </div>
  );
};

export default Whyrupeia;
