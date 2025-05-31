import React, { useRef, useState } from "react";
import ShowErroemessage from "../alert/ShowErroemessage";
import ButtonLoader from "../Loader/ButtonLoader";
import { useRouter } from "next/navigation";

const VerifyPin = ({ setFirstPageOnboard, fistPageOnboard, setPage, page }) => {
  const router = useRouter();
  const inputsRef = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length > 1) return;

    const newPin = [...(fistPageOnboard.verify_pin || ["", "", "", ""])];
    newPin[index] = value;

    setFirstPageOnboard({ ...fistPageOnboard, verify_pin: newPin });

    // Auto-focus next input
    if (value && index < 3) {
      inputsRef[index + 1].current.focus();
    }
  };

  const handleContinue = () => {
    const pin = (fistPageOnboard.pin || []).join("");
    const verify_pin = (fistPageOnboard.verify_pin || []).join("");
    if (verify_pin < 5) {
      ShowErroemessage("Please enter a 4-digit PIN");
      return;
    } else {
      if (pin == verify_pin) {
        setPin();
      } else {
        ShowErroemessage("PIN is not matched with confirm PIN");
      }
    }
  };
  const [loading, setLoading] = useState(false);
  const setPin = async () => {
    const payloadData = {
      pin: fistPageOnboard?.pin,
      confirmPin: fistPageOnboard?.verify_pin,
    };
    const token = localStorage.getItem("register_access_token");
    try {
      setLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/setup-pin`,
        payloadData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // <-- correct place for headers
          },
        }
      );
      console.log("response?.data", response?.data);
      if (response?.data?.success) {
        ShowSucessmessages("PIN is successfully set");
        router.push("/product/sign-in");
      }
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
      ShowErroemessage("Unable to set PIN. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-5 flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-5">
        <p className="text-[13px] leading-5 font-normal px-5 text-center">
          Confirm your Rupeia pin
        </p>
        <div className="flex flex-row gap-5 px-10">
          {[0, 1, 2, 3].map((i) => (
            <input
              key={i}
              ref={inputsRef[i]}
              maxLength={1}
              className="text-center border-b-[1px] border-[#FFFFFF] text-[14px] font-medium leading-7 text-[#FFFFFF] px-3 h-[42px] w-full focus:outline-none"
              value={(fistPageOnboard.verify_pin || ["", "", "", ""])[i]}
              type="text"
              onChange={(e) => handleChange(e, i)}
            />
          ))}
        </div>
      </div>
      <div className="border-[1px] border-[#65636394] py-4 px-5 fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl">
        <button
          className="bg-[#551262] w-full py-2 rounded-full text-[15px] leading-7 font-medium text-white"
          type="button"
          onClick={handleContinue}
        >
          {loading ? <ButtonLoader /> : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default VerifyPin;
