import React from "react";
import rupeiaLogo from "../../components/Images/rupeia_footer_logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import downLoadRupeia from "../../components/Images/download-rupeia.png";

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
  return (
    <div className="footer-background-color px-28 pt-16 pb-10 flex flex-col gap-5 ">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-6">
          <div>
            <img src={rupeiaLogo.src} className="h-[50px] w-[230px]" />
            <p className="text-[17px] font-medium pl-[75px]">
              Stress Free Investing
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-[16px] font-medium">Follow us on:</p>
            <span className="flex flex-row items-center gap-5">
              <FaInstagram className="text-[32px] text-[#6A6867]" />
              <FaLinkedin className="text-[32px] text-[#6A6867]" />
              <FaTwitter className="text-[32px] text-[#6A6867]" />
            </span>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-20">
          <div>
            <div>
              <p className="text-[18px] font-medium">Home</p>
            </div>
            <div className="flex flex-col gap-[6px] mt-4">
              {homeMenu?.map((data, index) => (
                <div key={index}>
                  <p className="text-[14px] font-medium text-[#ECE6ED]">
                    {data?.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <div>
                <p className="text-[18px] font-medium">Features</p>
              </div>
              <div className="flex flex-col gap-[6px] mt-4">
                {featureMenu?.map((data, index) => (
                  <div key={index}>
                    <p className="text-[14px] font-medium text-[#ECE6ED]">
                      {data?.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[18px] font-medium">News</p>
            </div>
            <div>
              <p className="text-[18px] font-medium">Blogs</p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <div>
                <p className="text-[18px] font-medium">Pricing</p>
              </div>
              <div className="flex flex-col gap-[6px] mt-4">
                <div>
                  <p className="text-[14px] font-medium text-[#ECE6ED]">
                    Our Plans
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="text-[18px] font-medium">Contact Us</p>
              </div>
              <div className="flex flex-col gap-[6px] mt-4">
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
            </div>
          </div>
          <div>
            <div>
              <p className="text-[18px] font-medium">About Us</p>
            </div>
            <div className="flex flex-col gap-[6px] mt-4">
              {aboutUSMenu?.map((data, index) => (
                <div key={index}>
                  <p className="text-[14px] font-medium text-[#ECE6ED]">
                    {data?.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#DBDBDB14] border-[1px] border-[#FFFFFF61] h-fit rounded-3xl p-3">
          <img src={downLoadRupeia.src} className="h-[140px] w-[300px]" />
        </div>
      </div>
      <div className=" border-t-[0.5px] border-b-[0.5px] border-white py-10">
        <div className="flex flex-row justify-between">
          <div>
            <p className="text-[16px] font-medium">
              Mutual Fund Distributor ARN: ARN-320744
            </p>
            <p className="text-[16px] font-medium">
              SEBI Registration Type: Mutual Fund Distributor{" "}
            </p>
            <p className="text-[16px] font-medium">
              Registered Entity Name: Finaure Venture Private Limited
            </p>
            <span className="flex items-center gap-2">
              <span className="text-[16px] font-medium">CIN:</span>
              <span className="text-[13px] font-medium text-gray-300">
                U66301UP024PTC209531
              </span>
            </span>
          </div>
          <div>
            <p className="text-[16px] font-medium text-right ">
              Support Office Email: support@rupeia.in
            </p>
            <p className="text-[16px] font-medium text-right">
              Grievance Redressal Email: grievance@rupeia.in
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-12 mt-5">
          <p className="text-[16px] font-medium">Privacy Policy</p>
          <p className="text-[16px] font-medium">Terms of use</p>
        </div>
      </div>
      <div>
        <p className="text-[15px] font-medium text-center">©Copyright 2025 rupeia.com All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
