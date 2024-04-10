import Image from "next/image";
import { lenis } from "../utils";
import Contact from "./Contact";

export default function Header() {
  const scrollTo = async (target: any) => {
    (await lenis()).scrollTo(target);
  };

  return (
    <header className="px-12 bg-white md:px-40 py-10">
      <nav className="flex justify-between items-center">
        <Image
          src="/logo.png"
          className="w-[39px] h-[29px] md:w-[49px] md:h-[39px]"
          width={49}
          height={39}
          alt="teknesis logo"
        />
        <ul className="text-[2.6rem] hidden md:flex text-[#1b1b1b]">
          <li
            className="ml-10 cursor-pointer"
            onClick={async () => await scrollTo("#services")}
          >
            Services
          </li>
          <li
            className="ml-10 cursor-pointer"
            onClick={async () => await scrollTo("#projects")}
          >
            Projects
          </li>
          <li
            className="ml-10 cursor-pointer"
            onClick={async () => await scrollTo("#faqs")}
          >
            FAQs
          </li>
        </ul>
        <Contact />
      </nav>
    </header>
  );
}
