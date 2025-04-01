"use client";
import BlogsContent from "@/app/components/Blogs/BlogsContent";
import React from "react";
import BlogsImage from "../../../components/Images/blogs-content.png";
import { BsArrowLeftShort } from "react-icons/bs";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
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
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div className="px-5 pt-24 pb-16 overflow-y-auto flex flex-col h-screen font-poppins">
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
      <div className="mt-5">
        <BlogsContent blogsContent={blogsContent} />
      </div>
    </div>
  );
};

export default Page;
