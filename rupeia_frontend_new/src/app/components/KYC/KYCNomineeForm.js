import React, { useState } from "react";
import ButtonLoader from "../Loader/ButtonLoader";
import axios from "axios";
import ShowSucessmessages from "../alert/ShowSucessmessages";

const KYCNomineeForm = ({
  setSevenPageOnboard,
  sevenPageOnboard,
  setPageStep,
}) => {
  const [onBoardError, setOnBoardError] = useState({
    first_blank_validation: false,
    first_space_validation: false,
    first_isnumber_validation: false,
    last_blank_validation: false,
    last_space_validation: false,
    last_isnumber_validation: false,
    dob_blank_validation: false,
    relationship_blank_validation: false,
    relationship_space_validation: false,
    relationship_isnumber_validation: false,
  });
  const [loading, setLoading] = useState(false);
  const onBoardFunction = () => {
    if (sevenPageOnboard?.first_name == "") {
      setOnBoardError({ ...onBoardError, first_blank_validation: true });
      return;
    } else if (/^\s/.test(sevenPageOnboard?.first_name)) {
      setOnBoardError({ ...onBoardError, first_space_validation: true });
    } else if (/\d/.test(sevenPageOnboard?.first_name)) {
      setOnBoardError({ ...onBoardError, first_isnumber_validation: true });
    } else if (sevenPageOnboard?.last_name == "") {
      setOnBoardError({ ...onBoardError, last_blank_validation: true });
      return;
    } else if (/^\s/.test(sevenPageOnboard?.last_name)) {
      setOnBoardError({ ...onBoardError, last_space_validation: true });
    } else if (/\d/.test(sevenPageOnboard?.last_name)) {
      setOnBoardError({ ...onBoardError, last_isnumber_validation: true });
    } else if (sevenPageOnboard?.dob == "") {
      setOnBoardError({ ...onBoardError, dob_blank_validation: true });
    } else if (sevenPageOnboard?.relationship == "") {
      setOnBoardError({ ...onBoardError, relationship_blank_validation: true });
      return;
    } else if (/^\s/.test(sevenPageOnboard?.relationship)) {
      setOnBoardError({ ...onBoardError, relationship_space_validation: true });
    } else if (/\d/.test(sevenPageOnboard?.relationship)) {
      setOnBoardError({
        ...onBoardError,
        relationship_isnumber_validation: true,
      });
    } else {
      createKycRequest();
    }
  };
  const createKycRequest = () => {
    setLoading(true);
    const profile_id = localStorage.getItem("profile_id");
    const fullName = `${sevenPageOnboard?.first_name} ${sevenPageOnboard?.last_name}`;
    const payloadData = {
      profile: profile_id,
      name: fullName,
      date_of_birth: sevenPageOnboard?.dob,
      relationship: sevenPageOnboard?.relationship?.toLowerCase(),
    };
    const token = localStorage.getItem("accessToken");
    axios
      .post(
        `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/relatedParties`,
        payloadData,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        if (response) {
          console.log("response is", response.data);
          ShowSucessmessages("Nominee details added");
          setPageStep(8);
        }
      })
      .catch((error) => {
        console.log("error is", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-[14px] font-medium leading-7 font-poppins">
          First Name *
        </p>
        <input
          placeholder="Please enter your first name"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
          type="text"
          value={sevenPageOnboard?.first_name}
          onChange={(e) => {
            setSevenPageOnboard({
              ...sevenPageOnboard,
              first_name: e.target.value,
            });
            if (onBoardError?.first_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                first_blank_validation: false,
              });
            }
            if (onBoardError?.first_space_validation) {
              setOnBoardError({
                ...onBoardError,
                first_space_validation: false,
              });
            }
            if (onBoardError?.first_isnumber_validation) {
              setOnBoardError({
                ...onBoardError,
                first_isnumber_validation: false,
              });
            }
          }}
        />
        {onBoardError?.first_blank_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter your first name
          </p>
        )}
        {onBoardError?.first_space_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            First name can not start with a space
          </p>
        )}
        {onBoardError?.first_isnumber_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter a valid first name
          </p>
        )}
      </div>
      <div>
        <p className="text-[14px] font-medium leading-7 font-poppins">
          Last Name *
        </p>
        <input
          placeholder="Please enter your last name"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
          type="text"
          value={sevenPageOnboard?.last_name}
          onChange={(e) => {
            setSevenPageOnboard({
              ...sevenPageOnboard,
              last_name: e.target.value,
            });
            if (onBoardError?.last_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                last_blank_validation: false,
              });
            }
            if (onBoardError?.last_space_validation) {
              setOnBoardError({
                ...onBoardError,
                last_space_validation: false,
              });
            }
            if (onBoardError?.last_isnumber_validation) {
              setOnBoardError({
                ...onBoardError,
                last_isnumber_validation: false,
              });
            }
          }}
        />
        {onBoardError?.last_blank_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter your last name
          </p>
        )}
        {onBoardError?.last_space_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Last name can not start with a space
          </p>
        )}
        {onBoardError?.last_isnumber_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter a valid Last name
          </p>
        )}
      </div>
      <div>
        <p className="text-[14px] font-medium leading-7 font-poppins">
          Date of Birth *
        </p>
        <input
          placeholder="DD/MM/YY"
          type="date"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
          value={sevenPageOnboard?.dob}
          onChange={(e) => {
            setSevenPageOnboard({
              ...sevenPageOnboard,
              dob: e.target.value,
            });
            if (onBoardError?.dob_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                dob_blank_validation: false,
              });
            }
          }}
        />
        {onBoardError?.dob_blank_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter your date of birth
          </p>
        )}
      </div>
      <div>
        <p className="text-[14px] font-medium leading-7 font-poppins">
          Relationship *
        </p>
        <input
          placeholder="Please enter your relationship with nominee"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
          type="text"
          value={sevenPageOnboard?.relationship}
          onChange={(e) => {
            setSevenPageOnboard({
              ...sevenPageOnboard,
              relationship: e.target.value,
            });
            if (onBoardError?.relationship_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                relationship_blank_validation: false,
              });
            }
            if (onBoardError?.relationship_space_validation) {
              setOnBoardError({
                ...onBoardError,
                relationship_space_validation: false,
              });
            }
            if (onBoardError?.relationship_isnumber_validation) {
              setOnBoardError({
                ...onBoardError,
                relationship_isnumber_validation: false,
              });
            }
          }}
        />
        {onBoardError?.relationship_blank_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter your relationship
          </p>
        )}
        {onBoardError?.relationship_space_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Relationship can not start with a space
          </p>
        )}
        {onBoardError?.relationship_isnumber_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter a valid Relationship
          </p>
        )}
      </div>
      <div className="border-[1px] border-[#65636394] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl ">
        <button
          className={` bg-[#551262] w-full  py-2 rounded-full text-[14px] leading-7 font-medium text-white ${
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

export default KYCNomineeForm;
