import React from "react";

const Categories = ({ setCategoriesValue, categoriesValue }) => {
  const categories = [
    {
      id: 1,
      name: "Investment related",
    },
    {
      id: 2,
      name: "Portfolio related",
    },
    {
      id: 3,
      name: "Goals related",
    },
    {
      id: 1,
      name: "Onboarding related",
    },
    {
      id: 1,
      name: "Refunds & SIP Management related",
    },
  ];
  return (
    <div className="pt-25 px-5">
      <div className=" h-fit   ">
        <span className="text-[19px] font-medium flex flex-row items-center gap-1">
          <p className="text-white">Welcome to our</p>{" "}
          <p className="text-[#F7DCFFC2]">Customer</p>{" "}
        </span>
        <span className="text-[19px] font-medium flex flex-row items-center gap-1 mt-1">
          <p className="text-[#F7DCFFC2]">Support</p>{" "}
          <p className="text-white">helpline!</p>{" "}
        </span>
      </div>
      <div className="">
        <p className="text-[#FFFFFF] text-[14px] font-medium py-8">
          Select the topic you need help with
        </p>
        <div className="flex flex-col gap-3 items-center">
          {categories?.map((data, index) => (
            <div
              key={index}
              className={`h-[42px] w-[255px] flex justify-center items-center rounded-full border-[1px] border-[#7474744A] ${
                categoriesValue == data?.name
                  ? "bg-white text-black"
                  : "text-white"
              }`}
              onClick={() => {
                setCategoriesValue(data?.name);
              }}
            >
              <p className="text-[12px] font-normal">{data?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
