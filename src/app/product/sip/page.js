"use client";
import SIPCard from "@/app/components/SIP/SIPCard";
import React, { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import sipImage from "../../components/Images/sip_image.png";
import { useRouter } from "next/navigation";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import InvestmentCard from "@/app/components/Investment/InvestmentCard";
import axios from "axios";
import goalImage from "../../components/Images/Goals/goal-image.png";
import wealthImage from "../../components/Images/Goals/wealth-image.png";

const Page = () => {
  const [currentPage, setCurrentPage] = useState("goal");
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };
  const [sipDetails, setSIPDetails] = useState();
  const [loading, setLoading] = useState(true);
  const fetchSIP = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      setLoading(true);
      let url = "";
      url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/sip/summary`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`, // <-- add Authorization header
        },
      });
      if (response?.data?.success) {
        setSIPDetails(response?.data?.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchSIP();
  }, [currentPage]);

  function formatIndianCurrency(num) {
    return new Intl.NumberFormat("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  }
  const goalsCard = [
    {
      id: 1,
      image: goalImage,
      header: "Goals",
      text: "Goals-First Investing",
      color_text: "#A9FFCA",
      name: "Goal",
    },
    {
      id: 2,
      image: wealthImage,
      header: "Wealth+",
      text: "Increase you wealth",
      color_text: "#FFE838",
      name: "Wealth+",
    },
  ];

  console.log("sipDetails", sipDetails);
  return (
    <div className="font-poppins flex flex-col h-screen overflow-hidden bg-[#1A0120]">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#1A0120]">
        <NavbarCommonPage page={"SIP"} handleClick={handleClick} />
      </div>
      <div className="overflow-y-auto flex flex-col px-5 pt-28 pb-20">
        {sipDetails?.goals?.length > 0 && sipDetails?.wealthPlus?.length > 0 ? (
          <div>
            <div className="bg-[#551262] rounded-2xl shadow-2xs border-[1px] border-[#794083] p-4">
              <div className="flex justify-center items-center flex-col gap-2">
                <p className="text-[12px] leading-5 font-medium">
                  Total SIP Amount
                </p>
                <p className="text-[22px] leading-5 font-medium tracking-wide">
                  ₹{formatIndianCurrency(sipDetails?.summary?.totalSipAmount)}
                </p>
                <div className="border-[0.5px] border-[#FFFFFF7A] content-none min-w-[130px] mt-1"></div>
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex flex-col gap-2">
                  <p className="text-[13px] leading-5 font-medium">
                    Current Amount
                  </p>
                  <p className="text-[15px] leading-5 font-medium">
                    ₹
                    {formatIndianCurrency(
                      sipDetails?.summary?.totalCurrentAmount
                    )}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[13px] leading-5 font-medium">
                    Total Returns
                  </p>
                  <p className="text-[15px] text-[#11FF42] leading-5 font-medium">
                    +{sipDetails?.summary?.totalReturns} (
                    {sipDetails?.summary?.totalReturnsPercentage}%)
                  </p>
                </div>
              </div>
            </div>
            <div className="my-4">
              <div className="flex items-center justify-center">
                {" "}
                <p className="text-[13px] leading-5 font-medium">
                  All investments
                </p>
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
              {currentPage == "goal" && (
                <div>
                  <InvestmentCard
                    investmentDetails={sipDetails?.goals}
                    currentPage={currentPage}
                  />
                </div>
              )}
              {currentPage == "wealth-creation" && (
                <div>
                  <InvestmentCard
                    investmentDetails={sipDetails?.wealthPlus}
                    currentPage={currentPage}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <p className="text-[18px] font-medium text-center">
              Start your Investment Journey Today!
            </p>
            <div className="flex flex-col gap-5">
              {goalsCard?.map((data, index) => (
                <div className={`relative `} key={index}>
                  <img src={data?.image.src} className="w-full h-[160px]" />
                  <div className="absolute top-0 p-5">
                    <p
                      className={`text-[${data?.color_text}] text-[24px] font-bold leading-7`}
                    >
                      {data?.header}
                    </p>
                    <p
                      className={`text-[${data?.color_text}] text-[14px] leading-7`}
                    >
                      {data?.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
