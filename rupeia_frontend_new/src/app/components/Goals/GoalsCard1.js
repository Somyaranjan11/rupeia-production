import axios from "axios";
import React, { useEffect, useState } from "react";
import AnimateLoader from "../Loader/AnimateLoader";

const GoalsCard1 = ({ setGoalDetails, goalDetails }) => {
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
  console.log("goalCategory", goalCategory);
  return (
    <div className="font-poppins">
      <p className="text-[13px] font-medium pr-10 text-white">
        You’re just two steps away from making your goals a reality!
      </p>
      <div className="flex flex-col gap-1 mt-4">
        <p className="text-[13px] font-medium leading-6">
          1. Please select any one type
        </p>
        {loading ? (
          <AnimateLoader count={2} />
        ) : (
          <div className="flex flex-row gap-3 flex-wrap">
            {goalCategory?.map((data, index) => (
              <div
                className={` border-[1px] border-[#7474744A] rounded-full px-4 py-1 ${
                  goalDetails?.goalId == data?.goalId
                    ? "bg-white text-[#000000]"
                    : "text-white"
                }`}
                key={index}
                onClick={() => {
                  setGoalDetails({
                    ...goalDetails,
                    goalId: data?.goalId,
                    goalTitle: data?.goalType,
                  });
                }}
              >
                <p className="text-[12px] font-medium leading-6">
                  {data?.goalType}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-1 px-3 pr-25">
          <input
            type="text"
            placeholder="Describe your goal..."
            className="border-b-[1px] border-[#FFFFFFA6] w-full h-9 text-[13px] focus:outline-none text-[#FFFFFFA6]"
          />
        </div>
      </div>
    </div>
  );
};

export default GoalsCard1;
