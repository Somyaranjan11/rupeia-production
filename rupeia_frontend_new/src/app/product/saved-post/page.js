"use client";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import BlogsCard from "@/app/components/SaveBlogs/BlogsCard";
import NewsCard from "@/app/components/SavedNews/NewsCard";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const Page = () => {
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
    {
      id: 4,
      content:
        "If you’ve put all your money in Indian Markets, then you’re in trouble: Sharan",
    },
    {
      id: 5,
      content:
        "If you’ve put all your money in Indian Markets, then you’re in trouble: Sharan",
    },
  ];
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("news");
  const handleClick = () => {
    router.push("/product");
  };
  return (
    <div className="font-poppins flex flex-col h-screen overflow-hidden">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Saved by you"} handleClick={handleClick} />
      </div>
      <div className="overflow-y-auto flex flex-col px-5 pt-20 pb-20">
        <div className="flex flex-row justify-center items-center gap-8 my-4">
          <p
            className={`text-[13px] leading-5 font-medium ${
              currentPage == "news" ? "text-white" : "text-[#FFFFFF70]"
            }`}
            onClick={() => {
              setCurrentPage("news");
            }}
          >
            News
          </p>
          <p
            className={`text-[13px] leading-5 font-medium  ${
              currentPage == "blogs"
                ? "text-white underline"
                : "text-[#FFFFFF70]"
            }`}
            onClick={() => {
              setCurrentPage("blogs");
            }}
          >
            Blogs
          </p>
        </div>
        <div className="border-[0.5px] content-none border-[#FFFFFF7A] w-full mb-3"></div>
        <div>
          {currentPage == "blogs" ? (
            <BlogsCard detailsData={detailsContent} />
          ) : (
            <NewsCard detailsData={detailsContent} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
