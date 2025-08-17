"use client";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import LandingNavbar from "../components/LandingComponent/LandingNavbar";
import blogLandingImage from "../components/Images/news_mobile_customize_image.png";
import blogLandingImage4 from "../components/Images/news-desktop-top-image.png";
import AnimateLoader from "../components/Loader/AnimateLoader";
import Categories from "../components/LandingComponent/Categories";
import Footer from "../components/MobileLandingPageComponent/Footer";

const Page = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryList, setCateGoryList] = useState("");
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const tickerRef = useRef(null);
  const scrollInterval = useRef(null);

  // --- Fetch Categories ---
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/topics`
        );
        setCategory(response?.data?.data);
        setCateGoryList(response?.data?.data[0]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategory();
  }, []);

  // --- Fetch News ---
  const fetchNews = async (selectedCategory, pageNumber) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/news`,
        {
          topic: selectedCategory,
          limit: 10,
          page: pageNumber,
        }
      );

      if (response?.data?.success) {
        const newData = response.data.data;
        setNews((prev) => (pageNumber === 1 ? newData : [...prev, ...newData]));
        setHasMore(newData.length === 10);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  // --- Refetch when category changes ---
  useEffect(() => {
    if (categoryList) {
      setPage(1);
      fetchNews(categoryList, 1);
      stopScrolling();
    }
  }, [categoryList]);

  // --- Auto Scroll Logic ---
  const startScrolling = () => {
    if (scrollInterval.current) return;

    let loadingNextPage = false;

    scrollInterval.current = setInterval(() => {
      if (!isPaused && tickerRef.current) {
        tickerRef.current.scrollTop += 1;

        const { scrollTop, scrollHeight, clientHeight } = tickerRef.current;

        // Trigger when we're within 50px of bottom
        if (!loadingNextPage && scrollTop + clientHeight >= scrollHeight - 50) {
          if (hasMore) {
            loadingNextPage = true;
            const nextPage = page + 1;
            setPage(nextPage);
            fetchNews(categoryList, nextPage).then(() => {
              loadingNextPage = false;
            });
          }
        }
      }
    }, 15);
  };

  const stopScrolling = () => {
    clearInterval(scrollInterval.current);
    scrollInterval.current = null;
  };

  // --- Start scrolling when news updates ---
  useEffect(() => {
    if (news.length > 0) {
      startScrolling();
    }
    return stopScrolling;
  }, [news, isPaused]);

  // --- Date Formatter ---
  function formatPublishedDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    const isYesterday =
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear();

    if (isToday) {
      const diffHours = Math.floor((now - date) / (1000 * 60 * 60));
      return diffHours <= 1 ? "Few minutes ago" : `${diffHours} hours ago`;
    }
    if (isYesterday) return "Yesterday";
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <div className="bg-white min-h-screen overflow-x-hidden flex flex-col">
      <LandingNavbar />

      {/* Banner */}
      <div className="mt-8 sm:mt-16 mb-8 sm:mb-11 px-4 sm:px-28 flex justify-center items-center">
        <img
          src={blogLandingImage.src}
          alt="Blog landing"
          className="block sm:hidden w-full"
        />
        <img
          src={blogLandingImage4.src}
          alt="Blog landing"
          className="hidden sm:block h-[225px] w-full"
        />
      </div>

      {/* Categories */}
      <div className="px-4 sm:px-28">
        <div className="flex flex-row justify-between overflow-x-auto w-full gap-5 py-2 my-auto border-b-[2px] border-[#00000066]">
          {category?.map((data, index) => (
            <div
              key={index}
              className={`cursor-pointer ${
                categoryList == data
                  ? "text-[#270330] border-b-[2px] border-[#270330]"
                  : "text-[#86728B]"
              }`}
              onClick={() => setCateGoryList(data)}
            >
              <p className="text-[14px] text-nowrap sm:text-[19px] font-semibold">{data}</p>
            </div>
          ))}
        </div>

        {/* Auto Scrolling News */}
        {loading && page === 1 ? (
          <AnimateLoader count={6} />
        ) : (
          <div
            ref={tickerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              height: "800px",
              overflow: "hidden",
              borderBottom: "1px solid #ccc",
              paddingRight: "10px",
            }}
          >
            {news.map((data, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 border-b-[1px] border-[#00000026] py-8"
              >
                <p className="text-[#000000] text-[26px] font-semibold leading-9">
                  {data?.title}
                </p>
                <p className="text-[#4C4D55] text-[17px] leading-6">
                  {formatPublishedDate(data?.publishedAt)}
                </p>
                <p className="text-[#4C4D55] text-[17px] leading-6">
                  {data?.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
