import React, { useRef, useState } from "react";
import phoneNumberVerify from "../Images/phone_number_verify.png";
import ShowErroemessage from "../alert/ShowErroemessage";
import { handleApiError } from "@/app/utility/handleApiError";
import axios from "axios";
import AnimateLoader from "../Loader/AnimateLoader";
import ButtonLoader from "../Loader/ButtonLoader";
import ShowSucessmessages from "../alert/ShowSucessmessages";

const PhoneNumberVerify = ({
  setFirstPageOnboard,
  fistPageOnboard,
  setPage,
  page,
}) => {
  const inputsRef = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  const [loading, setLoading] = useState(false);
  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length > 1) return;

    const newPin = [...(fistPageOnboard.phone_otp || ["", "", "", "", "", ""])];
    newPin[index] = value;

    setFirstPageOnboard({ ...fistPageOnboard, phone_otp: newPin });

    // Auto-focus next input
    if (value && index < 5) {
      inputsRef[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" || e.key === "Delete") {
      const otpArray = [
        ...(fistPageOnboard.phone_otp || ["", "", "", "", "", ""]),
      ];

      if (otpArray[index]) {
        // If current input has a value, clear it
        otpArray[index] = "";
        setFirstPageOnboard({ ...fistPageOnboard, phone_otp: otpArray });
      } else if (index > 0) {
        // If current input is empty, move to previous and clear it
        inputsRef[index - 1].current.focus();
        otpArray[index - 1] = "";
        setFirstPageOnboard({ ...fistPageOnboard, phone_otp: otpArray });
      }
    }
  };

  const handleContinue = async () => {
    const pin = (fistPageOnboard.phone_otp || []).join("");
    if (pin.length === 6) {
      const payloadData = {
        phoneNumber: `+91${fistPageOnboard?.phone_number}`,
        otp: fistPageOnboard?.phone_otp?.join(""),
      };
      try {
        setLoading(true);
        let token_id = localStorage.getItem("accessToken");
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/otp/verify-otp`,
          payloadData,
          {
            headers: {
              Authorization: `Bearer ${token_id}`, // <-- add Authorization header
            },
          }
        );
        if (response?.data?.success) {
          ShowSucessmessages("OTP has verified successfully");
          setPage(page + 1);
        } else {
          console.log("error");
        }
      } catch (error) {
        handleApiError(error);
      } finally {
        setLoading(false);
      }
    } else {
      ShowErroemessage("Please enter the otp");
    }
  };
  const resendOTP = async () => {
    const payloadData = {
      phoneNumber: `+91${fistPageOnboard?.phone_number}`,
    };
    try {
      setLoading(true);
      let token_id = localStorage.getItem("accessToken");
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/otp/resend-otp-phone`,
        payloadData,
        {
          headers: {
            Authorization: `Bearer ${token_id}`, // <-- add Authorization header
          },
        }
      );
      if (response?.data?.success) {
        ShowSucessmessages("OTP has verified successfully");
      } else {
        console.log("error");
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="pt-28 pb-5">
      <div className="flex justify-center items-center flex-col">
        <img src={phoneNumberVerify.src} className="h-[133px] w-[133px]" />
        <div className="mt-8 flex flex-col gap-2">
          <p className="text-[20px] font-poppins leading-7 font-semibold text-center">
            Hello {fistPageOnboard?.first_name}
          </p>
          <p className="text-[13px] font-normal px-10 text-center">
            Thank you for registering with Rupeia. Please type the OTP as shared
            on your mobile XXXXXXX0789
          </p>
        </div>
        <div className="flex flex-row gap-5 px-14 mt-8">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <input
              key={i}
              ref={inputsRef[i]}
              maxLength={1}
              className="text-center border-b-[1px] border-[#FFFFFF] text-[14px] font-medium leading-7 text-[#FFFFFF] h-[32px] w-full focus:outline-none"
              value={(fistPageOnboard.phone_otp || ["", "", "", "", "", ""])[i]}
              type="text"
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            />
          ))}
        </div>
        <div className="mt-8">
          <span className="text-[12px] font-normal">
            OTP not received?{" "}
            <span
              className="text-[#D98FE3]"
              onClick={() => {
                resendOTP();
              }}
            >
              RESEND
            </span>
          </span>
        </div>
        <div className="border-[1px] border-[#65636394] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl">
          <button
            className="bg-[#551262] w-full py-2 rounded-full text-[15px] leading-7 font-medium text-white"
            type="button"
            onClick={handleContinue}
          >
            {loading ? <ButtonLoader /> : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberVerify;
