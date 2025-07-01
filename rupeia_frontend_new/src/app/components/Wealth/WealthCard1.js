import axios from "axios";
import React, { useEffect, useState } from "react";

const WealthCard1 = ({ setGoalQuestionSelect, goalQuestionSelect }) => {
  const [goalQuestions, setGoalQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/profile-questions`
      );
      setGoalQuestions(response?.data?.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  console.log("goalQuestions", goalQuestions);
  console.log("goalQuestionSelect", goalQuestionSelect);
  return (
    <div className="font-poppins">
      <p className="text-[13px] font-medium pr-10">
        Let’s start with a few quick questions to get to know you better
      </p>
      <div>
        {goalQuestions?.risk?.map((data, index) => (
          <div className="flex flex-col gap-1 mt-4" key={index}>
            <p className="text-[13px] font-medium leading-6">
              {data?.order}. {data?.question}
            </p>
            <div className="flex flex-row gap-3 flex-wrap">
              {data?.options?.map((item, index) => (
                <div
                  className={`border-[1px] rounded-full border-[#7474744A] px-4 py-1 cursor-pointer ${
                    goalQuestionSelect.find(
                      (q) =>
                        q.questionId === data?.questionId &&
                        q.selectedOptionId === item?.optionId
                    )
                      ? "bg-white text-[#000000]" // Selected
                      : "text-white " // Not selected
                  }`}
                  key={index}
                  onClick={() => {
                    setGoalQuestionSelect((prev) => {
                      const exists = prev.find(
                        (q) => q.questionId === data?.questionId
                      );
                      if (exists) {
                        // Update existing question's selectedOptionId
                        return prev.map((q) =>
                          q.questionId === data?.questionId
                            ? { ...q, selectedOptionId: item?.optionId }
                            : q
                        );
                      } else {
                        // Add new question with selectedOptionId
                        return [
                          ...prev,
                          {
                            questionId: data?.questionId,
                            selectedOptionId: item?.optionId,
                          },
                        ];
                      }
                    });
                  }}
                >
                  <p className="text-[12px] font-medium leading-6">
                    {item?.option}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        {goalQuestions?.emotional?.map((data, index) => (
          <div className="flex flex-col gap-1 mt-4" key={index}>
            <p className="text-[13px] font-medium leading-6">
              {data?.order}. {data?.question}
            </p>
            <div className="flex flex-row gap-3 flex-wrap">
              {data?.options?.map((item, index) => (
                <div
                  className={`border-[1px] rounded-full border-[#7474744A] px-4 py-1 cursor-pointer ${
                    goalQuestionSelect.find(
                      (q) =>
                        q.questionId === data?.questionId &&
                        q.selectedOptionId === item?.optionId
                    )
                      ? "bg-white text-[#000000]" // Selected
                      : "text-white " // Not selected
                  }`}
                  key={index}
                  onClick={() => {
                    setGoalQuestionSelect((prev) => {
                      const exists = prev.find(
                        (q) => q.questionId === data?.questionId
                      );
                      if (exists) {
                        // Update existing question's selectedOptionId
                        return prev.map((q) =>
                          q.questionId === data?.questionId
                            ? { ...q, selectedOptionId: item?.optionId }
                            : q
                        );
                      } else {
                        // Add new question with selectedOptionId
                        return [
                          ...prev,
                          {
                            questionId: data?.questionId,
                            selectedOptionId: item?.optionId,
                          },
                        ];
                      }
                    });
                  }}
                >
                  <p className="text-[12px] font-medium leading-6">
                    {item?.option}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WealthCard1;
