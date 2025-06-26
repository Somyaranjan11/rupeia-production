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

const LoginComponent = () => {
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
      console.log("Email:", email);
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Google Photo URL:", photoUrl);

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
          localStorage.setItem("accessToken", response?.data?.accessToken);
          getUserData(response?.data?.accessToken);
        }
      } catch (error) {
        console.error("❌ Error:", error.response?.data || error.message);
        ShowErroemessage(error.response?.data?.message);
      } finally {
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };
  const getUserData = async (token) => {
    let token_id = token ? token : localStorage.getItem("accessToken");
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/me`,
        {
          headers: {
            Authorization: `Bearer ${token_id}`, // <-- add Authorization header
          },
        }
      );
      console.log("✅ Response:", response.data);
      localStorage.setItem("userData", JSON.stringify(response?.data?.user));
      router.push("/product");
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
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
        <p className="text-[13px] font-medium leading-5 text-white">
          Continue with Google
        </p>
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
