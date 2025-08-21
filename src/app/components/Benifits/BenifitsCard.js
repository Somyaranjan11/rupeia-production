import React, { useEffect, useState } from "react";
import graphImage from "../Images/protpolio_graph.png";
import graphImage1 from "../Images/protfolio_graph_2.png";
import BenifitsCard2 from "./BenifitsCard2";
import BenifitsCard3 from "./BenifitsCard3";
import DSP from "../Images/Goals/DSP.png";
import DonutChart from "./DonutChart";
import axios from "axios";
import AnimateLoader from "../Loader/AnimateLoader";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { addComma } from "@/app/utility/addComma";
import BenfitsImage1 from "../Images/benifits-1.png";
import BenfitsImage2 from "../Images/benifits-2.png";
import BenfitsImage3 from "../Images/benifits-3.png";
import BenfitsImage4 from "../Images/benifits-4.png";
import BenfitsImage5 from "../Images/benifits-5.png";

const BenifitsCard = ({ goalDetailsProps }) => {
  console.log("goalDetailsProps", goalDetailsProps);
  const [investmentYear, setInvestmentYear] = useState("10");
  const personalised_fund = [
    {
      id: 1,
      name: "DSP ELSS Tax Saver Fund",
      percentage: "18.76%",
      cagr: "3Y CAGR",
    },
    {
      id: 2,
      name: "DSP ELSS Tax Saver Fund",
      percentage: "18.76%",
      cagr: "3Y CAGR",
    },
    {
      id: 3,
      name: "DSP ELSS Tax Saver Fund",
      percentage: "18.76%",
      cagr: "3Y CAGR",
    },
    {
      id: 4,
      name: "DSP ELSS Tax Saver Fund",
      percentage: "18.76%",
      cagr: "3Y CAGR",
    },
  ];
  const [goalDetails, setGoalDetails] = useState();
  const [loading, setLoading] = useState(false);
  const [mutualFunds, setMutualFunds] = useState();
  const [allocationFunds, setAllocationFunds] = useState();
  const [dataGrid, setDataGrid] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        console.error("No access token found.");
        return;
      }
      setLoading(true);
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        let url1 = "";
        let url3 = "";
        if (goalDetailsProps?.goalType == "Goal") {
          url1 = `${process.env.NEXT_PUBLIC_API_BASE_URL}/goal/goal-performance/${goalDetailsProps?.goal_create_id}`;
          url3 = `${process.env.NEXT_PUBLIC_API_BASE_URL}/goal/goal-distribution/${goalDetailsProps?.goal_create_id}`;
        } else {
          url1 = `${process.env.NEXT_PUBLIC_API_BASE_URL}/wealth-plus/wealth-plus-performance/${goalDetailsProps?.wealth_create_id}`;
          url3 = `${process.env.NEXT_PUBLIC_API_BASE_URL}/wealth-plus/user-wealth-distribution/${goalDetailsProps?.wealth_create_id}`;
        }
        const url2 = `${process.env.NEXT_PUBLIC_API_BASE_URL}/mutual-funds/investment-funds`;

        // If you genuinely need both calls, keep them.
        const [res1, res2, res3] = await Promise.all([
          axios.get(url1, { headers }),
          axios.get(url2, { headers }),
          axios.get(url3, { headers }),
        ]);

        if (res1?.data?.data) {
          if (goalDetailsProps?.goalType == "Goal") {
            setGoalDetails(res1.data.data);
            const transformedData = res1?.data?.data?.monthlyGrowth.map(
              (item) => ({
                month: `${(item.month / 12).toFixed(1)} Y`,
                investedAmount: item.investedAmount,
                currentValue: item.currentValue,
              })
            );
            setDataGrid(transformedData);
          } else {
            setGoalDetails(res1.data.data);
            console.log(
              "es1?.data?.data?.monthlyGrowth",
              res1?.data?.data?.monthlyGrowth
            );
            const transformedDataWealth = res1?.data?.data?.monthlyGrowth
              ?.map((item) => ({
                month: item.month,
                investedAmount: item.investedAmount,
                currentValue: item.currentValue,
              }))
              .filter((item) => [36, 60, 120].includes(item.month));
            const transformedData = transformedDataWealth?.map((item) => ({
              month: `${(item.month / 12).toFixed(1)} Y`,
              investedAmount: item.investedAmount,
              currentValue: item.currentValue,
            }));
            setDataGrid(transformedData);
          }
        }

        if (res2?.data?.data) {
          setMutualFunds(res2.data.data);
        }
        if (res3?.data?.data) {
          setAllocationFunds(res3?.data?.data);
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  console.log("goalDetails", goalDetails);
  console.log("mutualFunds", mutualFunds);
  console.log("allocationFunds", allocationFunds);
  console.log("dataGrid", dataGrid);
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload?.length) {
      return (
        <div
          style={{
            background: "#fff",
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "12px",
            lineHeight: "1.4",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            color: "black",
          }}
        >
          <p style={{ margin: 0, fontWeight: "600" }}>Month: {label}</p>
          {payload
            .slice() // creates a shallow copy so original payload isn't mutated
            .reverse()
            .map((entry, index) => (
              <p
                key={index}
                style={{
                  color: "black",
                  margin: "2px 0",
                  fontWeight: "600",
                }}
                className="flex flex-col-reverse"
              >
                {entry.name}: ₹{addComma(entry.value)}
              </p>
            ))}
        </div>
      );
    }

    return null;
  };
  const benifitsData = [
    {
      id: 1,
      text: "Smart Rebalancing",
      image: BenfitsImage1,
    },
    {
      id: 2,
      text: "Tax Optimization Reports",
      image: BenfitsImage2,
    },
    {
      id: 3,
      text: "Investment opportunities",
      image: BenfitsImage3,
    },
    {
      id: 4,
      text: "Dedicated Relationship Manager",
      image: BenfitsImage4,
    },
    {
      id: 5,
      text: "24/7 portfolio review",
      image: BenfitsImage5,
    },
  ];

  return (
    <div>
      {loading ? (
        <AnimateLoader count={3} />
      ) : (
        <div>
          <div className="flex flex-col gap-3 monthly-sip rounded-[21px] p-2">
            {goalDetailsProps?.goalType == "Wealth+" && (
              <span className="text-[14px] font-medium text-white text-center leading-6">
                Monthly {goalDetailsProps?.investmentType} of{" "}
                <span className="font-semibold">
                  ₹{addComma(goalDetails?.sipAmount)}
                </span>{" "}
                at an expected CAGR of
                <span className="font-semibold">
                  {" "}
                  {goalDetails?.cagr?.toFixed(2)}%{" "}
                </span>{" "}
                will build wealth of{" "}
                <span className="font-semibold">
                  {" "}
                  ₹{addComma(goalDetails?.expectedValue)}
                </span>{" "}
                in{" "}
                <span className="font-semibold">
                  {" "}
                  {goalDetails?.duration / 12} years
                </span>
                .
              </span>
            )}

            {goalDetailsProps?.goalType == "Goal" && (
              <span className="text-[14px] font-medium text-white text-center leading-6 p-2">
                Monthly SIP of{" "}
                <span className="font-semibold">
                  {" "}
                  ₹{addComma(goalDetails?.sipAmount)}
                </span>{" "}
                at an expected CAGR of
                <span className="font-semibold">
                  {" "}
                  {goalDetails?.cagr?.toFixed(2)}%{" "}
                </span>{" "}
                will enable you to achieve your goal in{" "}
                <span className="font-semibold">
                  {goalDetails?.duration / 12} years
                </span>
                .
              </span>
            )}
          </div>
          <div className="flex justify-center items-center flex-col mb-4 mt-8">
            <p className="text-[15px] font-poppins font-medium text-[#FFFFFF]">
              Personalised Funds
            </p>
            <p className="content-none border-[1px] border-[#FFFFFF] bg-red-300 my-2 w-[80px]"></p>
          </div>
          <div className="flex flex-col gap-4">
            {allocationFunds?.map((data, index) => (
              <div
                className="flex justify-between bg-[#FFFFFF] rounded-[21px] px-2 pt-2 pb-4 w-full"
                key={index}
              >
                <div className="flex pr-10 gap-2 items-center">
                  <img src={data?.fundIcon} className="h-[48px] w-[48px]" />
                  <p className="text-[14px] font-medium text-black">
                    {data?.schemeName}
                  </p>
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-[#5BCC98]">
                    {data?.cagr3y}%
                  </p>
                  <p className="text-[13px] font-medium text-black text-nowrap">
                    3Y CAGR
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center flex-col mb-4 mt-8">
            <p className="text-[13px] font-poppins font-medium text-[#FFFFFF]">
              Performance
            </p>
            <p className="content-none border-[1px] border-[#FFFFFF] bg-red-300 my-2 w-[80px]"></p>
          </div>
          <div className="investment-card-background p-4 py-6 rounded-3xl border-[1px] border-[#794083] relative hidden">
            <p className="text-[13px] font-poppins font-semibold leading-5">
              ₹1L invested for 10 years could become
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col gap-0.5 py-2">
                <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
                  Rupiea Portfolio
                </p>
                <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
                  {investmentYear == "10"
                    ? "₹5,42,800"
                    : investmentYear == 5
                    ? "₹3,32,800"
                    : "1,45,900"}
                </p>
                <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
                  {investmentYear == "10"
                    ? "(18.4% p.a)"
                    : investmentYear == 5
                    ? "(13.4% p.a)"
                    : "(10.4% p.a)"}
                </p>
              </div>
              <div className="content-none border-[1px] border-[#FFFFFF] my-2"></div>
              <div className="flex flex-col gap-0.5 px-2 py-2">
                <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
                  Nifty 50
                </p>
                <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
                  {investmentYear == "10"
                    ? "₹3,42,800"
                    : investmentYear == 5
                    ? "₹2,13,800"
                    : "1,11,900"}
                </p>
                <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F]">
                  {investmentYear == "10"
                    ? "(14.4% p.a)"
                    : investmentYear == 5
                    ? "(10.4% p.a)"
                    : "(7.4% p.a)"}
                </p>
              </div>
            </div>
            <div className="relative mb-5">
              <img
                alt="graph-image"
                src={graphImage.src}
                className={`h-[100px] w-full absolute  ${
                  investmentYear == "10"
                    ? "-top-10"
                    : investmentYear == 5
                    ? "-top-5"
                    : "-top-2"
                }`}
              />
              <img
                src={graphImage1.src}
                className="h-[100px] w-full "
                alt="graph-image1"
              />
            </div>
            <div className="bg-[#D9D9D9DE] flex justify-between items-center rounded-3xl h-9 my-2 px-1 gap-2">
              <p
                className={`text-[13px] font-semibold leading-5 font-poppins  w-full h-8 rounded-3xl flex justify-center items-center ${
                  investmentYear == "3" && "bg-[#270330]"
                }`}
                onClick={() => {
                  setInvestmentYear("3");
                }}
              >
                3Y
              </p>
              <p
                className={`text-[13px] font-semibold leading-5 font-poppins  w-full h-8 rounded-3xl flex justify-center items-center ${
                  investmentYear == "5" && "bg-[#270330]"
                }`}
                onClick={() => {
                  setInvestmentYear("5");
                }}
              >
                5Y
              </p>
              <p
                className={`text-[13px] font-semibold leading-5 font-poppins  w-full h-8 rounded-3xl flex justify-center items-center ${
                  investmentYear == "10" && "bg-[#270330]"
                }`}
                onClick={() => {
                  setInvestmentYear("10");
                }}
              >
                10Y
              </p>
            </div>
          </div>
          <div
            style={{ width: "100%", height: "350px" }}
            className="investment-card-background py-3 rounded-3xl border-[1px] border-[#794083] relative flex justify-center items-center"
          >
            {/* <p className="text-[13px] font-poppins font-semibold leading-5 pb-2">
              ₹1L invested for 10 years could become
            </p> */}
            <ResponsiveContainer width="90%" height={300}>
              <LineChart
                data={dataGrid}
                margin={{ top: 20, right: 40, left: 40, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="month" stroke="white" />
                {/* <YAxis stroke="white" /> */}
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="investedAmount"
                  stroke="lightblue"
                  strokeWidth={2}
                  activeDot={{ r: 4 }}
                  name="Invested Amount"
                >
                  <LabelList
                    dataKey="investedAmount"
                    position="top"
                    formatter={(val) => `₹${addComma(val)}`}
                    fill="lightblue"
                    className="text-[12px] font-medium"
                  />
                </Line>
                <Line
                  type="monotone"
                  dataKey="currentValue"
                  stroke="lightgreen"
                  strokeWidth={2}
                  activeDot={{ r: 5 }}
                  name="Current Value"
                >
                  <LabelList
                    dataKey="currentValue"
                    position="top"
                    formatter={(val) => `₹${addComma(val)}`}
                    fill="lightgreen"
                    className="text-[12px] font-medium"
                  />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="my-3">
            <p className="text-[13px] font-poppins font-medium leading-5 text-[#FFFFFF8F] text-center hidden">
              Past performance based on back tested data Disclaimer
            </p>
          </div>
          <div className="flex justify-center items-center flex-col mt-5">
            <p className="text-[13px] font-poppins font-medium text-[#FFFFFF]">
              Distribution
            </p>
            <p className="content-none border-[1px] border-[#FFFFFF] bg-red-300 my-2 w-[50px]"></p>
          </div>
          <div className="flex justify-center items-center mt-10">
            {allocationFunds?.length > 0 && (
              <DonutChart allocationFunds={allocationFunds} />
            )}
          </div>
          <div className="flex justify-center items-center flex-col mt-5">
            <p className="text-[13px] font-poppins font-medium text-[#FFFFFF]">
              Benifits
            </p>
            <p className="content-none border-[1px] border-[#FFFFFF] bg-red-300 my-2 w-[50px]"></p>
          </div>
          <div className="bg-[#400B4B] flex flex-col gap-6 p-6 rounded-3xl">
            {benifitsData.map((data, index) => (
              <div className="flex flex-row items-center gap-6" key={index}>
                <div className="bg-[#A76CE8] p-2 h-[45px] w-[45px] rounded-4xl flex flex-col items-center justify-center">
                  <img
                    src={data.image.src}
                    alt={`Benefit ${index + 1}`}
                    className=""
                  />
                </div>
                <p className="text-[13px] font-medium text-[#FFFFFF]">
                  {data.text}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-[#1A0120] py-4 px-5 max-w-[calc(100%)] w-full">
            <button
              className={`w-full py-2 rounded-full text-[15px] leading-7 font-medium 
                   text-white border-[1px] border-white 
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BenifitsCard;
