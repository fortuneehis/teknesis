import { gsap } from "./";

export default function parallaxScroll(
  container: HTMLElement,
  element: HTMLElement
) {
  const context = gsap.context(() => {
    const containerHeight = container.getBoundingClientRect().height;
    const elementHeight = element.getBoundingClientRect().height;

    if (elementHeight <= containerHeight) return;
    const diff = elementHeight - containerHeight;

    gsap.set(element, {
      scale: 1.5,
      y: diff / 2,
      ease: "none",
    });
    gsap.fromTo(
      element,
      {
        y: diff / 2,
        ease: "none",
      },
      {
        y: -(diff / 2),
        ease: "power2.inOut",
        overwrite: true,
        scrollTrigger: {
          trigger: container,
          start: `top bottom`,
          end: "bottom-=100 top",
          invalidateOnRefresh: true,
          scrub: true,
        },
      }
    );
  });

  return () => context.revert();
}
