import React from "react";
import Value1 from "../../components/Images/value1.png";
import Value2 from "../../components/Images/value2.png";
import Value3 from "../../components/Images/value3.png";
import Value4 from "../../components/Images/value4.png";
import Value5 from "../../components/Images/value5.png";
import Value6 from "../../components/Images/value6.png";

const OurValue = () => {
  const dummyValueData = [
    {
      id: 1,
      name: "Trust is the Foundation",
      desc: "We’re not just building an app we’re building confidence. Every decision we make is rooted in honesty, transparency, and the long-term interest of our users.",
      image: Value1,
    },
    {
      id: 2,
      name: "Simplicity Above All",
      desc: "Finance shouldn’t be overwhelming. From onboarding to investment tracking, we simplify every step so users feel in control, not confused.",
      image: Value2,
    },
    {
      id: 3,
      name: " Personalized, Not Generic",
      desc: "No two financial journeys are alike. Our stress-free plans are crafted from real user data and insights, ensuring each recommendation feels tailored and relevant.",
      image: Value3,
    },
    {
      id: 4,
      name: "Education Empowers",
      desc: "We believe in informed choices. That’s why we don’t just tell users what to do we help them understand the why behind every financial move.",
      image: Value4,
    },
    {
      id: 5,
      name: "Accountability Drive us",
      desc: "We take ownership of every feature, outcome, and experience. If it’s in the product, we  stand by it.",
      image: Value5,
    },
    {
      id: 6,
      name: "Built for the Long Run",
      desc: "Rupeia isn’t about quick wins. We help users stay committed, disciplined, and focused on long-term wealth creation through consistent, smart investing.",
      image: Value6,
    },
  ];
  return (
    <div className="px-4 sm:px-28 py-5 sm:py-10 flex flex-col gap-5 sm:gap-10 ">
      <div>
        <p className="text-[#FFFFFF] text-[25px] sm:text-[40px] font-medium text-center">
          The Values That Drive Us
        </p>
      </div>
      <div className="flex flex-row gap-3 sm:gap-7 sm:flex-wrap justify-start sm:justify-center items-center overflow-x-auto ">
        {dummyValueData?.map((data, index) => (
          <div
            key={index}
            className="p-4 sm:p-10 bg-[#D9D9D9] min-w-[270px] sm:min-w-0 sm:w-[400px] h-[260px] flex gap-2 justify-center items-center flex-col rounded-3xl"
          >
            <img src={data?.image.src} className="h-[70x] w-[70px]" />
            <p className="text-[#5D20D2] text-[16px] sm:text-[20px] font-semibold">
              {data?.name}
            </p>
            <p className="text-[#551262] text-[12px] sm:text-[14px] font-normal text-center">
              {data?.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValue;
