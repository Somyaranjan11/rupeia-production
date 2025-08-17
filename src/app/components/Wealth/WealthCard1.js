import axios from "axios";
import React, { useEffect, useState } from "react";
import goalMoney from "../Images/Goals/goal-money.png";
import goalImage from "../Images/Goals/goal-image.png";
import wealthImage from "../Images/Goals/wealth-image.png";

const WealthCard1 = ({
  setGoalQuestionSelect,
  goalQuestionSelect,
  submitQuestions,
  setCurrentStep,
  currentStep,
  setGoalDetails,
  goalDetails,
}) => {
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
  const [goalQuestions, setGoalQuestions] = useState([]);
  const [questionList, setQuestionList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/profile-questions`
        );
        const combined = [
          ...(response?.data?.data?.risk || []),
          ...(response?.data?.data?.emotional || []),
        ];
        setGoalQuestions(response?.data?.data);
        setQuestionList(combined);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const isOptionSelected = (questionId) => {
    return goalQuestionSelect.some((q) => q.questionId === questionId);
  };

  const handleOptionClick = (questionId, optionId) => {
    setGoalQuestionSelect((prev) => {
      const exists = prev.find((q) => q.questionId === questionId);
      if (exists) {
        return prev.map((q) =>
          q.questionId === questionId ? { ...q, selectedOptionId: optionId } : q
        );
      } else {
        return [...prev, { questionId, selectedOptionId: optionId }];
      }
    });
  };

  const handleContinue = () => {
    if (currentStep === -1) {
      setCurrentStep(0); // move from intro to first question
    } else if (currentStep == 10) {
      console.log("Hello Function");
      submitQuestions();
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const totalQuestions = questionList.length;
  const currentQuestion = questionList[currentStep];

  return (
    <div className="font-poppins relative">
      {/* Progress Bar */}
      {currentStep >= 0 && (
        <div className="w-full h-[6px] bg-[#D9D9D975] mb-3 absolute -top-[26px] z-50">
          <div
            className="h-full bg-[#FFD700] transition-all duration-500"
            style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
          ></div>
        </div>
      )}

      {/* Initial Intro */}
      {currentStep === -1 && (
        <div className="px-5">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1 mt-5">
              <p className="text-[24px] font-medium leading-7">Your money,</p>
              <p className="text-[22px] font-medium leading-7">
                Our responsibility!
              </p>
            </div>
            <div className="">
              <img src={goalMoney.src} className="h-[129px] w-[119px]" />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            {goalsCard?.map((data, index) => (
              <div
                key={index}
                className={`relative  ${
                  goalDetails?.goalType == data?.name
                    ? "border-[2px] border-white rounded-[20px]"
                    : ""
                }`}
                onClick={() => {
                  setGoalDetails({
                    ...goalDetails,
                    goalType: data?.name,
                  });
                }}
              >
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

      {/* Show Questions One at a Time */}
      {currentStep >= 0 && currentQuestion && (
        <div className="mt-5 px-5">
          <p className="text-[13px] font-medium leading-6">
            {currentQuestion?.order}. {currentQuestion?.question}
          </p>
          <div className="flex flex-row gap-3 flex-wrap mt-2">
            {currentQuestion?.options?.map((option, index) => {
              const isSelected = goalQuestionSelect.some(
                (q) =>
                  q.questionId === currentQuestion?.questionId &&
                  q.selectedOptionId === option?.optionId
              );

              return (
                <div
                  key={index}
                  onClick={() =>
                    handleOptionClick(
                      currentQuestion?.questionId,
                      option?.optionId
                    )
                  }
                  className={`border-[1px] rounded-full px-4 py-1 cursor-pointer ${
                    isSelected
                      ? "bg-white text-black border-white"
                      : "text-white border-[#7474744A]"
                  }`}
                >
                  <p className="text-[12px] font-medium leading-6">
                    {option?.option}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Continue Button */}
      <div className="bg-[#1A0120] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full">
        <button
          disabled={
            currentStep >= 0 && !isOptionSelected(currentQuestion?.questionId)
          }
          onClick={handleContinue}
          className={`w-full py-2 rounded-full text-[15px] leading-7 font-medium ${
            (currentStep === -1 && goalDetails?.goalType) ||
            isOptionSelected(currentQuestion?.questionId)
              ? "text-white border-[1px] border-white "
              : "cursor-not-allowed text-[#58465C] border-[1px]  border-[#58465C]"
          }`}
        >
          {currentStep === -1
            ? "Continue"
            : currentStep === totalQuestions - 1
            ? "Finish"
            : `Continue`}
        </button>
      </div>
    </div>
  );
};

export default WealthCard1;
