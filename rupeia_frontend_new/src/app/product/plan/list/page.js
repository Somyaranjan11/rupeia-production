"use client";
import React from "react";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import planImage1 from "../../../components/Images/plans_image1.png";
import planImage2 from "../../../components/Images/plans_image2.png";
import planImage3 from "../../../components/Images/plans_image3.png";
import planImage4 from "../../../components/Images/plans_image4.png";
import Profile from "@/app/icons/Profile";
import FAQS from "@/app/components/MembershipPlan/FAQS";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/product/plan");
  };
  return (
    <div className="px-5 overflow-y-auto font-poppins flex flex-col h-screen pt-24 pb-16">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Membership"} handleClick={handleClick} />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-[12px] font-medium leading-5 text-[#FFFFFF] text-center">
            Benefits
          </p>
        </div>
        <div className="bg-[#400B4B] p-5 flex flex-col gap-3 rounded-2xl">
          <div className="flex items-center gap-3">
            <img
              src={planImage1.src}
              className="h-[50px] w-[50px] rounded-full"
            />
            <p className="text-[12px] font-medium leading-5 text-[#FFFFFF]">
              It is a long established fact that a reader will be distracted by
              the readable{" "}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={planImage2.src}
              className="h-[50px] w-[50px] rounded-full"
            />
            <p className="text-[12px] font-medium leading-5 text-[#FFFFFF]">
              It is a long established fact that a reader will be distracted by
              the readable{" "}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={planImage3.src}
              className="h-[50px] w-[50px] rounded-full"
            />
            <p className="text-[12px] font-medium leading-5 text-[#FFFFFF]">
              It is a long established fact that a reader will be distracted by
              the readable{" "}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={planImage4.src}
              className="h-[50px] w-[50px] rounded-full"
            />
            <p className="text-[12px] font-medium leading-5 text-[#FFFFFF]">
              It is a long established fact
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="text-[12px] font-medium leading-5 text-[#FFFFFF] text-center">
            Pick a plan that fits you
          </p>
        </div>
        <div className="plan-card p-5 mt-5 flex flex-col gap-3 rounded-2xl">
          <div>
            <div className="flex items-center gap-1">
              <Profile className={`#ffffff`} />
              <p className="text-[18px] font-semibold leading-5 text-[#FFFFFF] text-center">
                Individual
              </p>
            </div>
            <div className="border-[1px] w-full border-[#8D6C93] mt-3"></div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[12px] font-medium leading-5 text-[#FFFFFF80] ">
              Prepaid or monthly
            </p>
            <p className="text-[18px] font-medium leading-5 text-[#FFFFFF] ">
              Starts at $149/month
            </p>
            <p className="text-[14px] font-medium leading-5 text-[#FFFFFF] ">
              Lorem Lipsum
            </p>
            <button
              className="border-[1px] border-[#916D98] w-full text-[14px] h-[45px] font-medium leading-5 text-[#AF7BB6] rounded-4xl mt-5"
              type="button"
              onClick={() => {
                router.push("/product/plan/plan-selection");
              }}
            >
              Try 1 month for free
            </button>
          </div>
        </div>
        <div className="plan-card p-5 mt-5 flex flex-col gap-3 rounded-2xl">
          <div>
            <div className="flex items-center gap-1">
              <Profile className={`#ffffff`} />
              <p className="text-[18px] font-semibold leading-5 text-[#FFFFFF] text-center">
                Family
              </p>
            </div>
            <div className="border-[1px] w-full border-[#8D6C93] mt-3"></div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[12px] font-medium leading-5 text-[#FFFFFF80] ">
              Prepaid or monthly
            </p>
            <p className="text-[18px] font-medium leading-5 text-[#FFFFFF] ">
              Starts at $149/month
            </p>
            <p className="text-[14px] font-medium leading-5 text-[#FFFFFF] ">
              Lorem Lipsum
            </p>
            <button
              className="border-[1px] border-[#916D98] w-full text-[14px] h-[45px] font-medium leading-5 text-[#AF7BB6]  rounded-4xl mt-5"
              type="button"
              onClick={() => {
                router.push("/product/plan/plan-selection");
              }}
            >
              Try 1 month for free
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <FAQS />
      </div>
    </div>
  );
};

export default page;
