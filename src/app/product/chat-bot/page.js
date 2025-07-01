"use client"
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { IoRefresh } from "react-icons/io5";
import { MdSend } from "react-icons/md";

const Page = () => {
  const pageContent = [
    {
      id: 1,
      content:
        "I want a 13-inch model of Ipad Air 2025 with 2732 x 2048 pixels resolution at 264 ppi​",
      reply: true,
    },
    {
      id: 2,
      content:
        "Thank you for confirming the specifications. Can you tell me a bit more about the storage capacity you want?",
      reply: false,
    },
    {
      id: 1,
      content: "I want the 256GB storage option in Silver colour​",
      reply: true,
    },
    {
      id: 2,
      content:
        "Thank you for confirming the specifications. Can you tell me a bit more about the storage capacity you want?",
      reply: false,
    },
    {
      id: 1,
      content: "I want the 256GB storage option in Silver colour​",
      reply: true,
    },
    {
      id: 2,
      content:
        "Thank you for confirming the specifications. Can you tell me a bit more about the storage capacity you want?",
      reply: false,
    },
    {
      id: 1,
      content: "I want the 256GB storage option in Silver colour bib​",
      reply: true,
    },
  ];
  return (
    <div className="overflow-hidden h-full flex flex-col">
      <div className="flex items-center justify-between mt-4 px-5">
        <div
          className="rounded-full border-[1px] bg-[#551262D4] border-[#794083] h-[50px] w-[50px] flex justify-center items-center"
          onClick={() => {
            console.log("helo");
          }}
        >
          <BsArrowLeftShort className="text-[29px]" />
        </div>
        <div>
          <p className="text-[16px] leading-7 font-semibold text-black">
            AI Assistant
          </p>
        </div>
        <div
          className="rounded-full border-[1px] bg-[#551262D4] border-[#794083] h-[50px] w-[50px] flex justify-center items-center"
          onClick={() => {
            console.log("helo");
          }}
        >
          <IoRefresh className="text-[29px]" />
        </div>
      </div>
      <div className="border-[2px] border-[#A6A5A5] rounded-4xl mt-5 h-full p-5 overflow-y-auto flex flex-col">
        <div className="flex flex-col gap-4 pb-[90px]">
          {pageContent?.map((data, index) => (
            <div
              className={`w-full flex  ${
                data?.reply ? "justify-end" : "justify-items-start"
              }`}
              key={index}
            >
              <div
                className={` rounded-3xl  py-3 ${
                  data?.reply ? "bg-[#F3F3F3] w-[207px] px-4 " : " w-full pr-10"
                }`}
              >
                <p className="text-[#000000] text-[13px] font-normal leading-5">
                  {data?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="border-[1px] bg-white border-[#65636394] h-[90px] fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[calc(100%)] rounded-4xl px-5 flex   gap-2 pt-3">
          <input
            type="text"
            placeholder="Describe your Gadget of choice..."
            className="text-[#666666] text-[13px] font-medium w-full h-9 rounded-4xl focus:outline-none px-1"
          />
          <div
            className="rounded-full border-[1px] bg-[#551262D4] border-[#794083] h-[28px] w-[28px] flex justify-center items-center p-1.5"
            onClick={() => {
              console.log("helo");
            }}
          >
            <MdSend className="text-[23px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
