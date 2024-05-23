"use client";

import { Header } from "@/teknesis/components";
import Project from "@/teknesis/components/Project";
import { projects } from "@/teknesis/data";
import { smoothScroll } from "@/teknesis/utils";
import { useLayoutEffect, useState } from "react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
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
      <section className="px-12">
        <ul className="flex py-20">
          {Array.from(
            new Set(["all", ...projects.map(({ category }) => category)])
          ).map((category, index) => {
            return (
              <li
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`text-[2.5rem] py-6 px-10 rounded-full ${
                  selectedCategory === category
                    ? "bg-[#1b1b1b] text-white"
                    : "text-[#1b1b1b] bg-transparent"
                } cursor-pointer mr-2`}
              >
                {category[0].toUpperCase() + category.slice(1)}
              </li>
            );
          })}
        </ul>
        {projects
          .filter(({ category }) =>
            selectedCategory && selectedCategory !== "all"
              ? selectedCategory === category
              : true
          )
          .map(({ name, tags, slug }, index) => {
            return (
              <Project
                key={index}
                slug={slug}
                index={index}
                name={name}
                tags={tags}
              />
            );
          })}
      </section>
    </>
  );
}
