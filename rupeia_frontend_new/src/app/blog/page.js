import React from "react";
import Navbar from "../components/LandingComponent/Navbar";
import blogLandingImage from "../components/Images/blogs_mobile_customize_image.png";
import blogLandingImage2 from "../components/Images/blogs_mobile_customize_2.png";

import BlogsCard from "../components/LandingComponent/BlogsCard";
import Categories from "../components/LandingComponent/Categories";

const Page = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden flex flex-col">
      {/* Navbar */}
      <div className="mt-[52px]">
        <Navbar />
      </div>

      {/* Blog Landing Image */}
      <div className="px-4 py-6">
        <img src={blogLandingImage.src} alt="Blog landing" />
      </div>

      {/* First Horizontal Blog Cards */}
      <div className="px-4 pb-5">
        <p className="text-[24px] font-normal leading-5 text-black">
          Recent Blogs
        </p>
      </div>
      <div className="w-full overflow-x-auto mx-4 mb-6 pr-4">
        <div className="flex gap-4 flex-row w-fit">
          {[1, 2, 3, 4].map((data, index) => (
            <div key={`card-row-1-${index}`} className="min-w-[277px]">
              <BlogsCard />
            </div>
          ))}
        </div>
      </div>

      {/* Second Horizontal Blog Cards */}
      <div className="w-full overflow-x-auto mx-4 mb-6">
        <div className="flex gap-4">
          {[1, 2, 3, 4].map((data, index) => (
            <div key={`card-row-2-${index}`} className="min-w-[277px]">
              <BlogsCard />
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 py-6">
        <img src={blogLandingImage2.src} alt="Blog landing" />
      </div>
      <div className="px-4 flex flex-col gap-5">
        <p className="text-[19px] font-normal leading-5 text-black">
          Explore Other Categories
        </p>
        <Categories />
      </div>
    </div>
  );
};

export default Page;
