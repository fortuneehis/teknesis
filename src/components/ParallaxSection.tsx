"use client";
import { useLayoutEffect, useRef } from "react";
import { parallaxScroll } from "../utils";

type Props = {
  children: React.ReactElement;
};

function ParallaxSection({ children }: Props) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const listener = () => {
    if (!sectionRef.current || !containerRef.current) return;
    const revert = parallaxScroll(sectionRef.current, containerRef.current);
    return revert;
  };

  useLayoutEffect(() => {
    const revert = listener();

    return () => {
      revert?.();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#1b1b1b] w-full h-full relative overflow-hidden"
    >
      <div
        ref={containerRef}
        className="container w-full h-full -translate-y-[20%] absolute top-0 left-0 scale-150"
      >
        {children}
      </div>
    </div>
  );
}

export default ParallaxSection;
