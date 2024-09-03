import type { NextPage } from "next";
import Link from "next/link";

const Navbar: NextPage = () => {
  return (
    <header className="self-stretch bg-sandybrown flex flex-row items-start justify-start py-[35px] px-[75px] box-border top-[0] z-[99] sticky max-w-full text-left text-6xl text-white font-rubik mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
      <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full">
        <div className="w-[90px] flex flex-row items-start justify-start py-0 px-0 box-border">
          <h3 className="m-0 w-[197px] relative text-inherit tracking-[-0.5px] font-semibold font-inherit inline-block shrink-0 [debug_commit:1de1738]">
            <Link className="no-underline text-white" href="/">Handmade-mart</Link>
          </h3>
        </div>
        <nav className="m-0 w-[498px] flex flex-row items-start justify-start gap-[132.5px] max-w-full text-left text-6xl text-white font-rubik mq750:hidden mq750:gap-[66px]">
          <h3 className="m-0 relative text-inherit tracking-[-0.5px] font-semibold font-inherit inline-block min-w-[62px]">
            <Link className="no-underline text-white" href="/shop">Shop</Link>
          </h3>
          <h3 className="m-0 relative text-inherit tracking-[-0.5px] font-semibold font-inherit inline-block min-w-[74px]">
            <Link className="no-underline text-white" href="#footer">About</Link>
          </h3>
          <h3 className="m-0 relative text-inherit tracking-[-0.5px] font-semibold font-inherit inline-block min-w-[97px]">
            Contact
          </h3>
        </nav>
        <div className="w-[132px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/list.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/list-1.svg"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/list-2.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
