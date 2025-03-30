"use client";
import BlogsContent from "@/app/components/Blogs/BlogsContent";
import React from "react";
import BlogsImage from "../../../components/Images/blogs-content.png";
import { BsArrowLeftShort } from "react-icons/bs";
const Page = () => {
  const blogsContent = [
    {
      id: 1,
      image: BlogsImage,
      header:
        "If you’ve put all your money in Indian Markets, then you’re in trouble: Sharan",
      blogContent:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content...",
    },
    {
      id: 2,
      image: BlogsImage,
      header:
        "If you’ve put all your money in Indian Markets, then you’re in trouble: Sharan",
      blogContent:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content...",
    },
  ];
  return (
    <div className="px-5 overflow-y-auto h-full">
      <div className="flex items-center gap-1 my-3">
        <div
          className="bg-[#551262D4] p-1 rounded-full border-[1px] border-[#794083] w-fit mt-2"
          onClick={() => {
            console.log("hello");
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
      <div className="mt-5">
        <BlogsContent blogsContent={blogsContent} />
      </div>
    </div>
  );
};

export default Page;
