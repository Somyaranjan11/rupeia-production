"use client";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const FAQS = () => {
  const faqs_question = [
    {
      id: 1,
      question:
        "It is a long established fact that a reader will be distracted by the readable?",
      answer:
        "Pharmaceuticals are characterized by several analytical techniques to confirm their identitfy and describe their quality. Purity, potency, and assay are common approaches used to quantify how much of an active pharmaceutical ingredient (API) is in a drug substance, but what do these values actually tell us? Each of these results is determined by different factors, and it is important to understand the differences between them and the limitations of each approach.",
    },
    {
      id: 2,
      question:
        "It is a long established fact that a reader will be distracted by the readable?",
      answer:
        "Pharmaceuticals are characterized by several analytical techniques to confirm their identitfy and describe their quality. Purity, potency, and assay are common approaches used to quantify how much of an active pharmaceutical ingredient (API) is in a drug substance, but what do these values actually tell us? Each of these results is determined by different factors, and it is important to understand the differences between them and the limitations of each approach.",
    },
    {
      id: 3,
      question:
        "It is a long established fact that a reader will be distracted by the readable?",
      answer:
        "Pharmaceuticals are characterized by several analytical techniques to confirm their identitfy and describe their quality. Purity, potency, and assay are common approaches used to quantify how much of an active pharmaceutical ingredient (API) is in a drug substance, but what do these values actually tell us? Each of these results is determined by different factors, and it is important to understand the differences between them and the limitations of each approach.",
    },
    {
      id: 4,
      question:
        "It is a long established fact that a reader will be distracted by the readable?",
      answer:
        "Pharmaceuticals are characterized by several analytical techniques to confirm their identitfy and describe their quality. Purity, potency, and assay are common approaches used to quantify how much of an active pharmaceutical ingredient (API) is in a drug substance, but what do these values actually tell us? Each of these results is determined by different factors, and it is important to understand the differences between them and the limitations of each approach.",
    },
    {
      id: 5,
      question:
        "It is a long established fact that a reader will be distracted by the readable?",
      answer:
        "Pharmaceuticals are characterized by several analytical techniques to confirm their identitfy and describe their quality. Purity, potency, and assay are common approaches used to quantify how much of an active pharmaceutical ingredient (API) is in a drug substance, but what do these values actually tell us? Each of these results is determined by different factors, and it is important to understand the differences between them and the limitations of each approach.",
    },
    {
      id: 6,
      question:
        "It is a long established fact that a reader will be distracted by the readable?",
      answer:
        "Pharmaceuticals are characterized by several analytical techniques to confirm their identitfy and describe their quality. Purity, potency, and assay are common approaches used to quantify how much of an active pharmaceutical ingredient (API) is in a drug substance, but what do these values actually tell us? Each of these results is determined by different factors, and it is important to understand the differences between them and the limitations of each approach.",
    },
  ];
  const [open, setOpen] = useState(0);
  return (
    <div className="sm:px-36 py-4  px-6 sm:pt-10 pb-20">
      <p className="text-[32px] sm:text-[42px] my-5 pl-1 text-left font-medium bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent">
        All your questions, answered.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  mt-3">
        {faqs_question?.map((data, index) => (
          <div className="border-[0.3px] border-[#9563A2] why-rupeia-blur px-5 sm:px-8 flex flex-col gap-3 justify-between items-center py-4 rounded-4xl h-fit"
          key={index}
          >
            <div className="flex justify-between items-center gap-3">
              <span className="text-[14px] sm:text-[18px] font-medium leading-[150%] font-poppins w-[100%] text-[#ECE6ED]">
                {data?.question}
              </span>
              <span
                onClick={() => {
                  if (open == index + 1) {
                    setOpen(0);
                  } else {
                    setOpen(index + 1);
                  }
                }}
              >
                <FaAngleDown className="text-white cursor-pointer" />
              </span>
            </div>
            {open == index + 1 && (
              <p className="text-[12px] sm:text-[14px] text-left text-[#D9D9D9]">
                {data?.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQS;
