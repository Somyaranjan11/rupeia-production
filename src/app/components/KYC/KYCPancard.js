import axios from "axios";
import React, { useState } from "react";
import ButtonLoader from "../Loader/ButtonLoader";
import Alert from "../alert/Alert";
import ShowSucessmessages from "../alert/ShowSucessmessages";

const KYCPancard = ({
  setFirstPageOnboard,
  fistPageOnboard,
  setPageStep,
  pageStep,
}) => {
  const [onBoardError, setOnBoardError] = useState({
    name_blank_validation: false,
    name_space_validation: false,
    name_isnumber_validation: false,
    email_blank_validation: false,
    email_invalid_format: false,
    mobile_number_blank_validation: false,
    mobile_invalid_format: false,
    dob_blank_validation: false,
    pan_number_blank_validation: false,
    pan_number_invalid_format: false,
    aadhaar_number_blank_validation: false,
    aadhaar_number_invalid_format: false,
  });
  const [loading, setLoading] = useState(false);
  const onBoardFunction = () => {
    if (fistPageOnboard?.name == "") {
      setOnBoardError({ ...onBoardError, name_blank_validation: true });
      return;
    } else if (/^\s/.test(fistPageOnboard?.name)) {
      setOnBoardError({ ...onBoardError, name_space_validation: true });
    } else if (/\d/.test(fistPageOnboard?.name)) {
      setOnBoardError({ ...onBoardError, name_isnumber_validation: true });
    } else if (fistPageOnboard?.email_id == "") {
      setOnBoardError({ ...onBoardError, email_blank_validation: true });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fistPageOnboard?.email_id)) {
      // Invalid email format
      setOnBoardError({
        ...onBoardError,
        email_invalid_format: true,
      });
    } else if (fistPageOnboard?.phone_number == "") {
      setOnBoardError({
        ...onBoardError,
        mobile_number_blank_validation: true,
      });
    } else if (fistPageOnboard?.phone_number?.length < 10) {
      setOnBoardError({
        ...onBoardError,
        mobile_invalid_format: true,
      });
    } else if (fistPageOnboard?.dob == "") {
      setOnBoardError({ ...onBoardError, dob_blank_validation: true });
    } else if (fistPageOnboard?.pan_number == "") {
      setOnBoardError({ ...onBoardError, pan_number_blank_validation: true });
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(fistPageOnboard?.pan_number)) {
      setOnBoardError({
        ...onBoardError,
        pan_number_blank_validation: false,
        pan_number_invalid_format: true,
      });
    }
    // else if (fistPageOnboard?.aadhaar_number == "") {
    //   setOnBoardError({
    //     ...onBoardError,
    //     aadhaar_number_blank_validation: true,
    //   });
    // } else if (!/^\d{12}$/.test(fistPageOnboard?.aadhaar_number)) {
    //   setOnBoardError({
    //     ...onBoardError,
    //     aadhaar_number_blank_validation: false,
    //     aadhaar_number_invalid_format: true,
    //   });
    // }
    else {
      createKycRequest();
    }
  };
  const createKycRequest = () => {
    setLoading(true);
    const payloadData = {
      name: fistPageOnboard?.name,
      pan: fistPageOnboard?.pan_number,
      date_of_birth: fistPageOnboard?.dob,
      email: fistPageOnboard?.email_id,
      mobile: {
        isd: "+91",
        number: fistPageOnboard?.phone_number,
      },
      geolocation: {
        latitude: "12.456",
        longitude: "77.45",
      },
    };
    const token = localStorage.getItem("accessToken");
    axios
      .post(
        `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/kyc/kyc_requests`,
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
          setPageStep(2);
          if (response?.data?.id) {
            localStorage.setItem("kyc_id", response?.data?.id);
            localStorage.setItem("kyc_status", response?.data?.status);
          }
          ShowSucessmessages("Investor profile created");
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
          Full Name *
        </p>
        <input
          placeholder="Please enter your full name"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
          value={fistPageOnboard?.name}
          type="text"
          onChange={(e) => {
            setFirstPageOnboard({
              ...fistPageOnboard,
              name: e.target.value,
            });
            if (onBoardError?.name_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                name_blank_validation: false,
              });
            }
            if (onBoardError?.name_space_validation) {
              setOnBoardError({
                ...onBoardError,
                name_space_validation: false,
              });
            }
            if (onBoardError?.name_isnumber_validation) {
              setOnBoardError({
                ...onBoardError,
                name_isnumber_validation: false,
              });
            }
          }}
        />
        {onBoardError?.name_blank_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter your name
          </p>
        )}
        {onBoardError?.name_space_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Name can not start with a space
          </p>
        )}
        {onBoardError?.name_isnumber_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter a valid name
          </p>
        )}
      </div>
      <div>
        <p className="text-[14px] font-medium leading-7 font-poppins">
          Email *
        </p>
        <input
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
          placeholder="Please enter your email"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
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
        <p className="text-[14px] font-medium leading-7 font-poppins">
          Phone Number *
        </p>
        <input
          value={fistPageOnboard?.phone_number}
          type="number"
          onChange={(e) => {
            const inputValue = e.target.value;
            // Allow only numbers and prevent negative values
            if (/^\d*$/.test(inputValue)) {
              if (inputValue?.length <= 10) {
                setFirstPageOnboard({
                  ...fistPageOnboard,
                  phone_number: inputValue,
                });
              }
              if (onBoardError?.mobile_number_blank_validation) {
                setOnBoardError({
                  ...onBoardError,
                  mobile_number_blank_validation: false,
                });
              }
              if (onBoardError?.mobile_invalid_format) {
                setOnBoardError({
                  ...onBoardError,
                  mobile_invalid_format: false,
                });
              }
            }
          }}
          maxLength={10}
          placeholder="Please enter your phone number"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
        />
        {onBoardError?.mobile_number_blank_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter your mobile number
          </p>
        )}
        {onBoardError?.mobile_invalid_format && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter the valid mobile number
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
          value={fistPageOnboard?.dob}
          onChange={(e) => {
            setFirstPageOnboard({
              ...fistPageOnboard,
              dob: e.target.value,
            });
            if (onBoardError?.dob_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                dob_blank_validation: false,
              });
            }
          }}
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
        />
        {onBoardError?.dob_blank_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter your date of birth
          </p>
        )}
      </div>
      {/* PAN Number */}
      <div>
        <p className="text-[14px] font-medium leading-7 font-poppins">
          Pan Number *
        </p>
        <input
          placeholder="Please enter your PAN"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
          type="text"
          value={fistPageOnboard?.pan_number}
          onChange={(e) => {
            setFirstPageOnboard({
              ...fistPageOnboard,
              pan_number: e.target.value,
            });
            if (onBoardError?.pan_number_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                pan_number_blank_validation: false,
              });
            }
            if (onBoardError?.pan_number_invalid_format) {
              setOnBoardError({
                ...onBoardError,
                pan_number_blank_validation: false,
              });
            }
          }}
          maxLength={10}
        />
        {onBoardError?.pan_number_blank_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter your PAN number
          </p>
        )}
        {onBoardError?.pan_number_invalid_format && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter a valid PAN number
          </p>
        )}
      </div>
      {/* Aadhaar Number */}
      {/* <div>
        <p className="text-[14px] font-medium leading-7 font-poppins">
          Aadhaar Number *
        </p>
        <input
          placeholder="Please enter your aadhaar Number"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[45px] w-full rounded-3xl focus:outline-none"
          type="text"
          value={fistPageOnboard?.aadhaar_number}
          onChange={(e) => {
            setFirstPageOnboard({
              ...fistPageOnboard,
              aadhaar_number: e.target.value,
            });
            if (onBoardError?.aadhaar_number_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                aadhaar_number_blank_validation: false,
              });
            }
            if (onBoardError?.aadhaar_number_invalid_format) {
              setOnBoardError({
                ...onBoardError,
                aadhaar_number_invalid_format: false,
              });
            }
          }}
          maxLength={12}
        />
        {onBoardError?.aadhaar_number_blank_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter your aadhaar number
          </p>
        )}
        {onBoardError?.aadhaar_number_invalid_format && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter a valid aadhar number
          </p>
        )}
      </div> */}
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

export default KYCPancard;
