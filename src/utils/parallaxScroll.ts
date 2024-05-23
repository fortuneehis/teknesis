import { gsap } from "./";

export default function parallaxScroll(
  container: HTMLElement,
  element: HTMLElement
) {
  const context = gsap.context(() => {
    gsap.set(element, {
      scale: 1.2,
      ease: "none",
    });
    gsap.fromTo(
      element,
      {
        yPercent: -20,
        ease: "none",
      },
      {
        yPercent: 20,
        overwrite: true,
        scrollTrigger: {
          trigger: container,
          invalidateOnRefresh: true,
          scrub: 0.5,
          start: "top bottom",
          end: "bottom top",
        },
      }
    );
  });

  return () => context.revert();
}
