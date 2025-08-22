"use client";
import React from "react";
import joinNow from "../../components/Images/join-now-image.png";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };
  return (
    <div className="font-poppins flex flex-col h-screen overflow-y-auto bg-[#3E004E]">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#3E004E]">
        <NavbarCommonPage
          page={"Join now"}
          handleClick={handleClick}
          isBottomShow={true}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-28 px-5">
        <div className="">
          <img
            src={joinNow.src}
            alt="join-now"
            className=" h-[260px] w-[280px] ml-3"
          />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <p className="text-[22px] font-semibold text-center">
            You’re Almost In!
          </p>
          <p className="text-center text-[14px] font-normal leading-8">
            Your KYC is complete. Rupeia is being crafted for you. Be among our
            first exclusive customers and unlock early access.
          </p>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center mt-7 mb-10">
          <button
            className="join-now-button-bg text-[15px] font-semibold w-[195px] h-[48px] flex justify-center items-center rounded-full shadow-2xs"
            type="button"
            onClick={() => {
              window.open(
                "https://chat.whatsapp.com/DisQMkRB37bFz8Taj71mpj?mode=ac_t",
                "_blank"
              );
            }}
          >
            Join Now !
          </button>
          <p className="text-center text-[14px] font-normal leading-6">
            Get insider updates and be the first to experience Rupeia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
