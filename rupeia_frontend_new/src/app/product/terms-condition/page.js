"use client";
import NavbarCommonPage from "@/app/components/NavbarCommonPage";
import React from "react";

const Page = () => {
  const handleClick = () => {
    console.log("hello");
  };
  return (
    <div className="px-5 overflow-y-auto font-poppins flex flex-col h-screen pt-24 pb-16">
      <div className="px-5 fixed top-0 left-0 w-full z-10 shadow-md bg-[#551262]">
        <NavbarCommonPage
          page={"Terms and Conditions"}
          handleClick={handleClick}
        />
      </div>
      <div>
        <div>
          <p className="text-[21px] font-semibold leading-7">
            Platform Terms of Service{" "}
          </p>
          <p className="text-[13px] font-medium leading-6 mt-2">
            Welcome to Rupeia! By accessing and using our services, you agree to
            comply with the following Terms and Conditions. Please read them
            carefully before using our platform.
          </p>
          <p className="text-[13px] font-medium leading-6 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text-[13px] font-medium leading-6 mt-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <p className="text-[13px] font-medium leading-6 mt-2">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
