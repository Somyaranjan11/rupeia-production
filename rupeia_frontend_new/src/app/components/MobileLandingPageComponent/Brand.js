import React from "react";
import Brand1 from "../Images/brand1.png";
import Brand2 from "../Images/brand2.png";
import Brand3 from "../Images/brand3.png";
import Brand4 from "../Images/brand4.png";

const Brand = () => {
  const brandImage = [
    {
      id: 1,
      image: Brand1,
    },
    {
      id: 2,
      image: Brand2,
    },
    {
      id: 3,
      image: Brand3,
    },
    {
      id: 4,
      image: Brand4,
    },
  ];
  return (
    <div className="px-5 border-t-[0.5px] border-b-[0.5px] border-[#FFFFFF61] flex flex-col gap-5 py-5 ">
      <div>
        <p className="text-[22px] text-center font-semibold bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent">
          Partners we rely on
        </p>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="flex gap-12 px-2">
          {brandImage?.map((data, index) => (
            <div className="flex justify-center items-center">
              <img src={data?.image?.src} className="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
