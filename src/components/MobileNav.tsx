type Props = {
  visible: boolean;
};

export default function MobileNav({ visible }: Props) {
  return (
    visible && (
      <div className="bg-white md:hidden z-[9999] w-full h-full fixed top-0 left-0">
        <ul className="flex h-full flex-col items-center justify-center font-black text-[#1b1b1b] text-[6rem]">
          <li className="my-10">Services</li>
          <li className="my-10">Projects</li>
          <li className="my-10">FAQs</li>
        </ul>
      </div>
    )
  );
}
