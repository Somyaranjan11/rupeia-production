import React from "react";
import correctImage from "../../components/Images/pricing-plan-correct.png";

const PlansCardModel = () => {
  const planList = [
    {
      id: 1,
      name: "Dummy text dummy text dummy text",
    },
    {
      id: 2,
      name: "Dummy text dummy text dummy text",
    },
    {
      id: 3,
      name: "Dummy text dummy text dummy text",
    },
  ];
  return (
    <div className="bg-[#D9D9D905] pricing-back-drop border-[1.5px] border-[#FFFFFF61] w-full sm:w-[380px] rounded-3xl h-fit ">
      <div className="border-b-[1.5px] border-[#FFFFFF61] p-5 sm:p-10">
        <p className="text-[30px] font-semibold">6 months plan </p>
        <p className="text-[24px] font-medium text-[#ECE6EDAD] pb-2">
          $699/month{" "}
        </p>
      </div>
      <div className="flex flex-col gap-4  p-5 sm:p-10">
        {planList?.map((data, index) => (
          <div className="flex flex-row items-center gap-3">
            <span className="bg-[#FFFFFF61] rounded-full h-[25px] w-[25px] flex justify-center items-center">
              <img src={correctImage.src} className="h-[10px] w-[14px]" />
            </span>
            <p className="text-[#ECE6EDAD] text-[13px] font-medium">
              {data?.name}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pb-10">
        <button className="bg-[#551262] h-[47px] w-fit px-24 flex justify-center items-center text-[15px] border-[1px] border-[#AF7BB6] rounded-3xl text-[#ECE6EDAD]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PlansCardModel;
