import axios from "axios";
import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import ButtonLoader from "../Loader/ButtonLoader";
import ShowSucessmessages from "../alert/ShowSucessmessages";
import { useRouter } from "next/navigation";
import ShowErroemessage from "../alert/ShowErroemessage";

const KYCAllNominee = ({ setPageStep, mfDetails, sevenPageOnboard }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  function generateUnique8DigitNumber() {
    const timestampPart = Date.now().toString().slice(-5); // Last 5 digits of timestamp
    const randomPart = Math.floor(100 + Math.random() * 900); // Random 3-digit number (100–999)
    return (timestampPart + randomPart).toString(); // Combines to 8 digits
  }
  const updateProfileDetails = async () => {
    const profile_id = localStorage.getItem("profile_id");
    try {
      setLoading(true);
      console.log("mfDetails", mfDetails);
      const mutualFundAccountPayloadData = {
        primary_investor: profile_id,
        holding_pattern: "single",
        primary_investor_pan: "",
      };
      const token = localStorage.getItem("accessToken");
      const createResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/MFAccount`,
        mutualFundAccountPayloadData,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const mfAccountId = createResponse?.data?.id;
      if (!mfAccountId) {
        ShowErroemessage("Mutual Fund Account not created");
        return;
      }
      const updatePayload = {
        id: mfAccountId,
        folio_defaults: {
          communication_email_address: mfDetails?.communication_email_address,
          communication_mobile_number: mfDetails?.communication_mobile_number,
          communication_address: mfDetails?.communication_address,
          overseas_communication_address: null,
          payout_bank_account: mfDetails?.payout_bank_account,
          nominee1: mfDetails?.nominee1,
          nominee1_allocation_percentage: 100,
        },
      };
      const updateResponse = await axios.patch(
        `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/MFAccount`,
        updatePayload,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (updateResponse?.data) {
        ShowSucessmessages("Your Mutual Fund Account created successfully");
        router.push("/product");
      }
      console.log("✅ MF Account updated successfully", updateResponse.data);
    } catch (error) {
      console.log(
        "❌ Error during MF Account creation or update:",
        error?.response?.data?.error
      );
    } finally {
      // This runs regardless of success or failure
      console.log("✅ Finished MF account operation (create + update)");
      setLoading(false); // Or any cleanup logic you need
    }
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
            <p className="text-[#FFFFFFCC] text-[15px]">
              {sevenPageOnboard?.first_name} {sevenPageOnboard?.last_name}
            </p>
            <p className="text-[#FFFFFFCC] text-[15px]">100%</p>
          </div>
          <div>
            <p className="text-[#FFFFFF96] text-[14px]">
              {sevenPageOnboard?.relationship}
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex-row items-center my-3 gap-1 hidden"
        onClick={() => {
          setPageStep(7);
        }}
      >
        <span className="text-[#FFFFFFCC] text-[20px]">
          <MdAddCircle />
        </span>
        <p className="text-[#FFFFFFCC] text-[15px]">Add nominee</p>
      </div>
      <div className=" border-[#65636394] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-tl-[38px] rounded-tr-[38px]  border-t-[1px] rounded-4xl">
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
