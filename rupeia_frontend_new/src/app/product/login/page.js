import React from "react";
import LoginComponent from "@/app/components/Login/LoginComponent";
import LoginImage from "../../components/Images/loginpage-preview.png";
import LoginImage1 from "@/app/icons/LoginImage1";
import LoginImage2 from "@/app/icons/LoginImage2";
import LoginImage3 from "@/app/icons/LoginImage3";
const page = () => {
  return (
    <div className="flex justify-between flex-col h-full overflow-hidden">
      <div>
        <img src={LoginImage.src} />
        <div className="flex justify-center items-center flex-col gap-[2px] px-10">
          <p className="text-[#807B98] text-[12px] font-medium text-center">
            Choose your dream and fulfill them with the help of mutual funds
          </p>
          <span>
            <LoginImage1 />
          </span>
          <p className="text-[#807B98] text-[12px] font-medium text-center">
            Save money as well
          </p>
          <span>
            <LoginImage2 />
          </span>
          <p className="text-[#807B98] text-[12px] font-medium text-center">
            Get expertise mutual fund suggestions from us{" "}
          </p>
          <span>
            <LoginImage3 />
          </span>
          <p className="text-[#807B98] text-[12px] font-medium text-center">
            Read our updated exclusive news and blogs{" "}
          </p>
        </div>
      </div>

      <LoginComponent />
    </div>
  );
};

export default page;
