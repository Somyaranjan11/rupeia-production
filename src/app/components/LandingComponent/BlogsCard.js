"use client";
import React from "react";
import blogsCardImage from "../Images/blogs-card-image.png";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const BlogsCard = ({ image, heading, description, blog_id }) => {
  const router = useRouter();
  return (
    <div
      className="w-full flex flex-col gap-3 "
      onClick={() => {
        router.push(`/blog/details?id=${blog_id}`);
      }}
    >
      <div>
        <img
          src={image}
          className="h-[195px] lg:h-[230px] w-full rounded-[20px]"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[13px] text-[#4C4D55] font-normal leading-5 font-poppins ">
          {heading ? heading : ""}
        </p>
        <p className="text-[13px] text-[#4C4D55] font-semibold font-poppins">
          2ND AUGUST 2024
        </p>
        <p className="text-[13px] text-[#4C4D55] font-normal leading-5 font-poppins line-clamp-3">
          {description ? description : ""}
        </p>
      </div>
      <div className="flex items-center gap-1 pb-3 cursor-pointer">
        <p className="text-[13px] text-[#4C4D55] font-normal leading-5">
          Read Story
        </p>
        <span>
          <FaArrowRight className="text-[#4C4D55] text-[15px]" />
        </span>
      </div>
    </div>
  );
};

export default BlogsCard;
