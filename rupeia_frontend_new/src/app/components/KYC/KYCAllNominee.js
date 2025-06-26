import axios from "axios";
import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import ButtonLoader from "../Loader/ButtonLoader";

const KYCAllNominee = ({ setPageStep }) => {
  const [loading, setLoading] = useState(false);
  function generateUnique8DigitNumber() {
    const timestampPart = Date.now().toString().slice(-5); // Last 5 digits of timestamp
    const randomPart = Math.floor(100 + Math.random() * 900); // Random 3-digit number (100–999)
    return parseInt(timestampPart + randomPart); // Combines to 8 digits
  }
  const updateProfileDetails = () => {
    setLoading(true);

    const profile_id = localStorage.getItem("profile_id");
    const dematAccountPayloadData = {
      profile: profile_id,
      dp_id: generateUnique8DigitNumber(),
      client_id: generateUnique8DigitNumber(),
    };
    const mutualFundAccountPayloadData = {
      profile: profile_id,
      holding_pattern: "single",
      primary_investor_pan: "AAAAA9998C",
    };
    const token = localStorage.getItem("accessToken");
    axios
      .all([
        axios.post(
          `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/dematAccount/createDematAccount`,
          dematAccountPayloadData,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        axios.post(
          `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/MFAccount`,
          mutualFundAccountPayloadData,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
      ])
      .then(
        axios.spread((res1, res2) => {
          if (res1) {
            console.log("response is", res1.data);
            ShowSucessmessages("Demat account created successfully");
          }
          if (res2) {
            ShowSucessmessages("Mutual fund account created successfully");
          }
        })
      )
      .catch((error) => {
        console.error("Error in one of the requests:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="flex flex-col gap-1">
        <p className="text-[14px] text-white">
          You can add upto 3 nominees to your account
        </p>
        <p className="text-[14px] text-white">
          Added nominees can’t be removed.
        </p>
      </div>
      <div>
        <p className="text-[16px] font-medium my-4">My nominees</p>
        <div className="border-t-[0.5px] border-b-[0.5px] border-[#FFFFFF1A] py-3 px-2 ">
          <div className="flex flex-row justify-between items-start">
            <p className="text-[#FFFFFFCC] text-[15px]">Aryan Singh</p>
            <p className="text-[#FFFFFFCC] text-[15px]">90%</p>
          </div>
          <div>
            <p className="text-[#FFFFFF96] text-[14px]">Father</p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-center my-3 gap-1"
        onClick={() => {
          setPageStep(7);
        }}
      >
        <span className="text-[#FFFFFFCC] text-[20px]">
          <MdAddCircle />
        </span>
        <p className="text-[#FFFFFFCC] text-[15px]">Add nominee</p>
      </div>
      <div className="border-[1px] border-[#65636394] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl ">
        <button
          className={` bg-[#551262] w-full  py-2 rounded-full text-[14px] leading-7 font-medium text-white`}
          type="button"
          onClick={() => {
            updateProfileDetails();
          }}
        >
          {loading ? <ButtonLoader /> : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default KYCAllNominee;
