"use client";
import React from "react";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import referFriendImage from "../../components/Images/refer-content.png";

const Page = () => {
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div className="px-5 overflow-y-auto font-poppins flex flex-col h-screen pt-24 pb-16">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Refer a friend"} handleClick={handleClick} />
      </div>
      <div className="mb-10">
        <div>
          <p className="text-[21px] font-semibold leading-7">Help a friend!</p>
          <p className="text-[13px] font-medium leading-6 mt-2">
            Introduce your friends to Rupeia and help them get the best value
            for their money.
          </p>
        </div>
        <div className="flex flex-col gap-4 my-6">
          <button className="bg-[#370841] text-[14px] font-medium leading-6 flex justify-center items-center w-full h-[45px] rounded-4xl">
            Invite Code: 6VV6E
          </button>
          <button className="border-[1px] border-[#916D98] text-[14px] font-medium leading-6 flex justify-center items-center w-full h-[45px] rounded-4xl">
            Share link
          </button>
        </div>
        <div>
          <p className="text-[15px] font-medium leading-6">
            YOU AND YOUR FRIEND GETS
          </p>
          <img src={referFriendImage.src} className="h-[235px] mt-3 w-full" />
        </div>
        <div className="border-b-[1px] border-[#FFFFFF7A] h-[2px] w-full content-none mt-4"></div>
        <div>
          <p className="text-[14px] font-medium leading-6 text-center py-4">
            1 Month of free service of Rupiea
          </p>
          <div className="refer-card px-5 py-5 rounded-2xl">
            <p className="text-[21px] font-semibold leading-7">
              Referral Terms
            </p>
            <p className="text-[14px] font-medium leading-6 pt-2">
              User Responsibility
            </p>
            <ul className="list-inside list-disc pl-4 pt-1">
              <li className="text-[13px] font-medium leading-5 ">
                Users are responsible for maintaining the confidentiality of
                their account credentials.
              </li>
              <li className="text-[13px] font-medium leading-5 ">
                Users must not use Rupeia for any unlawful activities.
              </li>
              <li className="text-[13px] font-medium leading-5 ">
                Users acknowledge that investment decisions involve risk.
              </li>
              <li className="text-[13px] font-medium leading-5 ">
                Users are responsible for maintaining the confidentiality.
              </li>
            </ul>
          </div>
          <div className="mt-5 mb-8">
            <button className="border-[1px] border-[#916D98] text-[13px] font-medium leading-6 flex justify-center w-full  py-2 px-6 rounded-4xl">
              <p className="text-[#794083]">Note:</p> Referral will be
              applicable after first transaction from the user
            </button>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-[#65636394] bg-[#270330] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl">
        <button
          className="bg-[#551262] w-full py-2 rounded-full text-[15px] leading-7 font-medium text-white"
          type="button"
          onClick={() => {
            console.log("helo");
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Page;
