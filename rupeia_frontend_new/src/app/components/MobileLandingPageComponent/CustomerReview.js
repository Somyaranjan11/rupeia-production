import React from "react";

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
  ];
  return (
    <div className="px-5">
      <p className="text-[22px] my-5 text-center font-semibold bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent">
        Our Happy Customers
      </p>
      <div className="w-full overflow-x-auto">
        <div className="flex gap-4 px-2">
          {customerReview?.map((data, index) => (
            <div
              key={index}
              className="h-[340px] min-w-[250px] border border-[#FFFFFF61] px-7 py-4 rounded-xl flex justify-center items-center flex-col gap-4"
            >
              <div className="h-[75px] w-[75px] border-[1px] border-[#FFFFFF61] flex justify-center items-center rounded-full">
                img
              </div>
              <p className="text-[13px] text-white leading-5 font-medium text-left">
                {data?.content}
              </p>
              <div className="flex flex-col gap-[0.5px] w-full">
                <p className="text-[13px] text-[#6A6867] font-bold">
                  {data?.name}
                </p>
                <p className="text-[13px] text-[#6A6867] font-bold">
                  {data?.details_1}
                </p>
                <p className="text-[13px] text-[#6A6867] font-bold">
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
