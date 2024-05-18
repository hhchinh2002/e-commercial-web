import type { NextPage } from "next";
import {
  TextField,
  Button,
} from "@mui/material";
import CartProduct from "../components/CartProduct";
import Navbar from "../components/Navbar";
import SubscriptionSuggestion from "../components/SubscriptionSuggestion";
import Footer from "../components/Footer";

const Cart: NextPage = () => {
  return (
    <div className="w-full relative bg-seashell overflow-hidden flex flex-col items-start justify-start gap-[75px] leading-[normal] tracking-[normal] mq800:gap-[37px] mq450:gap-[19px]">
      <Navbar />
        <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[75px] pb-[25px] box-border max-w-full text-center text-21xl text-gray-500 font-raleway mq800:pl-[37px] mq800:pr-[37px] mq800:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[50px] max-w-full mq800:gap-[25px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] font-normal font-inherit mq800:text-13xl mq450:text-5xl">
            Your Cart
          </  h1>
          <div className="self-stretch flex flex-row items-start justify-center gap-[55px] max-w-full text-left text-xl mq800:gap-[27px] mq1350:flex-wrap">
            <div className="w-[434px] flex flex-col items-start justify-start pt-[61px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
                <CartProduct
                  name="Complete set of sofa, pillows and bed sheets"
                  price="$ 75.00"
                />
                <CartProduct
                  name="Teak wood chair"
                  price="$ 24.00"
                  propPadding="25.5px 0px 0px"
                  propLineHeight="unset"
                />
              </div>
            </div>
            <div className="w-[330px] flex flex-col items-start justify-start pt-24 pb-0 pr-1.5 pl-0 box-border max-w-full text-lg font-rubik">
              <div className="self-stretch flex flex-col items-start justify-start gap-[100px] mq450:gap-[50px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                    <div className="flex flex-row items-start justify-start py-[3px] px-3.5 gap-[15px] border-[1px] border-solid border-gray-500">
                      <div className="w-6 flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
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
                      <div className="w-6 flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/bxpluscircle-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0">
                    <div className="relative tracking-[-0.5px] inline-block min-w-[60px] whitespace-nowrap">
                      $ 75.00
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-[13px] bg-whitesmoke-100 flex flex-row items-start justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/bxtrash-1.svg"
                    />
                  </button>
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                    <div className="flex flex-row items-start justify-start py-[3px] px-3.5 gap-[15px] border-[1px] border-solid border-gray-500">
                      <div className="w-6 flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
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
                      <div className="w-6 flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/bxpluscircle-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[14.5px] px-0 pb-0">
                    <div className="relative tracking-[-0.5px] inline-block min-w-[60px] whitespace-nowrap">
                      $ 75.00
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-[13px] bg-whitesmoke-100 flex flex-row items-start justify-start">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0"
                      alt=""
                      src="/bxtrash-1.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[416px] bg-whitesmoke-100 flex flex-col items-start justify-start py-[31px] pr-[26px] pl-[27px] box-border gap-[26.8px] max-w-full text-gray-100 mq450:pt-5 mq450:pb-5 mq450:box-border">
              <b className="relative tracking-[-0.5px] leading-[35px] inline-block text-gray-500 min-w-[89px] mq450:text-base mq450:leading-[28px]">
                Cart Total
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <div className="relative tracking-[-0.5px] leading-[35px] inline-block min-w-[75px] mq450:text-base mq450:leading-[28px]">
                    Subtotal
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-gray-500 font-poppins">
                    <div className="relative tracking-[-0.5px] inline-block min-w-[70px] whitespace-nowrap mq450:text-base">
                      $ 99.00
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
                  <TextField
                    className="[border:none] bg-[transparent] h-[45px] flex-1 font-rubik text-sm text-gray-700 min-w-[172px]"
                    placeholder="Your Voucher"
                    variant="outlined"
                    sx={{
                      "& fieldset": { border: "none" },
                      "& .MuiInputBase-root": {
                        height: "45px",
                        backgroundColor: "#fff",
                        borderRadius: "0px 0px 0px 0px",
                        fontSize: "14px",
                      },
                      "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.25)" },
                    }}
                  />
                  <Button
                    className="h-[46px] w-[98px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fee3ca",
                      fontSize: "14",
                      background: "#23292e",
                      borderRadius: "0px 0px 0px 0px",
                      "&:hover": { background: "#23292e" },
                      width: 98,
                      height: 46,
                    }}
                  >
                    Apply
                  </Button>
                </div>
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-500" />
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <div className="relative tracking-[-0.5px] leading-[35px] inline-block min-w-[43px] mq450:text-base mq450:leading-[28px]">
                  Total
                </div>
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-gray-500 font-poppins">
                  <div className="relative tracking-[-0.5px] inline-block min-w-[70px] whitespace-nowrap mq450:text-base">
                    $ 99.00
                  </div>
                </div>
              </div>
              <Button
                className="self-stretch h-[51px] mq450:pl-5 mq450:pr-5 mq450:box-border"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fee3ca",
                  fontSize: "18",
                  background: "#23292e",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#23292e" },
                  height: 51,
                }}
              >
                Checkout Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <SubscriptionSuggestion />
      <Footer />
    </div>
  );
};

export default Cart;
