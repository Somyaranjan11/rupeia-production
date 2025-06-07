import { FaAngleDown } from "react-icons/fa6";

const FAQS = () => {
  const faqs_question = [
    {
      id: 1,
      question:
        "It is a long established fact that a reader will be distracted by the readable?",
      answer: "Ok",
    },
    {
      id: 1,
      question:
        "It is a long established fact that a reader will be distracted by the readable?",
      answer: "Ok",
    },
    {
      id: 1,
      question:
        "It is a long established fact that a reader will be distracted by the readable?",
      answer: "Ok",
    },
    {
      id: 1,
      question:
        "It is a long established fact that a reader will be distracted by the readable?",
      answer: "Ok",
    },
    {
      id: 1,
      question:
        "It is a long established fact that a reader will be distracted by the readable?",
      answer: "Ok",
    },
  ];
  return (
    <div className="px-5">
      <p className="text-[30px] text-left font-semibold bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent">
        FAQ’S
      </p>
      <div className="flex flex-col gap-2  mt-3">
        {faqs_question?.map((data) => (
          <div className="border-[0.3px] border-[#9563A2] why-rupeia-blur px-5 flex flex-row gap-3 justify-between items-center py-3 rounded-2xl">
            <span className="text-[12px] font-medium leading-5 font-poppins">
              {data?.question}
            </span>
            <span>
              <FaAngleDown />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQS;
