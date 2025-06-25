"use client";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import Categories from "@/app/components/Ticket/Categories";
import FaqSection from "@/app/components/Ticket/FaqSection";
import React, { useState } from "react";

const Page = () => {
  const handleClick = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const [categoriesValue, setCategoriesValue] = useState("");
  const [step, setStep] = useState(1);
  return (
    <div className="font-poppins flex flex-col h-screen overflow-y-auto">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage page={"Customer Support"} handleClick={handleClick} />
      </div>
      {step == 1 && (
        <Categories
          setCategoriesValue={setCategoriesValue}
          categoriesValue={categoriesValue}
        />
      )}
      {step == 2 && <FaqSection categoriesValue={categoriesValue} />}

      <button
        className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-[#551262] w-full max-w-[calc(100%-64px)] py-2 rounded-full text-[15px] leading-7 font-medium text-white"
        type="button"
        onClick={() => {
          setStep(step + 1);
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Page;
