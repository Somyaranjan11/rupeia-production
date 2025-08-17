"use client";
import AnimateLoader from "@/app/components/Loader/AnimateLoader";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import { handleApiError } from "@/app/utility/handleApiError";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Page = () => {
  const handleClick = () => {
    console.log("hello");
  };
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const getTermsCondition = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/terms/current`
      );
      if (response.data?.data) {
        setContent(response?.data?.data?.content);
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTermsCondition();
  }, []);
  console.log("content", content);
  return (
    <div className="px-5 overflow-y-auto font-poppins flex flex-col h-screen pt-24 pb-16">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#1A0120]">
        <NavbarCommonPage
          page={"Terms and Conditions"}
          handleClick={handleClick}
        />
      </div>
      <div className="termscondition-parent-class">
        {loading ? (
          <AnimateLoader count={3} />
        ) : (
          <ReactMarkdown>{content}</ReactMarkdown>
        )}
      </div>
    </div>
  );
};

export default Page;
