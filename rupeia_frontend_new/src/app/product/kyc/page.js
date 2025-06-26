"use client";
import KYCAddessInformation from "@/app/components/KYC/KYCAddessInformation";
import KYCAddNominee from "@/app/components/KYC/KYCAddNominee";
import KYCBankDetails from "@/app/components/KYC/KYCBankDetails";
import KYCEmail from "@/app/components/KYC/KYCEmail";
import KYCInvestorInformation from "@/app/components/KYC/KYCInvestorInformation";
import KYCInvestorInformation2 from "@/app/components/KYC/KYCInvestorInformation2";
import KYCNomineeForm from "@/app/components/KYC/KYCNomineeForm";
import KYCPancard from "@/app/components/KYC/KYCPancard";
import KYCPersonalInfromation2 from "@/app/components/KYC/KYCPersonalInfromation2";
import KYCPersonalnformation from "@/app/components/KYC/KYCPersonalnformation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Page = () => {
  const router = useRouter();
  const [pageStep, setPageStep] = useState(6);
  // Personal Information
  const [fistPageOnboard, setFirstPageOnboard] = useState({
    name: "",
    pan_number: "",
    dob: "",
    email_id: "",
    phone_number: "",
    aadhaar_number: "",
  });
  const [secondPageOnboard, setSecondPageOnboard] = useState({
    marital_status: "",
    gender: "",
    father_name: "",
    occupation_type: "",
    mother_name: "",
    residential_status: "",
    spouse_name: "",
  });
  const [thirdPageOnboard, setThirdPageOnboard] = useState({
    occupation_type: "",
    income_slab: "",
  });
  const [fourthPageOnboard, setFourthPageOnboard] = useState({
    address_1: "",
    pin_code: "",
    city: "",
    state: "",
  });
  const [fifthPageOnboard, setFifthPageOnboard] = useState({
    account_name: "",
    account_number: "",
    confirm_account_number: "",
    ifsc_code: "",
  });
  const [sevenPageOnboard, setSevenPageOnboard] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    relationship: "",
  });
  return (
    <div className=" px-5 font-poppins flex flex-col h-full relative overflow-y-auto">
      <div className="flex items-center justify-between mt-4">
        <div
          className="kyc-back-button p-1 rounded-full border-[1px] border-[#794083] w-fit"
          onClick={() => {
            if (pageStep > 1) {
              setPageStep(pageStep - 1);
            }
          }}
        >
          <BsArrowLeftShort className="text-[22px]" />
        </div>
        <div>
          <p className="text-[16px] leading-7 font-semibold">
            {pageStep == 1 && "KYC Verification"}
            {(pageStep == 2 || pageStep == 3) && "Personal Information"}
            {pageStep == 4 && "Address Information"}
            {pageStep == 5 && "Manage Bank"}
            {pageStep == 6 && "Nominee"}
            {pageStep == 7 && "Add Nominee"}
          </p>
        </div>
        <div
          onClick={() => {
            router.push("/product");
          }}
        >
          <RxCross2 />
        </div>
      </div>
      <div className="mt-4">
        <div className="border-[2px] rounded-3xl border-[#D9D9D975]"></div>
      </div>

      <div className="mt-5 mb-4 h-full">
        {pageStep == 1 && (
          <KYCPancard
            setFirstPageOnboard={setFirstPageOnboard}
            fistPageOnboard={fistPageOnboard}
            setPageStep={setPageStep}
            pageStep={pageStep}
          />
        )}{" "}
        {pageStep == 2 && (
          <KYCEmail
            setPageStep={setPageStep}
            setSecondPageOnboard={setSecondPageOnboard}
            secondPageOnboard={secondPageOnboard}
            fistPageOnboard={fistPageOnboard}
          />
        )}{" "}
        {pageStep == 3 && (
          <KYCPersonalInfromation2
            setThirdPageOnboard={setThirdPageOnboard}
            thirdPageOnboard={thirdPageOnboard}
            fistPageOnboard={fistPageOnboard}
            secondPageOnboard={secondPageOnboard}
            setPageStep={setPageStep}
          />
        )}
        {pageStep == 4 && (
          <KYCAddessInformation
            setFourthPageOnboard={setFourthPageOnboard}
            fourthPageOnboard={fourthPageOnboard}
            setPageStep={setPageStep}
            fistPageOnboard={fistPageOnboard}
          />
        )}
        {pageStep == 5 && (
          <KYCBankDetails
            setFifthPageOnboard={setFifthPageOnboard}
            fifthPageOnboard={fifthPageOnboard}
            setPageStep={setPageStep}
          />
        )}
        {pageStep == 6 && <KYCAddNominee setPageStep={setPageStep} />}
        {pageStep == 7 && (
          <KYCNomineeForm
            setSevenPageOnboard={setSevenPageOnboard}
            sevenPageOnboard={sevenPageOnboard}
            setPageStep={setPageStep}
          />
        )}
      </div>
      {/* {pageStep > 5 && (
        <div className="border-[1px] border-[#65636394] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl ">
          <button
            className=" bg-[#551262] w-full  py-2 rounded-full text-[15px] leading-7 font-medium text-white"
            type="button"
            onClick={() => {
              if (pageStep > 1 && pageStep < 6) {
                setPageStep(pageStep + 1);
              }
            }}
          >
            Continue
          </button>
        </div>
      )} */}
    </div>
  );
};

export default Page;
