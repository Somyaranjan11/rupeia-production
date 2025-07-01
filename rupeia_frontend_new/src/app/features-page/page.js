import React from "react";
import featuresVector from "../components/Images/features-page-vector-image.png";
import featuresVectorMobile from "../components/Images/features-mobile-image.png";
import Footer from "../components/MobileLandingPageComponent/Footer";
import Benifit1 from "../components/Images/benifit1.png";
import Benifit2 from "../components/Images/benifit2.png";
import Benifit3 from "../components/Images/benifit3.png";
import Benifit4 from "../components/Images/benifit4.png";
import Benifit5 from "../components/Images/benifit5.png";
import Benifit6 from "../components/Images/benifits6.png";
import cardImage from "../components/Images/card-bg-image.png";
import LandingNavbar from "../components/LandingComponent/LandingNavbar";

const Page = () => {
  const benifitData = [
    {
      id: 1,
      image: Benifit1,
      heading: "Best funds, handpicked for you",
      desc: "We remove the guesswork by choosing top-performing funds that grow your money smarter.",
    },
    {
      id: 2,
      image: Benifit2,
      heading: "24/7 monitoring",
      desc: "Your investments are watched round-the-clock, so you’re always in control and prepared.",
    },
    {
      id: 3,
      image: Benifit3,
      heading: "Pulse – market insights in real-time",
      desc: "We keep you ahead by analyzing trends and telling you exactly what to do next.",
    },
    {
      id: 4,
      image: Benifit4,
      heading: "Expert guidance when you need it",
      desc: "Our financial experts simplify decisions and help you reach your goals faster.",
    },
    {
      id: 5,
      image: Benifit5,
      heading: "24/7 monitoring",
      desc: "During market drops, we automatically adjust your portfolio to protect and grow your wealth.",
    },
     {
      id: 5,
      image: Benifit6,
      heading: "Dedicated Investment Manager",
      desc: "Stay stress-free with a Dedicated Manager who handles your investments while you focus on your job.",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-[#350040] gap-8  sm:gap-16">
      <LandingNavbar />
      <div className="px-5 sm:px-28">
        <div className="py-3 sm:py-5">
          <p className="text-[36px] sm:text-[64px] text-[#AF7BB6] text-center font-medium tracking-wide">
            Our Features
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <img
            src={featuresVector.src}
            alt="features-page"
            className="h-[500px] sm:h-[900px] w-full sm:w-[65%] pl-5 hidden sm:block"
          />
          <img
            src={featuresVectorMobile.src}
            alt="features-page"
            className="h-[500px] sm:h-[900px] w-full sm:w-[65%] pl-5 block sm:hidden"
          />
        </div>
      </div>
      <div className="w-full px-3 sm:px-28">
        <div>
          <p className="text-[48px] sm:text-[75px] my-5 text-center font-semibold bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent">
            Benefits
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-14 w-full">
          {benifitData?.map((data, index) => (
            <div
              key={index}
              className="features-card border-[1px] border-[#FFFFFF61] w-[47%] sm:w-[350px] h-[250px] sm:h-fit rounded-3xl"
            >
              <div className="flex justify-center items-center p-4 sm:p-7">
                <img
                  src={data.image.src}
                  className="h-[76px] sm:h-[120px] w-[80px] sm:w-[150px]"
                />
              </div>
              <div className="relative">
                <img
                  src={cardImage.src}
                  className="h-[45px] sm:h-[65px] w-full "
                />
                <p className="text-[#ECE6ED] text-[10px] sm:text-[18px] font-medium text-center absolute inset-0 flex items-center justify-center bg-opacity-40 flex-col gap-3 px-4">
                  {data?.heading}
                </p>
              </div>
              <div className="px-4 sm:px-12 pt-4 pb-8">
                <p className="text-[#ECE6ED] text-[10px] sm:text-[16px] font-medium text-center">
                  {data?.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
