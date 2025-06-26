import React, { useState } from "react";
import ButtonLoader from "../Loader/ButtonLoader";
import axios from "axios";

const KYCAddessInformation = ({
  setFourthPageOnboard,
  fourthPageOnboard,
  setPageStep,
  fistPageOnboard,
}) => {
  const [loading, setLoading] = useState(false);
  const updateProfileDetails = () => {
    const profile_id = localStorage.getItem("profile_id");
    const lane2 = `${fourthPageOnboard?.city},${fourthPageOnboard?.state}`;
    const addressPayloadData = {
      profile: profile_id,
      line1: fourthPageOnboard?.address_1,
      line2: lane2,
      country: "IN",
      postal_code: fourthPageOnboard?.pin_code,
      nature: "business_location",
    };
    const token = localStorage.getItem("accessToken");
    setLoading(true);
    const emailData = {
      profile: profile_id,
      email: fistPageOnboard?.email_id,
    };
    const phoneData = {
      profile: profile_id,
      isd: "91",
      number: fistPageOnboard?.phone_number,
    };
    axios
      .all([
        axios.post(
          `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/addresses`,
          addressPayloadData,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        axios.post(
          `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/emailAddress`,
          emailData,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        axios.post(
          `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/phoneNumber`,
          phoneData,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          if (res1) {
            console.log("response is", res1.data);
            ShowSucessmessages("Details have been updated");
          }
          if (res2) {
            ShowSucessmessages("Details have been updated");
          }
          if (res3) {
            ShowSucessmessages("Details have been updated");
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
      <div>
        <p className="text-[18px] font-semibold leading-7 font-poppins">
          What’s your Address?
        </p>
        <p className="text-[14px] font-medium leading-5 font-poppins">
          We recommend you use the same address for all investments
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-1">
        <div>
          <p className="text-[14px] font-medium leading-7 font-poppins">
            Address 1
          </p>
          <input
            type="text"
            placeholder="Please enter your Address"
            className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[44px] w-full rounded-3xl focus:outline-none"
            onChange={(e) => {
              setFourthPageOnboard({
                ...fourthPageOnboard,
                address_1: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <p className="text-[14px] font-medium leading-7 font-poppins">
            PIN Code
          </p>
          <input
            type="number"
            placeholder="Please enter your pin code"
            className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3  h-[44px] w-full rounded-3xl focus:outline-none"
            onChange={(e) => {
              if (e.target.value < 7) {
                setFourthPageOnboard({
                  ...fourthPageOnboard,
                  pin_code: e.target.value,
                });
              }
            }}
          />
        </div>
        <div>
          <p className="text-[14px] font-medium leading-7 font-poppins">
            City{" "}
          </p>
          <input
            type="text"
            placeholder="Please enter your city"
            className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3  h-[44px] w-full rounded-3xl focus:outline-none"
            onChange={(e) => {
              setFourthPageOnboard({
                ...fourthPageOnboard,
                city: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <p className="text-[14px] font-medium leading-7 font-poppins">
            State{" "}
          </p>
          <input
            type="text"
            placeholder="Please enter your state"
            className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3  h-[44px] w-full rounded-3xl focus:outline-none"
            onChange={(e) => {
              setFourthPageOnboard({
                ...fourthPageOnboard,
                state: e.target.value,
              });
            }}
          />
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
            updateProfileDetails();
          }}
        >
          {loading ? <ButtonLoader /> : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default KYCAddessInformation;
