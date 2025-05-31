import React, { useRef } from "react";
import ShowErroemessage from "../alert/ShowErroemessage";

const SetPin = ({ setFirstPageOnboard, fistPageOnboard, setPage, page }) => {
  const inputsRef = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length > 1) return;

    const newPin = [...(fistPageOnboard.pin || ["", "", "", ""])];
    newPin[index] = value;

    setFirstPageOnboard({ ...fistPageOnboard, pin: newPin });

    // Auto-focus next input
    if (value && index < 3) {
      inputsRef[index + 1].current.focus();
    }
  };

  const handleContinue = () => {
    const pin = (fistPageOnboard.pin || []).join("");
    if (pin.length === 4) {
      console.log("Set PIN:", pin); // Here you can call API or save securely
      setPage(page + 1);
    } else {
      ShowErroemessage("Please enter a 4-digit PIN");
    }
  };

  return (
    <div className="px-5 flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-5">
        <p className="text-[13px] leading-5 font-normal px-5 text-center">
          Set your 4 digit Rupeia pin
        </p>
        <div className="flex flex-row gap-5 px-10">
          {[0, 1, 2, 3].map((i) => (
            <input
              key={i}
              ref={inputsRef[i]}
              maxLength={1}
              className="text-center border-b-[1px] border-[#FFFFFF] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[42px] w-full focus:outline-none"
              value={(fistPageOnboard.pin || ["", "", "", ""])[i]}
              type="text"
              onChange={(e) => handleChange(e, i)}
            />
          ))}
        </div>
      </div>
      <div className="border-[1px] border-[#65636394] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl">
        <button
          className="bg-[#551262] w-full py-2 rounded-full text-[15px] leading-7 font-medium text-white"
          type="button"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SetPin;
