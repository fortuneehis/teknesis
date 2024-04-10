import { ParallaxSection } from ".";

export default function Slide() {
  return (
    <>
      <section className="text-left min-h-[5rem] bg-white pt-20 md:pt-60 md:text-center">
        <div className="flex flex-col px-8 mb-20 md:items-center">
          <h1 className="text-[6rem] mb-[1.2rem] text-[#1b1b1b] [font-kerning:none]  md:text-[13rem] max-w-[120rem] leading-none">
            Building <span className="font-bold text-[#001219]">ideas</span> and{" "}
            <span className="font-bold text-[#001219]">digital products</span>
          </h1>
          <p className=" text-[2.4rem] md:text-[2.8rem] leading-[140%] opacity-70 max-w-[90rem]">
            We approach every project with a new, unique and innovative
            techniques and processes specific to your business goals and
            customer needs.
          </p>
        </div>
        <div className="mt-20 md:mt-40 overflow-hidden w-full h-[50rem] md:h-[70rem]">
          <div className="bg-[#1b1b1b] w-full h-full shrink-0 overflow-hidden">
            <ParallaxSection>
              <video
                src="1.mp4"
                autoPlay
                muted
                loop
                className="w-full align-middle h-full object-left-top object-cover"
              ></video>
            </ParallaxSection>
          </div>
        </div>
      </section>
    </>
  );
}
