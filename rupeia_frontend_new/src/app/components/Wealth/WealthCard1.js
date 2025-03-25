import React from "react";

const WealthCard1 = () => {
  const type = [
    { id: 1, name: "Phones" },
    { id: 2, name: "Laptops" },
    { id: 3, name: "Tablets" },
  ];
  return (
    <div className="font-poppins">
      <p className="text-[13px] font-medium pr-10">
        Let's start with some questions to analyse your profile.
      </p>
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-[13px] font-medium leading-6">
          1. Please select the type
        </p>
        <div className="flex flex-row gap-5">
          {type?.map((data, index) => (
            <div className="text-white border-[1px] border-[#7474744A] rounded-full px-4 py-1">
              <p className="text-[12px] font-medium leading-6">{data?.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-[13px] font-medium leading-6">
          2. Please select the brand
        </p>
        <div className="flex flex-row gap-5">
          {type?.map((data, index) => (
            <div className="text-white border-[1px] border-[#7474744A] rounded-full px-4 py-1">
              <p className="text-[12px] font-medium leading-6">{data?.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-[13px] font-medium leading-6">
          3. Please select the type
        </p>
        <div className="flex flex-row gap-5">
          {type?.map((data, index) => (
            <div className="text-white border-[1px] border-[#7474744A] rounded-full px-4 py-1">
              <p className="text-[12px] font-medium leading-6">{data?.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-[13px] font-medium leading-6">
          4. Please select the type
        </p>
        <div className="flex flex-row gap-5">
          {type?.map((data, index) => (
            <div className="text-white border-[1px] border-[#7474744A] rounded-full px-4 py-1">
              <p className="text-[12px] font-medium leading-6">{data?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WealthCard1;
