"use client";

import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

// JSON with categories
const faqsData = {
  "Rupeia App FAQs": [
    {
      question: "Is Rupeia a registered investment platform?",
      answer:
        "Yes. Rupeia is an AMFI-registered mutual fund distributor, compliant with all regulatory standards.",
    },
    {
      question: "Is my data and money safe on Rupeia?",
      answer:
        "Yes. Rupeia uses bank-grade encryption and secure payment gateways like Razorpay to protect your personal and financial information.",
    },
    {
      question: "Who manages the mutual funds I invest in?",
      answer:
        "Mutual funds on Rupeia are managed by SEBI-regulated Asset Management Companies (AMCs). Rupeia facilitates the investment process but does not manage the funds directly.",
    },
    {
      question: "What is the minimum amount required to start investing?",
      answer:
        "You can begin your investment journey with as little as ₹500, through either SIP or lump sum.",
    },
    {
      question: "Is KYC required to use Rupeia?",
      answer:
        "Yes. A one-time e-KYC using your PAN, Aadhaar, and the mobile number linked to your Aadhaar is mandatory.",
    },
    {
      question: "How long does KYC verification take?",
      answer:
        "Most KYC verifications are completed instantly, though it can take up to 24 hours in some cases.",
    },
    {
      question: "What types of funds can I invest in using Rupeia?",
      answer:
        "You can invest in Equity, Debt, Hybrid, ELSS (Tax Saving), and Index funds tailored to your financial goals and risk appetite.",
    },
    {
      question: "Does Rupeia provide fund recommendations?",
      answer:
        "Yes. Rupeia provides personalized fund recommendations based on your investment goals, time horizon, and risk profile.",
    },
    {
      question: "Can I invest in tax-saving mutual funds?",
      answer:
        "Yes. Rupeia allows you to invest in ELSS funds, which qualify for tax deductions under Section 80C of the Income Tax Act.",
    },
    {
      question: "Are there any hidden fees or charges?",
      answer:
        "No. Rupeia does not charge users any hidden fees. It receives a standard distribution commission from mutual fund companies, which does not affect your investment amount or returns.",
    },
    {
      question: "How do I start or stop a SIP on Rupeia?",
      answer:
        "You can start, pause, or stop a SIP anytime from the app without any charges or penalties.",
    },
    {
      question: "Can I modify my SIP amount or frequency later?",
      answer:
        "Yes. You can change the SIP amount, date, or frequency directly from the app whenever needed.",
    },
    {
      question: "How do I withdraw my money from an investment?",
      answer:
        "Go to the Portfolio section, select the fund, click Withdraw, enter the amount, and confirm. The amount is credited to your bank account within 1–3 working days.",
    },
    {
      question: "Are there any lock-in periods or exit loads?",
      answer:
        "Most mutual funds do not have a lock-in period, except for ELSS, which has a 3-year lock-in. Exit loads may apply if you redeem the fund within a specific timeframe (usually 1 year for equity funds).",
    },
    {
      question:
        "What happens if my payment fails or the amount is deducted but not invested?",
      answer:
        "In rare cases, if a payment fails or gets delayed, the amount will be auto-refunded or invested within 24–48 hours. You can also reach out to customer support for help.",
    },
    {
      question: "Can I track my portfolio performance on Rupeia?",
      answer:
        "Yes. You can view real-time portfolio performance, returns, and fund allocation directly within the app.",
    },
    {
      question: "Can I set and manage multiple financial goals?",
      answer:
        "Yes. Rupeia allows you to create and track goals such as home buying, travel, child education, and retirement.",
    },
    {
      question: "Will Rupeia help with portfolio rebalancing?",
      answer:
        "Yes. Rupeia provides timely rebalancing suggestions based on market conditions and your risk profile to keep your investments aligned with your goals.",
    },
  ],
  "Withdrawal FAQs": [
    {
      question: "How do I withdraw my money from Rupeia?",
      answer:
        "You can withdraw your mutual fund investments at any time (except in cases like ELSS, which have a lock-in period). Steps: Go to Portfolio → Select Fund → Click Withdraw → Enter Amount → Confirm.",
    },
    {
      question: "Is there any lock-in period for withdrawals?",
      answer:
        "Regular mutual funds: No lock-in; you can withdraw anytime. ELSS: 3-year lock-in period.",
    },
    {
      question: "Is there any exit load or penalty on withdrawal?",
      answer:
        "Rupeia does not charge any penalty. However, some mutual funds may charge a small exit load if redeemed early. This info is shown in the fund details.",
    },
    {
      question: "Can I withdraw a part of my investment?",
      answer:
        "Yes, you can withdraw either partially or fully. Just enter the amount you want to redeem.",
    },
    {
      question: "When will I receive the withdrawn money?",
      answer:
        "The mutual fund house processes it within 1–3 working days. The money is credited to your registered bank account.",
    },
    {
      question: "Will I lose returns if I withdraw early?",
      answer:
        "Yes, early withdrawal may reduce long-term gains and may attract exit load or tax. Holding longer generally gives better returns.",
    },
    {
      question: "Can I withdraw money if my SIP is paused?",
      answer:
        "Yes. Pausing SIP only stops future investments. Your existing investments remain active and can be withdrawn anytime (except lock-in cases).",
    },
    {
      question: "Do I need to submit any documents for withdrawal?",
      answer:
        "No. Withdrawals are 100% paperless and handled via the app. Your bank must be KYC-verified.",
    },
    {
      question: "Where will the withdrawn money be credited?",
      answer:
        "The money will be credited to your registered and verified bank account.",
    },
    {
      question: "What should I do if my withdrawal is delayed?",
      answer:
        "Delays are rare. If you haven't received your money in 3 working days, email support@rupeia.in with your transaction reference.",
    },
  ],
  "Support FAQs": [
    {
      question:
        "I made a payment, but it doesn’t reflect in my portfolio. What should I do?",
      answer:
        "Sometimes payments may take 24–48 hours to reflect. If not updated after 48h, email support@rupeia.com with your transaction ID.",
    },
    {
      question: "How can I contact Rupeia support?",
      answer:
        "Email: support@rupeia.com. Or use the in-app 'Raise a Ticket' option under Help section. A Help Center is also available inside the app.",
    },
    {
      question:
        "I uninstalled the app, but money is still getting deducted. What should I do?",
      answer:
        "Uninstalling the app does not cancel SIPs. Please reinstall, go to My SIPs → Stop SIP. Or contact support for help.",
    },
    {
      question: "My withdrawal is delayed. What should I do?",
      answer:
        "Withdrawals usually take 1–3 working days. If delayed, verify bank details and contact us with your reference number.",
    },
    {
      question: "Can I update my bank account or mobile number?",
      answer:
        "Yes. Go to Settings → Profile → Edit. Some updates may require re-verification as per SEBI rules.",
    },
    {
      question: "I forgot my login PIN. How can I reset it?",
      answer:
        "Click on ‘Forgot PIN’ on login screen. You'll receive an OTP on your registered mobile to reset securely.",
    },
    {
      question: "Is there a Help Centre in the app?",
      answer:
        "Yes. Go to Profile → Help & Support for FAQs, SIP guides, and fund selection tips.",
    },
  ],
};

