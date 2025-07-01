import React from "react";
import Wedding from "../Images/ring.png";
import Business from "../Images/business.png";
import Education from "../Images/education.png";
import Vechicle from "../Images/vechicle.png";
import Home from "../Images/home.png";
import Retire from "../Images/retire.png";

const Goal = () => {
  const goalItems = [
    {
      id: 1,
      name: "Wedding",
      image: Wedding,
    },
    {
      id: 2,
      name: "Business",
      image: Business,
    },
    {
      id: 3,
      name: "Education",
      image: Education,
    },
    {
      id: 4,
      name: "Vehicles",
      image: Vechicle,
    },
    {
      id: 5,
      name: "Home",
      image: Home,
    },
    {
      id: 6,
      name: "Retire",
      image: Retire,
    },
  ];
  return (
    <div className="px-5">
      <div>
        <p className="text-[22px] font-normal text-white text-center">Our Features</p>
        <p className="text-[35px] font-black text-[#AF7BB6] text-center">Grow</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[25px] font-medium leading-6">Goals</p>
        <p className="text-[14px] font-medium leading-5 pr-10">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-5">
        {goalItems?.map((data, index) => (
          <div
            className="why-rupeia-blur border-[1px] border-[#FFFFFF61] rounded-3xl p-4 flex flex-col justify-center items-center gap-3"
            key={index}
          >
            <img src={data?.image.src} className="h-[70px] w-fit" />
            <p className="text-[23px] font-black italic leading-7 poppins text-[#AF7BB6] text-center">
              {data?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goal;
