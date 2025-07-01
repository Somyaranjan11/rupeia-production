import React, { useState } from "react";

const WealthCard3 = ({ setGoalDetails, goalDetails }) => {
  const type = [
    { id: 1, name: "SIP" },
    { id: 2, name: "Lumpsum" },
  ];
  const goal_type = [
    { id: 1, name: "Goal" },
    { id: 2, name: "Wealth+" },
  ];
  console.log("goalDetails", goalDetails);
  return (
    <div className="font-poppins">
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-[13px] font-medium leading-6">
          What type of investment are you looking for?
        </p>
        <div className="flex flex-row gap-5">
          {type?.map((data, index) => (
            <div
              className={`border-[1px] border-[#7474744A] rounded-full px-4 w-[82px] flex justify-center items-center h-9 ${
                goalDetails?.investmentType == data?.name
                  ? "bg-white text-[#000000]"
                  : "text-white"
              }`}
              key={index}
              onClick={() => {
                setGoalDetails({
                  ...goalDetails,
                  investmentType: data?.name,
                });
              }}
            >
              <p className="text-[13px] font-medium leading-6">{data?.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-[13px] font-medium leading-6">
          Do you wish to fulfill a certain goal or create long term wealth?
        </p>
        <div className="flex flex-row gap-5">
          {goal_type?.map((data, index) => (
            <div
              className={`border-[1px] border-[#7474744A] rounded-full px-4 w-[82px] flex justify-center items-center h-9 ${
                goalDetails?.goalType == data?.name
                  ? "bg-white text-[#000000]"
                  : "text-white"
              }`}
              key={index}
              onClick={() => {
                setGoalDetails({
                  ...goalDetails,
                  goalType: data?.name,
                });
              }}
            >
              <p className="text-[13px] font-medium leading-6">{data?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WealthCard3;
