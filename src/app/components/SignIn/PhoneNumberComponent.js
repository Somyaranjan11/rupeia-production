import React, { useState } from "react";
import ButtonLoader from "../Loader/ButtonLoader";
import { handleApiError } from "@/app/utility/handleApiError";
import axios from "axios";
import ShowSucessmessages from "../alert/ShowSucessmessages";

const PhoneNumberComponent = ({
  setFirstPageOnboard,
  fistPageOnboard,
  setPage,
  page,
}) => {
  const [loading, setLoading] = useState(false);
  const [onBoardError, setOnBoardError] = useState({
    phone_number_blank_validation: false,
    phone_number_invalid_format: false,
  });
  const emailVerify = async () => {
    if (fistPageOnboard?.phone_number == "") {
      setOnBoardError({ ...onBoardError, phone_number_blank_validation: true });
      return;
    } else if (fistPageOnboard?.phone_number.length > 10) {
      setOnBoardError({ ...onBoardError, phone_number_invalid_format: true });
      return;
    } else {
      const payloadData = {
        phoneNumber: `+91${fistPageOnboard?.phone_number}`,
      };
      try {
        setLoading(true);
        let token_id = localStorage.getItem("accessToken");
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/otp/request-otp`,
          payloadData,
          {
            headers: {
              Authorization: `Bearer ${token_id}`, // <-- add Authorization header
            },
          }
        );
        if (response?.data?.success) {
          ShowSucessmessages("OTP has send successfully");
          setPage(4);
          if (fistPageOnboard?.phone_otp) {
            setFirstPageOnboard({ ...fistPageOnboard, phone_otp: "" });
          }
        } else {
          console.log("error");
        }
      } catch (error) {
        handleApiError(error);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="px-5 flex flex-col gap-5 w-full">
      <div>
        <input
          placeholder="Phone Number*"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[52px] w-full rounded-3xl focus:outline-none"
          value={fistPageOnboard?.phone_number}
          type="number"
          onChange={(e) => {
            setFirstPageOnboard({
              ...fistPageOnboard,
              phone_number: e.target.value,
            });

            if (onBoardError?.phone_number_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                phone_number_blank_validation: false,
              });
            }
            if (onBoardError?.phone_number_invalid_format) {
              setOnBoardError({
                ...onBoardError,
                phone_number_invalid_format: false,
              });
            }
          }}
        />
        {onBoardError?.phone_number_blank_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter your phone number
          </p>
        )}
        {onBoardError?.phone_number_invalid_format && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter a valid phone number
          </p>
        )}
      </div>
      <div className="border-[1px] border-[#65636394] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl ">
        <button
          className=" bg-[#551262] w-full  py-2 rounded-full text-[15px] leading-7 font-medium text-white"
          type="button"
          onClick={() => {
            emailVerify();
          }}
        >
          {loading ? <ButtonLoader /> : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default PhoneNumberComponent;
