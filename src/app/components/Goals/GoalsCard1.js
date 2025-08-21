import axios from "axios";
import React, { useEffect, useState } from "react";
import AnimateLoader from "../Loader/AnimateLoader";
import goals1 from "../Images/Goals/goals1.png";
import goals2 from "../Images/Goals/goals2.png";
import goals3 from "../Images/Goals/goals3.png";
import goals4 from "../Images/Goals/goals4.png";
import goals5 from "../Images/Goals/goals5.png";
import goals6 from "../Images/Goals/goals6.png";
import goals7 from "../Images/Goals/goals7.png";

const GoalsCard1 = ({ setGoalDetails, goalDetails, setPageStep, pageStep }) => {
  const type = [
    { id: 1, name: "Phones" },
    { id: 2, name: "Laptops" },
    { id: 3, name: "Tablets" },
    { id: 4, name: "Vehicle" },
    { id: 5, name: "College" },
    { id: 6, name: "Others" },
  ];
  const [goalCategory, setGoalCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/goal/goal-options`
      );
      setGoalCategory(response?.data?.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  console.log("goalDetails", goalDetails);
  return (
    <div className="font-poppins">
      <p className="text-[22px] font-semibold pr-10 text-white">
        Let’s catch your goals
      </p>
      <p className="text-[14px] font-medium pr-10 text-[#FFFFFFB8]">
        SEBI requires you to e-sign an investor agreement for your protection.
      </p>
      <div></div>
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-[13px] font-medium leading-6 hidden">
          1. Please select any one type
        </p>
        {loading ? (
          <AnimateLoader count={2} />
        ) : (
          <div className="flex flex-col gap-5">
            {goalCategory?.map((data, index) => (
              <div
                // className={`${
                //   goalDetails?.goalId == data?.goalId
                //     ? "bg-white text-[#000000]"
                //     : "text-white"
                // }`}
                key={index}
                onClick={() => {
                  setGoalDetails({
                    ...goalDetails,
                    goalId: data?.goalId,
                    goalTitle: data?.goalType,
                  });
                }}
              >
                {/* <p className="text-[12px] font-medium leading-6">
                  {data?.goalType}
                </p> */}
                {data?.goalType == "Buying a Car 🚗" && (
                  <div
                    className={`relative ${
                      goalDetails?.goalId == data?.goalId
                        ? "border-[2px] border-white rounded-[20px]"
                        : ""
                    }`}
                  >
                    <img src={goals1.src} className="h-[150px]" />
                    <div className="absolute top-10 w-[60%] pl-3">
                      <p
                        className={`text-[#281F1F] text-[24px] font-medium leading-6`}
                      >
                        Dream Car
                      </p>
                      <p
                        className={`text-[#281F1F] text-[13px] font-medium mt-3`}
                      >
                        The one you’ve always wanted is now within reach.
                      </p>
                    </div>
                  </div>
                )}
                {data?.goalType == "Buying a Home 🏠" && (
                  <div
                    className={`relative ${
                      goalDetails?.goalId == data?.goalId
                        ? "border-[2px] border-white rounded-[20px]"
                        : ""
                    }`}
                  >
                    <img src={goals2.src} className="h-[150px]" />
                    <div className="absolute top-10 w-[60%] pl-3">
                      <p
                        className={`text-[#281F1F] text-[24px] font-medium leading-6`}
                      >
                        First Home
                      </p>
                      <p
                        className={`text-[#281F1F] text-[13px] font-medium mt-3`}
                      >
                        Build the space where your life truly begins.
                      </p>
                    </div>
                  </div>
                )}
                {data?.goalType == "Retirement Planning 🧘" && (
                  <div
                    className={`relative ${
                      goalDetails?.goalId == data?.goalId
                        ? "border-[2px] border-white rounded-[20px]"
                        : ""
                    }`}
                  >
                    <img src={goals3.src} className="h-[150px]" />
                    <div className="absolute top-10 w-[60%] pl-3">
                      <p
                        className={`text-[#281F1F] text-[24px] font-medium leading-6`}
                      >
                        Retirement
                      </p>
                      <p
                        className={`text-[#281F1F] text-[13px] font-medium mt-3`}
                      >
                        Give tomorrow the comfort you’re earning today.
                      </p>
                    </div>
                  </div>
                )}
                {data?.goalType == "Childs Education 🎓" && (
                  <div
                    className={`relative ${
                      goalDetails?.goalId == data?.goalId
                        ? "border-[2px] border-white rounded-[20px]"
                        : ""
                    }`}
                  >
                    <img src={goals4.src} className="h-[150px]" />
                    <div className="absolute top-10 w-[60%] pl-3">
                      <p
                        className={`text-[#281F1F] text-[24px] font-medium leading-6`}
                      >
                        Their Education
                      </p>
                      <p
                        className={`text-[#281F1F] text-[13px] font-medium mt-3`}
                      >
                        Be ready when their dreams knock at the door.
                      </p>
                    </div>
                  </div>
                )}
                {data?.goalType == "Building a Startup 🚀" && (
                  <div
                    className={`relative ${
                      goalDetails?.goalId == data?.goalId
                        ? "border-[2px] border-white rounded-[20px]"
                        : ""
                    }`}
                  >
                    <img src={goals5.src} className="h-[150px]" />
                    <div className="absolute top-10 w-[60%] pl-3">
                      <p
                        className={`text-[#281F1F] text-[24px] font-medium leading-6`}
                      >
                        Your Startup
                      </p>
                      <p
                        className={`text-[#281F1F] text-[13px] font-medium mt-3`}
                      >
                        Back your idea with confidence and cash.
                      </p>
                    </div>
                  </div>
                )}
                {data?.goalType == "International Vacation ✈️" && (
                  <div
                    className={`relative ${
                      goalDetails?.goalId == data?.goalId
                        ? "border-[2px] border-white rounded-[20px]"
                        : ""
                    }`}
                  >
                    <img src={goals6.src} className="h-[150px]" />
                    <div className="absolute top-10 w-[60%] pl-3">
                      <p
                        className={`text-[#281F1F] text-[24px] font-medium leading-6`}
                      >
                        International Trip
                      </p>
                      <p
                        className={`text-[#281F1F] text-[13px] font-medium mt-3`}
                      >
                        Make that dream trip real, without regrets.
                      </p>
                    </div>
                  </div>
                )}
                {data?.goalType == "Marriage Expenses 💍" && (
                  <div
                    className={`relative ${
                      goalDetails?.goalId == data?.goalId
                        ? "border-[2px] border-white rounded-[20px]"
                        : ""
                    }`}
                  >
                    <img src={goals7.src} className="h-[150px]" />
                    <div className="absolute top-10 w-[60%] pl-3">
                      <p
                        className={`text-[#281F1F] text-[24px] font-medium leading-6`}
                      >
                        The Big Day
                      </p>
                      <p
                        className={`text-[#281F1F] text-[13px] font-medium mt-3`}
                      >
                        Celebrate love not loans.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-1 px-3 pr-25 hidden">
          <input
            type="text"
            placeholder="Describe your goal..."
            className="border-b-[1px] border-[#FFFFFFA6] w-full h-9 text-[13px] focus:outline-none text-[#FFFFFFA6]"
          />
        </div>
      </div>
      <div className="bg-[#1A0120] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full">
        <button
          className={`w-full py-2 rounded-full text-[15px] leading-7 font-medium ${
            goalDetails?.goalId.length > 0
              ? "text-white border-[1px] border-white "
              : "cursor-not-allowed text-[#58465C] border-[1px]  border-[#58465C]"
          }`}
          onClick={() => {
            setPageStep(pageStep + 1);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default GoalsCard1;
