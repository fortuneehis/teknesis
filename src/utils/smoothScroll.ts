import gsap from "./customGsap";
import { LenisProps } from "../types";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Lenis = async (props: LenisProps) => {
  return new (await import("@studio-freight/lenis")).default(props);
};

const temp = Lenis({
  duration: 2,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  smoothWheel: true,
});

const init = async () => {
  const context = gsap.context(async () => {
    const lenis = await temp;

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    const loop = (time: DOMHighResTimeStamp) => {
      lenis.raf(time);

      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    return () => lenis.destroy();
  });

  return () => context.revert();
};

export const lenis = async () => await temp;

export default init;
