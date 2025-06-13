import React from "react";
import Brand1 from "../Images/brand1.png";
import Brand2 from "../Images/brand2.png";
import Brand3 from "../Images/brand3.png";
import Brand4 from "../Images/brand4.png";
import Brand5 from "../Images/brand5.png";
import Brand6 from "../Images/brand6.png";
import Brand7 from "../Images/brand7.png";
import Brand8 from "../Images/brand8.png";
import Brand9 from "../Images/brand9.png";
import Brand10 from "../Images/brand10.png";
import Brand11 from "../Images/brand11.png";
import Brand12 from "../Images/brand12.png";

const Brand = () => {
  const brandImage = [
    {
      id: 1,
      image: Brand5,
    },
    {
      id: 2,
      image: Brand6,
    },
    {
      id: 3,
      image: Brand6,
    },
    {
      id: 4,
      image: Brand7,
    },
    {
      id: 5,
      image: Brand8,
    },
    {
      id: 6,
      image: Brand9,
    },
    {
      id: 7,
      image: Brand10,
    },
    {
      id: 8,
      image: Brand11,
    },
    {
      id: 9,
      image: Brand12,
    },
  ];
  const partnerImage = [
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
    <div className="  bg-white ">
      <div className="px-5 sm:px-10 flex flex-col gap-5 py-8">
        <div>
          <p className=" text-[22px] sm:text-[32px] text-center font-semibold  text-[#350040] ">
            Our Investment Partners
          </p>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="flex gap-12 px-2 animate-brandScroll">
            {brandImage?.map((data, index) => (
              <div className="flex justify-center items-center">
                <img src={data?.image?.src} className="w-[210px] h-[100px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-5 sm:px-10 flex flex-col gap-5 py-8 border-t-[2px] border-[#270330]">
        <div>
          <p className=" text-[22px] sm:text-[32px] text-center font-semibold  text-[#350040] ">
            Our Tech Partners
          </p>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="flex gap-12 px-2 animate-techScroll">
            {partnerImage?.map((data, index) => (
              <div
                className={`flex justify-center items-center  p-2 ${
                  data?.id == 1 ? "bg-black" : ""
                }`}
              >
                <img src={data?.image?.src} className="w-[210px] h-[80px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
