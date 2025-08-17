import React from "react";
import Aryan from "../../components/Images/founder-image-2-final.jpeg";
import Urvasi from "../../components/Images/founder-image-1-final.jpeg";

const Founder = () => {
  return (
    <div className="flex flex-col gap-5 sm:gap-10 my-10 sm:my-10">
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#FFFFFF] text-[28px] sm:text-[42px] font-semibold">
          Meet The Founders
        </p>
        <p className="text-[#FFFFFFCC] text-[16px] sm:text-[24px] font-medium">
          The Visionaries behind it all
        </p>
      </div>
      <div className="flex  flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10">
        <div className="flex flex-col gap-1">
          <img
            src={Aryan.src}
            alt="founder-1"
            className="h-[290px] w-[250px] sm:h-[400px] sm:w-[330px] rounded-[14px]"
          />
          <p className="text-[#ECE6ED] text-[18px] sm:text-[22px] font-medium">
            Aryan Singh
          </p>
          <p className="text-[#ECE6ED]  text-[16px] sm:text-[18px] font-medium">
            Founder
          </p>
          <p className="text-[#AF7BB6] text-[14px] sm:text-[16px] font-medium">
            <a
              href="https://www.linkedin.com/in/aryansinghofficial28/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline pr-1"
            >
              LinkedIn
            </a>
            |
            <a
              href="mailto:aryan.singh@rupeia.com"
              // href="https://mail.google.com/mail/?view=cm&fs=1&to=aryan.singh@rupeia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline pl-1"
            >
              Email
            </a>{" "}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <img
            src={Urvasi.src}
            alt="founder-2"
            className="h-[290px] w-[250px] sm:h-[400px] sm:w-[330px] rounded-[14px]"
          />
          <p className="text-[#ECE6ED] text-[18px] sm:text-[22px] font-medium">
            Urvashi Lakhmani
          </p>
          <p className="text-[#ECE6ED] text-[16px] sm:text-[18px] font-medium">
            Founder
          </p>
          <p className="text-[#AF7BB6] text-[14px] sm:text-[16px] font-medium">
            <a
              href="https://www.linkedin.com/in/urvashi-lakhmani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline pr-1"
            >
              LinkedIn
            </a>
            |
            <a
              href="mailto:urvashi.lakhmani@rupeia.com"
              // href="https://mail.google.com/mail/?view=cm&fs=1&to=aryan.singh@rupeia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline pl-1"
            >
              Email
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founder;
