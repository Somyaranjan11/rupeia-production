import Save from "@/app/icons/Save";
import Share from "@/app/icons/Share";
import React from "react";
import { CiHeart } from "react-icons/ci";
import BlogImage from "../../components/Images/blogs-content.png";

const BlogsCard = ({ detailsData }) => {
  return (
    <div className="flex flex-col gap-3">
      {detailsData?.map((data, index) => (
        <div className=" recomended-blogs p-3 rounded-2xl" key={index}>
          <div className="flex items-center gap-2 ">
            <img src={BlogImage.src} className="rounded-xl h-[59px] w-[72px]" />
            <p className="text-[14px] font-poppins font-medium leading-5 underline">
              {data?.content}
            </p>
          </div>
          <div className="flex justify-start gap-2 items-center mt-3">
            <div className="flex items-center gap-3">
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
        </div>
      ))}
    </div>
  );
};

export default BlogsCard;
