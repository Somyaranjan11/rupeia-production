import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import ButtonLoader from "../Loader/ButtonLoader";
import axios from "axios";
import ShowSucessmessages from "../alert/ShowSucessmessages";

const KYCEmail = ({
  setPageStep,
  setSecondPageOnboard,
  secondPageOnboard,
  fistPageOnboard,
}) => {
  const [loading, setLoading] = useState(false);
  const gender = ["Male", "Female", "Other"];
  const [onBoardError, setOnBoardError] = useState({
    dob_blank_validation: false,
    marital_blank_validation: false,
    gender_blank_validation: false,
    occupation_type_validation: false,
    residental_status_type_validation: false,
    father_name_blank_validation: false,
    father_name_space_validation: false,
    father_name_isnumber_validation: false,
    mother_name_blank_validation: false,
    mother_name_space_validation: false,
    mother_name_isnumber_validation: false,
    spouse_name_blank_validation: false,
    spouse_name_space_validation: false,
    spouse_name_isnumber_validation: false,
  });
  const onBoardFunction = () => {
    setPageStep(3);
    return;
    if (secondPageOnboard?.father_name == "") {
      setOnBoardError({ ...onBoardError, father_name_blank_validation: true });
    } else if (/^\s/.test(secondPageOnboard?.father_name)) {
      setOnBoardError({ ...onBoardError, father_name_space_validation: true });
    } else if (/\d/.test(secondPageOnboard?.father_name)) {
      setOnBoardError({
        ...onBoardError,
        father_name_isnumber_validation: true,
      });
    } else if (secondPageOnboard?.mother_name == "") {
      setOnBoardError({ ...onBoardError, mother_name_blank_validation: true });
    } else if (/^\s/.test(secondPageOnboard?.mother_name)) {
      setOnBoardError({ ...onBoardError, mother_name_space_validation: true });
    } else if (/\d/.test(secondPageOnboard?.mother_name)) {
      setOnBoardError({
        ...onBoardError,
        mother_name_isnumber_validation: true,
      });
    } else if (secondPageOnboard?.gender == "") {
      setOnBoardError({ ...onBoardError, gender_blank_validation: true });
    } else if (secondPageOnboard?.marital_status == "") {
      setOnBoardError({ ...onBoardError, marital_blank_validation: true });
    } else {
      updateKycRequest();
    }
  };
  const updateKycRequest = () => {
    setLoading(true);
    const payloadData = {
      father_name: secondPageOnboard?.father_name,
      mother_name: secondPageOnboard?.mother_name,
      gender: secondPageOnboard?.gender?.toLowerCase(),
      marital_status: secondPageOnboard?.marital_status,
      spouse_name: "",
      residential_status: "resident_individual",
      citizenship_countries: ["in"],
      nationality_country: "in",
      country_of_birth: "in",
      place_of_birth: "in",
      pep_details: "not_applicable",
    };
    const token = localStorage.getItem("accessToken");
    const headers = {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    };
    const kyc_id = localStorage.getItem("kyc_id");
    axios
      .patch(
        `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/kyc/kyc_requests/${kyc_id}`,
        payloadData,
        headers
      )
      .then((res1) => {
        if (res1) {
          console.log("response is", res1.data);
          ShowSucessmessages("Details have been updated");
          setPageStep(3);
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
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-[14px] font-medium leading-7 font-poppins">
          Father name
        </p>
        <input
          placeholder="Please enter your father name"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
          type="text"
          value={secondPageOnboard?.father_name}
          onChange={(e) => {
            setSecondPageOnboard({
              ...secondPageOnboard,
              father_name: e.target.value,
            });
            if (onBoardError?.father_name_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                father_name_blank_validation: false,
              });
            }
            if (onBoardError?.father_name_space_validation) {
              setOnBoardError({
                ...onBoardError,
                father_name_space_validation: false,
              });
            }
            if (onBoardError?.father_name_isnumber_validation) {
              setOnBoardError({
                ...onBoardError,
                father_name_isnumber_validation: false,
              });
            }
          }}
        />
        {onBoardError?.father_name_blank_validation && (
          <p className="text-[15px] font-normal text-red-400 mt-1">
            Please enter your father name
          </p>
        )}
        {onBoardError?.father_name_space_validation && (
          <p className="text-[15px] font-normal text-red-400 mt-1">
            Name cannot start with a space
          </p>
        )}
        {onBoardError?.father_name_isnumber_validation && (
          <p className="text-[15px] font-normal text-red-400 mt-1">
            Please enter a valid name
          </p>
        )}
      </div>
      <div className="flex flex-col">
        <p className="text-[14px] font-medium leading-7 font-poppins">
          Mother name
        </p>
        <input
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
          placeholder="Enter your father name"
          value={secondPageOnboard?.mother_name}
          type="text"
          onChange={(e) => {
            setSecondPageOnboard({
              ...secondPageOnboard,
              mother_name: e.target.value,
            });
            if (onBoardError?.mother_name_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                mother_name_blank_validation: false,
              });
            }
            if (onBoardError?.mother_name_space_validation) {
              setOnBoardError({
                ...onBoardError,
                mother_name_space_validation: false,
              });
            }
            if (onBoardError?.mother_name_isnumber_validation) {
              setOnBoardError({
                ...onBoardError,
                mother_name_isnumber_validation: false,
              });
            }
          }}
        />{" "}
        {onBoardError?.mother_name_blank_validation && (
          <p className="text-[15px] font-normal text-red-400 mt-1">
            Please enter your mother name
          </p>
        )}
        {onBoardError?.mother_name_space_validation && (
          <p className="text-[15px] font-normal text-red-400 mt-1">
            Name cannot start with a space
          </p>
        )}
        {onBoardError?.mother_name_isnumber_validation && (
          <p className="text-[15px] font-normal text-red-400 mt-1">
            Please enter a valid name
          </p>
        )}
      </div>
      <div className="flex-col hidden">
        <p className="text-[14px] font-medium leading-7 font-poppins">
          Spouse name
        </p>
        <input
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
          placeholder="Enter your father name"
          value={secondPageOnboard?.spouse_name}
          type="text"
          onChange={(e) => {
            setSecondPageOnboard({
              ...secondPageOnboard,
              spouse_name: e.target.value,
            });
            if (onBoardError?.spouse_name_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                spouse_name_blank_validation: false,
              });
            }
            if (onBoardError?.spouse_name_space_validation) {
              setOnBoardError({
                ...onBoardError,
                spouse_name_space_validation: false,
              });
            }
            if (onBoardError?.spouse_name_isnumber_validation) {
              setOnBoardError({
                ...onBoardError,
                spouse_name_isnumber_validation: false,
              });
            }
          }}
        />{" "}
        {onBoardError?.spouse_name_blank_validation && (
          <p className="text-[15px] font-normal text-red-400 mt-1">
            Please enter your mother name
          </p>
        )}
        {onBoardError?.spouse_name_space_validation && (
          <p className="text-[15px] font-normal text-red-400 mt-1">
            Name cannot start with a space
          </p>
        )}
        {onBoardError?.spouse_name_isnumber_validation && (
          <p className="text-[15px] font-normal text-red-400 mt-1">
            Please enter a valid name
          </p>
        )}
      </div>
      {/* Gender */}
      <div className="flex flex-col relative">
        <p className="text-[14px] font-medium leading-7 font-poppins">Gender</p>
        {/* Dropdown Button */}
        <div className="flex flex-row gap-3">
          {gender?.map((item, index) => (
            <div className="w-full">
              <button
                className={`mb-1 border-[1px] border-[#916D98] text-[14px] font-medium leading-7  px-3 h-[40px] w-full rounded-3xl focus:outline-none ${
                  item == secondPageOnboard.gender
                    ? "bg-white text-[#916D98] font-semibold"
                    : "text-[#FFFFFF]"
                }`}
                type="button"
                onClick={() => {
                  setSecondPageOnboard({
                    ...secondPageOnboard,
                    gender: item,
                  });
                  setOnBoardError({
                    ...onBoardError,
                    gender_blank_validation: false,
                  });
                }}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        {onBoardError?.gender_blank_validation && (
          <p className="text-[15px] font-normal text-red-400 mt-1">
            Please select your gender
          </p>
        )}
      </div>
      <div className="">
        <div>
          <p className="text-[14px] font-medium leading-7 font-poppins">
            Marital Status
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <button
            className={`mb-1 border-[1px] border-[#916D98] text-[14px] font-medium leading-7  px-3 h-[40px] w-full rounded-3xl focus:outline-none ${
              secondPageOnboard.marital_status == "married"
                ? "bg-white text-[#916D98] font-semibold"
                : "text-[#FFFFFF]"
            }`}
            type="button"
            onClick={() => {
              setSecondPageOnboard({
                ...secondPageOnboard,
                marital_status: "married",
              });
              setOnBoardError({
                ...onBoardError,
                marital_blank_validation: false,
              });
            }}
          >
            Married
          </button>
          <button
            className={`mb-1 border-[1px] border-[#916D98] text-[14px] font-medium leading-7  px-3 h-[40px] w-full rounded-3xl focus:outline-none ${
              secondPageOnboard.marital_status == "unmarried"
                ? "bg-white text-[#916D98] font-semibold"
                : "text-[#FFFFFF]"
            }`}
            type="button"
            onClick={() => {
              setSecondPageOnboard({
                ...secondPageOnboard,
                marital_status: "unmarried",
              });
              setOnBoardError({
                ...onBoardError,
                marital_blank_validation: false,
              });
            }}
          >
            Un Married
          </button>
        </div>
        {onBoardError?.marital_blank_validation && (
          <p className="text-[15px] font-normal text-red-400 mt-1">
            Please select your marital status
          </p>
        )}
      </div>
      <div className="hidden">
        <div>
          <p className="text-[14px] font-medium leading-7 font-poppins">
            Residential Status
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <button
            className={`mb-1 border-[1px] border-[#916D98] text-[14px] font-medium leading-7  px-3 h-[40px] w-full rounded-3xl focus:outline-none ${
              secondPageOnboard.residential_status == "individual"
                ? "bg-white text-[#916D98] font-semibold"
                : "text-[#FFFFFF]"
            }`}
            type="button"
            onClick={() => {
              setSecondPageOnboard({
                ...secondPageOnboard,
                residential_status: "individual",
              });
              setOnBoardError({
                ...onBoardError,
                residental_status_type_validation: false,
              });
            }}
          >
            Individual
          </button>
          <button
            className={`mb-1 border-[1px] border-[#916D98] text-[14px] font-medium leading-7  px-3 h-[40px] w-full rounded-3xl focus:outline-none ${
              secondPageOnboard.residential_status == "non-individual"
                ? "bg-white text-[#916D98] font-semibold"
                : "text-[#FFFFFF]"
            }`}
            type="button"
            onClick={() => {
              setSecondPageOnboard({
                ...secondPageOnboard,
                residential_status: "non-individual",
              });
              setOnBoardError({
                ...onBoardError,
                residental_status_type_validation: false,
              });
            }}
          >
            Non Individual
          </button>
        </div>
        {onBoardError?.residental_status_type_validation && (
          <p className="text-[15px] font-normal text-red-400 mt-1">
            Please enter your residential status
          </p>
        )}
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

export default KYCEmail;
