import React from "react";
import profileImage from "../../components/Images/review_profile.png";
import Testimonial1 from "../Images/Testimonials/testimonails1.jpeg";
import Testimonial2 from "../Images/Testimonials/testimonails2.jpeg";
import Testimonial3 from "../Images/Testimonials/testimonails3.jpeg";
import Testimonial4 from "../Images/Testimonials/testimonails4.jpeg";
import Testimonial5 from "../Images/Testimonials/testimonails5.jpeg";
import Testimonial6 from "../Images/Testimonials/testimonails6.jpeg";
import Testimonial7 from "../Images/Testimonials/testimonails7.jpg";

const CustomerReview = () => {
  const customerReview = [
    {
      id: 1,
      content:
        "Rupeia helped me plan my exit from investments. They made a simple plan, showed tax tips, and told me when to sell. I know when to buy but when it comes to selling, I was not confident.",
      name: "Shobhit Shukla",
      details_1: "Data Scientist",
      image: Testimonial7,
    },
    {
      id: 1,
      content:
        "One-tab rebalancing is awesome. I see all holdings in one place, get research-backed picks, and can rebalance with one click. Saves time and stress for busy people.",
      name: "Nikunj Aggarwal",
      details_1: "Software Developer",
      image: Testimonial1,
    },
    {
      id: 2,
      content:
        "Connecting with my manager is simple. I schedule a call, get quick clear answers, and see my portfolio explained in plain words.",
      name: "Swastik Basak",
      details_1: "Product Designer",
      image: Testimonial2,
    },
    {
      id: 3,
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      name: "Anurag Jha",
      details_1: "Business(Pharma)",
      image: Testimonial3,
    },
    {
      id: 4,
      content:
        "Rupeia showed me how to spread my money across funds. They suggested how much percentage to keep mid/large/flexi, explained risks, and made the choice easy for my goals, for me.",
      name: "Riddhi Tripathi",
      details_1: "Software Developer",
      image: Testimonial4,
    },
    {
      id: 5,
      content:
        "I got my risk score and a list of best funds that fit me. They matched choices to my comfort level and goals, making picking funds tension free and simple.",
      name: "Ishani Chaturvedi",
      details_1: "Pursuing MBBS",
      image: Testimonial5,
    },
    {
      id: 6,
      content:
        "Rupeia made a clear plan for my dream car. They broke targets into small SIPs, showed timelines, and tracked progress. I feel motivated and on track.",
      name: "Anjali Tripathi",
      details_1: "Fashion Designer",
      image: Testimonial6,
    },
  ];
  return (
    <div className="px-5 pb-20">
      <p className="text-[28px] sm:text-[42px] my-10 sm:my-16 text-center font-medium sm:font-semibold  text-white">
        Meet the people we’ve helped.
      </p>
      <div className="w-full flex overflow-x-auto hide-scrollbar">
        <div className="flex gap-12 px-2 animate-testimonialScroll ">
          {customerReview?.map((data, index) => (
            <div
              key={index}
              className="h-[360px] sm:h-[400px] min-w-[300px] sm:min-w-0 sm:w-[380px] bg-[#D9D9D914] border border-[#FFFFFF61] px-5 sm:px-8 py-5 sm:py-7 gap-5 rounded-[40px] flex  items-center flex-col"
            >
              <div className="h-[100px] w-[100px]  flex justify-center items-center rounded-full ">
                <img
                  src={data?.image.src}
                  className="rounded-full h-[100px] w-[100px] border-[1px] border-[#FFFFFF61]"
                />
              </div>
              <div className="flex justify-between flex-col h-full">
                <p className="text-[14px] sm:text-[17px] text-white font-medium text-left">
                  {data?.content}
                </p>
                <div className="flex flex-col gap-[0.5px] w-full">
                  <p className="text-[14px] sm:text-[16px]  bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent font-bold">
                    {data?.name}
                  </p>
                  <p className="text-[14px] sm:text-[16px]  bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent font-bold">
                    {data?.details_1}
                  </p>
                  <p className="hidden text-[14px] sm:text-[16px]  bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent font-bold">
                    {data?.details_2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
