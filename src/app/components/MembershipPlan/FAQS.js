import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const FAQS = () => {
  const questionArray = [
    {
      id: 1,
      questions:
        "It is a long established fact that a reader will be distracted by the readable?",
    },
    {
      id: 2,
      questions:
        "By accessing and using our services, you agree to comply with the following?",
    },
    {
      id: 3,
      questions:
        "It is a long established fact that a reader will be distracted by the readable?",
    },
    {
      id: 4,
      questions:
        "By accessing and using our services, you agree to comply with the following?",
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      {questionArray?.map((data, index) => (
        <div
          key={index}
          className="flex justify-between items-center plan-card py-3 px-3"
        >
          <p className="text-[14px] font-medium leading-5 text-[#FFFFFF] pr-5">
            {data?.questions}
          </p>
          <IoIosArrowDown className="text-[30px]" />
        </div>
      ))}
    </div>
  );
};

export default FAQS;
