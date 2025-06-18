import React from "react";
import contactUsImage from "../components/Images/contactus.png";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Brand from "../components/ContactUs/Brand";
import Footer from "../components/MobileLandingPageComponent/Footer";
import LandingNavbar from "../components/LandingComponent/LandingNavbar";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#E19EEE]  ">
      <LandingNavbar />
      <div className="px-5 sm:px-28 pt-10 sm:pt-24">
        <div className="bg-[#551262] flex flex-row justify-between items-center rounded-2xl px-3 sm:px-20">
          <div>
            <p className="text-[18px] sm:text-[34px] font-semibold">
              CONTACT US
            </p>
          </div>
          <div>
            <img src={contactUsImage.src} className="h-[80px] sm:h-[230px]" />
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="my-4 sm:my-10">
            <p className="text-[#551262] text-[23px] sm:text-[33px] font-semibold text-center">
              Help Center
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-6 w-full">
            <div className="bg-[#A90C2B1A] border-[1px] border-[#551262] rounded-2xl flex flex-row w-full sm:w-fit">
              <div className="flex flex-row items-center gap-3 border-r-[1px] border-[#551262] py-3 sm:py-5 px-4 sm:px-8 w-[50%] sm:w-fit">
                <p className="text-[25px] sm:text-[50px] font-bold text-[#551262BF]">
                  01
                </p>
                <span className="flex flex-col">
                  <p className="text-[#551262] text-[12px] sm:text-[23px] font-medium">
                    Aryan Singh
                  </p>
                  <p className="text-[#551262] text-[9px] sm:text-[19px] font-medium">
                    Co-founder
                  </p>
                </span>
              </div>
              <div className="py-3 sm:py-5 px-4 sm:px-8 flex flex-col gap-2 sm:gap-4 w-[50%] sm:w-fit">
                <div className="flex flex-wrap items-center gap-0 sm:gap-2">
                  <MdEmail className="text-[#551262] text-[21px]" />
                  <p className="text-[12px] sm:text-[16px] font-medium text-[#551262] w-fit truncate">
                    aryansingh@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaLinkedin className="text-[#551262] text-[21px]" />
                  <p className="text-[13px] sm:text-[16px] font-medium text-[#551262]">
                    Aryan Singh
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <IoCall className="text-[#551262] text-[21px]" />
                  <p className="text-[13px] sm:text-[16px] font-medium text-[#551262]">
                    +91-98063 37763
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#A90C2B1A] border-[1px] border-[#551262] rounded-2xl flex flex-row w-full sm:w-fit">
              <div className="flex flex-row items-center gap-3 border-r-[1px] border-[#551262] py-3 sm:py-5 px-4 sm:px-8 w-[50%] sm:w-fit">
                <p className="text-[25px] sm:text-[50px] font-bold text-[#551262BF]">
                  02
                </p>
                <span className="flex flex-col">
                  <p className="text-[#551262] text-[12px] sm:text-[23px] font-medium">
                    Urvashi Lakhmani
                  </p>
                  <p className="text-[#551262] text-[9px] sm:text-[19px] font-medium">
                    Co-founder
                  </p>
                </span>
              </div>
              <div className="py-3 sm:py-5 px-4 sm:px-8 flex flex-col gap-2 sm:gap-4 w-[50%] sm:w-fit">
                <div className="flex flex-wrap items-center gap-2">
                  <MdEmail className="text-[#551262] text-[21px]" />
                  <p className="text-[12px] sm:text-[16px] font-medium text-[#551262] w-fit truncate">
                    aryansingh@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaLinkedin className="text-[#551262] text-[21px]" />
                  <p className="text-[13px] sm:text-[16px] font-medium text-[#551262]">
                    Aryan Singh
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <IoCall className="text-[#551262] text-[21px]" />
                  <p className="text-[13px] sm:text-[16px] font-medium text-[#551262]">
                    +91-98063 37763
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 sm:gap-10 mt-6">
            <div className="bg-[#A90C2B1A] border-[1px] border-[#551262] rounded-2xl flex flex-row w-full sm:w-fit">
              <div className="flex flex-row items-center gap-3 border-r-[1px] border-[#551262] py-3 sm:py-5 px-4 sm:px-8 w-[50%] sm:w-fit">
                <p className="text-[25px] sm:text-[50px] font-bold text-[#551262BF]">
                  03
                </p>
                <span className="flex flex-col">
                  <p className="text-[#551262] text-[12px] sm:text-[23px] font-medium">
                    Customer Support
                  </p>
                </span>
              </div>
              <div className="py-3 sm:py-5 px-4 sm:px-8 flex flex-col ap-2 sm:gap-4 w-[50%] sm:w-fit">
                <div className="flex flex-wrap items-center gap-2">
                  <MdEmail className="text-[#551262] text-[21px]" />
                  <p className="text-[12px] sm:text-[16px] font-medium text-[#551262] w-fit truncate">
                    aryansingh@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaLinkedin className="text-[#551262] text-[21px]" />
                  <p className="text-[13px] sm:text-[16px] font-medium text-[#551262]">
                    Aryan Singh
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <IoCall className="text-[#551262] text-[21px]" />
                  <p className="text-[13px] sm:text-[16px] font-medium text-[#551262]">
                    +91-98063 37763
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-[#551262] flex justify-center items-center text-[16px] font-medium px-10 py-3 rounded-[8px]">
                Raise a ticket
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-16">
        <Brand />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
