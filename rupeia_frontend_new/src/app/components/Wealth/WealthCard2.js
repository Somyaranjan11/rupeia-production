import React, { useState } from "react";

const WealthCard2 = () => {
  const type = [
    { id: 1, name: "Phones" },
    { id: 2, name: "Laptops" },
    { id: 3, name: "Tablets" },
  ];
  const mutual_funds_type = [
    { id: 1, name: "New to investing" },
    { id: 2, name: "Some experience" },
    { id: 3, name: "Experienced" },
  ];
  const saving_funds_type = [
    { id: 1, name: "No emergency savings" },
    { id: 2, name: "Less than 3 months of expense saved" },
    { id: 3, name: "3-6 months of expenses saved" },
    { id: 4, name: "More than 6 months of expenses saved" },
  ];
  const investment_type = [
    { id: 1, name: "Play Safe" },
    { id: 2, name: "Balanced" },
    { id: 3, name: "Take Risks" },
  ];
  const loans_type = [
    { id: 1, name: "No loans" },
    { id: 2, name: "Less than ₹2 lakh" },
    { id: 3, name: "₹2 lakh-₹5 lakh" },
    { id: 4, name: "More than ₹50 lakh" },
  ];
  return (
    <div className="font-poppins">
      <p className="text-[13px] font-medium pr-10">
        Alright, lets talk more on the finance side
      </p>
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-[13px] font-medium leading-6">
          1. Have you invested in mutual funds/stocks before?
        </p>
        <div className="flex flex-row gap-3 flex-wrap">
          {mutual_funds_type?.map((data, index) => (
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
          2. Do you have saving for emergencies (e.g. medical, job loss)?
        </p>
        <div className="flex flex-row gap-3 flex-wrap">
          {saving_funds_type?.map((data, index) => (
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
          3. How comfortable are you with ups and downs in your investments?
        </p>
        <div className="flex flex-row gap-3 flex-wrap">
          {investment_type?.map((data, index) => (
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
          4. Do you have any loans (e.g. home loan, credit card, debt card)?
        </p>
        <div className="flex flex-row gap-3 flex-wrap">
          {loans_type?.map((data, index) => (
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

export default WealthCard2;
