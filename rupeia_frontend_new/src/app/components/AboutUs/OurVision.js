import React from "react";
import visionImage from "../../components/Images/aboutus-vision.png";

const OurVision = () => {
  return (
    <div className="relative h-[250px] sm:h-[350px] w-full sm:w-[60%] mx-auto px-4 sm:px-28">
      {/* Background Image */}
      <img src={visionImage.src} alt="Our Vision" className="w-full h-full" />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-40 flex-col gap-3">
        <h2 className="text-white text-[30px] sm:text-[35px] md:text-[40px] font-bold text-center px-4 uppercase">
          Our Vision
        </h2>
        <p className="text-white text-[13px] sm:text-[15px] px-8 sm:px-36 text-center">
          We leverage a vast global network of audited manufacturers, many of
          whom we have a long-standing relationship with, to provide tailored
          sourcing solutions that meet the specific needs of our partners.
        </p>
      </div>
    </div>
  );
};

export default OurVision;
