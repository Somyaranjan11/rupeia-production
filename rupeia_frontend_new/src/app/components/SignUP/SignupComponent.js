import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import ButtonLoader from "../Loader/ButtonLoader";
import axios from "axios";
import ShowErroemessage from "../alert/ShowErroemessage";

const SignupComponent = ({
  setFirstPageOnboard,
  fistPageOnboard,
  setPage,
  page,
}) => {
  const [onBoardError, setOnBoardError] = useState({
    email_blank_validation: false,
    email_invalid_format: false,
  });
  const [isEmailVerify, setIsEmailVerify] = useState(0);
  const [loading, setLoading] = useState(false);

  const emailVerify = async () => {
    if (fistPageOnboard?.email_id == "") {
      setOnBoardError({ ...onBoardError, email_blank_validation: true });
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fistPageOnboard?.email_id)) {
      // Invalid email format
      setOnBoardError({
        ...onBoardError,
        email_invalid_format: true,
      });
      return;
    } else {
      const payloadData = {
        email: fistPageOnboard?.email_id,
      };
      try {
        setLoading(true);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify-email`,
          payloadData
        );
        console.log("response?.data", response?.data);
        if (response?.data?.success) {
          setIsEmailVerify(1);
          setPage(page + 1);
        } else {
          setIsEmailVerify(2);
        }
      } catch (error) {
        console.error("❌ Error:", error.response?.data || error.message);
        ShowErroemessage(error.response?.data?.message);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="px-5 flex flex-col gap-5 w-full">
      <div>
        <input
          placeholder="Email address*"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[52px] w-full rounded-3xl focus:outline-none"
          value={fistPageOnboard?.email_id}
          type="text"
          onChange={(e) => {
            setFirstPageOnboard({
              ...fistPageOnboard,
              email_id: e.target.value,
            });
            if (onBoardError?.email_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                email_blank_validation: false,
              });
            }
            if (onBoardError?.email_invalid_format) {
              setOnBoardError({
                ...onBoardError,
                email_invalid_format: false,
              });
            }
          }}
        />
        {onBoardError?.email_blank_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter your email
          </p>
        )}
        {onBoardError?.email_invalid_format && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter a valid email address
          </p>
        )}
      </div>
      <div>
        <input
          placeholder="Enter Invite Code"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[52px] w-full rounded-3xl focus:outline-none"
          value={fistPageOnboard?.invite_code}
          type="text"
          onChange={(e) => {
            setFirstPageOnboard({
              ...fistPageOnboard,
              invite_code: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <p className="text-[14px] font-normal text-green-400 mt-1">
          {isEmailVerify == 1
            ? "OTP has successfully sent to your email"
            : isEmailVerify == 2
            ? "Unable to send the oTP"
            : ""}
        </p>
      </div>
      <div className="w-full flex flex-col gap-4">
        <p className="text-[15px] leading-7 font-poppins font-medium text-center">
          Already have an account? Log In
        </p>
        <div className="w-full flex flex-row gap-6 items-center">
          <span className="block h-[4px] w-full bg-[#D9D9D975] rounded-4xl"></span>
          <span className="text-white">OR</span>

          <span className="block h-[4px] w-full bg-[#D9D9D975] rounded-4xl"></span>
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-t-xl">
        <div className="bg-[#270330] rounded-2xl flex justify-center items-center gap-2 py-2">
          <span>
            <FcGoogle />
          </span>
          <p className="text-[13px] font-medium leading-5 text-white">
            Continue with Google
          </p>
        </div>
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

export default SignupComponent;
