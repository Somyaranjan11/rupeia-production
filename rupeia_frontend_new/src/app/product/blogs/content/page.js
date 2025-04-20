"use client";
import BlogsContent from "@/app/components/Blogs/BlogsContent";
import React, { useEffect, useState } from "react";
import BlogsImage from "../../../components/Images/blogs-content.png";
import { BsArrowLeftShort } from "react-icons/bs";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import axios from "axios";
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
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryList, setCateGoryList] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`
        );
        setCategory(response?.data?.data);
        setCateGoryList(response?.data?.data[0]?._id)
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, []);
  console.log("category", category,categoryList);
  return (
    <div className="pt-24 pb-16  flex flex-col h-screen font-poppins overflow-hidden w-full">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Blogs"} handleClick={handleClick} />
        <div className="flex overflow-x-auto w-full gap-5 py-2 my-auto">
          {category?.map((data, index) => (
            <div>
              <p
                className={`text-[14px] leading-7 font-medium  text-nowrap ${
                  categoryList == data?._id ? "text-white" : "text-[#FFFFFF5E]"
                }`}
                onClick={() => {
                  setCateGoryList(data?._id);
                }}
              >
                {data?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="h-full overflow-hidden mt-10">
        <BlogsContent blogsContent={blogsContent} categoryList={categoryList} />
      </div>
    </div>
  );
};

export default Page;
