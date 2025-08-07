"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ShowErroemessage from "../alert/ShowErroemessage";
import ButtonLoader from "../Loader/ButtonLoader";
import axios from "axios";
import ShowSucessmessages from "../alert/ShowSucessmessages";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/app/utility/firebase";


const SubmitQuery = ({ categoriesValue }) => {
  const router = useRouter();
  const [isEmail, setIsEmail] = useState("email");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const submitTicket = () => {
    if (query?.length == 0) {
      ShowErroemessage("Please enter your query");
    } else {
      submitFunction();
    }
  };
  const submitFunction = async () => {
    if (localStorage.getItem("accessTokenForLandingPage")?.length > 0) {
      setLoading(true);
      const payloadData = {
        subject: categoriesValue,
        description: query,
        category: categoriesValue,
      };
      const token = localStorage.getItem("accessTokenForLandingPage");
      axios
        .post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/tickets/create`,
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
            ShowSucessmessages("Support ticket created successfully");
            router.push("/landing-page");
          }
        })
        .catch((error) => {
          console.log("error is", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const email = user.email;
      const fullName = user.displayName || "";
      const photoUrl = user.photoURL;
      const [firstName, lastName] = fullName.split(" ");

      const payloadData = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        referralCode: "",
        googlePhotoUrl: photoUrl,
      };
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/oauth/google`,
        payloadData
      );
      if (response?.data?.success) {
        ShowSucessmessages(response?.data?.message);
        const accessToken = response?.data?.accessToken;
        // Save token to local storage
        localStorage.setItem("accessTokenForLandingPage", accessToken);
        // ✅ Prepare data for schedule call API
        const payloadData = {
          subject: categoriesValue,
          description: query,
          category: categoriesValue,
        };
        caxios
          .post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/tickets/create`,
            payloadData,
            {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((response) => {
            if (response) {
              ShowSucessmessages("Support ticket created successfully");
              router.push("/landing-page");
            }
          })
          .catch((error) => {
            console.log("error is", error);
          });
      }
    }
  };
  return (
    <div>
      <div className="h-fit flex flex-col">
        <span className="text-[19px] font-medium">
          <p className="text-white">Okay! Now tell us about your query.</p>{" "}
        </span>
      </div>{" "}
      <div className="mt-5">
        <div>
          <textarea
            type="text"
            placeholder="Please write your query here..."
            className="text-[13px] font-medium px-3 py-2 leading-6 border-[1px] border-[#916D98] h-[135px] w-full rounded-[20px] focus:outline-none"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <div className="flex justify-center items-center mb-7 mt-2">
          <button
            className={` rounded-[12px] h-[50px] w-[191px] bg-[#551262] text-white cursor-pointer `}
            onClick={() => {
              submitTicket();
            }}
            type="button"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitQuery;
