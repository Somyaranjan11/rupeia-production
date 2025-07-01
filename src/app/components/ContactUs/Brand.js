import React from "react";
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
  return (
    <div className="bg-[#A90C2B1A]">
      <div className="px-5 sm:px-10 flex flex-col gap-5 py-6 sm:py-12">
        <div>
          <p className="text-[22px] sm:text-[32px] text-center font-semibold  text-[#551262]">
            Our Funding Partners
          </p>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="flex gap-16 px-2 animate-brandScroll">
            {brandImage?.map((data, index) => (
              <div className="flex justify-center items-center"
              key={index}
              >
                <img src={data?.image?.src} className="min-w-[210px] h-[100px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
