"use client";
import InvestmentCard from "@/app/components/Investment/InvestmentCard";
import React, { useEffect, useMemo, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import sipImage from "../../components/Images/sip_image.png";
import { useRouter } from "next/navigation";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import axios from "axios";
import AnimateLoader from "@/app/components/Loader/AnimateLoader";
import SIPCard from "@/app/components/SIP/SIPCard";

const Page = () => {
  const [currentPage, setCurrentPage] = useState("goal");
  const router = useRouter();
  const handleClick = () => {
    router.push("/product");
  };
  const [goalDetails, setGoalDetails] = useState();
  const [fundDetails, setFundDetails] = useState();
  const [wealthDetails, setWealthDetails] = useState();
  const [goalID, setGoalId] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchPortfolio = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      setLoading(true);
      let url = "";
      url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolio`;
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`, // <-- add Authorization header
        },
      });
      if (response?.data?.success) {
        setGoalDetails(response?.data?.data);
      }
      if (response?.data?.data?.goals?.length > 0) {
        setFundDetails(response?.data?.data?.goals);
        setGoalId(response?.data?.data?.goals[0]?.goalId);
      }
      if (response?.data?.data?.wealthPlus?.length > 0) {
        setWealthDetails(response?.data?.data?.wealthPlus);
      }
      console.log("response", response);
      return;
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPortfolio();
  }, []);

  function formatIndianCurrency(num) {
    if (num) {
      return new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num);
    } else {
      return 0;
    }
  }
  const investmentDetails = useMemo(() => {
    return fundDetails?.find((data) => data?.goalId == goalID);
  }, [fundDetails, goalID]);
  return (
    <div className="font-poppins flex flex-col h-screen overflow-hidden plan-card">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Portfolio"} handleClick={handleClick} />
      </div>
      {loading ? (
        <div className="px-5 pt-28 pb-12">
          <AnimateLoader count={3} />
        </div>
      ) : (
        <div className="overflow-y-auto overflow-x-hidden flex flex-col px-5 pt-28 pb-12">
          <div className="bg-[#551262] rounded-2xl shadow-2xs p-4 ">
            <div className="flex justify-center items-center flex-col gap-2">
              <p className="text-[12px] leading-5 font-medium">
                Current Amount
              </p>
              <p className="text-[22px] leading-5 font-medium tracking-wide">
                ₹
                {formatIndianCurrency(goalDetails?.summary?.totalCurrentAmount)}
              </p>
              <div className="border-[0.5px] border-[#FFFFFF7A] content-none min-w-[130px] mt-1"></div>
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex flex-col gap-2">
                <p className="text-[13px] leading-5 font-medium">
                  Invested Amount
                </p>
                <p className="text-[16px] leading-5 font-medium">
                  ₹
                  {formatIndianCurrency(
                    goalDetails?.summary?.totalCurrentAmount
                  )}{" "}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[13px] leading-5 font-medium">
                  Total Returns
                </p>
                <p className="text-[15px] text-[#11FF42] leading-5 font-medium">
                  +{goalDetails?.summary?.totalReturns} (
                  {goalDetails?.summary?.totalReturnsPercentage}%)
                </p>
              </div>
            </div>
          </div>
          <div className="my-4 flex flex-col  w-full">
            <div className="flex items-center justify-center">
              {" "}
              <p className="text-[13px] leading-5 font-medium">
                All investments
              </p>
            </div>
            <div
              className={`flex flex-row ${
                fundDetails?.length > 0 ? "justify-start" : " justify-center"
              } items-center gap-7 my-2 overflow-x-auto w-full mx-auto pl-4 hide-scrollbar`}
            >
              {fundDetails?.length > 0 ? (
                fundDetails.map((data, index) => (
                  <div key={index} className="min-w-max">
                    <p
                      className={`text-[14px] leading-8 font-medium whitespace-nowrap ${
                        data?.goalId == goalID && currentPage == "goal"
                          ? "text-white"
                          : "text-[#FFFFFF70]"
                      } `}
                      onClick={() => {
                        setGoalId(data?.goalId);
                        setCurrentPage("goal");
                      }}
                    >
                      {data?.goalTitle}
                    </p>
                    {data?.goalId == goalID && currentPage == "goal" && (
                      <p className="border-[1px]"></p>
                    )}
                  </div>
                ))
              ) : (
                <span
                  className={`text-[14px] leading-7 font-medium whitespace-nowrap min-w-max ${
                    currentPage == "goal" ? "text-white" : "text-[#FFFFFF70]"
                  }`}
                  onClick={() => setCurrentPage("goal")}
                >
                  Goal
                  {currentPage == "goal" && <p className="border-[1px]"></p>}
                </span>
              )}
              <span
                className={`text-[14px] leading-7 font-medium whitespace-nowrap min-w-max ${
                  currentPage == "wealth-creation"
                    ? "text-white"
                    : "text-[#FFFFFF70]"
                }`}
                onClick={() => setCurrentPage("wealth-creation")}
              >
                Wealth +
                {currentPage == "wealth-creation" && (
                  <p className="border-[1px]"></p>
                )}
              </span>
            </div>
            {loading ? (
              <AnimateLoader count={2} />
            ) : (
              <div>
                {currentPage == "goal" ? (
                  <SIPCard
                    investmentDetails={investmentDetails}
                    currentPage={currentPage}
                  />
                ) : (
                  <SIPCard
                    investmentDetails={wealthDetails}
                    currentPage={currentPage}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
