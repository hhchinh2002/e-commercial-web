import type { NextPage } from "next";
import Product from "./Product";

const FrameComponent6: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[75px] pb-[25px] box-border max-w-full text-center text-21xl text-gray-500 font-raleway mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[43px] max-w-full mq750:gap-[21px]">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] font-normal font-inherit mq450:text-5xl mq1050:text-13xl">
          Related Products
        </h1>
        <div className="w-[1290px] overflow-x-auto flex flex-row items-start justify-start gap-[19px] max-w-full text-left text-sm text-white font-rubik">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 gap-[15px] mq450:flex-wrap">
          <div className="h-[15px] w-[15px] relative rounded-[50%] bg-whitesmoke-300 mq450:w-full" />
          <div className="h-[15px] w-[15px] relative rounded-[50%] bg-gray-400 mq450:w-full" />
          <div className="h-[15px] w-[15px] relative rounded-[50%] bg-whitesmoke-300 mq450:w-full" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
