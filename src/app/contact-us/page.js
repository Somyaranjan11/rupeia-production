"use client";
import React, { useState } from "react";
import contactUsImage from "../components/Images/contactus.png";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Brand from "../components/ContactUs/Brand";
import Footer from "../components/MobileLandingPageComponent/Footer";
import LandingNavbar from "../components/LandingComponent/LandingNavbar";
import RaiseTicket from "../components/ContactUs/RaiseTicket";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closePopUp = () => {
    setIsOpen(false);
  };
  const openPopUp = () => {
    setIsQRCodeOpen(true);
  };
  return (
    <div className="min-h-screen flex flex-col bg-[#350040]  ">
      <LandingNavbar />
      <div className="px-5 sm:px-28 pt-10 sm:pt-24">
        <div className="bg-[#551262] flex flex-row justify-between items-center rounded-2xl px-3 sm:px-20">
          <div>
            <p className="text-[18px] sm:text-[42px] font-semibold">
              CONTACT US
            </p>
          </div>
          <div>
            <img src={contactUsImage.src} className="h-[80px] sm:h-[230px]" />
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="my-4 sm:my-10">
            <p className="text-white text-[23px] sm:text-[42px] font-semibold text-center">
              Help Center
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-6 w-full">
            <div className="bg-[#270330] border-[1px] border-[#FFFFFF] rounded-2xl flex flex-row w-full sm:w-fit">
              <div className="flex flex-row items-center gap-3 border-r-[1px] border-[#551262] py-3 sm:py-5 px-4 sm:px-8 w-[50%] sm:w-fit">
                <p className="text-[25px] sm:text-[50px] font-bold text-white">
                  01
                </p>
                <span className="flex flex-col">
                  <p className="text-white text-[12px] sm:text-[23px] font-medium">
                    Aryan Singh
                  </p>
                  <p className="text-white text-[9px] sm:text-[19px] font-medium">
                    Co-founder
                  </p>
                </span>
              </div>
              <div className="py-3 sm:py-5 px-4 sm:px-8 flex flex-col gap-2 sm:gap-4 w-[50%] sm:w-fit">
                <div className="flex flex-wrap items-center gap-0 sm:gap-2">
                  <MdEmail className="text-white text-[21px]" />
                  <p className="text-[12px] sm:text-[16px] font-medium text-white w-fit truncate">
                    aryansingh@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaLinkedin className="text-white text-[21px]" />
                  <p className="text-[13px] sm:text-[16px] font-medium text-white">
                    Aryan Singh
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <IoCall className="text-white text-[21px]" />
                  <p className="text-[13px] sm:text-[16px] font-medium text-white">
                    +91-98063 37763
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#270330] border-[1px] border-[#FFFFFF] rounded-2xl flex flex-row w-full sm:w-fit">
              <div className="flex flex-row items-center gap-3 border-r-[1px] border-[#551262] py-3 sm:py-5 px-4 sm:px-8 w-[50%] sm:w-fit">
                <p className="text-[25px] sm:text-[50px] font-bold text-white">
                  02
                </p>
                <span className="flex flex-col">
                  <p className="text-white text-[12px] sm:text-[23px] font-medium">
                    Urvashi Lakhmani
                  </p>
                  <p className="text-white text-[9px] sm:text-[19px] font-medium">
                    Co-founder
                  </p>
                </span>
              </div>
              <div className="py-3 sm:py-5 px-4 sm:px-8 flex flex-col gap-2 sm:gap-4 w-[50%] sm:w-fit">
                <div className="flex flex-wrap items-center gap-2">
                  <MdEmail className="text-white text-[21px]" />
                  <p className="text-[12px] sm:text-[16px] font-medium text-white w-fit truncate">
                    aryansingh@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaLinkedin className="text-white text-[21px]" />
                  <p className="text-[13px] sm:text-[16px] font-medium text-white">
                    Aryan Singh
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <IoCall className="text-white text-[21px]" />
                  <p className="text-[13px] sm:text-[16px] font-medium text-white">
                    +91-98063 37763
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 sm:gap-10 mt-6">
            <div className="bg-[#270330] border-[1px] border-[#FFFFFF] rounded-2xl flex flex-row w-full sm:w-fit">
              <div className="flex flex-row items-center gap-3 border-r-[1px] border-[#551262] py-3 sm:py-5 px-4 sm:px-8 w-[50%] sm:w-fit">
                <p className="text-[25px] sm:text-[50px] font-bold text-white">
                  03
                </p>
                <span className="flex flex-col">
                  <p className="text-white text-[12px] sm:text-[23px] font-medium">
                    Customer Support
                  </p>
                </span>
              </div>
              <div className="py-3 sm:py-5 px-4 sm:px-8 flex flex-col ap-2 sm:gap-4 w-[50%] sm:w-fit">
                <div className="flex flex-wrap items-center gap-2">
                  <MdEmail className="text-white text-[21px]" />
                  <p className="text-[12px] sm:text-[16px] font-medium text-white w-fit truncate">
                    aryansingh@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <FaLinkedin className="text-white text-[21px]" />
                  <p className="text-[13px] sm:text-[16px] font-medium text-white">
                    Aryan Singh
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <IoCall className="text-white text-[21px]" />
                  <p className="text-[13px] sm:text-[16px] font-medium text-white">
                    +91-98063 37763
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button
                className="bg-[#551262] cursor-pointer flex justify-center items-center text-[18px] font-semibold px-10 py-3 rounded-[8px]"
                type="button"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
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
      {isOpen && <RaiseTicket closePopUp={closePopUp} />}
    </div>
  );
};

export default Page;
