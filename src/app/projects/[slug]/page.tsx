"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { projectsExtended } from "@/teknesis/data";

export default function () {
  const { slug } = useParams();

  const router = useRouter();

  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsExtended)[0] | null
  >(null);

  useEffect(() => {
    console.log(slug);
    const project =
      projectsExtended.find((project) => project.slug === slug) ?? null;
    // if (!project) router.push("/");
    // setSelectedProject(project);
  }, []);

  return (
    <section className="text-[#1b1b1b] mt-40 px-20">
      <div>
        <h1 className="text-[15rem]">Potion</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          expedita aut, quasi impedit tempore atque ex consequuntur saepe alias
          exercitationem temporibus. Qui animi tempore, quibusdam natus quas et
          nisi magnam.
        </p>
      </div>
      <div className="flex w-full flex-wrap">
        <div className="w-1/2 shrink-0 h-[60rem] p-12">
          <Image
            className="w-full h-full object-cover"
            src="/branding.png"
            alt="project"
            width={200}
            height={200}
          />
        </div>
        <div className="w-1/2 shrink-0 h-[60rem] p-12">
          <Image
            className="w-full h-full object-cover"
            src="/branding.png"
            alt="project"
            width={200}
            height={200}
          />
        </div>
        <div className="w-1/2 shrink-0 h-[60rem] p-12">
          <Image
            className="w-full h-full object-cover"
            src="/branding.png"
            alt="project"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}
