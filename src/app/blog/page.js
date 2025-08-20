"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/LandingComponent/Navbar";
import blogLandingImage from "../components/Images/blogs_mobile_customize_image.png";
import blogLandingImage2 from "../components/Images/blogs_mobile_customize_2.png";
import blogLandingImage3 from "../components/Images/blogs-desktop-customize.png";
import blogLandingImage4 from "../components/Images/blogs-desktop-top-image.png";

import BlogsCard from "../components/LandingComponent/BlogsCard";
import Categories from "../components/LandingComponent/Categories";
import LandingNavbar from "../components/LandingComponent/LandingNavbar";
import Footer from "../components/MobileLandingPageComponent/Footer";
import axios from "axios";
import AnimateLoader from "../components/Loader/AnimateLoader";
import DownloadRupeia from "../components/MobileLandingPageComponent/DownloadRupeia";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [blogDetails, setBlogDetails] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/userblogs`
        );
        if (response?.data) {
          setBlogDetails(response?.data);
        }
        // setCategory(response?.data?.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, []);
  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);
  const closePopUp = () => {
    setIsQRCodeOpen(false);
  };
  const openPopUp = () => {
    setIsQRCodeOpen(true);
  };
  return (
    <div className="bg-white min-h-screen overflow-x-hidden flex flex-col relative">
      {/* Navbar */}
      <div className="">
        <LandingNavbar openPopUp={openPopUp} />
      </div>

      {/* Blog Landing Image */}
      <div className="mt-5 sm:mt-16 mb-5 sm:mb-11 px-4 sm:px-28 flex justify-center items-center ">
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

      {/* First Horizontal Blog Cards */}
      {loading ? (
        <div className="px-4 sm:px-28">
          <AnimateLoader count={4} />
        </div>
      ) : (
        <div className="flex flex-col gap-2 sm:gap-5">
          <div className="pb-2 sm:pb-5 px-4 sm:px-28">
            <p className="text-[24px] font-normal leading-5 text-black">
              Recent Blogs
            </p>
          </div>
          <div className="w-full overflow-x-auto lg:overflow-x-hidden mx-4 sm:mx-0 sm:px-28 pr-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5  ">
              {blogDetails.length > 0 &&
                blogDetails?.map((data, index) => (
                  <div
                    key={`card-row-1-${index}`}
                    className="min-w-[277px] lg:min-w-[277px] pr-4 sm:pr-0 "
                  >
                    <BlogsCard
                      image={data?.sectionData?.image}
                      heading={data?.sectionData?.heading}
                      description={data?.sectionData?.shortDescription}
                      blog_id={data?._id}
                    />
                  </div>
                ))}
            </div>
            {/* <div className="flex flex-row gap-0 sm:gap-8  ">
            {[1, 2, 3, 4].map((data, index) => (
              <div
                key={`card-row-1-${index}`}
                className="min-w-[277px] lg:min-w-[277px] pr-4 sm:pr-0 "
              >
                <BlogsCard />
              </div>
            ))}
          </div> */}
          </div>

          {/* Second Horizontal Blog Cards */}
          {/* <div className="w-full overflow-x-auto lg:overflow-x-hidden  mx-4 sm:mx-0 sm:px-28 pr-4">
          <div className="flex flex-row gap-0 sm:gap-8  ">
            {[1, 2, 3, 4].map((data, index) => (
              <div
                key={`card-row-1-${index}`}
                className="min-w-[277px] lg:min-w-[277px] pr-4 sm:pr-0 "
              >
                <BlogsCard />
              </div>
            ))}
          </div>
        </div> */}
        </div>
      )}

      <div className="px-4 sm:px-28 flex justify-center items-center my-8 sm:my-20">
        <img
          src={blogLandingImage2.src}
          alt="Blog landing"
          className="block sm:hidden"
        />
        <img
          src={blogLandingImage3.src}
          alt="Blog landing"
          className="hidden sm:block h-[400px]"
        />
      </div>
      <div className="flex flex-col gap-5 px-4 sm:px-28">
        <p className="text-[24px] font-normal leading-5 text-black">
          Explore Other Categories
        </p>
        <Categories />
      </div>
      <div className="mt-16 flex flex-col gap-5 hidden">
        <div className="pb-5 px-4 sm:px-28">
          <p className="text-[24px] font-normal leading-5 text-black">
            Popular Blogs
          </p>
        </div>
        <div className="w-full overflow-x-auto lg:overflow-x-hidden mx-4 sm:mx-0 sm:px-28 pr-4">
          <div className="flex flex-row gap-0 sm:gap-8  ">
            {[1, 2, 3, 4].map((data, index) => (
              <div
                key={`card-row-1-${index}`}
                className="min-w-[277px] lg:min-w-[277px] pr-4 sm:pr-0 "
              >
                <BlogsCard />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10 hidden">
        <div className="pb-5 px-4 sm:px-28">
          <p className="text-[24px] font-normal leading-5 text-black">
            Most Read Blogs
          </p>
        </div>
        <div className="w-full overflow-x-auto lg:overflow-x-hidden mx-4 sm:mx-0 sm:px-28 pr-4">
          <div className="flex flex-row gap-0 sm:gap-8  ">
            {[1, 2, 3, 4].map((data, index) => (
              <div
                key={`card-row-1-${index}`}
                className="min-w-[277px] lg:min-w-[277px] pr-4 sm:pr-0 "
              >
                <BlogsCard />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-12 px-4 sm:px-28 flex justify-center items-center">
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
      <div>
        <Footer />
      </div>
      {isQRCodeOpen && <DownloadRupeia closePopUp={closePopUp} />}
    </div>
  );
};

export default Page;
