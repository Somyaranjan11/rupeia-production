"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ShowErroemessage from "../alert/ShowErroemessage";
import ButtonLoader from "../Loader/ButtonLoader";
import axios from "axios";
import ShowSucessmessages from "../alert/ShowSucessmessages";

const SendQuery = ({ categoriesValue }) => {
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
  const submitFunction = () => {
    setLoading(true);
    const payloadData = {
      subject: categoriesValue,
      description: query,
      category: categoriesValue,
    };
    const token = localStorage.getItem("accessToken");
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
          ShowSucessmessages("Your ticket created successfully");
          router.push("/product")
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
    <div className="py-25 px-5 plan-card min-h-screen">
      <div className="flex flex-row items-center w-full gap-5 my-3">
        <button
          className={` border-[1px] border-[#AF7BB6] h-[48px] text-[14px] font-medium w-full rounded-full ${
            isEmail == "email" ? "bg-[#551262]" : ""
          }`}
          type="button"
          onClick={() => {
            setIsEmail("email");
          }}
        >
          Send Email
        </button>
        <button
          className={` border-[1px] border-[#AF7BB6] h-[48px] text-[14px] font-medium w-full rounded-full ${
            isEmail == "raise_ticket" ? "bg-[#551262]" : ""
          }`}
          type="button"
          onClick={() => {
            setIsEmail("raise_ticket");
          }}
        >
          Raise Ticket
        </button>
      </div>
      {isEmail == "email" && (
        <div className="mt-5 flex flex-col gap-7">
          <input
            type="text"
            className="border-b-[1px] border-[#FFFFFF] text-[#FFFFFF8C] text-[13px] font-medium w-full h-[48px] focus:outline-none"
            placeholder="Please write your query here..."
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            value={query}
          />
          <p className="text-[#FFFFFFB8] text-[13px] font-medium">
            Note: You can only raise 3 tickets in a day.
          </p>
        </div>
      )}
      {isEmail == "raise_ticket" && (
        <div className="mt-5 flex flex-col gap-7">
          <input
            type="text"
            className="border-b-[1px] border-[#FFFFFF] text-[#FFFFFF8C] text-[13px] font-medium w-full h-[48px] focus:outline-none"
            placeholder="Please write your query here..."
            value={"Email ID: Rupeai@gmail.com"}
          />
          <p className="text-[#FFFFFFB8] text-[13px] font-medium">
            Please send your query on this Email ID.
          </p>
        </div>
      )}

      {isEmail == "email" && (
        <div className="mt-10">
          <button
            className="bg-[#551262] w-full  h-[45px] rounded-4xl text-[15px] leading-7 font-medium text-white flex justify-center items-center"
            onClick={() => {
              submitTicket();
            }}
          >
            <p>Submit</p>
          </button>
        </div>
      )}
      {isEmail == "raise_ticket" && (
        <div className="py-4 px-5 fixed z-50 bottom-0 left-1/2 -translate-x-1/2 max-w-[calc(100%)] w-full rounded-3xl ">
          <button
            className={` bg-[#551262] w-full py-2 rounded-full text-[14px] leading-7 font-medium text-white`}
            type="button"
            onClick={() => {
              router.push("/product");
            }}
          >
            {loading ? <ButtonLoader /> : "Continue"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SendQuery;
