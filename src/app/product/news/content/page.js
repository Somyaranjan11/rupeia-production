"use client";
import BlogsContent from "@/app/components/Blogs/BlogsContent";
import React, { useEffect, useState } from "react";
import BlogsImage from "../../../components/Images/blogs-content.png";
import { BsArrowLeftShort } from "react-icons/bs";
import NewsContent from "@/app/components/News/NewsContent";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import { useRouter } from "next/navigation";
import axios from "axios";
const Page = () => {
  const blogsContent = [
    {
      id: 1,
      image: BlogsImage,
      header:
        "If you’ve put all your money in Indian Markets, then you’re in trouble: Sharan",
      blogContent:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many.",
    },
    {
      id: 2,
      image: BlogsImage,
      header:
        "If you’ve put all your money in Indian Markets, then you’re in trouble: Sharan",
      blogContent:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many.",
    },
  ];
  const router = useRouter();
  const handleClick = () => {
    router.push("/product/news/content");
  };
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryList, setCateGoryList] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/topics`
        );
        setCategory(response?.data?.data);
        setCateGoryList(response?.data?.data[0]);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, []);
  console.log("categoryList", categoryList);
  return (
    <div className="pt-24 pb-16  flex flex-col h-screen font-poppins overflow-hidden w-full">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"News"} handleClick={handleClick} />
        <div className="flex overflow-x-auto w-full gap-5 py-2 my-auto">
          {category?.map((data, index) => (
            <div key={index}>
              <p
                className={`text-[14px] leading-7 font-medium  text-nowrap ${
                  categoryList == data ? "text-white" : "text-[#FFFFFF5E]"
                }`}
                onClick={() => {
                  setCateGoryList(data);
                }}
              >
                {data}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="border-b-[1px] border-[#FFFFFF7A] h-[2px] w-full content-none mt-1"></div> */}
      <div className="h-full overflow-hidden mt-10">
        <NewsContent blogsContent={blogsContent} categoryList={categoryList} />
      </div>
    </div>
  );
};

export default Page;
