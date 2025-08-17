import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Categories from "../Ticket/Categories";
import TicketCategories from "./TicketCategories";
import FAQS from "./FAQS";
import SubmitQuery from "./SubmitQuery";
const RaiseTicket = ({ closePopUp = () => {} }) => {
  const [categoriesValue, setCategoriesValue] = useState("");
  const [step, setStep] = useState(1);
  return (
    <div className="absolute bg-[#000000BA] min-h-screen w-screen  z-50 flex justify-center items-center ">
      <div className="schedule-call w-[491px] h-fit rounded-[15px] flex flex-col justify-between ">
        <div className="flex justify-between p-5 border-b-[1px] border-[#423D3D]">
          <div>
            <p className="schedule-text text-[20px] font-medium">
              Customer Support
            </p>
          </div>

          <RxCross1
            className="text-white text-[30px] cursor-pointer"
            onClick={() => {
              closePopUp();
            }}
          />
        </div>
        <div className="p-5 relative h-full">
          {step == 1 && (
            <TicketCategories
              setCategoriesValue={setCategoriesValue}
              categoriesValue={categoriesValue}
              setStep={setStep}
            />
          )}
          {step == 2 && (
            <FAQS categoriesValue={categoriesValue} setStep={setStep} />
          )}
          {step == 3 && <SubmitQuery categoriesValue={categoriesValue}/>}
        </div>
      </div>
    </div>
  );
};

export default RaiseTicket;
