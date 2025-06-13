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
    <div className="px-5 sm:px-28">
       <p className="text-[22px] sm:text-[32px] my-5 text-left font-normal bg-gradient-to-r from-[#d0cccb] via-[#6a6867] to-[#d0cccb] bg-clip-text text-transparent">
        All your questions, answered.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  mt-3">
        {faqs_question?.map((data) => (
          <div className="border-[0.3px] border-[#9563A2] why-rupeia-blur px-5 flex flex-row gap-3 justify-between items-center py-3 rounded-2xl">
            <span className="text-[12px] sm:text-[15px] font-medium leading-5 font-poppins w-[70%]">
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
