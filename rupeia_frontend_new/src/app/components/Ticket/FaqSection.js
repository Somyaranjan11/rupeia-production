"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import AnimateLoader from "../Loader/AnimateLoader";

const FaqSection = ({ categoriesValue }) => {
  const [faqSection, setFaqSection] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(0);
  const fetchProtectedData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/tickets/faqs?category=${categoriesValue}`
      );
      if (response?.data?.success) {
        setFaqSection(response?.data?.data?.faqs[categoriesValue]);
      }
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProtectedData();
  }, []);
  console.log("faqSection", faqSection);
  return (
    <div className="py-25 px-5 plan-card min-h-screen overflow-y-auto">
      <div className="h-fit flex flex-col">
        <span className="text-[19px] font-medium">
          <p className="text-white">Okay! Now tell us about your</p>{" "}
        </span>
        <span className="text-[19px] font-medium">
          <p className="text-white">query.</p>{" "}
        </span>
      </div>
      <div
        className={`grid grid-cols-1 ${
          loading ? "gap-0 mt-3" : "gap-4 mt-5"
        } `}
      >
        {loading ? (
          <AnimateLoader count={2} />
        ) : (
          faqSection?.map((data, index) => (
            <div className="border-[1px] border-[#916D98] why-rupeia-blur px-5 sm:px-8 flex flex-col gap-3 justify-between items-center py-4 rounded-4xl h-fit">
              <div className="flex justify-between items-center gap-3 w-full">
                <span className="text-[14px] sm:text-[18px] font-medium leading-[150%] font-poppins w-[100%] text-[#FFFFFF]">
                  {index + 1}. {data?.question}
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
                  <FaAngleDown className="text-white cursor-pointer" />
                </span>
              </div>
              {open == index + 1 && (
                <p className="text-[12px] sm:text-[14px] text-left text-[#D9D9D9]">
                  {data?.answer}
                </p>
              )}
            </div>
          ))
        )}
      </div>
      {!loading && (
        <div className="mt-5">
          <div className="bg-[#551262] w-full border-[1px] border-[#916D98] h-[45px] rounded-4xl text-[14px] leading-7 font-medium text-white flex justify-center items-center">
            <p>I have a different query</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqSection;
