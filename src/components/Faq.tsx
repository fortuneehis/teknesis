import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../utils";

type Props = {
  question: string;
  answer: string;
  index: number;
  active: boolean;
  onClick: () => void;
};

export default function Faq({
  index,
  question,
  answer,
  onClick,
  active,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current, {
      height: active ? "auto" : 0,
      duration: 0.7,
      ease: "power3.out",
    });
  }, [active]);
  return (
    <div
      key={index}
      onClick={onClick}
      className="border-[#fff] cursor-pointer py-10 md:py-20 border-b border-opacity-15"
    >
      <div className="flex justify-between items-center">
        <p className="text-white text-[3rem] md:text-[5rem]">{question}</p>
        <div
          className={`w-12 flex items-center justify-center h-12 md:w-16 md:h-16 ${
            !active || "rotate-180"
          }`}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
              stroke="#fff"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div
        ref={containerRef}
        className="overflow-hidden h-0 text-[#6e6e6e] text-[2.4rem] md:text-[3rem] max-w-full md:max-w-[90%]"
      >
        {answer}
      </div>
    </div>
  );
}
