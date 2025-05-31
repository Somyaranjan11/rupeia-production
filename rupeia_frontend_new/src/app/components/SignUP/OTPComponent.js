import React, { useState } from "react";
import ShowErroemessage from "../alert/ShowErroemessage";
import axios from "axios";
import ButtonLoader from "../Loader/ButtonLoader";
import ShowSucessmessages from "../alert/ShowSucessmessages";

const OTPComponent = ({
  setFirstPageOnboard,
  fistPageOnboard,
  setPage,
  page,
}) => {
  const [onBoardError, setOnBoardError] = useState({
    name_blank_validation: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const verifyOTP = async () => {
    if (fistPageOnboard?.otp == "") {
      ShowErroemessage("Please enter otp");
    } else {
      const payloadData = {
        email: fistPageOnboard?.email_id,
        otp: fistPageOnboard?.otp,
      };
      try {
        setLoading(true);
        setError(false);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify-email`,
          payloadData
        );
        console.log("response?.data", response?.data);
        if (response?.data?.success) {
          setFirstPageOnboard({
            ...fistPageOnboard,
            temp_token: response?.data?.data?.tempToken,
          });
          ShowSucessmessages("OTP has been verified");
          setPage(page + 1);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.error("❌ Error:", error.response?.data || error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="px-5 flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-[13px] leading-5 font-normal px-5">
            An OTP has been sent to your Email ID ({fistPageOnboard?.email_id})
          </p>
        </div>
        <div>
          <input
            placeholder="Enter your OTP..."
            className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[52px] w-full rounded-3xl focus:outline-none"
            value={fistPageOnboard?.otp}
            type="text"
            onChange={(e) => {
              setFirstPageOnboard({
                ...fistPageOnboard,
                otp: e.target.value,
              });
            }}
          />
          <div>
            <p className="text-[14px] font-normal text-red-400 mt-2 text-center">
              {error && "In valid OTP OR Expiry OTP"}
            </p>
          </div>
        </div>
      </div>
      <div className="border-[1px] border-[#65636394] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl ">
        <button
          className=" bg-[#551262] w-full  py-2 rounded-full text-[15px] leading-7 font-medium text-white"
          type="button"
          onClick={() => {
            verifyOTP();
            // setPage(page + 1);
          }}
        >
          {loading ? <ButtonLoader /> : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default OTPComponent;
