import { useState } from "react";
import Faq from "./Faq";

const faqs = [
  {
    question: "What is my name?",
    answer: "",
  },
  {
    question: "What is my name?",
    answer: "",
  },
  {
    question: "What is my name?",
    answer: "",
  },
  {
    question: "What is my name?",
    answer: "",
  },
];

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section
      id="faqs"
      className="bg-[#1b1b1b] px-[2rem] md:px-[10rem] py-20 md:py-40"
    >
      <h2 className="text-[#ffffff] text-[5.8rem] font-black md:text-[12.8rem] max-w-[90rem] leading-[150%] mb-4">
        FAQs
      </h2>
      <div>
        {faqs.map(({ question, answer }, index) => {
          return (
            <Faq
              key={index}
              index={index}
              question={question}
              answer={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ea
        soluta numquam minima beatae sed id deserunt incidunt deleniti inventore
        commodi ut laboriosam obcaecati repellendus aperiam ratione nam, illo
        pariatur!`}
              onClick={() => {
                setActiveIndex(activeIndex === index ? null : index);
              }}
              active={activeIndex === index}
            />
          );
        })}
      </div>
    </section>
  );
}
