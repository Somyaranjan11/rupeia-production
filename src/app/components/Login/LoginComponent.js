import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa6";
import { IoLogInOutline } from "react-icons/io5";
import { CgLogIn } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { auth, provider } from "../../utility/firebase";
import { signInWithPopup } from "firebase/auth";
import ShowSucessmessages from "../alert/ShowSucessmessages";
import ShowErroemessage from "../alert/ShowErroemessage";
import axios from "axios";
import { handleApiError } from "@/app/utility/handleApiError";
import ButtonLoader from "../Loader/ButtonLoader";

const LoginComponent = ({
  setFirstPageOnboard,
  fistPageOnboard,
  setPage,
  page,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // ✅ Extract profile info
      const user = result.user;
      const email = user.email;
      const fullName = user.displayName || ""; // e.g. "John Doe"
      const photoUrl = user.photoURL;
      const [firstName, lastName] = fullName.split(" ");
      const payloadData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        referralCode: "",
        googlePhotoUrl: photoUrl,
      };
      try {
        setLoading(true);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/oauth/google`,
          payloadData
        );
        console.log("response?.data", response?.data);
        if (response?.data?.success) {
          ShowSucessmessages(response?.data?.message);
          const userState = response?.data?.user;
          if (
            userState?.userAuthState == "PHONE_NOT_VERIFIED" &&
            userState?.phoneNumber &&
            userState?.phoneNumber.length > 0
          ) {
            sendOTPToMobileNumber(
              userState?.phoneNumber,
              response?.data?.accessToken
            );
            setFirstPageOnboard({
              phone_number: userState?.phoneNumber,
            });
          } else if (
            userState?.userAuthState == "PHONE_NOT_VERIFIED" &&
            !userState?.phoneNumber
          ) {
            setPage(3);
          }
          if (localStorage.getItem("accessToken")) {
            localStorage.removeItem("accessToken");
            localStorage.setItem("accessToken", response?.data?.accessToken);
          } else {
            localStorage.setItem("accessToken", response?.data?.accessToken);
          }
        }
      } catch (error) {
        handleApiError(error);
      } finally {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };
  const sendOTPToMobileNumber = async (number, token) => {
    const payloadData = {
      phoneNumber: `${number}`,
    };
    try {
      setLoading(true);
      let token_id = token;
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/otp/request-otp`,
        payloadData,
        {
          headers: {
            Authorization: `Bearer ${token_id}`, // <-- add Authorization header
          },
        }
      );
      if (response?.data?.success) {
        ShowSucessmessages("OTP has send successfully");
        setPage(2);
        if (fistPageOnboard?.phone_otp) {
          setFirstPageOnboard({
            ...fistPageOnboard,
            phone_otp: "",
          });
        }
      } else {
        console.log("error");
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#D9B9E2] p-5 flex flex-col gap-2 rounded-t-xl">
      <div
        className="bg-[#270330] rounded-2xl flex justify-center items-center gap-2 py-2"
        onClick={handleLogin}
      >
        <span>
          <FcGoogle />
        </span>
        {loading ? (
          <ButtonLoader />
        ) : (
          <p className="text-[13px] font-medium leading-5 text-white">
            Continue with Google
          </p>
        )}
      </div>
      <div
        className="bg-[#270330] rounded-2xl flex justify-center items-center gap-2 py-2"
        onClick={() => {
          router.push("/product/sign-up");
        }}
      >
        <span>
          <CgLogIn className="text-white text-[20px]" />
        </span>
        <p className="text-[13px] font-medium leading-5 text-white">Sign Up</p>
      </div>
      <div
        className="bg-[#270330] rounded-2xl flex justify-center items-center gap-2 py-2"
        onClick={() => {
          router.push("/product/sign-in");
        }}
      >
        <span>
          <IoLogInOutline className="text-white text-[20px]" />
        </span>
        <p className="text-[13px] font-medium leading-5 text-white">Log in</p>
      </div>
    </div>
  );
};

export default LoginComponent;
