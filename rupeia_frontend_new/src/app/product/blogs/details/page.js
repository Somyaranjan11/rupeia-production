"use client";
import RecomendedBlogs from "@/app/components/Blogs/RecomendedBlogs";
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
  return (
    <div className="px-5 overflow-y-auto h-full">
      <div className="flex items-center gap-1 my-3">
        <div
          className="bg-[#551262D4] p-1 rounded-full border-[1px] border-[#794083] w-fit mt-2"
          onClick={() => {
            router.push("/product/blogs/content");
          }}
        >
          <BsArrowLeftShort className="text-[22px]" />
        </div>
        <div className="w-full flex items-center justify-center mr-5">
          <p className="text-[16px] leading-7 font-semibold">Blogs</p>
        </div>
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
      <div className="border-b-[1px] border-[#FFFFFF7A] h-[2px] w-full content-none mt-1"></div>
      <div className="flex flex-col gap-3 mt-4">
        <p className="text-[17px] font-poppins font-medium leading-7">
          If you’ve put all your money in Indian Markets, then you’re in
          trouble: Sharan
        </p>
        <p className="text-[15px] font-poppins font-medium leading-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content...
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
            <CiHeart />
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
