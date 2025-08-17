import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import ShowSucessmessages from "../alert/ShowSucessmessages";
import ShowErroemessage from "../alert/ShowErroemessage";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/app/utility/firebase";
import axios from "axios";
import { handleApiError } from "@/app/utility/handleApiError";
import ButtonLoader from "../Loader/ButtonLoader";

const SceduleCall = ({ closeScheduleCall = () => {} }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    language: "english",
    any_thing_else_word: "",
  });
  const [loading, setLoading] = useState(false);

  const submitButton = async () => {
    try {
      if (localStorage.getItem("accessTokenForLandingPage")?.length > 0) {
        const now = new Date();
        const date = now.toLocaleDateString("en-GB").split("/").join("-"); // "dd-mm-yyyy"
        const time = now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        // ✅ Prepare data for schedule call API
        const scheduleCallData = {
          phoneNumber: formData.phone_number,
          date: date,
          time: time,
          issueDescription: formData?.any_thing_else_word,
          language: formData?.language,
        };
        const accessToken = localStorage.getItem("accessTokenForLandingPage");
        const scheduleCallResponse = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/schedule-call-web/`,
          scheduleCallData,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log("📞 Schedule Call Response:", scheduleCallResponse?.data);
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
          const now = new Date();
          const date = now.toLocaleDateString("en-GB").split("/").join("-"); // "dd-mm-yyyy"
          const time = now.toTimeString().slice(0, 5); // "HH:MM"
          // ✅ Prepare data for schedule call API
          const scheduleCallData = {
            phoneNumber: formData.phone_number,
            date: date,
            time: time,
            issueDescription: formData?.any_thing_else_word,
            language: formData?.language,
          };
          const scheduleCallResponse = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/schedule-call-web/`,
            scheduleCallData,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
              },
            }
          );
          console.log("📞 Schedule Call Response:", scheduleCallResponse?.data);
        }
      }
    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute bg-[#000000BA] min-h-screen w-screen  z-50 top-32 sm:top-20 flex justify-center items-center ">
      <div className="schedule-call w-[90%] sm:w-[491px] h-fit rounded-[15px] ">
        <div className="flex justify-between border-b-[1px] border-[#916D98] p-5">
          <div>
            <p className="schedule-text text-[17px] sm:text-[20px] font-medium">
              Schedule a call with us!
            </p>
          </div>

          <RxCross1
            className="text-white text-[30px] cursor-pointer"
            onClick={() => {
              closeScheduleCall();
            }}
          />
        </div>
        <div className="flex flex-col gap-5 px-5 pb-5 mt-2 w-full">
          <div className="flex justify-between items-center w-full mt-6 gap-4 sm:gap-10">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-[15px] font-medium">First Name</p>
              <input
                type="text"
                className="border-[1px] border-[#916D98] h-[48px] w-[100%] rounded-4xl text-[16px] font-medium px-2 focus:outline-none text-[#A286A8]"
                placeholder="Aryan"
                onChange={(e) => {
                  setFormData({ ...formData, first_name: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="text-[15px] font-medium">First Name</p>
              <input
                type="text"
                className="border-[1px] border-[#916D98] h-[48px] w-[100%] rounded-4xl text-[16px] font-medium px-2 focus:outline-none text-[#A286A8]"
                placeholder="Singh"
                onChange={(e) => {
                  setFormData({ ...formData, last_name: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-ful">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-[15px] font-medium">Phone Number</p>
              <input
                type="text"
                className="border-[1px] text-[#A286A8] border-[#916D98] h-[48px] w-full rounded-4xl text-[16px] font-medium px-4 focus:outline-none"
                placeholder="+91 00000 00000"
                onChange={(e) => {
                  setFormData({ ...formData, phone_number: e.target.value });
                }}
                maxLength={10}
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full gap-4 sm:gap-10">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-[15px] font-medium">Language</p>
              <div className="flex justify-between w-full gap-4 sm:gap-10">
                <button
                  type="button"
                  className={` cursor-pointer h-[48px] w-[100%] rounded-4xl text-[16px] font-medium px-2 focus:outline-none ${
                    formData.language == "english"
                      ? "bg-[#FFFFFF] text-[#2A0433]"
                      : "border-[1px] border-[#916D98] text-[#A286A8]"
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, language: "english" });
                  }}
                >
                  English
                </button>
                <button
                  type="button"
                  className={`cursor-pointer h-[48px] w-[100%] rounded-4xl text-[16px] font-medium px-2 focus:outline-none ${
                    formData.language == "hindi"
                      ? "bg-[#FFFFFF] text-[#2A0433]"
                      : "border-[1px] border-[#916D98] text-[#A286A8]"
                  }`}
                  onClick={() => {
                    setFormData({ ...formData, language: "hindi" });
                  }}
                >
                  Hindi
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-ful">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-[15px] font-medium">
                Anything else you want to share?
              </p>
              <input
                type="text"
                className="border-[1px] text-[#A286A8] border-[#916D98] h-[48px] w-full rounded-4xl text-[16px] font-medium px-4 focus:outline-none"
                placeholder="Enter text here..."
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    any_thing_else_word: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="flex justify-center items-center pb-5">
            <button
              className="bg-[#551262] h-[47px] sm:h-[57px] w-[191px] rounded-[12px] cursor-pointer"
              onClick={() => {
                submitButton();
              }}
            >
              {loading ? <ButtonLoader /> : "Schedule a call"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SceduleCall;
