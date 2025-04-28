import Save from "@/app/icons/Save";
import Share from "@/app/icons/Share";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import AnimateLoader from "../Loader/AnimateLoader";

const NewsContent = ({ categoryList }) => {
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
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/news`,
          {
            topic: categoryList, // You can replace this with a dynamic variable
          }
        );
        setNews(response?.data?.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [categoryList]);
  const saveNews = (news_id) => {
    console.log("save news", news_id);
  };
  return (
    <div className="h-full w-full overflow-y-auto px-5">
      {loading ? (
        <AnimateLoader count={3} />
      ) : (
        <div>
          {news?.length > 0 &&
            news?.map((data, index) => (
              <div key={index}>
                <div className="flex flex-col gap-3 mt-4">
                  <p className="text-[17px] font-poppins font-medium leading-6">
                    {data?.title}
                  </p>
                  <p className="text-[15px] font-poppins font-medium leading-6">
                    {data?.description}
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
                      <CiHeart
                        className="text-[25px]"
                        onClick={() => {
                          saveNews(data?._id);
                        }}
                      />
                      <p className="text-[#F2EAF3] text-[11px] leading-6 font-medium">
                        {data?.likeCount}
                      </p>
                    </span>
                    <span
                      className="flex items-center gap-1"
                      onClick={handleShare}
                    >
                      <Share />
                      <p className="text-[#F2EAF3] text-[11px] leading-6 font-medium">
                        11K
                      </p>
                    </span>
                    <span className="flex items-center gap-1">
                      <Save />
                      <p className="text-[#F2EAF3] text-[11px] leading-6 font-medium">
                        {data?.saveCount}
                      </p>
                    </span>
                  </div>
                </div>
                <div className="border-b-[1px] border-[#FFFFFF7A] h-[2px] w-full content-none my-4"></div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default NewsContent;
