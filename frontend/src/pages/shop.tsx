import type { NextPage } from "next";
import {
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Shop: NextPage = () => {
  return (
    <div className="w-full relative bg-seashell overflow-hidden flex flex-col items-start justify-start gap-[100px] leading-[normal] tracking-[normal] mq750:gap-[50px] mq450:gap-[25px]">
      <Navbar />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[75px] pb-[228px] box-border max-w-full text-left text-xl text-gray-100 font-raleway lg:pb-[148px] lg:box-border mq750:pl-[37px] mq750:pr-[37px] mq750:box-border mq1050:pb-24 mq1050:box-border mq450:pb-[62px] mq450:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full text-left text-xl text-gray-500 font-raleway">
        <div className="w-[308px] flex flex-col items-start justify-start gap-[22px]">
          <div className="self-stretch relative leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
            Filter By Price
          </div>
          <div className="w-[234px] flex flex-row items-start justify-start gap-[16px] text-lg text-gray-100 font-rubik">
            <div className="flex-[0.8351] flex flex-row items-start justify-start pt-2 px-2 pb-[9px] relative">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded box-border opacity-[0.5] border-[1px] border-solid border-gray-100" />
              <div className="relative tracking-[-0.5px] inline-block min-w-[23px] whitespace-nowrap z-[1]">
                $0
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0 text-sm text-gray-500 font-plus-jakarta-sans">
              <div className="relative leading-[24px] font-semibold inline-block min-w-[8px]">
                -
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[4.1px]">
              <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                <div className="relative tracking-[-0.5px] inline-block min-w-[54px] shrink-0 [debug_commit:1de1738] whitespace-nowrap">
                  $2000
                </div>
              </div>
              <div className="h-[38px] w-[38.9px] relative rounded box-border opacity-[0.5] shrink-0 [debug_commit:1de1738] border-[1px] border-solid border-gray-100" />
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-row items-start justify-between min-w-[625px] max-w-full gap-[20px] mq750:flex-wrap mq1050:min-w-full">
          <div className="w-[407px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq450:flex-wrap">
            <TextField
              className="[border:none] bg-[transparent] h-[49px] flex-1 font-rubik text-sm text-gray-700 min-w-[197px]"
              placeholder="Office Chair"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "49px",
                  backgroundColor: "#fff",
                  borderRadius: "0px 0px 0px 0px",
                  fontSize: "14px",
                },
                "& .MuiInputBase-input": { color: "rgba(0, 0, 0, 0.25)" },
              }}
            />
            <Button
              className="h-[49px] w-[104px]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fee3ca",
                fontSize: "14",
                background: "#23292e",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#23292e" },
                width: 104,
                height: 49,
              }}
            >
              Search
            </Button>
          </div>
          <div className="w-[72px] flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 box-border">
            <FormControl
              className="self-stretch h-6 font-raleway font-medium text-sm text-gray-500"
              variant="standard"
              sx={{
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderRadius: "0px 0px 0px 0px",
                width: "72px",
                height: "24px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "24px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "24px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "24px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "24px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#000201",
                  fontSize: 14,
                  fontWeight: "Medium",
                  fontFamily: "Raleway",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="20px"
                    height="20px"
                    src="/evaarrowiosforwardfill.png"
                    style={{}}
                  />
                )}
              >
                <MenuItem>Sort By</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
      </div>
          <div className="w-[1235.7px] flex flex-col items-start justify-start gap-[8px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[74.3px] max-w-full lg:flex-wrap mq750:gap-[37px] mq450:gap-[19px]">
              <div className="h-[1187px] w-[308px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[308px] lg:flex-1">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[59.3px] mq450:gap-[30px]">
                  <div className="w-[233px] flex flex-col items-start justify-start gap-[6.8px]">
                    <div className="self-stretch flex flex-row items-start justify-end">
                      <div className="h-[1.2px] w-4 relative rounded-[50%] bg-gray-400" />
                    </div>
                    <div className="w-4 h-[1.2px] relative rounded-[50%] bg-gray-400" />
                    <div className="self-stretch h-0.5 relative box-border border-t-[2px] border-solid border-gray-100" />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base font-poppins">
                    <div className="self-stretch relative text-xl leading-[24px] font-semibold font-raleway text-gray-500 mq450:text-base mq450:leading-[19px]">
                      Product Categories
                    </div>
                    <div className="self-stretch relative tracking-[-0.5px] text-gray-400">
                      Chair (9)
                    </div>
                    <div className="self-stretch relative tracking-[-0.5px]">
                      Lamp (10)
                    </div>
                    <div className="self-stretch relative tracking-[-0.5px]">
                      Table (12)
                    </div>
                    <div className="self-stretch relative tracking-[-0.5px]">
                      Sofa (6)
                    </div>
                    <div className="self-stretch relative tracking-[-0.5px]">
                      Table (12)
                    </div>
                    <div className="self-stretch relative tracking-[-0.5px]">
                      Clock (5)
                    </div>
                    <div className="self-stretch relative tracking-[-0.5px]">
                      Pillow (3)
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-gray-500">
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px]">
                      <div className="flex-1 relative leading-[24px] font-semibold mq450:text-base mq450:leading-[19px]">
                        Product Tag
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[15px]">
                      <div className="flex flex-row items-start justify-start gap-[10px]">
                        <button className="cursor-pointer py-1 px-[11px] bg-gray-400 w-[66px] rounded-8xs box-border flex flex-row items-start justify-start border-[1px] border-solid border-gray-400 hover:bg-dimgray hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray">
                          <div className="relative text-base tracking-[-0.5px] font-poppins text-bisque text-left inline-block min-w-[42px]">
                            Chair
                          </div>
                        </button>
                        <button className="cursor-pointer py-1 px-[11px] bg-[transparent] w-[68px] rounded-8xs box-border flex flex-row items-start justify-start border-[1px] border-solid border-gray-100 hover:bg-gray-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-300">
                          <div className="relative text-base tracking-[-0.5px] font-poppins text-gray-100 text-left inline-block min-w-[44px]">
                            Lamp
                          </div>
                        </button>
                        <button className="cursor-pointer py-1 px-[11px] bg-[transparent] rounded-8xs flex flex-row items-start justify-start border-[1px] border-solid border-gray-100 hover:bg-gray-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-300">
                          <div className="relative text-base tracking-[-0.5px] font-poppins text-gray-100 text-left inline-block min-w-[77px]">
                            Minimalist
                          </div>
                        </button>
                      </div>
                      <div className="w-[204px] flex flex-row items-start justify-start gap-[10px]">
                        <button className="cursor-pointer py-1 px-[11px] bg-[transparent] flex-1 rounded-8xs flex flex-row items-start justify-start border-[1px] border-solid border-gray-100 hover:bg-gray-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-300">
                          <div className="relative text-base tracking-[-0.5px] font-poppins text-gray-100 text-left inline-block min-w-[35px]">
                            Sofa
                          </div>
                        </button>
                        <button className="cursor-pointer py-1 px-[11px] bg-[transparent] flex-1 rounded-8xs flex flex-row items-start justify-start border-[1px] border-solid border-gray-100 hover:bg-gray-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-300">
                          <div className="relative text-base tracking-[-0.5px] font-poppins text-gray-100 text-left inline-block min-w-[34px]">
                            New
                          </div>
                        </button>
                        <button className="cursor-pointer py-1 px-[11px] bg-[transparent] flex-1 rounded-8xs flex flex-row items-start justify-start border-[1px] border-solid border-gray-100 hover:bg-gray-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-300">
                          <div className="relative text-base tracking-[-0.5px] font-poppins text-gray-100 text-left inline-block min-w-[43px]">
                            Clock
                          </div>
                        </button>
                      </div>
                    </div>
                    <button className="cursor-pointer py-1 px-[11px] bg-[transparent] w-[66px] rounded-8xs box-border flex flex-row items-start justify-start border-[1px] border-solid border-gray-100 hover:bg-gray-600 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-300">
                      <div className="relative text-base tracking-[-0.5px] font-poppins text-gray-100 text-left inline-block min-w-[42px]">
                        Pillow
                      </div>
                    </button>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start text-center text-white">
                    <div className="self-stretch flex-1 relative rounded-[10px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0),_#000)]" />
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[21px] pl-[21.5px]">
                      <b className="flex-1 relative leading-[35px] z-[1] mq450:text-base mq450:leading-[28px]">
                        Make a purchase now and get 50% discount
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[33px] min-w-[554px] max-w-full text-center text-5xl text-darkslategray mq750:min-w-full mq450:gap-[16px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[271px] max-w-full">
                    <img
                      className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-18-2@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
                      <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] font-normal font-inherit mq450:text-lgi">
                        Vanilla-scented Candel
                      </h3>
                      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-lg font-rubik">
                        <div className="relative tracking-[-0.5px] inline-block min-w-[61px] whitespace-nowrap">
                          $ 24.00
                        </div>
                      </div>
                      <div className="self-stretch h-[45px] flex flex-row items-start justify-center py-0 px-5 box-border">
                        <Button
                          className="self-stretch w-[135px]"
                          disableElevation={true}
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            color: "#3e4e50",
                            fontSize: "18",
                            borderColor: "#3e4e50",
                            borderRadius: "0px 0px 0px 0px",
                            "&:hover": { borderColor: "#3e4e50" },
                            width: 135,
                          }}
                        >
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[271px] max-w-full">
                    <img
                      className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-18@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
                      <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] font-normal font-inherit mq450:text-lgi">
                        Vanilla-scented Candel
                      </h3>
                      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-lg font-rubik">
                        <div className="relative tracking-[-0.5px] inline-block min-w-[61px] whitespace-nowrap">
                          $ 24.00
                        </div>
                      </div>
                      <div className="self-stretch h-[45px] flex flex-row items-start justify-center py-0 px-5 box-border">
                        <Button
                          className="self-stretch w-[135px]"
                          disableElevation={true}
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            color: "#3e4e50",
                            fontSize: "18",
                            borderColor: "#3e4e50",
                            borderRadius: "0px 0px 0px 0px",
                            "&:hover": { borderColor: "#3e4e50" },
                            width: 135,
                          }}
                        >
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[271px] max-w-full">
                    <img
                      className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-18-2@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
                      <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] font-normal font-inherit mq450:text-lgi">
                        Vanilla-scented Candel
                      </h3>
                      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-lg font-rubik">
                        <div className="relative tracking-[-0.5px] inline-block min-w-[61px] whitespace-nowrap">
                          $ 24.00
                        </div>
                      </div>
                      <div className="self-stretch h-[45px] flex flex-row items-start justify-center py-0 px-5 box-border">
                        <Button
                          className="self-stretch w-[135px]"
                          disableElevation={true}
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            color: "#3e4e50",
                            fontSize: "18",
                            borderColor: "#3e4e50",
                            borderRadius: "0px 0px 0px 0px",
                            "&:hover": { borderColor: "#3e4e50" },
                            width: 135,
                          }}
                        >
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[271px] max-w-full">
                    <img
                      className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover"
                      loading="lazy"
                      alt=""
                      src="/rectangle-18@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
                      <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] font-normal font-inherit mq450:text-lgi">
                        Vanilla-scented Candel
                      </h3>
                      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-lg font-rubik">
                        <div className="relative tracking-[-0.5px] inline-block min-w-[61px] whitespace-nowrap">
                          $ 24.00
                        </div>
                      </div>
                      <div className="self-stretch h-[45px] flex flex-row items-start justify-center py-0 px-5 box-border">
                        <Button
                          className="self-stretch w-[135px]"
                          disableElevation={true}
                          variant="outlined"
                          sx={{
                            textTransform: "none",
                            color: "#3e4e50",
                            fontSize: "18",
                            borderColor: "#3e4e50",
                            borderRadius: "0px 0px 0px 0px",
                            "&:hover": { borderColor: "#3e4e50" },
                            width: 135,
                          }}
                        >
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1025px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-sm text-gray-500 font-rubik">
              <div className="w-[824px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
                <div className="w-[107px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                  <Button
                    className="self-stretch h-[38px]"
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000201",
                      fontSize: "16",
                      background: "#fee3ca",
                      border: "#fee3ca solid 1px",
                      borderRadius: "5px",
                      "&:hover": { background: "#fee3ca" },
                      height: 38,
                    }}
                  >
                    Buy Now
                  </Button>
                </div>
                <div className="w-[231px] flex flex-row items-start justify-start gap-[27px]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 text-white">
                    <div className="flex flex-row items-start justify-start gap-[10px]">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <img
                          className="w-[15px] h-[15px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/akariconschevronleft.svg"
                        />
                      </div>
                      <div className="relative tracking-[-0.5px] inline-block min-w-[6px]">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
                    <div className="h-[35px] w-[4.6px] relative rounded-81xl bg-gray-400" />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                      <div className="self-stretch relative tracking-[-0.5px] inline-block min-w-[9px]">
                        2
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
                    <div className="h-[35px] w-[4.3px] relative rounded-81xl bg-whitesmoke-200 shrink-0 [debug_commit:1de1738]" />
                    <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                      <div className="self-stretch relative tracking-[-0.5px] inline-block min-w-[9px] shrink-0 [debug_commit:1de1738]">
                        3
                      </div>
                    </div>
                  </div>
                  <div className="h-[35px] w-[16.3px] relative">
                    <div className="absolute top-[0px] left-[0px] rounded-81xl bg-whitesmoke-200 w-[4.1px] h-[35px]" />
                    <img
                      className="absolute top-[8px] left-[14.1px] w-[2.2px] h-5 overflow-hidden"
                      loading="lazy"
                      alt=""
                      src="/bxbxdotshorizontalrounded.svg"
                    />
                  </div>
                  <div className="h-[35px] w-[28.9px] relative">
                    <div className="absolute top-[0px] left-[0px] rounded-81xl bg-whitesmoke-200 w-[3.9px] h-[35px]" />
                    <img
                      className="absolute top-[10px] left-[13.9px] w-[15px] h-[15px] overflow-hidden object-contain"
                      loading="lazy"
                      alt=""
                      src="/akariconschevronleft-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shop;
