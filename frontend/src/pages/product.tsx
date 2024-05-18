import type { NextPage } from "next";
import ProductDetail from "../components/ProductDetail";
import Product from "../components/Product";
import Footer from "../components/Footer";
import ProductReview from "src/components/ProductReview";

const DetailReview: NextPage = () => {
  return (
    <div className="w-full relative bg-seashell overflow-hidden flex flex-col items-start justify-start gap-[75px] leading-[normal] tracking-[normal] mq450:gap-[19px] mq750:gap-[37px]">
      <header className="self-stretch bg-sandybrown flex flex-row items-start justify-start py-[35px] px-[75px] box-border top-[0] z-[99] sticky max-w-full text-left text-6xl text-white font-rubik mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
        <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full">
          <div className="w-[90px] flex flex-row items-start justify-start py-0 px-0 box-border">
            <h3 className="m-0 w-[197px] relative text-inherit tracking-[-0.5px] font-semibold font-inherit inline-block shrink-0 [debug_commit:1de1738]">
              Handmade-mart
            </h3>
          </div>
          <nav className="m-0 w-[498px] flex flex-row items-start justify-start gap-[132.5px] max-w-full text-left text-6xl text-white font-rubik mq750:hidden mq750:gap-[66px]">
            <h3 className="m-0 relative text-inherit tracking-[-0.5px] font-semibold font-inherit inline-block min-w-[62px]">
              Shop
            </h3>
            <h3 className="m-0 relative text-inherit tracking-[-0.5px] font-semibold font-inherit inline-block min-w-[74px]">
              About
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
                alt=""
                src="/list-1.svg"
              />
              <img
                className="h-6 w-6 relative min-h-[24px]"
                alt=""
                src="/list-2.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <ProductDetail />
      <ProductReview />
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
      <Footer />
    </div>
  );
};

export default DetailReview;
