"use client";
import React, { useRef, useState } from "react";

import LandingNavbar from "@/app/components/LandingComponent/LandingNavbar";
// import blogsCardImage from "../Images/blogs-card-image.png";
import blogsCardImage from "../../components/Images/blogs-inner-image.png";
import { FaAngleDown } from "react-icons/fa";
import Categories from "@/app/components/LandingComponent/Categories";
import BlogsCard from "@/app/components/LandingComponent/BlogsCard";
import Footer from "@/app/components/MobileLandingPageComponent/Footer";

const Page = () => {
  const blogData = {
    description:
      "Scaling up the synthesis of Active Pharmaceutical Ingredients (APIs) from laboratory-scale (milligrams to grams) to commercial-scale (kilograms to metric tons) is not a linear process and can be incredibly complex and challenging. There are many issues that may not be evident to a chemist with limited scale-up experience that can have a drastic effect on the success of the process. This phase in pharmaceutical manufacturing, known as Process Research and Development (PR&D), involves numerous technical hurdles that must be addressed in order to ensure efficiency and quality. In this article, we will explore three of the key technical challenges associated with scaling up a synthetic process.",
    headings: [
      {
        heading: "Process Optimization",
        desc: "The first step in scaling up a synthetic process to kilogram scale is optimization of the synthetic route for manufacturing equipment and processes. Before any chemistry is done in the lab, the route should thoroughly examined and alternatives should be considered for problematic steps. For example, column chromatography, rotavaping, and low temperatures (< 40 °C) are difficult, time consuming or resource intensive at scale, while reagent combinations that are common in R&D settings can present serious safety concerns at scale; NaH/DMF is a commonly cited combination that is frequently used for small scale syntheses, but presents a severe decomposition hazard at scale and cannot be used.",
      },
      {
        heading: "Heat Transfer",
        desc: "As a process is scaled up, the difference in heat transfer efficiency between reaction vessels of differing shapes and sizes becomes increasingly important. With the larger surface-to-volume ratio of lab scale equipment, heat transfer is more uniform and more rapid than in larger equipment. In larger reactors, the rate of heat transfer can be up to thirty times slower than in smaller round bottom flasks. Heating or cooling a solvent in a 250 mL round bottom flask can be done in minutes, while in a 250 L reactor, the same temperature change will take hours. Oftentimes, PR&D needs to take this variation into account when planning for scale-up. Are the reagents stable for extended periods of time at the given temperature? Will side reactions begin to occur, and if so, can those impurities be purged during the purification? Jacketed reactors are typically used during PR&D to mimic large-scale chemistry as closely as possible, providing better control over temperature and heat distribution. Temperature Control Units (TCUs) can be used to mirror the temperature ramping rates of large-scale equipment to provide the best possible representation of a scaled-up reaction, and reactions can be intentionally held for extended times at process temperatures to test the robustness of the chemistry.",
      },
      {
        heading: "Unit Operations",
        desc: "Operational techniques differ vastly when comparing kilo scale and gram scale chemistry. At gram scale, chromatography is the method used most often to purify samples. At kilo scale, chromatography is financially and temporally inefficient and typically used only as a last resort. In addition, other common gram scale laboratory techniques such as use of rotary evaporators, dry ice/acetone baths, and hi-vac systems are resource intense and typically not feasible at kilogram scale. These limitations need to be kept in mind during PR&D, and alternative methods should be developed and optimized to handle the increased scale. This may involve designing new protocols for crystallization, further optimization of the chemistry, or implementing large-scale distillation techniques to ensure the purity of the final product.",
      },
    ],
    faqs: [
      {
        id: 1,
        question:
          "It is a long established fact that a reader will be distracted by the readable?",
        answer:
          "Pharmaceuticals are characterized by several analytical techniques to confirm their identitfy and describe their quality. Purity, potency, and assay are common approaches used to quantify how much of an active pharmaceutical ingredient (API) is in a drug substance, but what do these values actually tell us? Each of these results is determined by different factors, and it is important to understand the differences between them and the limitations of each approach.",
      },
      {
        id: 2,
        question:
          "It is a long established fact that a reader will be distracted by the readable?",
        answer:
          "Pharmaceuticals are characterized by several analytical techniques to confirm their identitfy and describe their quality. Purity, potency, and assay are common approaches used to quantify how much of an active pharmaceutical ingredient (API) is in a drug substance, but what do these values actually tell us? Each of these results is determined by different factors, and it is important to understand the differences between them and the limitations of each approach.",
      },
      {
        id: 3,
        question:
          "It is a long established fact that a reader will be distracted by the readable?",
        answer:
          "Pharmaceuticals are characterized by several analytical techniques to confirm their identitfy and describe their quality. Purity, potency, and assay are common approaches used to quantify how much of an active pharmaceutical ingredient (API) is in a drug substance, but what do these values actually tell us? Each of these results is determined by different factors, and it is important to understand the differences between them and the limitations of each approach.",
      },
      {
        id: 4,
        question:
          "It is a long established fact that a reader will be distracted by the readable?",
        answer:
          "Pharmaceuticals are characterized by several analytical techniques to confirm their identitfy and describe their quality. Purity, potency, and assay are common approaches used to quantify how much of an active pharmaceutical ingredient (API) is in a drug substance, but what do these values actually tell us? Each of these results is determined by different factors, and it is important to understand the differences between them and the limitations of each approach.",
      },
      {
        id: 5,
        question:
          "It is a long established fact that a reader will be distracted by the readable?",
        answer:
          "Pharmaceuticals are characterized by several analytical techniques to confirm their identitfy and describe their quality. Purity, potency, and assay are common approaches used to quantify how much of an active pharmaceutical ingredient (API) is in a drug substance, but what do these values actually tell us? Each of these results is determined by different factors, and it is important to understand the differences between them and the limitations of each approach.",
      },
      {
        id: 6,
        question:
          "It is a long established fact that a reader will be distracted by the readable?",
        answer:
          "Pharmaceuticals are characterized by several analytical techniques to confirm their identitfy and describe their quality. Purity, potency, and assay are common approaches used to quantify how much of an active pharmaceutical ingredient (API) is in a drug substance, but what do these values actually tell us? Each of these results is determined by different factors, and it is important to understand the differences between them and the limitations of each approach.",
      },
    ],
    conclusion:
      "API scale-up synthesis is a multifaceted process that requires careful planning and robust process optimization. By addressing these technical challenges, as well as others not discussed in this post, pharmaceutical manufacturers can successfully scale up API production, ensuring that high-quality, effective pharmaceutical products reach the market efficiently.",
    summary:
      "API scale-up synthesis is a multifaceted process that requires careful planning and robust process optimization. By addressing these technical challenges, as well as others not discussed in this post, pharmaceutical manufacturers can successfully scale up API production, ensuring that high-quality, effective pharmaceutical products reach the market efficiently.",
    by: "Urvashi Lakhmani",
    profile_id: "Urvashi Lakhmani",
  };

  const [open, setOpen] = useState(0);
  const headingRefs = useRef(blogData.headings.map(() => React.createRef()));
  const conclusionRef = useRef(null);
  const summaryRef = useRef(null);
  console.log("blogData", blogData);
  return (
    <div className="bg-white min-h-screen overflow-x-hidden flex flex-col">
      {/* Navbar */}
      <div className="">
        <LandingNavbar />
      </div>
      <div className="w-full px-4 sm:px-28">
        <div className="relative my-6 sm:my-10">
          <img
            src={blogsCardImage.src}
            className="h-[245px] sm:h-[507px] w-full rounded-3xl"
          />
          <div className="blogs-inner-page-bg-color absolute h-[507px] top-0 rounded-[20px] w-[60%] pl-[10%] hidden sm:block">
            <div className="flex justify-center flex-col h-full gap-3">
              <div className="flex flex-row gap-5">
                <button className="bg-[#F0E6F1] text-[#4C4D55] h-[32px] w-fit px-3 text-[16px] font-semibold leading-6 rounded-lg">
                  PHARMA
                </button>
                <button className="bg-[#F0E6F1] text-[#4C4D55] h-[32px] w-fit px-3 text-[16px] font-semibold leading-6 rounded-lg">
                  TRENDING
                </button>
              </div>
              <p className="text-[#FFFFFF] text-[36px] font-semibold">
                Actylis Limerick - Strengthening Partnerships with a Biopharma
                CDMO
              </p>
              <p className="text-[#F7F7F9] text-[17px] font-semibold leading-6">
                2nd August 2024 | 6 min read
              </p>
            </div>
          </div>
          <div className="flex justify-center flex-col h-full gap-3 mt-5 sm:hidden">
            <div className="flex flex-row gap-5">
              <button className="bg-[#F0E6F1] text-[#4C4D55] h-[32px] w-fit px-3  text-[13px] sm:text-[16px] font-semibold leading-6 rounded-lg">
                PHARMA
              </button>
              <button className="bg-[#F0E6F1] text-[#4C4D55] h-[32px] w-fit px-3  text-[13px] sm:text-[16px] font-semibold leading-6 rounded-lg">
                TRENDING
              </button>
            </div>
            <p className="text-[#000000] text-[22px] sm:text-[36px] font-semibold">
              Actylis Limerick - Strengthening Partnerships with a Biopharma
              CDMO
            </p>
            <p className="text-[#4C4D55] text-[16px] sm:text-[17px] font-semibold leading-6">
              2nd August 2024 | 6 min read
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-7">
          <div className="w-full sm:w-[25%]">
            <div className="bg-[#F0E6F1] p-10 rounded-[28px]">
              <p className="text-[#000000] text-[18px] font-semibold">
                Contents
              </p>
              <div className="flex flex-col gap-[6px] mt-2">
                {blogData?.headings?.map((data, index) => (
                  <p
                    key={index}
                    className="text-[#4C4D55] text-[16px] font-medium cursor-pointer hover:underline"
                    onClick={() =>
                      headingRefs.current[index].current?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    {data?.heading}
                  </p>
                ))}
                {/* <p
                  className="text-[#4C4D55] text-[16px] font-medium cursor-pointer hover:underline"
                  onClick={() =>
                    conclusionRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Conclusion
                </p>
                <p
                  className="text-[#4C4D55] text-[16px] font-medium cursor-pointer hover:underline"
                  onClick={() =>
                    summaryRef.current?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Summary
                </p> */}
              </div>
            </div>
          </div>
          <div className="w-full sm:w-[55%]">
            <p className="text-[#000000] font-normal text-[14px] sm:text-[18px]">
              {blogData?.description}
            </p>
            <div className="flex flex-col gap-6 mt-6">
              {blogData?.headings?.map((value, index) => (
                <div
                  className="flex flex-col gap-5"
                  key={index}
                  ref={headingRefs.current[index]}
                >
                  <p className="text-[#4C4D55] text-[22px] sm:text-[26px] font-semibold">
                    {value?.heading}
                  </p>
                  <p className="text-[#4C4D55] font-normal text-[14px] sm:text-[18px]">
                    {value?.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="my-5">
              <p className="text-[#4C4D55] font-semibold text-[22px] sm:text-[26px]">
                Frequently Asked Questions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 sm:gap-8  mt-3 w-full">
              {blogData?.faqs?.map((data, index) => (
                <div
                  className="border-[1px] border-[#551262] bg-[#F0E6F1] px-5 sm:px-8 flex flex-col gap-3 justify-between  py-4 rounded-4xl h-fit w-full"
                  key={index}
                >
                  <div className="flex justify-between items-center gap-3">
                    <span className="text-[14px] sm:text-[18px] font-medium leading-[150%] font-poppins w-[100%] text-[#551262]">
                      {data?.question}
                    </span>
                    <span
                      onClick={() => {
                        if (open == index + 1) {
                          setOpen(0);
                        } else {
                          setOpen(index + 1);
                        }
                      }}
                    >
                      <FaAngleDown className="text-[#551262] cursor-pointer text-[25px]" />
                    </span>
                  </div>
                  {open == index + 1 && (
                    <p className="text-[13px] sm:text-[14px] text-left text-[#4C4D55]">
                      {data?.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5 mt-5 " ref={conclusionRef}>
              <p className="text-[#4C4D55] text-[26px] font-semibold">
                Conclusion
              </p>
              <p className="text-[#4C4D55] font-normal text-[14px] sm:text-[18px]">
                {blogData?.conclusion}
              </p>
            </div>
            <div className="flex flex-col gap-5 mt-5" ref={summaryRef}>
              <p className="text-[#4C4D55] text-[26px] font-semibold">
                Summmary
              </p>
              <p className="text-[#4C4D55] font-normal text-[14px] sm:text-[18px]">
                {blogData?.summary}
              </p>
            </div>
            <div className="my-5">
              <div className="flex flex-row items-center gap-1 text-[#4C4D55] text-[18px] font-semibold">
                <p>By:</p>
                <p>{blogData?.by}</p>
              </div>
              <div className="flex flex-row gap-1 mt-2 items-center text-[#4C4D55] text-[18px] font-semibold">
                <p>LinkedIn- </p>
                <p>{blogData?.profile_id}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 sm:my-14 flex flex-col gap-5 ">
          <div className="pb-5">
            <p className="text-[24px] font-normal leading-5 text-black">
              Related Blogs
            </p>
          </div>
          <div className="w-full overflow-x-auto lg:overflow-x-hidden mx-4 sm:mx-0 pr-4">
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
        <div className="flex flex-col gap-10 mb-20 ">
          <p className="text-[24px] font-normal leading-5 text-black">
            Explore Other Categories
          </p>
          <Categories />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
