"use client";

import { smoothScroll } from "../utils";
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
    </main>
  );
}
