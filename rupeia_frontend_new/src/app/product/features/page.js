import React from "react";
import brandImage1 from "../../components/Images/brand1.png";
import brandImage2 from "../../components/Images/brand2.png";

const Page = () => {
  const features = [
    {
      title: "Goals",
      description:
        "It is a long established fact that a reader will be distracted...",
      image: brandImage1, // your image path
      reverse: false,
    },
    {
      title: "Wealth Creation",
      description:
        "It is a long established fact that a reader will be distracted...",
      image: brandImage2,
      reverse: true,
    },
    // Add other features similarly
  ];
  return (
    <div className="bg-[#2e003e] text-white py-10 relative overflow-hidden">
      {/* Animated Ball */}
      <div className="absolute left-[22px] top-0 w-4 h-4 bg-purple-300 rounded-full animate-down"></div>

      <h2 className="text-3xl font-bold px-6 mb-10">Our Features</h2>

      <div className="relative px-6 space-y-24">
        {[
          {
            title: "Goals",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            img: "/goals.png",
          },
          {
            title: "Wealth Creation",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            img: "/wealth.png",
          },
          {
            title: "News",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            img: "/news.png",
          },
          {
            title: "Blogs",
            desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            img: "/blogs.png",
          },
        ].map((feature, idx) => (
          <div key={idx} className="relative flex items-center gap-4">
            {/* Curved connector */}
            <div className="absolute left-[22px] top-[-40px] w-px h-[calc(100%+40px)] border-[3px] border-purple-300 rounded-[50%]"></div>

            {/* Dot */}
            <div className="w-4 h-4 bg-purple-300 rounded-full relative z-10 shrink-0"></div>

            {/* Card */}
            <div className="bg-[#410358] border-[2px] border-purple-300 rounded-[40px] p-6 w-full">
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-purple-200 text-sm">{feature.desc}</p>
              <img
                src={feature.img}
                alt={feature.title}
                className="mt-4 w-[200px] h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
