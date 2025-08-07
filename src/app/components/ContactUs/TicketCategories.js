import React from "react";

const TicketCategories = ({ setCategoriesValue, categoriesValue, setStep }) => {
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
  console.log("categoriesValue", categoriesValue);
  return (
    <div>
      <div className=" h-fit flex items-center gap-1 ">
        <span className="text-[17px] font-medium flex flex-row items-center gap-1">
          <p className="text-white">Welcome to our</p>{" "}
          <p className="text-[#F7DCFFC2]">Customer</p>{" "}
        </span>
        <span className="text-[17px] font-medium flex flex-row items-center gap-1 mt-1">
          <p className="text-[#F7DCFFC2]">Support</p>{" "}
          <p className="text-white">helpline!</p>{" "}
        </span>
      </div>
      <div className="">
        <p className="text-[#FFFFFF] text-[14px] font-medium">
          Select the topic you need help with
        </p>
        <div className="flex flex-col gap-3 items-center py-3">
          {categories?.map((data, index) => (
            <div
              key={index}
              className={`h-[42px] w-[255px] flex cursor-pointer justify-center items-center rounded-full border-[1px] border-[#7474744A] ${
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
        <div className="flex justify-center items-center mb-7 mt-2">
          <button
            className={` rounded-[12px] h-[50px] w-[191px] ${
              categoriesValue == ""
                ? "cursor-not-allowed border-[1px] border-[#916D98] text-[#AF7BB6]"
                : "bg-[#551262] text-white cursor-pointer "
            }`}
            onClick={() => {
              setStep(2);
            }}
            type="button"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCategories;
