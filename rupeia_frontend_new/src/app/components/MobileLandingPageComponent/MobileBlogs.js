import React from "react";
import blogsDummyImage from "../../components/Images/blogs-dummy-image.png";
import { CgProfile } from "react-icons/cg";

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
      time: "2ND MAY 2025 | 6 min read",
      image: blogsDummyImage,
    },
  ];
  return (
    <div className="px-28 flex flex-col">
      <div>
        <p className="text-[22px] sm:text-[32px] text-center font-semibold bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent">
          Blogs
        </p>
      </div>
      <div className="px-28">
        <p className="text-white text-[35px] text-left font-semibold">
          Our Centre of Knowledge{" "}
        </p>
      </div>
      <div className="flex items-center justify-center gap-10 mt-8">
        {dummyBlogsData?.map((data, index) => (
          <div className="border-[1px] border-[#FFFFFF] p-4 w-[380px] flex flex-col gap-2">
            <div>
              <img src={data?.image.src} className="h-[195px] w-[360px]" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-1">
                <CgProfile />
                <p className="text-[13px] font-normal text-white">
                  {data?.author}
                </p>
              </span>

              <p className="text-[15px] font-semibold text-white">
                {data?.heading}
              </p>
              <p className="text-[13px] font-normal text-white">{data?.time}</p>
              <p className="text-[13px] font-normal text-white">
                {data?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileBlogs;
