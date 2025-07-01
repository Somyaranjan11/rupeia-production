import React, { useState } from "react";
import ButtonLoader from "../Loader/ButtonLoader";
import ShowSucessmessages from "../alert/ShowSucessmessages";
import axios from "axios";

const KYCPersonalInfromation2 = ({
  setThirdPageOnboard,
  thirdPageOnboard,
  fistPageOnboard,
  secondPageOnboard,
  setPageStep,
}) => {
  const occupation_type = [
    {
      id: 1,
      name: "Business",
      value: "business",
    },
    {
      id: 2,
      name: "Professional",
      value: "professional",
    },
    {
      id: 3,
      name: "Retired",
      value: "retired",
    },
    {
      id: 4,
      name: "Student",
      value: "student",
    },
    {
      id: 5,
      name: "Public Sector",
      value: "public_sector",
    },
    {
      id: 6,
      name: "Private Sector",
      value: "private_sector",
    },
    {
      id: 7,
      name: "Government Sector",
      value: "government_sector",
    },
    {
      id: 8,
      name: "Others",
      value: "others",
    },
  ];
  const income_slab = [
    {
      id: 1,
      name: "Less than 1 lakh",
      value: "upto_1lakh",
    },
    {
      id: 2,
      name: "1 lakh - 5 lakh",
      value: "above_1lakh_upto_5lakh",
    },
    {
      id: 3,
      name: "5 lakh - 10 lakh",
      value: "above_5lakh_upto_10lakh",
    },
    {
      id: 4,
      name: "10 lakh - 25 lakh",
      value: "above_10lakh_upto_25lakh",
    },
    {
      id: 5,
      name: "25 lakh - 1 Cr",
      value: "above_25lakh_upto_1cr",
    },
    {
      id: 6,
      name: "Above 1 Cr",
      value: "above_1cr",
    },
  ];
  const [onBoardError, setOnBoardError] = useState({
    occupation_type_validation: false,
    income_slab_type_validation: false,
  });
  const [loading, setLoading] = useState(false);
  const onBoardFunction = () => {
    if (thirdPageOnboard?.occupation_type == "") {
      setOnBoardError({
        ...onBoardError,
        occupation_type_validation: true,
      });
    } else if (thirdPageOnboard?.income_slab == "") {
      setOnBoardError({
        ...onBoardError,
        income_slab_type_validation: true,
      });
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
    const kyc_id = localStorage.getItem("kyc_id");
    // Investor Profile.
    const investor_profile = {
      type: "individual",
      tax_status: "resident_individual",
      name: fistPageOnboard?.name,
      date_of_birth: fistPageOnboard?.dob,
      gender: secondPageOnboard?.gender?.toLowerCase(),
      occupation: thirdPageOnboard?.occupation_type,
      pan: fistPageOnboard?.pan_number,
      country_of_birth: "IN",
      place_of_birth: "IN",
      use_default_tax_residences: "false",
      pep_details: "not_applicable",
      ip_address: "192.92.12.39",
      first_tax_residency: {
        country: "IN",
        taxid_type: "pan",
        taxid_number: fistPageOnboard?.pan_number,
      },
      second_tax_residency: "IN",
      third_tax_residency: "IN",
      source_of_wealth: "salary",
      income_slab: thirdPageOnboard?.income_slab,
      father_name: secondPageOnboard?.father_name,
      mother_name: secondPageOnboard?.mother_name,
      guardian_name: secondPageOnboard?.father_name,
    };
    axios
      .all([
        axios.patch(
          `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/kyc/kyc_requests/${kyc_id}`,
          payloadData,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${token}`,
            },
          }
        ),
        axios.post(
          `${process.env.NEXT_PUBLIC_ONBOARDING_BASE_URL}/invProfiles/createProfile`,
          investor_profile,
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
            ShowSucessmessages("Details have been updated");
          }
          if (res2) {
            ShowSucessmessages("Investor profile created");
            if (res2?.data?.id) {
              localStorage.setItem("profile_id", res2?.data?.id);
              localStorage.setItem("kyc_status", res1?.data?.status);
            }
            setPageStep(4);
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
    <div className="flex flex-col gap-3">
      <div className="flex flex-col relative">
        <p className="text-[15px] font-medium leading-7 font-poppins">
          Occupation
        </p>
        {/* Dropdown Button */}
        <div className="flex flex-row flex-wrap gap-2 mt-1">
          {occupation_type?.map((item, index) => (
            <div className="w-fit"
             key={index}
            >
              <button
                className={`border-[1px] border-[#916D98] text-[14px] font-medium leading-7  px-6 h-[40px] w-fit rounded-3xl focus:outline-none ${
                  thirdPageOnboard.occupation_type == item.value
                    ? "bg-white text-[#916D98] font-semibold"
                    : "text-[#FFFFFF]"
                } `}
                type="button"
                onClick={() => {
                  setThirdPageOnboard({
                    ...thirdPageOnboard,
                    occupation_type: item.value,
                  });
                  setOnBoardError({
                    ...onBoardError,
                    occupation_type_validation: false,
                  });
                }}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
        {onBoardError.occupation_type_validation && (
          <p className="text-[15px] font-normal text-red-400 mt-1">
            Please select your occupation
          </p>
        )}
      </div>
      <div className="flex flex-col relative">
        <p className="text-[15px] font-medium leading-7 font-poppins">
          Income Slab
        </p>
        {/* Dropdown Button */}
        <div className="flex flex-row flex-wrap gap-2 mt-1">
          {income_slab?.map((item, index) => (
            <div className="w-fit"
             key={index}
            >
              <button
                className={`border-[1px] border-[#916D98] text-[14px] font-medium leading-7  px-6 h-[40px] w-fit rounded-3xl focus:outline-none ${
                  thirdPageOnboard.income_slab == item.value
                    ? "bg-white text-[#916D98] font-semibold"
                    : "text-[#FFFFFF]"
                }`}
                type="button"
                onClick={() => {
                  setThirdPageOnboard({
                    ...thirdPageOnboard,
                    income_slab: item.value,
                  });
                  setOnBoardError({
                    ...onBoardError,
                    income_slab_type_validation: false,
                  });
                }}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
        {onBoardError.income_slab_type_validation && (
          <p className="text-[15px] font-normal text-red-400 mt-1">
            Please select your income slab
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

export default KYCPersonalInfromation2;
