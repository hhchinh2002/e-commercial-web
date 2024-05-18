import type { NextPage } from "next";
import { Button } from "@mui/material";

const ProductDetail: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[75px] pb-[25px] box-border max-w-full text-left text-lg text-gray-100 font-rubik mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[47px] max-w-full mq750:gap-[23px]">
        <div className="h-[595px] flex-1 relative bg-gainsboro min-w-[404px] max-w-full mq750:min-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[404px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[33px] mq750:gap-[16px]">
            <h2 className="m-0 self-stretch relative text-13xl tracking-[-0.5px] font-bold font-raleway text-gray-500 mq450:text-lgi mq1050:text-7xl">
              Complete set of sofa, pillows and bed sheets
            </h2>
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[403.5px] pl-0 gap-[15px] text-sm mq450:pr-5 mq450:box-border mq750:flex-wrap mq750:pr-[201px] mq750:box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[137px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src="/bxsstar-1.svg"
                />
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src="/bxsstar-1.svg"
                />
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src="/bxsstar-1.svg"
                />
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src="/bxsstar-1.svg"
                />
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  loading="lazy"
                  alt=""
                  src="/bxsstar-1.svg"
                />
              </div>
              <div className="relative tracking-[-0.5px] inline-block min-w-[63px]">
                ( 1 review )
              </div>
            </div>
            <div className="self-stretch relative text-17xl tracking-[-0.5px] text-gray-400 whitespace-nowrap mq450:text-3xl mq1050:text-10xl">
              $ 75.00
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch relative tracking-[-0.5px]">
                <span>Stok :</span>
                <span className="text-gray-500"> 18</span>
              </div>
              <div className="self-stretch relative tracking-[-0.5px]">
                <span>SKU :</span>
                <span className="text-gray-500">{` BA65 `}</span>
              </div>
              <div className="self-stretch relative tracking-[-0.5px]">
                <span>Categories :</span>
                <span className="text-gray-500">
                  {" "}
                  Chair, New Arrivals, Special
                </span>
              </div>
              <div className="self-stretch relative tracking-[-0.5px]">
                <span>Tags :</span>
                <span className="text-gray-500"> Black, Chair</span>
              </div>
            </div>
            <div className="self-stretch relative tracking-[-0.5px] leading-[35px]">
              In order to sit comfortably for long periods, people need freedom
              of movement. The Form rocking chair has a molded plastic shell
              with a wide, curved seat, which gives plenty of opportunity for
              changing one’s sitting position.
            </div>
          </div>
          <div className="w-[337.9px] flex flex-row items-start justify-start gap-[19px] max-w-full text-gray-500 mq450:flex-wrap">
            <div className="flex-1 box-border flex flex-row items-start justify-start py-[3px] px-[15px] gap-[15px] min-w-[83px] border-[1px] border-solid border-gray-500">
              <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/bxminuscircle-1.svg"
                />
              </div>
              <div className="relative tracking-[-0.5px] leading-[35px] inline-block min-w-[8px]">
                1
              </div>
              <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/bxpluscircle-1.svg"
                />
              </div>
            </div>
            <Button
              className="h-[45px] flex-[0.9375] min-w-[83px] mq450:flex-1"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#000201",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#000201" },
                height: 45,
              }}
            >
              Add to Cart
            </Button>
            <div className="w-[43.9px] box-border flex flex-col items-start justify-start p-[11px] border-[1px] border-solid border-gainsboro">
              <img
                className="w-[19.9px] h-[18px] relative"
                alt=""
                src="/cart-icon.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
