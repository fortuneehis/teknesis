import gsap from "./customGsap";

export default function slideScroll(
  container: HTMLDivElement,
  element: HTMLDivElement
) {
  const matchMedia = gsap.matchMedia();

  matchMedia.add("(min-width: 768px)", () => {
    const savedContainerHeight = container.getBoundingClientRect().height;
    const amountToScroll =
      element.getBoundingClientRect().width - window.innerWidth;
    gsap.set(container, {
      height: amountToScroll + savedContainerHeight / 2,
    });
    gsap.fromTo(
      element,
      {
        x: 0,
      },
      {
        x: `-=${amountToScroll + 100}px`,
        scrollTrigger: {
          trigger: container,
          start: "top 30%",
          end: `+=${amountToScroll - 350}`,
          pin: element,
          scrub: 0.7,
          invalidateOnRefresh: true,
          pinType: "transform",
          pinSpacing: true,
        },
      }
    );
  });

  return () => matchMedia.revert();
}
