"use client";
import InvestmentCard from "@/app/components/Investment/InvestmentCard";
import React, { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import sipImage from "../../components/Images/sip_image.png";
import { useRouter } from "next/navigation";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import axios from "axios";
import AnimateLoader from "@/app/components/Loader/AnimateLoader";

const Page = () => {
  const [currentPage, setCurrentPage] = useState("goal");
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };
  const [goalDetails, setGoalDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchBlogs = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      setLoading(true);
      let url = "";
      if (currentPage == "goal") {
        url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/goal/user-goals`;
      } else if (currentPage == "wealth-creation") {
        url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/wealth-plus/user-profiles`;
      }
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`, // <-- add Authorization header
        },
      });
      if (currentPage == "goal") {
        setGoalDetails(response?.data?.data?.goals);
      } else {
        setGoalDetails(response?.data?.data?.profiles);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, [currentPage]);

  console.log("goalDetails", goalDetails);
  return (
    <div className="font-poppins flex flex-col h-screen overflow-hidden">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Portfolio"} handleClick={handleClick} />
      </div>
      <div className="overflow-y-auto flex flex-col px-5 pt-28 pb-12">
        <div className="bg-[#551262] rounded-2xl shadow-2xs border-[1px] border-[#794083] p-4 ">
          <div className="flex justify-center items-center flex-col gap-2">
            <p className="text-[12px] leading-5 font-medium">Current Amount</p>
            <p className="text-[22px] leading-5 font-medium tracking-wide">
              ₹1,45,000{" "}
            </p>
            <div className="border-[0.5px] border-[#FFFFFF7A] content-none min-w-[130px] mt-1"></div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="flex flex-col gap-2">
              <p className="text-[13px] leading-5 font-medium">
                Current Amount
              </p>
              <p className="text-[16px] leading-5 font-medium">₹1,45,000 </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[13px] leading-5 font-medium">Total Returns</p>
              <p className="text-[16px] text-[#11FF42] leading-5 font-medium">
                +45,000 (5.67%)
              </p>
            </div>
          </div>
        </div>

        <div className="my-4">
          <div className="flex items-center justify-center">
            {" "}
            <p className="text-[13px] leading-5 font-medium">All investments</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-8 my-2">
            <span
              className={`text-[13px] leading-5 font-medium ${
                currentPage == "goal" ? "text-white" : "text-[#FFFFFF70]"
              }`}
              onClick={() => {
                setCurrentPage("goal");
              }}
            >
              Goal
              {currentPage == "goal" && <p className="border-[1px]"></p>}
            </span>
            <span
              className={`text-[13px] leading-5 font-medium  ${
                currentPage == "wealth-creation"
                  ? "text-white"
                  : "text-[#FFFFFF70]"
              }`}
              onClick={() => {
                setCurrentPage("wealth-creation");
              }}
            >
              Wealth Creation
              {currentPage == "wealth-creation" && (
                <p className="border-[1px]"></p>
              )}
            </span>
          </div>
          {loading ? (
            <AnimateLoader count={2} />
          ) : (
            <div>
              <InvestmentCard investmentDetails={goalDetails} currentPage={currentPage} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
