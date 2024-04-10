import { MouseEventHandler, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "../utils";

type Props = {
  name: string;
  index: number;
  tags: string[];
};

export default function Project({ name, index, tags }: Props) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [mouseData, setMouseData] = useState({
    x: 0,
    y: 0,
  });

  const onMouseEnter: MouseEventHandler = (e) => {
    if (!elementRef.current || !e.currentTarget) return;
    const element = elementRef.current;

    const { left, top } = e.currentTarget.getBoundingClientRect();

    const { width } = element.getBoundingClientRect();

    const { x, y } = {
      x: e.clientX - left - width / 2,
      y: e.clientY - top,
    };

    gsap.to(element, {
      opacity: 1,
      scale: 1,
      x,
      y,
      overwrite: true,
      ease: "expo.out",
    });
  };

  const onMouseMove: MouseEventHandler = (e) => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    const { width, height } = element.getBoundingClientRect();

    const { left, top } = e.currentTarget.getBoundingClientRect();

    const { x, y } = {
      x: e.clientX - left - width / 2,
      y: e.clientY - top - height / 2,
    };

    setMouseData({
      x,
      y,
    });

    gsap.to(element, {
      x,
      y,
      ease: "power2.out",
      duration: 0.4,
      overwrite: "auto",
      rotate: `${gsap.utils.clamp(-25, 25)(x - mouseData.x)}deg`,
      onComplete: () => {
        gsap.to(element, {
          rotate: 0,
          ease: "power2.out",
          duration: 0.2,
          overwrite: true,
        });
      },
    });
  };

  const onMouseLeave: MouseEventHandler = () => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    setMouseData({
      x: 0,
      y: 0,
    });

    gsap.to(element, {
      opacity: 0,
      rotate: 0,
      scale: 0,
      duration: 0.8,
      x: 0,
      y: 0,
      overwrite: true,
      ease: "power2.out",
    });
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="border-t-2 flex flex-col justify-between items-start cursor-pointer relative border-[#6e6e6e] border-opacity-15"
    >
      <div
        ref={elementRef}
        className="absolute z-10 p-[30px] rounded-full bg-[#1b1b1b] overflow-hidden pointer-events-none hidden md:block opacity-0 scale-0 top-0 left-0 w-[100px] h-[100px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z"
          />
        </svg>
      </div>
      <p className="py-5 text-[4.4rem] md:text-[20.6rem] leading-none font-extrabold text-[#1b1b1b]">
        <span className="text-[1.5rem] md:text-[4rem] align-middle mr-4">{`(0${
          index + 1
        })`}</span>
        {name.toUpperCase()}
      </p>
      <div className="pb-10 text-[1.6rem] md:text-[2.3rem] ml-16 md:ml-32 flex flex-wrap gap-2 md:gap-8">
        {tags.map((tag, index) => (
          <p
            key={index}
            className="border border-[#1b1b1b] rounded-full px-6 py-4 leading-none"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
}
