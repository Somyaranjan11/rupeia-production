import React from "react";
import Aryan from "../../components/Images/aryan-founder1.png";
import Urvasi from "../../components/Images/urvasi-founder2.png";

const Founder = () => {
  return (
    <div className="flex flex-col gap-10 my-10">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#FFFFFF] text-[30px] font-semibold">
          Meet The Founders
        </p>
        <p className="text-[#FFFFFFCC] text-[18px] font-medium">
          The Visionaries behind it all
        </p>
      </div>
      <div className="flex items-center justify-center gap-10">
        <div className="flex flex-col gap-1">
          <img
            src={Aryan.src}
            alt="founder-1"
            className="h-[360px] w-[330px]"
          />
          <p className="text-[#ECE6ED] text-[16px] font-medium">Aryan Singh</p>
          <p className="text-[#ECE6ED] text-[14px] font-medium">Founder</p>
          <p className="text-[#AF7BB6] text-[16px] font-medium">
            LinkedIn | Email{" "}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <img
            src={Urvasi.src}
            alt="founder-2"
            className="h-[360px] w-[330px]"
          />
          <p className="text-[#ECE6ED] text-[16px] font-medium">
            Urvashi Lakhmani
          </p>
          <p className="text-[#ECE6ED] text-[14px] font-medium">Founder</p>
          <p className="text-[#AF7BB6] text-[16px] font-medium">
            LinkedIn | Email{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
