import { useLayoutEffect, useRef, useState } from "react";
import TextAnimation from "./TextAnimation";
import { gsap, slideScroll } from "../utils";
import { services } from "../data";

function ServicesSection() {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !elementRef.current) return;
      const revert = slideScroll(containerRef.current, elementRef.current);
      return () => revert();
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <TextAnimation offset={"40%"} fromOpacity={1} toOpacity={0.3}>
        {(ref, parentRef) => {
          return (
            <section
              ref={parentRef}
              className="bg-[#1b1b1b] pt-20 md:h-screen md:flex md:items-center md:justify-center"
            >
              <h2
                ref={ref}
                className="text-[#ffffff] [font-kerning:none] inline-block opacity-30 text-[3rem] px-8 md:text-[5.4rem] max-w-[96rem] md:text-center leading-[120%]"
              >
                Providing Industry Standard solutions to meet all your business
                needs
              </h2>
            </section>
          );
        }}
      </TextAnimation>
      <section
        id="services"
        ref={containerRef}
        className="md:min-h-[90rem] px-8 relative py-20 md:p-0 overflow-hidden bg-[#1b1b1b]"
      >
        <div
          ref={elementRef}
          className="flex-col md:absolute md:left-0 md:top-0  text-left md:items-center md:flex-row flex"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`font-black ${
                index % 2 !== 0 || "md:px-[5vw]"
              } items-center whitespace-nowrap md:items-baseline min-h-[10rem] md:border-none border-t-2 border-[#fff] border-opacity-[0.03] text-white text-[4.4rem] md:shrink-0 flex md:text-[30rem]`}
            >
              <div className="w-[40rem] hidden leading-none md:inline-block mr-[5vw] align-middle h-[20rem] object-cover rounded-full overflow-hidden">
                <video
                  loop
                  className="w-full h-full object-left-top object-cover"
                  src={service.media}
                ></video>
              </div>
              <p className="leading-none [letter-spacing:-.05em] inline-block">
                {service.name}
              </p>
            </div>
          ))}
          {/* Last Divider */}
          <div className="w-full border-t-2 border-[#fff] border-opacity-[0.03] md:border-none"></div>
        </div>
      </section>
    </>
  );
}

export default ServicesSection;
