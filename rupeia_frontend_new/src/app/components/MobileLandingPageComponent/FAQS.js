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
    {
      id: 1,
      question:
        "It is a long established fact that a reader will be distracted by the readable?",
      answer: "Ok",
    },
  ];
  return (
    <div className="sm:px-36 py-4  px-6 sm:pt-10 pb-20">
       <p className="text-[32px] sm:text-[42px] my-5 pl-1 text-left font-medium bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent">
        All your questions, answered.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  mt-3">
        {faqs_question?.map((data) => (
          <div className="border-[0.3px] border-[#9563A2] why-rupeia-blur px-8 flex flex-row gap-3 justify-between items-center py-4 rounded-4xl">
            <span className="text-[14px] sm:text-[18px] font-medium leading-[150%] font-poppins w-[100%] text-white">
              {data?.question}
            </span>
            <span>
              <FaAngleDown className="text-white" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQS;