const FAQS = () => {
  const [activeCategory, setActiveCategory] = useState("Rupeia App FAQs");
  const [open, setOpen] = useState(0);

  return (
    <div className="sm:px-36 py-4 px-6 sm:pt-10 pb-20">
      <p className="text-[32px] sm:text-[42px] my-5 pl-1 text-left font-medium bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent">
        All your questions, answered.
      </p>

      {/* Category Tabs */}
      <div className="flex gap-4 mb-6">
        {Object.keys(faqsData).map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setOpen(0); // close open answers when switching
            }}
            className={`px-4 py-2 rounded-2xl text-sm font-medium cursor-pointer ${
              activeCategory === category
                ? "bg-[#551262] text-white"
                : "bg-[#916D98] text-white opacity-70"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
        {faqsData[activeCategory].map((data, index) => (
          <div
            key={index}
            className="border-[0.3px] border-[#9563A2] why-rupeia-blur px-5 sm:px-8 flex flex-col gap-3 justify-between items-center py-4 rounded-4xl h-fit"
          >
            <div className="flex justify-between items-center gap-3 w-full">
              <span className="text-[14px] sm:text-[18px] font-medium leading-[150%] font-poppins text-[#ECE6ED]">
                {data?.question}
              </span>
              <span onClick={() => setOpen(open === index + 1 ? 0 : index + 1)}>
                <FaAngleDown className="text-white cursor-pointer" />
              </span>
            </div>
            {open === index + 1 && (
              <p className="text-[12px] sm:text-[14px] text-left text-[#D9D9D9]">
                {data?.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
