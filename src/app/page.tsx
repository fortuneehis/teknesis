"use client";

import { lenis, smoothScroll } from "../utils";
import { useLayoutEffect } from "react";
import {
  Faqs,
  Footer,
  Header,
  Hero,
  Projects,
  ServicesSection,
} from "../components";

export default function Home() {
  useLayoutEffect(() => {
    (async () => {
      const destroy = await smoothScroll();
      return () => {
        destroy();
      };
    })();
  }, []);

  return (
    <main className="relative z-10">
      <Header />
      <Hero />
      <ServicesSection />
      <Projects showTitle limit={3} />
      <Faqs />
      <Footer />
      <div
        onClick={async () => {
          (await lenis()).scrollTo(0, {
            force: true,
          });
        }}
        className="fixed bottom-0 cursor-pointer z-[1000] flex items-center justify-center right-0 m-8 bg-[#212121] w-20 h-20 rounded-full"
      >
        <div className="w-12 h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full -rotate-45"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
