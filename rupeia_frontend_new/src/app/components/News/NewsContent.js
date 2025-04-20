import Save from "@/app/icons/Save";
import Share from "@/app/icons/Share";
import { useRouter } from "next/navigation";
import React from "react";
import { CiHeart } from "react-icons/ci";

const NewsContent = ({ blogsContent }) => {
  const router = useRouter();
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
    <div>
      <div>
        {blogsContent?.length > 0 &&
          blogsContent?.map((data, index) => (
            <div key={index}>
              <div className="flex flex-col gap-3 mt-4">
                <p className="text-[17px] font-poppins font-medium leading-7">
                  {data?.header}
                </p>
                <p className="text-[15px] font-poppins font-medium leading-6">
                  {data?.blogContent}
                </p>
              </div>

              <div className="flex justify-between items-center mt-3">
                <div>
                  <p className="text-[#FFFFFF7A] text-[13px] leading-6 font-medium">
                    few hours ago
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <CiHeart className="text-[21px]" />
                    <p className="text-[#F2EAF3] text-[11px] leading-6 font-medium">
                      40K
                    </p>
                  </span>
                  <span
                    className="flex items-center gap-1"
                    onClick={handleShare}
                  >
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
              <div className="border-b-[1px] border-[#FFFFFF7A] h-[2px] w-full content-none my-4"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsContent;
