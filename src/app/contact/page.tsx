"use client";

import { Header, Package } from "@/teknesis/components";
import { pricing } from "@/teknesis/data";
import { smoothScroll } from "@/teknesis/utils";
import Image from "next/image";
import { useLayoutEffect } from "react";

export default function ContactPage() {
  useLayoutEffect(() => {
    (async () => {
      const destroy = await smoothScroll();
      return () => {
        destroy();
      };
    })();
  }, []);
  return (
    <>
      <Header />
      <section className="px-[16px] md:px-60 py-20 md:py-40 text-[#1b1b1b]">
        <div className="mt-10">
          {pricing.map(
            ({ id, name: category, image, content, packages }, index) => (
              <div key={id} className="mt-40">
                <h2 className="font-bold leading-none text-[4rem] md:text-[5rem]">
                  <span className="text-[2rem] block md:inline">
                    (0{index + 1})
                  </span>{" "}
                  {category.toUpperCase()}{" "}
                  {content !== undefined && (
                    <span className="text-[3rem] block md:inline text-[#1b1b1b] text-opacity-50">
                      {content ? "(with content)" : "(without content)"}
                    </span>
                  )}
                </h2>

                <div className="w-full h-[40rem] md:h-[40rem] relative mt-20 rounded-[16px] md:rounded-[32px] overflow-hidden">
                  <Image
                    src={image}
                    alt={category}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="">
                  {packages.map(({ id, name, includes, price }, i) => (
                    <Package
                      key={id}
                      category={category}
                      name={name}
                      includes={includes}
                      price={price}
                    />
                  ))}
                  <div className="border-t border-t-[#1b1b1b] border-opacity-15"></div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
