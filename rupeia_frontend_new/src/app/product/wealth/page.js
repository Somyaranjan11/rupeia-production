"use client";
import BenifitsCard from "@/app/components/Benifits/BenifitsCard";
import GaolsCard2 from "@/app/components/Goals/GaolsCard2";
import GoalsCard1 from "@/app/components/Goals/GoalsCard1";
import WealthCard1 from "@/app/components/Wealth/WealthCard1";
import WealthCard2 from "@/app/components/Wealth/WealthCard2";
import { BsArrowLeftShort } from "react-icons/bs";

import React, { useState } from "react";
import BenifitsCard2 from "@/app/components/Benifits/BenifitsCard2";
import BenifitsCard3 from "@/app/components/Benifits/BenifitsCard3";
import Confirmation from "@/app/components/Confirmation/Confirmation";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import WealthCard3 from "@/app/components/Wealth/WealthCard3";
import ShowSucessmessages from "@/app/components/alert/ShowSucessmessages";
import ButtonLoader from "@/app/components/Loader/ButtonLoader";
import axios from "axios";
import GoalsCard3 from "@/app/components/Goals/GoalsCard3";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [pageStep, setPageStep] = useState(1);
  const handleClick = () => {
    if (pageStep > 1) {
      setPageStep(pageStep - 1);
    }
  };
  const pageName = [1, 2].includes(pageStep)
    ? "Wealth"
    : [3, 4].includes(pageStep)
    ? "Goals"
    : [5].includes(pageStep)
    ? "Benefits"
    : "";
  const [goalDetails, setGoalDetails] = useState({
    goalId: "",
    goalTitle: "",
    investmentType: "SIP",
    goalType: "",
    goalAmount: 0,
    duration: 0,
    wealth_budget: 0,
  });
  const [goalQuestionSelect, setGoalQuestionSelect] = useState([]);
  const [loading, setLoading] = useState(false);
  const setUpGoal = async () => {
    const token = localStorage.getItem("accessToken");
    const payloadData = {
      goalId: goalDetails?.goalId,
      goalTitle: goalDetails?.goalTitle,
      investmentType: goalDetails?.investmentType,
      goalAmount: goalDetails?.goalAmount,
      duration: goalDetails?.duration,
    };
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/goal/create-goal`,
        payloadData, // <-- empty body if no body needed
        {
          headers: {
            Authorization: `Bearer ${token}`, // <-- correct place for headers
          },
        }
      );
      if (response?.data?.success) {
        ShowSucessmessages("Your goal created successfully");
        if (pageStep > 0 && pageStep < 7) {
          setPageStep(pageStep + 1);
        }
      }
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
  const submitQuestions = async () => {
    const token = localStorage.getItem("accessToken");
    const payloadData = {
      responses: goalQuestionSelect,
    };
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/profile-questions/responses`,
        payloadData, // <-- empty body if no body needed
        {
          headers: {
            Authorization: `Bearer ${token}`, // <-- correct place for headers
          },
        }
      );
      if (response?.data?.success) {
        ShowSucessmessages("Your answer submitted successfully");
        if (pageStep > 0 && pageStep < 7) {
          setPageStep(pageStep + 1);
        }
      }
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
  const submitWealth = async () => {
    const token = localStorage.getItem("accessToken");
    const payloadData = {
      investmentType: goalDetails?.investmentType,
      investmentAmount: goalDetails?.wealth_budget,
      duration: 3,
    };
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wealth-plus/create-wealth-plus`,
        payloadData, // <-- empty body if no body needed
        {
          headers: {
            Authorization: `Bearer ${token}`, // <-- correct place for headers
          },
        }
      );
      if (response?.data?.success) {
        ShowSucessmessages("Your wealth created successfully");
        if (pageStep > 0 && pageStep < 7) {
          setPageStep(5);
        }
      }
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-poppins flex flex-col h-screen overflow-hidden">
      {/* Navbar stays fixed at the top */}
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={pageName} handleClick={handleClick} />
      </div>

      {/* Scrollable Middle Content */}
      <div className="flex-grow overflow-y-auto px-5 pt-20 pb-20">
        {pageStep == 1 && (
          <div className="pr-16 pt-2">
            <p className="text-[35px] font-semibold leading-16">Hi!</p>
            <span className="flex flex-row flex-wrap text-[16px] font-semibold items-center gap-1">
              I Am Your <p className="text-[#D9B9E2]">Wealth Manager ,</p> Let’s
              Grow Your Money And Turn Your Goals into Reality
            </span>
          </div>
        )}
        {pageStep == 4 && (
          <div className="pr-16 pt-2">
            <p className="text-[35px] font-semibold leading-16">Goals</p>
            <span className="flex flex-row flex-wrap text-[16px] font-semibold items-center gap-1">
              I am your <p className="text-[#D9B9E2]">Goals Manager ,</p>
              Help me identify and fulfill your goals
            </span>
          </div>
        )}
        <div className="mt-5 mb-[80px]">
          {pageStep == 1 && (
            <WealthCard1
              setGoalQuestionSelect={setGoalQuestionSelect}
              goalQuestionSelect={goalQuestionSelect}
            />
          )}
          {/* {pageStep == 2 && <WealthCard2 />} */}
          {pageStep == 2 && (
            <WealthCard3
              setGoalDetails={setGoalDetails}
              goalDetails={goalDetails}
            />
          )}

          {goalDetails?.goalType == "Goal" && pageStep == 3 && (
            <GoalsCard1
              setGoalDetails={setGoalDetails}
              goalDetails={goalDetails}
            />
          )}
          {goalDetails?.goalType == "Goal" && pageStep == 4 && (
            <GaolsCard2
              setGoalDetails={setGoalDetails}
              goalDetails={goalDetails}
            />
          )}
          {goalDetails?.goalType == "Wealth+" && pageStep == 3 && (
            <GoalsCard3
              setGoalDetails={setGoalDetails}
              goalDetails={goalDetails}
            />
          )}
          {pageStep == 5 && <BenifitsCard />}
          {pageStep == 6 && <Confirmation />}
        </div>
      </div>

      {/* Continue Button stays fixed at the bottom */}
      <div className="border-[1px] border-[#65636394] bg-[#270330] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl">
        {[2, 8, 6, 5].includes(pageStep) && (
          <button
            className="bg-[#551262] w-full py-2 rounded-full text-[15px] leading-7 font-medium text-white"
            type="button"
            onClick={() => {
              if (pageStep > 0 && pageStep < 6) {
                setPageStep(pageStep + 1);
              }
              if (pageStep == 6) {
                router.push("/product");
              }
            }}
          >
            Continue
          </button>
        )}
        {[1, 3, 4].includes(pageStep) && (
          <button
            className="bg-[#551262] w-full py-2 rounded-full text-[15px] leading-7 font-medium text-white"
            type="button"
            onClick={() => {
              if (pageStep == 4) {
                setUpGoal();
              } else if (pageStep == 1) {
                submitQuestions();
              } else if (pageStep == 3) {
                if (goalDetails?.goalType == "Wealth+") {
                  submitWealth();
                } else {
                  if (pageStep > 0 && pageStep < 6) {
                    setPageStep(pageStep + 1);
                  }
                }
              }
            }}
          >
            {loading ? <ButtonLoader /> : "Continue"}
          </button>
        )}
      </div>
    </div>
  );
};
export default Page;
