"use client";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const Page = () => {
  const router = useRouter();
  const [pageStep, setPageStep] = useState(1);
  const type = [
    { id: 1, name: "Phones" },
    { id: 2, name: "Laptops" },
    { id: 3, name: "Tablets" },
    { id: 4, name: "Vechiles" },

    { id: 5, name: "College" },
    { id: 6, name: "Others" },
    { id: 7, name: "Phones" },
    { id: 8, name: "Tablets" },
    { id: 9, name: "Phones" },
    { id: 10, name: "Mobiles" },
  ];
  const handleClick = () => {
    console.log("helo");
  };
  return (
    <div className="font-poppins flex flex-col h-screen overflow-hidden">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Blogs"} handleClick={handleClick} />
      </div>
      <div className="flex-grow h-fit px-5 pt-20 ">
        <div className="pr-16">
          <p className="text-[35px] font-semibold leading-16">Hi!</p>
          <span className="flex flex-row flex-wrap text-[16px] font-semibold items-center gap-1">
            I am your <p className="text-[#D9B9E2]">Blogs Manager ,</p> I will
            help you find The blogs of your choice
          </span>
        </div>
        <div className="mt-2 mb-2 h-full">
          <div className="font-poppins">
            <p className="text-[13px] font-medium pr-10">
              Please tell me about the type of goal you are looking for
            </p>
            <div className="flex flex-col gap-2 mt-3">
              <p className="text-[13px] font-medium leading-6">
                1. Please select the type
              </p>
              <div className="grid grid-cols-3 gap-3">
                {type?.map((data, index) => (
                  <div
                    className="text-white border-[1px] border-[#7474744A] rounded-full px-4 py-1"
                    key={index}
                  >
                    <p className="text-[12px] font-medium leading-6">
                      {data?.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-1">
            <input
              type="text"
              placeholder="Describe the news of your choice..."
              className="border-b-[1px] border-[#FFFFFFA6] w-full h-9 text-[13px] focus:outline-none"
            />
          </div>
        </div>
      </div>

      <button
        className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#551262] w-full max-w-[calc(100%-64px)] py-2 rounded-full text-[15px] leading-7 font-medium text-white"
        type="button"
        onClick={() => {
          router.push("/product/blogs/content");
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Page;
