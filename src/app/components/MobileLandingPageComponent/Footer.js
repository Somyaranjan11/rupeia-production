"use client";
import React, { useState } from "react";
import rupeiaLogo from "../../components/Images/rupeia_footer_logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import downLoadRupeia from "../../components/Images/download-rupeia.png";
import { FaAngleDown } from "react-icons/fa6";

const Footer = () => {
  const homeMenu = [
    {
      id: 1,
      name: "How it works",
    },
    {
      id: 2,
      name: "Goals ",
    },
    {
      id: 3,
      name: "Wealth+",
    },
    {
      id: 4,
      name: "Calculator",
    },
    {
      id: 5,
      name: "Testimonials",
    },
    {
      id: 6,
      name: "Our Partners",
    },
    {
      id: 7,
      name: "FAQs",
    },
  ];
  const featureMenu = [
    {
      id: 1,
      name: "Our Features",
    },
    {
      id: 2,
      name: "Benefits",
    },
  ];
  const aboutUSMenu = [
    {
      id: 1,
      name: "Our Vision",
    },
    {
      id: 2,
      name: "Founders",
    },
    {
      id: 3,
      name: "Our Values",
    },
  ];
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  return (
    <div className="footer-background-color px-5 sm:px-28 pt-10 sm:pt-16 pb-10 flex flex-col gap-5 ">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col gap-3 sm:gap-6">
          <div>
            <img src={rupeiaLogo.src} className="h-[50px] w-[230px]" />
            <p className="text-[18px] font-medium pl-[75px] text-white">
              Stress Free Investing
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:gap-4 ">
            <p className="text-[18px] font-medium text-white">Follow us on:</p>
            <span className="flex flex-row items-center gap-5">
              <FaInstagram className="text-[32px] text-[#A4A1A0]" />
              <FaLinkedin className="text-[32px] text-[#A4A1A0]" />
              <FaTwitter className="text-[32px] text-[#A4A1A0]" />
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-20 mt-3 sm:mt-0">
          <div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] sm:text-[18px] font-medium text-white">Home</p>
              <span
                className="block sm:hidden"
                onClick={() => {
                  setIsOptionOpen(!isOptionOpen);
                }}
              >
                <FaAngleDown className="text-white"/>
              </span>
            </div>
            <div className=" flex-col gap-[6px] mt-4 hidden sm:flex">
              {homeMenu?.map((data, index) => (
                <div key={index}>
                  <p className="text-[14px] font-medium text-[#ECE6ED]">
                    {data?.name}
                  </p>
                </div>
              ))}
            </div>

            {isOptionOpen && (
              <div className=" flex-col gap-[6px] mt-4 flex sm:hidden ">
                {homeMenu?.map((data, index) => (
                  <div key={index}>
                    <p className="text-[14px] font-medium text-[#ECE6ED]">
                      {data?.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] sm:text-[18px] font-medium text-white">
                  Features
                </p>
                <span
                  className="block sm:hidden"
                  onClick={() => {
                    setIsOptionOpen(!isOptionOpen);
                  }}
                >
                  <FaAngleDown className="text-white" />
                </span>
              </div>
              <div className="flex-col gap-[6px] mt-4  hidden sm:flex">
                {featureMenu?.map((data, index) => (
                  <div key={index}>
                    <p className="text-[14px] font-medium text-[#ECE6ED]">
                      {data?.name}
                    </p>
                  </div>
                ))}
              </div>
              {isOptionOpen && (
                <div className="flex-col gap-[6px] mt-4 flex sm:hidden ">
                  {featureMenu?.map((data, index) => (
                    <div key={index}>
                      <p className="text-[14px] font-medium text-[#ECE6ED]">
                        {data?.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] sm:text-[18px] font-medium text-white">News</p>
              <span className="block sm:hidden">
                <FaAngleDown className="text-white" />
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] sm:text-[18px] font-medium text-white">Blogs</p>
              <span className="block sm:hidden">
                <FaAngleDown className="text-white" />
              </span>
            </div>
          </div>
          <div className="flex flex-col  gap-3 sm:gap-8">
            <div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] sm:text-[18px] font-medium text-white">
                  Pricing
                </p>
                <span
                  className="block sm:hidden"
                  onClick={() => {
                    setIsOptionOpen(!isOptionOpen);
                  }}
                >
                  <FaAngleDown className="text-white" />
                </span>
              </div>
              <div className="hidden flex-col gap-[6px] mt-4 sm:flex">
                <div>
                  <p className="text-[14px] font-medium text-[#ECE6ED]">
                    Our Plans
                  </p>
                </div>
              </div>
              {isOptionOpen && (
                <div className="flex-col gap-[6px] mt-4 flex sm:hidden">
                  <div>
                    <p className="text-[14px] font-medium text-[#ECE6ED]">
                      Our Plans
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p className="text-[16px] sm:text-[18px] font-medium text-white">
                  Contact Us
                </p>
                <span
                  className="block sm:hidden"
                  onClick={() => {
                    setIsOptionOpen(!isOptionOpen);
                  }}
                >
                  <FaAngleDown className="text-white" />
                </span>
              </div>
              <div className="flex-col gap-[6px] mt-4 hidden sm:flex">
                <div>
                  <p className="text-[14px] font-medium text-[#ECE6ED]">
                    Help center
                  </p>
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#ECE6ED]">
                    Our Partners
                  </p>
                </div>
              </div>
              {isOptionOpen && (
                <div className="flex-col gap-[6px] mt-4 flex sm:hidden">
                  <div>
                    <p className="text-[14px] font-medium text-[#ECE6ED]">
                      Help center
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[#ECE6ED]">
                      Our Partners
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <p className="text-[16px] sm:text-[18px] font-medium text-white">About Us</p>
              <span
                className="block sm:hidden"
                onClick={() => {
                  setIsOptionOpen(!isOptionOpen);
                }}
              >
                <FaAngleDown className="text-white" />
              </span>
            </div>
            <div className="flex-col gap-[6px] mt-4 hidden sm:flex">
              {aboutUSMenu?.map((data, index) => (
                <div key={index}>
                  <p className="text-[14px] font-medium text-[#ECE6ED]">
                    {data?.name}
                  </p>
                </div>
              ))}
            </div>
            {isOptionOpen && (
              <div className="flex sm:hidden flex-col gap-[6px] mt-4 ">
                {aboutUSMenu?.map((data, index) => (
                  <div key={index}>
                    <p className="text-[14px] font-medium text-[#ECE6ED]">
                      {data?.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="bg-[#DBDBDB14] border-[1px] border-[#FFFFFF61] h-fit rounded-3xl p-3 hidden sm:block">
          <img src={downLoadRupeia.src} className="h-[120px] w-[260px]" />
        </div>
      </div>
      <div className=" border-t-[0.5px] border-b-[0.5px] border-white py-10">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col gap-[6px]">
            <p className=" text-[13px] sm:text-[16px] font-medium text-white">
              Mutual Fund Distributor ARN: ARN-320744
            </p>
            <p className=" text-[13px] sm:text-[16px] font-medium text-white">
              SEBI Registration Type: Mutual Fund Distributor{" "}
            </p>
            <p className=" text-[13px] sm:text-[16px] font-medium text-white">
              Registered Entity Name: Finaure Venture Private Limited
            </p>
            <span className="flex items-center gap-2">
              <span className=" text-[13px] sm:text-[16px] font-medium text-white">
                CIN:
              </span>
              <span className="text-[13px] font-medium text-white text-gray-300">
                U66301UP024PTC209531
              </span>
            </span>
          </div>
          <div className="flex flex-col gap-[6px]">
            <p className=" text-[13px] sm:text-[16px] font-medium text-white text-left sm:text-right ">
              Support Office Email: support@rupeia.in
            </p>
            <p className=" text-[13px] sm:text-[16px] font-medium text-white text-left sm:text-right ">
              Grievance Redressal Email: grievance@rupeia.in
            </p>
          </div>
        </div>
        <div className="flex justify-between sm:justify-end sm:gap-12 mt-5">
          <p className=" text-[13px] sm:text-[16px] font-medium text-white">
            Privacy Policy
          </p>
          <p className=" text-[13px] sm:text-[16px] font-medium text-white">
            Terms of use
          </p>
        </div>
      </div>
      <div>
        <p className="text-[12px] sm:text-[15px] font-medium text-white text-center">
          ©Copyright 2025 rupeia.com All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
