import React from "react";
import blogsDummyImage from "../../components/Images/blogs-dummy-image.png";
import { CgProfile } from "react-icons/cg";
import { GoArrowUpRight } from "react-icons/go";

const MobileBlogs = () => {
  const dummyBlogsData = [
    {
      id: 1,
      heading:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indu...stry's standard dummy text ever since the 1500s",
      author: "By Pritam Rathi",
      time: "2ND MAY 2025 | 6 min read",
      image: blogsDummyImage,
    },
    {
      id: 1,
      heading:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indu...stry's standard dummy text ever since the 1500s",
      author: "By Pritam Rathi",
      time: "2ND MAY 2025 | 2 min read",
      image: blogsDummyImage,
    },
    {
      id: 1,
      heading:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indu...stry's standard dummy text ever since the 1500s",
      author: "By Pritam Rathi",
      time: "2ND MAY 2025 | 3 min read",
      image: blogsDummyImage,
    },
  ];
  return (
    <div className="px-5 sm:px-28 py-16 flex flex-col w-full h-full">
      <div>
        <p className="text-[22px] sm:text-[48px] text-center font-semibold bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent">
          Blogs
        </p>
      </div>
      <div className="sm:px-28 mt-5">
        <p className="text-white  text-[25px] sm:text-[48px] text-left font-semibold">
          Our Centre of Knowledge{" "}
        </p>
      </div>
      <div className="w-full flex items-center justify-start sm:justify-between mt-4 sm:px-28 sm:mt-8 overflow-x-auto">
        <div className="flex gap-4 sm:gap-14 px-2">
          {dummyBlogsData?.map((data, index) => (
            <div className="border-[1px] border-[#FFFFFF] p-4 w-[300px] sm:w-[403px] h-[444px] flex flex-col gap-2">
              <div>
                <img src={data?.image.src} className="h-[195px] w-[360px]" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-1">
                  <CgProfile />
                  <p className="text-[14px] font-normal text-white">
                    {data?.author}
                  </p>
                </span>

                <p className="text-[18px] font-semibold text-white">
                  {data?.heading}
                </p>
                <p className="text-[14px] font-normal text-white">
                  {data?.time}
                </p>
                <p className="text-[14px] font-normal text-white">
                  {data?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:px-28 flex justify-center items-center mt-20">
        <button className="uppercase bg-white h-[60px] w-[360px] flex justify-center items-center gap-2 rounded-4xl text-[25px] sm:text-[20px] text-left font-semibold border-[1px] border-[#551262] text-[#551262]">
          view all blogs
          <GoArrowUpRight className="text-[25px]"/>
        </button>
      </div>
    </div>
  );
};

export default MobileBlogs;
