import React from "react";
import Platform1 from "../../components/Images/platform1.png";
import Platform2 from "../../components/Images/platform2.png";
import Platform3 from "../../components/Images/platform3.png";
import Platform4 from "../../components/Images/platform4.png";

const BuildingPlatform = () => {
  const buildingPlatform = [
    {
      id: 1,
      image: Platform1,
    },
    {
      id: 2,
      image: Platform2,
    },
    {
      id: 3,
      image: Platform3,
    },
    {
      id: 4,
      image: Platform4,
    },
  ];
  return (
    <div className="about-us-building-platform px-28 py-10 flex flex-col gap-10">
      <div>
        <p className="text-[33px] font-medium tracking-tight text-center">
          India’s most trusted & loved wealth-building platform
        </p>
      </div>
      <div className="flex flex-row items-center justify-center flex-wrap">
        {buildingPlatform?.map((data, index) => (
          <div className="w-[335px] h-[270px]">
            <img src={data?.image.src} className="w-[335px] h-[270px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildingPlatform;
