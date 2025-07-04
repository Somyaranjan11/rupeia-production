import Save from "@/app/icons/Save";
import Share from "@/app/icons/Share";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import axios from "axios";
// import BlogsImage from "../../../components/Images/blogs-content.png";
import BlogsImage from "../../components/Images/blogs-content.png";
import AnimateLoader from "../Loader/AnimateLoader";

const BlogsContent = ({ blogsContent, categoryList }) => {
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
  console.log("categoryList", categoryList);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs?category=${categoryList}`
      );
      setBlogs(response?.data?.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, [categoryList]);

  const saveBlogs = async (blogs_id) => {
    const token = localStorage.getItem("accessToken");
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/${blogs_id}/save`,
        {}, // <-- empty body if no body needed
        {
          headers: {
            Authorization: `Bearer ${token}`, // <-- correct place for headers
          },
        }
      );
      if (response?.data?.success) {
        fetchBlogs();
      }
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
  const saveLike = async (blogs_id) => {
    const token = localStorage.getItem("accessToken");
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/${blogs_id}/like`,
        {}, // <-- empty body if no body needed
        {
          headers: {
            Authorization: `Bearer ${token}`, // <-- correct place for headers
          },
        }
      );
      if (response?.data?.success) {
        fetchBlogs();
      }
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-full w-full overflow-y-auto px-5">
      {loading ? (
        <AnimateLoader count={3} />
      ) : (
        <div>
          {blogs?.length > 0 &&
            blogs?.map((data, index) => (
              <div key={index}>
                <div>
                  <img
                    src={BlogsImage.src}
                    className="h-[190px]"
                    alt="blogs-image"
                  />
                </div>
                <div className="flex flex-col gap-3 mt-4">
                  <p className="text-[17px] font-poppins font-medium leading-6">
                    {data?.title}
                  </p>
                  <p className="text-[15px] font-poppins font-medium leading-6">
                    {data?.content}
                  </p>
                </div>
                <div className="flex justify-end items-center mt-1">
                  <p
                    className="text-[#FFFFFF7A] text-[13px] leading-6 font-medium"
                    onClick={() => {
                      router.push(`/product/blogs/details?id`);
                    }}
                  >
                    Read More
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
                          saveLike(data?._id);
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
                        10K
                      </p>
                    </span>
                    <span className="flex items-center">
                      <div
                        onClick={() => {
                          saveBlogs(data?._id);
                        }}
                      >
                        <Save />
                      </div>
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

export default BlogsContent;
