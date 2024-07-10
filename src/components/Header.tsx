import Image from "next/image";
import Contact from "./Contact";
import { usePathname, useRouter } from "next/navigation";
import { nav } from "../data";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const pathName = usePathname();

  const [mobileNavActive, setMobileNavActive] = useState(false);

  useLayoutEffect(() => {
    document.body.style.overflowY = mobileNavActive ? "hidden" : "scroll";
  }, [mobileNavActive]);

  return (
    <header className="px-8 bg-white md:px-40 py-10">
      {
        <nav className="flex justify-between items-center">
          <Image
            src="/logo.png"
            className="w-[39px] h-[29px] md:w-[49px] md:h-[39px]"
            width={49}
            height={39}
            alt="teknesis logo"
          />

          <ul className="text-[2.6rem] absolute md:relative hidden md:flex text-[#1b1b1b]">
            {nav.map(({ name, link }, index) => (
              <li
                key={index}
                className={`ml-10 cursor-pointer ${
                  link === pathName ? "font-bold" : "font-normal"
                }`}
                onClick={async () => router.push(link)}
              >
                {name[0].toUpperCase() + name.slice(1)}
              </li>
            ))}
          </ul>
          <div className="flex items-center">
            <div className="hidden md:block">
              <Contact />
            </div>
            <div
              onClick={() => {
                setMobileNavActive((prev) => !prev);
              }}
              style={{
                backgroundColor: mobileNavActive ? "#212121" : "transparent",
              }}
              className="bg-transparent z-[1000] ml-4 w-16 h-16 rounded-full flex items-center justify-center flex-col p-2 md:hidden cursor-pointer"
            >
              {Array.from({
                length: 3,
              }).map((_, index) => {
                return (
                  <div
                    style={{
                      margin: "2px 0",
                      backgroundColor: mobileNavActive ? "#ffffff" : "#212121",
                    }}
                    key={index}
                    className="w-10 h-1 bg-[#212121]"
                  ></div>
                );
              })}
            </div>
          </div>
        </nav>
      }
      {mobileNavActive && (
        <div className="fixed flex items-center justify-center top-0 left-0 w-full z-[999] h-full bg-white">
          <ul className="text-[5.6rem] flex flex-col text-[#1b1b1b]">
            {nav.map(({ name, link }, index) => (
              <li
                key={index}
                className={`ml-10 cursor-pointer ${
                  link === pathName ? "font-bold" : "font-normal"
                }`}
                onClick={async () => {
                  router.push(link);
                  setMobileNavActive(false);
                }}
              >
                <span className="text-[1.5rem]">(0{index + 1})</span>
                {name[0].toUpperCase() + name.slice(1)}
              </li>
            ))}
            <li
              className="ml-10 cursor-pointer"
              onClick={async () => {
                router.push("/contact");
                setMobileNavActive(false);
              }}
            >
              <span className="text-[1.5rem]">(0{nav.length + 1})</span>
              Contact Us
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
