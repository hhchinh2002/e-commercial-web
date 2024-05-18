import type { NextPage } from "next";
import { Button } from "@mui/material";
import Navbar from "../components/Navbar";
import CheckOutSubmissionForm from "../components/CheckOutSubmissionForm";
import Footer from "../components/Footer";

const Checkout: NextPage = () => {
  return (
    <div className="w-full relative bg-seashell overflow-hidden flex flex-col items-start justify-start gap-[100px] leading-[normal] tracking-[normal] mq450:gap-[25px] mq750:gap-[50px]">
      <Navbar />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full text-center text-21xl text-gray-500 font-raleway mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[25px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] font-normal font-inherit mq450:text-5xl mq1050:text-13xl">
            Checkout
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center gap-[19px] max-w-full text-left text-5xl lg:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[53px] min-w-[556px] max-w-full mq450:gap-[26px] mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[36px] max-w-full mq450:gap-[18px]">
                <div className="self-stretch relative tracking-[-0.5px] mq450:text-lgi">
                  Contact Information
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full mq450:gap-[17px]">
                  <CheckOutSubmissionForm
                    firstName="First Name"
                    namePhoneInputsPlaceholde="Your first name here.."
                    lastName="Last Name"
                    lastNameEmailInpuPlacehol="Your last name here.."
                  />
                  <CheckOutSubmissionForm
                    firstName="Phone"
                    namePhoneInputsPlaceholde="Your phone here.."
                    lastName="Email"
                    lastNameEmailInpuPlacehol="Your email here.."
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-xl">
                <div className="self-stretch flex flex-col items-start justify-start gap-[36px] text-5xl mq450:gap-[18px]">
                  <div className="self-stretch relative tracking-[-0.5px] mq450:text-lgi">
                    Shipping Method
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[505px] pl-0 gap-[21px] mq450:pr-5 mq450:box-border mq750:flex-wrap mq1050:pr-[252px] mq1050:box-border">
                    <Button
                      className="h-[70px] w-[154px]"
                      startIcon={
                        <img width="40px" height="40px" src="/group-208.svg" />
                      }
                      disableElevation={true}
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        color: "#909090",
                        fontSize: "18",
                        borderColor: "#d9d9d9",
                        borderRadius: "0px 0px 0px 0px",
                        "&:hover": { borderColor: "#d9d9d9" },
                        width: 154,
                        height: 70,
                      }}
                    >
                      Store
                    </Button>
                    <Button
                      className="h-[70px] flex-1 min-w-[114px]"
                      startIcon={
                        <img
                          width="40px"
                          height="40px"
                          src="/group-208-1.svg"
                        />
                      }
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#000201",
                        fontSize: "18",
                        background: "#f7f7f7",
                        border: "#23292e solid 1px",
                        borderRadius: "0px 0px 0px 0px",
                        "&:hover": { background: "#f7f7f7" },
                        height: 70,
                      }}
                    >
                      Delivery
                    </Button>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch relative tracking-[-0.5px] mq450:text-base">{`Country / Region `}</div>
                  <div className="self-stretch flex flex-col items-start justify-start py-4 px-6 text-sm text-gray-100 font-rubik border-[1px] border-solid border-gainsboro">
                    <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
                      <div className="relative tracking-[-0.5px] inline-block min-w-[113px]">
                        United States (US)
                      </div>
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        alt=""
                        src="/bxchevrondown-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch relative tracking-[-0.5px] mq450:text-base">{`Street address `}</div>
                  <textarea
                    className="bg-[transparent] h-[150px] w-auto [outline:none] self-stretch box-border flex flex-row items-start justify-start py-[19px] px-[22px] font-rubik text-sm text-gray-100 border-[1px] border-solid border-gainsboro"
                    placeholder="Write your full address"
                    rows={8}
                    cols={43}
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[36px] max-w-full mq450:gap-[18px]">
                <div className="self-stretch relative tracking-[-0.5px] mq450:text-lgi">
                  Payment Method
                </div>
                <div className="w-[505px] flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap">
                  <Button
                    className="h-[74px] flex-[0.7436] min-w-[116px] mq450:flex-1"
                    disableElevation={true}
                    variant="outlined"
                    sx={{
                      borderColor: "#d9d9d9",
                      borderRadius: "0px 0px 0px 0px",
                      "&:hover": { borderColor: "#d9d9d9" },
                      height: 74,
                    }}
                  />
                  <Button
                    className="h-[74px] flex-[0.7436] min-w-[116px] mq450:flex-1"
                    disableElevation={true}
                    variant="outlined"
                    sx={{
                      borderColor: "#d9d9d9",
                      borderRadius: "0px 0px 0px 0px",
                      "&:hover": { borderColor: "#d9d9d9" },
                      height: 74,
                    }}
                  />
                  <Button
                    className="h-[74px] flex-1 min-w-[116px]"
                    disableElevation={true}
                    variant="outlined"
                    sx={{
                      borderColor: "#d9d9d9",
                      borderRadius: "0px 0px 0px 0px",
                      "&:hover": { borderColor: "#d9d9d9" },
                      height: 74,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-[416px] bg-whitesmoke-100 flex flex-col items-start justify-start py-[34px] px-[27px] box-border gap-[24px] min-w-[416px] max-w-full text-xl text-gray-100 lg:flex-1 mq750:pt-[22px] mq750:pb-[22px] mq750:box-border mq750:min-w-full">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border max-w-full text-gray-500">
                <b className="flex-1 relative tracking-[-0.5px] leading-[35px] inline-block max-w-full mq450:text-base mq450:leading-[28px]">
                  Your Order
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[54px] mq450:flex-wrap mq450:gap-[27px]">
                <div className="flex-1 relative tracking-[-0.5px] leading-[35px] inline-block min-w-[156px] mq450:text-base mq450:leading-[28px]">
                  Complete set of sofa... 1x
                </div>
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-gray-500 font-poppins">
                  <div className="relative tracking-[-0.5px] inline-block min-w-[68px] whitespace-nowrap mq450:text-base">
                    $ 75.00
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[53px] mq450:flex-wrap mq450:gap-[26px]">
                <div className="flex-1 relative tracking-[-0.5px] leading-[35px] inline-block min-w-[131px] mq450:text-base mq450:leading-[28px]">
                  Teak wood chair 1x
                </div>
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-gray-500 font-poppins">
                  <div className="relative tracking-[-0.5px] inline-block min-w-[69px] whitespace-nowrap mq450:text-base">
                    $ 24.00
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-500" />
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
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <div className="relative tracking-[-0.5px] leading-[35px] inline-block min-w-[128px] mq450:text-base mq450:leading-[28px]">
                  Discount (30%)
                </div>
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-red font-poppins">
                  <div className="relative tracking-[-0.5px] inline-block min-w-[82px] mq450:text-base">
                    - $ 29.70
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-gray-500" />
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <div className="relative tracking-[-0.5px] leading-[35px] inline-block min-w-[43px] mq450:text-base mq450:leading-[28px]">
                  Total
                </div>
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-gray-500 font-poppins">
                  <div className="relative tracking-[-0.5px] inline-block min-w-[69px] whitespace-nowrap mq450:text-base">
                    $ 69.30
                  </div>
                </div>
              </div>
              <Button
                className="self-stretch h-[50px] mq450:pl-5 mq450:pr-5 mq450:box-border"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fee3ca",
                  fontSize: "18",
                  background: "#23292e",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#23292e" },
                  height: 50,
                }}
              >
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Checkout;
