import React from "react";
import profileImage from "../../components/Images/review_profile.png";

const CustomerReview = () => {
  const customerReview = [
    {
      id: 1,
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Aryan Singh",
      details_1: "CEO, Founder",
      details_2: "Kotak Mahindra Bank",
    },
    {
      id: 1,
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Aryan Singh",
      details_1: "CEO, Founder",
      details_2: "Kotak Mahindra Bank",
    },
    {
      id: 1,
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Aryan Singh",
      details_1: "CEO, Founder",
      details_2: "Kotak Mahindra Bank",
    },
  ];
  return (
    <div className="px-5 pb-10">
      <p className="text-[28px] sm:text-[42px] my-10 sm:my-16 text-center font-semibold bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent">
        Meet the people we’ve helped.
      </p>
      <div className="w-full flex justify-start sm:justify-center items-center overflow-x-auto sm:px-28">
        <div className="flex gap-4 sm:gap-14 px-2">
          {customerReview?.map((data, index) => (
            <div
              key={index}
              className="h-[360px] sm:h-[400px] min-w-[300px] sm:min-w-0 sm:w-[428px] bg-[#D9D9D914] border border-[#FFFFFF61] px-5 py-5 sm:py-10 gap-5 rounded-xl flex  items-center flex-col"
            >
              <div className="h-[100px] w-[100px] border-[1px] border-[#FFFFFF61] flex justify-center items-center rounded-full ">
                <img src={profileImage.src} className="w-full h-full" />
              </div>
              <p className="text-[16px] sm:text-[18px] text-white font-medium text-left">
                {data?.content}
              </p>
              <div className="flex flex-col gap-[0.5px] w-full">
                <p className="text-[14px] sm:text-[16px] text-[#6A6867] font-bold">
                  {data?.name}
                </p>
                <p className="text-[14px] sm:text-[16px] text-[#6A6867] font-bold">
                  {data?.details_1}
                </p>
                <p className="text-[14px] sm:text-[16px] text-[#6A6867] font-bold">
                  {data?.details_2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
