import { useLayoutEffect, useRef } from "react";
import { gsap } from "../utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Contact() {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const router = useRouter();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        x: "-100%",
        ease: "none",
        duration: 1.7,
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Link
      href="/contact"
      className="border-none block relative text-[1.9rem] md:text-[2.3rem] overflow-hidden text-white bg-[#1b1b1b] py-4 rounded-full font-bold"
    >
      <span
        ref={ref}
        className="before:content-['Let\'s_talk'] block px-8 md:px-12 w-full before:px-8 md:before:px-12 before:w-full before:left-full before:absolute before:top-0 relative"
      >
        Let&apos;s talk
      </span>
    </Link>
  );
}
