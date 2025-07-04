import Save from "@/app/icons/Save";
import Share from "@/app/icons/Share";
import React from "react";
import { CiHeart } from "react-icons/ci";

const RecomendedBlogs = ({ recomendedProps }) => {
  const handleShare = async () => {
    const shareData = {
      title: "Check this out!",
      text: "I found this awesome app!",
      url: "https://your-website.com", // optional
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log("✅ Shared successfully");
      } else {
        console.warn("❌ Web Share API not supported in this browser");
        // fallback code here
      }
    } catch (err) {
      console.error("⚠️ Error sharing:", err);
    }
  };
  return (
    <div className="flex flex-col gap-5 mb-10">
      {recomendedProps?.map((data, index) => (
        <div className="recomended-blogs p-3 rounded-2xl" key={index}>
          <p className="text-[14px] font-medium leading-6">{data?.content}</p>
          <div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <CiHeart className="text-[21px]" />
                  <p className="text-[#F2EAF3] text-[11px] leading-6 font-medium">
                    40K
                  </p>
                </span>
                <span className="flex items-center gap-1" onClick={handleShare}>
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
              <div>
                <p className="text-[#FFFFFF7A] text-[13px] leading-6 font-medium">
                  Read More...
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecomendedBlogs;
