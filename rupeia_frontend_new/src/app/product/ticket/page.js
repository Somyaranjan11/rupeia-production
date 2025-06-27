"use client";
import ButtonLoader from "@/app/components/Loader/ButtonLoader";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import Categories from "@/app/components/Ticket/Categories";
import FaqSection from "@/app/components/Ticket/FaqSection";
import SendQuery from "@/app/components/Ticket/SendQuery";
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
       {step == 3 && <SendQuery categoriesValue={categoriesValue}/>}
      {step < 3 && (
        <div className="py-4 px-5 fixed z-50 bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl ">
          <button
            className={` bg-[#551262] w-full py-2 rounded-full text-[14px] leading-7 font-medium text-white`}
            type="button"
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default Page;
