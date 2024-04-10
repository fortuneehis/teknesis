import React, { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "../utils";

type Props = {
  children:
    | React.ReactElement
    | ((
        ref: React.Ref<HTMLHeadingElement>,
        parentRef: React.Ref<HTMLDivElement>
      ) => React.ReactElement)
    | string;
  fromOpacity: number;
  toOpacity: number;
  offset: number | string;
};

export default function TextAnimation({
  fromOpacity,
  toOpacity,
  children,
  offset,
}: Props) {
  const ref = useRef<HTMLHeadingElement | HTMLParagraphElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    if (!ref.current) return;

    const text = new SplitType(ref.current, {
      split: "words,chars",
    });

    const context = gsap.context(() => {
      gsap.set(ref.current, {
        opacity: fromOpacity,
      });
      gsap.fromTo(
        text.chars,
        {
          opacity: fromOpacity,
        },
        {
          opacity: toOpacity,
          ease: "power1.out",
          scrollTrigger: {
            trigger: parentRef.current,
            start: "top top",
            invalidateOnRefresh: true,
            end: `bottom-=${offset} top`,
            scrub: 1.5,
          },
          stagger: 0.01,
        }
      );
    });

    return () => context.revert();
  }, [fromOpacity, toOpacity, offset]);
  return typeof children === "function" ? children(ref, parentRef) : children;
}
