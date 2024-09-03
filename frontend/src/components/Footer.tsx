import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer id="footer" className="self-stretch bg-darkslategray flex flex-col items-center justify-center py-[50px] px-[75px] box-border max-w-full text-left text-13xl text-whitesmoke-100 font-raleway mq750:pl-[37px] mq750:pr-[37px] mq750:box-border mq450:pt-8 mq450:pb-8 mq450:box-border">
      <div className="self-stretch flex flex-col items-center justify-center gap-[149px] max-w-full lg:gap-[74px] mq750:gap-[37px] mq450:gap-[19px]">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
          <div className="w-[360px] flex flex-col items-start justify-start gap-[16px] min-w-[360px] max-w-full mq750:flex-1 mq750:min-w-full">
            <h1 className="m-0 relative text-inherit tracking-[-0.5px] font-bold font-inherit mq1050:text-7xl mq450:text-lgi">
              Handmade-mart
            </h1>
            <div className="self-stretch relative text-base tracking-[-0.5px] leading-[35px] font-rubik text-whitesmoke-400">
              <p className="m-0">Ho Chi Minh City</p>
              <p className="m-0">National COD Shipping</p>
              <p className="m-0">039xxxyyyzzz</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-0 pr-[49px] pl-0 gap-[20px] text-xl">
            <div className="relative tracking-[-0.5px] leading-[35px] inline-block min-w-[87px] mq450:text-base mq450:leading-[28px]">
              Follow Us
            </div>
            <div className="flex flex-row items-start justify-start gap-[20px]">
              <img
                className="h-10 w-10 relative min-h-[40px]"
                loading="lazy"
                alt=""
                src="/list-3.svg"
              />
              <img
                className="h-10 w-10 relative min-h-[40px]"
                loading="lazy"
                alt=""
                src="/list-4.svg"
              />
              <img
                className="h-10 w-10 relative min-h-[40px]"
                loading="lazy"
                alt=""
                src="/list-5.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-base text-whitesmoke-400 font-rubik mq750:flex-wrap">
          <div className="w-[315px] relative tracking-[-0.5px] inline-block shrink-0">
            © Copyright 2022. All Rights Reserved.
          </div>
          <div className="flex flex-row items-start justify-start gap-[41px] mq450:gap-[20px]">
            <div className="relative tracking-[-0.5px]">Terms of condition</div>
            <div className="relative tracking-[-0.5px] inline-block min-w-[101px]">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
