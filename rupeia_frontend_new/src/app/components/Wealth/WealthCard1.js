import React, { useState } from "react";

const WealthCard1 = () => {
  const type = [
    { id: 1, name: "Phones" },
    { id: 2, name: "Laptops" },
    { id: 3, name: "Tablets" },
  ];
  const age_type = [
    { id: 1, name: "Below 25 years" },
    { id: 2, name: "25-35 years" },
    { id: 3, name: "36-50 years" },
    { id: 3, name: "Above 50 years" },
  ];
  const annual_income_type = [
    { id: 1, name: "Less than ₹5 lakh" },
    { id: 2, name: "₹5 lakh - ₹10 lakh" },
    { id: 3, name: "₹10 lakh - ₹20 lakh" },
    { id: 3, name: "More than ₹20 lakh" },
  ];
  const annual_asset_type = [
    { id: 1, name: "Less than ₹5 lakh" },
    { id: 2, name: "₹5 lakh - ₹20 lakh" },
    { id: 3, name: "₹20 lakh - ₹50 lakh" },
    { id: 3, name: "More than ₹50 lakh" },
  ];
  const monthly_income_type = [
    { id: 1, name: "Less than 50% of my income" },
    { id: 2, name: "50-70% of my income" },
    { id: 3, name: "70-90% of my income" },
    { id: 3, name: "Less than 90% of my income" },
  ];
  const [state, setState] = useState({
    index: false,
  });
  console.log("state", state);
  return (
    <div className="font-poppins">
      <p className="text-[13px] font-medium pr-10">
        Let’s start with a few quick questions to get to know you better
      </p>
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-[13px] font-medium leading-6">
          1. Select your age group?
        </p>
        <div className="flex flex-row gap-3 flex-wrap">
          {age_type?.map((data, index) => (
            <div
              className={` border-[1px] border-[#7474744A] rounded-full px-4 py-1 ${
                state.index == index ? "bg-white text-[#000000]" : "text-white"
              }`}
              key={index}
              onClick={() => {
                setState({ ...state, index: index });
              }}
            >
              <p className="text-[12px] font-medium leading-6">{data?.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-[13px] font-medium leading-6">
          2. What is your income (with taxes or without taxes)?
        </p>
        <div className="flex flex-row gap-3 flex-wrap">
          {annual_income_type?.map((data, index) => (
            <div
              className="text-white border-[1px] border-[#7474744A] rounded-full px-4 py-1"
              key={index}
            >
              <p className="text-[12px] font-medium leading-6">{data?.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-[13px] font-medium leading-6">
          3. What is the total value of your saving, property, or investments?
        </p>
        <div className="flex flex-row gap-3 flex-wrap">
          {annual_asset_type?.map((data, index) => (
            <div
              className="text-white border-[1px] border-[#7474744A] rounded-full px-4 py-1"
              key={index}
            >
              <p className="text-[12px] font-medium leading-6">{data?.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-[13px] font-medium leading-6">
          4. What percentage of your income do you spend monthly?
        </p>
        <div className="flex flex-row gap-3 flex-wrap">
          {monthly_income_type?.map((data, index) => (
            <div
              className="text-white border-[1px] border-[#7474744A] rounded-full px-4 py-1"
              key={index}
            >
              <p className="text-[12px] font-medium leading-6">{data?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WealthCard1;
