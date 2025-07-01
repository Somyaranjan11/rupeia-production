"use client";
import RecomendedBlogs from "@/app/components/Blogs/RecomendedBlogs";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import Save from "@/app/icons/Save";
import Share from "@/app/icons/Share";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const Page = () => {
  const router = useRouter();
  const detailsContent = [
    {
      id: 1,
      content:
        "If you’ve put all your money in Indian Markets, then you’re in trouble: Sharan",
    },
    {
      id: 2,
      content:
        "If you’ve put all your money in Indian Markets, then you’re in trouble: Sharan",
    },
    {
      id: 3,
      content:
        "If you’ve put all your money in Indian Markets, then you’re in trouble: Sharan",
    },
  ];
  const handleClick = () => {
    console.log("hello");
    router.push("/product/blogs/content");
  };
  return (
    <div className="px-5 overflow-y-auto font-poppins flex flex-col h-screen pt-24 pb-16">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Blogs"} handleClick={handleClick} />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[14px] leading-7 font-medium text-[#FFFFFF5E]">
          Finance
        </p>
        <p className="text-[14px] leading-7 font-medium text-[#FFFFFF5E]">
          Gold
        </p>
        <p className="text-[14px] leading-7 font-medium text-[#FFFFFF5E]">
          Commidity
        </p>
        <p className="text-[14px] leading-7 font-medium text-[#FFFFFF5E]">
          Business
        </p>
      </div>
      {/* <div className="border-b-[1px] border-[#FFFFFF7A] h-[2px] w-full content-none mt-1"></div> */}
      <div className="flex flex-col gap-3 mt-4">
        <p className="text-[17px] font-poppins font-medium leading-7">
          If you ve put all your money in Indian Markets, then you are in
          trouble: Sharan
        </p>
        <p className="text-[15px] font-poppins font-medium leading-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content...
        </p>
      </div>
      <div className="flex justify-end items-center mt-1">
        <p
          className="text-[#FFFFFF7A] text-[13px] leading-6 font-medium"
          onClick={() => {
            router.push("/product/blogs/details");
          }}
        >
          Read More
        </p>
      </div>
      <div className="flex justify-between items-center mt-3">
        <div>
          <p className="text-[#FFFFFF7A] text-[13px] leading-6 font-medium">
            few hours ago
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1">
            <CiHeart className="text-[21px]"/>
            <p className="text-[#F2EAF3] text-[11px] leading-6 font-medium">
              40K
            </p>
          </span>
          <span className="flex items-center gap-1">
            <Share />
            <p className="text-[#F2EAF3] text-[11px] leading-6 font-medium">
              10K
            </p>
          </span>
          <span className="flex items-center gap-1">
            <Save />
            <p className="text-[#F2EAF3] text-[11px] leading-6 font-medium">
              1K
            </p>
          </span>
        </div>
      </div>
      <div className="border-b-[1px] border-[#FFFFFF7A] h-[2px] w-full content-none my-4"></div>
      <div>
        <RecomendedBlogs recomendedProps={detailsContent} />
      </div>
    </div>
  );
};

export default Page;
