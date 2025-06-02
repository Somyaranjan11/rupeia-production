import React, { useState } from "react";
import ButtonLoader from "../Loader/ButtonLoader";
import ShowErroemessage from "../alert/ShowErroemessage";
import ShowSucessmessages from "../alert/ShowSucessmessages";
import axios from "axios";

const SignUpComponent2 = ({
  setFirstPageOnboard,
  fistPageOnboard,
  setPage,
  page,
}) => {
  const [onBoardError, setOnBoardError] = useState({
    first_name_blank_validation: false,
    first_name_space_validation: false,
    first_name_isnumber_validation: false,
    second_name_blank_validation: false,
    second_name_space_validation: false,
    second_name_isnumber_validation: false,
  });
  const [loading, setLoading] = useState(false);
  const signUpFunction = async () => {
    if (fistPageOnboard?.first_name == "") {
      setOnBoardError({ ...onBoardError, first_name_blank_validation: true });
      return;
    } else if (/^\s/.test(fistPageOnboard?.first_name)) {
      setOnBoardError({ ...onBoardError, first_name_space_validation: true });
    } else if (/\d/.test(fistPageOnboard?.first_name)) {
      setOnBoardError({
        ...onBoardError,
        first_name_isnumber_validation: true,
      });
    } else if (fistPageOnboard?.last_name == "") {
      setOnBoardError({ ...onBoardError, second_name_blank_validation: true });
      return;
    } else if (/^\s/.test(fistPageOnboard?.last_name)) {
      setOnBoardError({ ...onBoardError, second_name_space_validation: true });
    } else if (/\d/.test(fistPageOnboard?.last_name)) {
      setOnBoardError({
        ...onBoardError,
        second_name_isnumber_validation: true,
      });
    } else {
      const payloadData = {
        email: fistPageOnboard?.email_id,
        firstName: fistPageOnboard?.first_name,
        lastName: fistPageOnboard?.last_name,
        referralCode: "",
        tempToken: fistPageOnboard?.temp_token,
      };
      try {
        setLoading(true);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
          payloadData
        );
        console.log("response?.data", response?.data);
        if (response?.data?.success) {
          ShowSucessmessages("Registration completed");
          localStorage.setItem(
            "accessToken",
            response?.data?.accessToken
          );
          setPage(page + 1);
        }
      } catch (error) {
        console.error("❌ Error:", error.response?.data || error.message);
        ShowErroemessage("Unable to register. Please try again");
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="px-5 flex flex-col gap-5 w-full">
      <div>
        <input
          placeholder="First name*"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[52px] w-full rounded-3xl focus:outline-none"
          value={fistPageOnboard?.first_name}
          type="text"
          onChange={(e) => {
            setFirstPageOnboard({
              ...fistPageOnboard,
              first_name: e.target.value,
            });
            if (onBoardError?.first_name_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                first_name_blank_validation: false,
              });
            }
            if (onBoardError?.first_name_space_validation) {
              setOnBoardError({
                ...onBoardError,
                first_name_space_validation: false,
              });
            }
            if (onBoardError?.first_name_isnumber_validation) {
              setOnBoardError({
                ...onBoardError,
                first_name_isnumber_validation: false,
              });
            }
          }}
        />
        {onBoardError?.first_name_blank_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter your first name
          </p>
        )}
        {onBoardError?.first_name_space_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            First Name can not start with a space
          </p>
        )}
        {onBoardError?.first_name_isnumber_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter a valid first name
          </p>
        )}
      </div>
      <div>
        <input
          placeholder="Second name*"
          className="border-[1px] border-[#916D98] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[52px] w-full rounded-3xl focus:outline-none"
          value={fistPageOnboard?.last_name}
          type="text"
          onChange={(e) => {
            setFirstPageOnboard({
              ...fistPageOnboard,
              last_name: e.target.value,
            });
            if (onBoardError?.second_name_blank_validation) {
              setOnBoardError({
                ...onBoardError,
                second_name_blank_validation: false,
              });
            }
            if (onBoardError?.second_name_space_validation) {
              setOnBoardError({
                ...onBoardError,
                second_name_space_validation: false,
              });
            }
            if (onBoardError?.second_name_isnumber_validation) {
              setOnBoardError({
                ...onBoardError,
                second_name_isnumber_validation: false,
              });
            }
          }}
        />
        {onBoardError?.second_name_blank_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter your last name
          </p>
        )}
        {onBoardError?.second_name_space_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Last name Name can not start with a space
          </p>
        )}
        {onBoardError?.second_name_isnumber_validation && (
          <p className="text-[14px] font-normal text-red-400 mt-1">
            Please enter a valid last name
          </p>
        )}
      </div>
      <div className="border-[1px] border-[#65636394] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl ">
        <button
          className=" bg-[#551262] w-full  py-2 rounded-full text-[15px] leading-7 font-medium text-white"
          type="button"
          onClick={() => {
            signUpFunction();
          }}
        >
          {loading ? <ButtonLoader /> : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default SignUpComponent2;
