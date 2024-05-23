type Props = {
  category: string;
  name: string;
  includes: string[];
  price: string;
};

export default function Pacakge({ category, name, includes, price }: Props) {
  return (
    <div className="flex mt-16 flex-col md:flex-row border-t items-start border-t-[#1b1b1b] border-opacity-15 py-20">
      <div className="md:flex-[2]">
        <h2 className="text-[3rem] leading-none font-bold">&gt; {name}</h2>
        <p className="text-[3rem] md:hidden block mt-2  mb-8 ">{price}</p>
      </div>
      <div className="md:flex-[2]">
        <p className="font-bold text-[2.5rem] hidden md:block">INCLUDED:</p>
        <div className="flex flex-wrap">
          {includes.map((include, i) => (
            <div
              key={i}
              className="px-6 py-4 m-2 ml-0 rounded-full text-[1.8rem] bg-[#f3f3f3]"
            >
              {include}
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex-1 mt-10 md:mt-0 text-end">
        <p className="text-[3rem] hidden md:block mt-10 md:mt-0  mb-8 font-bold">
          {price}
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd0XwvaTpAp1Tv9P1_1G0iW21jDgaYHMZpi7nd28OYtnBvJxg/viewform"
          className="border rounded-full leading-none border-[#1b1b1b] text-[2rem] p-10 py-3"
        >
          Let's talk
        </a>
      </div>
    </div>
  );
}
