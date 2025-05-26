import Correct from "@/app/icons/Correct";
import React, { useState } from "react";
import ButtonLoader from "../Loader/ButtonLoader";
import ShowSucessmessages from "../alert/ShowSucessmessages";
import axios from "axios";

const KYCBankDetails = ({ setFifthPageOnboard, fifthPageOnboard,setPageStep }) => {
  const [onBoardError, setOnBoardError] = useState({
    account_name_validation: false,
    account_name_space_validation: false,
    account_name_isnumber_validation: false,
    // Account number
    account_number_validation: false,
    account_number_negative_validation: false,
    confirm_account_number_validation: false,
    ifsc_code_length_validation: false,
    ifsc_code_validation: false,
    ifsc_code_validation_reg: false,
    mismatch_validation: false,
  });
  const [loading, setLoading] = useState(false);

  const onBoardFunction = () => {
    setPageStep(6);
    return;
    if (fifthPageOnboard?.account_name == "") {
      setOnBoardError({ ...onBoardError, account_name_validation: true });
    } else if (/^\s/.test(fifthPageOnboard?.account_name)) {
      setOnBoardError({ ...onBoardError, account_name_space_validation: true });
    } else if (/\d/.test(fifthPageOnboard?.account_name)) {
      setOnBoardError({
        ...onBoardError,
        account_name_isnumber_validation: true,
      });
    } else if (fifthPageOnboard?.account_number == "") {
      setOnBoardError({ ...onBoardError, account_number_validation: true });
    } else if (/^-/.test(fifthPageOnboard?.account_number)) {
      setOnBoardError({
        ...onBoardError,
        account_number_negative_validation: true,
      });
    } else if (fifthPageOnboard?.confirm_account_number == "") {
      setOnBoardError({
        ...onBoardError,
        confirm_account_number_validation: true,
      });
    } else if (
      fifthPageOnboard?.account_number !=
      fifthPageOnboard?.confirm_account_number
    ) {
      setOnBoardError({
        ...onBoardError,
        mismatch_validation: true,
      });
    } else if (fifthPageOnboard?.ifsc_code == "") {
      setOnBoardError({ ...onBoardError, ifsc_code_validation: true });
    } else if (!/^[A-Z]{4}[0][0-9A-Z]{6}$/.test(fifthPageOnboard?.ifsc_code)) {
      setOnBoardError({ ...onBoardError, ifsc_code_validation_reg: true });
    } else {
      updateProfileDetails()
    }
  };
  const updateProfileDetails = () => {
    const profile_id = localStorage.getItem("profile_id");
    const payloadData = {
      profile: profile_id,
      primary_account_holder_name: fifthPageOnboard?.account_name,
      account_number: fifthPageOnboard?.account_number,
      type: "savings",
      ifsc_code: fifthPageOnboard?.ifsc_code,
    };
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    };
    setLoading(true);
    axios
      .post(
        `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/bankDetails/enterBankDetails`,
        payloadData,
        { headers } // ✅ wrapped correctly
      )
      .then((res1) => {
        if (res1) {
          console.log("response is", res1.data);
          ShowSucessmessages("Address have been updated");
          // setPageStep(3);
        }
      })
      .catch((error) => {
        console.error("Error in one of the requests:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <div>
        <p className="text-[18px] font-semibold leading-7 font-poppins">
          Add Bank Details
        </p>
        <p className="text-[14px] font-medium leading-7 font-poppins">
          ₹1 will be credited to you bank account.
        </p>
        <span className="flex flex-col my-2">
          <p className="text-[14px] font-medium leading-7 font-poppins">
            Bank Details
          </p>
          <span className="text-[11px] font-medium font-poppins flex items-center gap-1">
            {" "}
            <p className="bg-green-700 w-fit rounded-full p-[1px]">
              <Correct />
            </p>
            Your bank account has been verified
          </span>
        </span>
      </div>
      <div className="flex flex-col gap-5 mt-5">
      <div>
          <input
            type="text"
            placeholder="Please enter your name"
            className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
            value={fifthPageOnboard?.account_name}
            onChange={(e) => {
              setFifthPageOnboard({
                ...fifthPageOnboard,
                account_name: e.target.value,
              });
              if (onBoardError?.account_name_validation) {
                setOnBoardError({
                  ...onBoardError,
                  account_name_validation: false,
                });
              }
              if (onBoardError?.account_name_isnumber_validation) {
                setOnBoardError({
                  ...onBoardError,
                  account_name_isnumber_validation: false,
                });
              }
              if (onBoardError?.account_name_space_validation) {
                setOnBoardError({
                  ...onBoardError,
                  account_name_space_validation: false,
                });
              }
            }}
          />
          {onBoardError?.account_name_validation && (
            <p className="text-[14px] font-normal text-red-400 mt-1">
              Please enter your Account Holder Name
            </p>
          )}
          {onBoardError?.account_name_space_validation && (
            <p className="text-[14px] font-normal text-red-400 mt-1">
              Name can not start with a space
            </p>
          )}
          {onBoardError?.account_name_isnumber_validation && (
            <p className="text-[14px] font-normal text-red-400 mt-1">
              Please enter a valid name
            </p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Please enter your account number"
            className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
            value={fifthPageOnboard?.account_number}
            onChange={(e) => {
              setFifthPageOnboard({
                ...fifthPageOnboard,
                account_number: e.target.value,
              });
              if (onBoardError?.account_number_validation) {
                setOnBoardError({
                  ...onBoardError,
                  account_number_validation: false,
                });
              }
              if (onBoardError?.account_number_negative_validation) {
                setOnBoardError({
                  ...onBoardError,
                  account_number_negative_validation: false,
                });
              }
            }}
          />
          {onBoardError?.account_number_validation && (
            <p className="text-[14px] font-normal text-red-400 mt-1">
              Please enter your Account Number
            </p>
          )}
          {onBoardError?.account_number_negative_validation && (
            <p className="text-[14px] font-normal text-red-400 mt-1">
              Please enter a valid account number
            </p>
          )}
        </div>
        <div>
          <input
            placeholder="Please confirm your account number"
            className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
            type="password"
            value={fifthPageOnboard?.confirm_account_number}
            onChange={(e) => {
              setFifthPageOnboard({
                ...fifthPageOnboard,
                confirm_account_number: e.target.value,
              });
              if (onBoardError?.confirm_account_number_validation) {
                setOnBoardError({
                  ...onBoardError,
                  confirm_account_number_validation: false,
                });
              }
              if (onBoardError?.mismatch_validation) {
                setOnBoardError({
                  ...onBoardError,
                  mismatch_validation: false,
                });
              }
            }}
          />
          {onBoardError?.confirm_account_number_validation && (
            <p className="text-[14px] font-normal text-red-400 mt-1">
              Please enter your confirm Account Number
            </p>
          )}
          {onBoardError?.mismatch_validation && (
            <p className="text-[14px] font-normal text-red-400 mt-1">
              The confirmed account number does not match the account number.
            </p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Please enter your IFSC code"
            className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
            value={fifthPageOnboard?.ifsc_code}
            onChange={(e) => {
              setFifthPageOnboard({
                ...fifthPageOnboard,
                ifsc_code: e.target.value,
              });
              if (onBoardError?.ifsc_code_validation) {
                setOnBoardError({
                  ...onBoardError,
                  ifsc_code_validation: false,
                });
              }
              if (onBoardError?.ifsc_code_validation_reg) {
                setOnBoardError({
                  ...onBoardError,
                  ifsc_code_validation_reg: false,
                });
              }
            }}
            maxLength={11}
          />
          {onBoardError?.ifsc_code_validation && (
            <p className="text-[14px] font-normal text-red-400 mt-1">
              Please enter your IFSC code
            </p>
          )}
          {onBoardError?.ifsc_code_validation_reg && (
            <p className="text-[14px] font-normal text-red-400 mt-1">
              Please enter a valid IFSC code
            </p>
          )}
        </div>
      </div>
      <div className="border-[1px] border-[#65636394] py-4 px-5 fixed z-50 bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl ">
        <button
          className={` bg-[#551262] w-full py-2 rounded-full text-[14px] leading-7 font-medium text-white ${
            loading
              ? "pointer-events-none cursor-not-allowed"
              : "cursor-pointer"
          }`}
          type="button"
          onClick={() => {
            onBoardFunction();
          }}
        >
          {loading ? <ButtonLoader /> : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default KYCBankDetails;
