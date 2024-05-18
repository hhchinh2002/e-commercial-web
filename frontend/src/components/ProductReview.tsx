import type { NextPage } from "next";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const ProductReview: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[75px] pb-[98px] box-border max-w-full text-left text-sm text-gray-100 font-josefin-sans lg:pb-16 lg:box-border mq750:pl-[37px] mq750:pr-[37px] mq750:pb-[42px] mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[16px]">
        <div className="w-[251px] flex flex-row items-start justify-between pt-0 px-0 pb-[17px] box-border gap-[20px] text-5xl">
          <b className="relative tracking-[-0.5px] inline-block min-w-[125px] mq450:text-lgi">
            Description
          </b>
          <div className="w-[76px] flex flex-col items-start justify-start gap-[8px] text-gray-400">
            <b className="relative tracking-[-0.5px] inline-block min-w-[76px] mq450:text-lgi">
              Review
            </b>
            <div className="self-stretch h-1.5 relative bg-gray-400" />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full text-gray-500 font-rubik">
          <div className="self-stretch flex flex-row items-start justify-start gap-[485px] mq450:gap-[121px] mq1050:flex-wrap mq1050:gap-[242px]">
            <div className="h-[54px] flex flex-row items-start justify-start gap-[15px]">
              <div className="self-stretch w-[54px] relative rounded-[50%]" />
              <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <div className="relative tracking-[-0.5px] inline-block min-w-[91px]">
                    Ralph Edwards
                  </div>
                  <div className="relative text-xs tracking-[-0.5px] text-gray-200 inline-block min-w-[74px]">
                    2 minutes ago
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
              <div className="flex flex-row items-start justify-start gap-[12px]">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  loading="lazy"
                  alt=""
                  src="/icon--star.svg"
                />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src="/icon--star.svg"
                />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src="/icon--star.svg"
                />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src="/icon--star.svg"
                />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src="/icon--star.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[50px] max-w-full mq750:gap-[25px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                <div className="w-[1236px] relative tracking-[-0.5px] leading-[35px] inline-block shrink-0 max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  justo turpis massa tristique augue dignissim volutpat. Quis
                  ultricies eu libero tortor dictumst.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[485px] mq450:gap-[121px] mq1050:flex-wrap mq1050:gap-[242px]">
                  <div className="h-[54px] flex flex-row items-start justify-start gap-[15px]">
                    <div className="self-stretch w-[54px] relative rounded-[50%]" />
                    <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                      <div className="flex flex-col items-start justify-start gap-[5px]">
                        <div className="relative tracking-[-0.5px] inline-block min-w-[91px]">
                          Ralph Edwards
                        </div>
                        <div className="relative text-xs tracking-[-0.5px] text-gray-200 inline-block min-w-[74px]">
                          2 minutes ago
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-[12px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                        alt=""
                        src="/icon--star.svg"
                      />
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                        alt=""
                        src="/icon--star.svg"
                      />
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                        alt=""
                        src="/icon--star.svg"
                      />
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                        alt=""
                        src="/icon--star.svg"
                      />
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                        alt=""
                        src="/icon--star.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                  <div className="w-[1221px] relative tracking-[-0.5px] leading-[35px] inline-block shrink-0 max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    justo turpis massa tristique augue dignissim volutpat. Quis
                    ultricies eu libero tortor dictumst.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch relative text-5xl tracking-[-0.5px] font-raleway text-center mq450:text-lgi">
              Write your review
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full text-lg font-raleway mq750:gap-[25px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
              <div className="self-stretch relative tracking-[-0.5px] font-semibold">
                Your Rating
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px]">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src="/icon--star.svg"
                />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src="/icon--star.svg"
                />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src="/icon--star-12.svg"
                />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src="/icon--star-12.svg"
                />
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src="/icon--star-12.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[31px] max-w-full mq750:gap-[15px]">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[17px] min-w-[414px] max-w-full mq750:min-w-full">
                  <div className="relative tracking-[-0.5px] font-semibold inline-block min-w-[91px]">
                    Your Name
                  </div>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[59px] font-rubik text-sm text-gray-100"
                    placeholder="Write your name here...."
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "59px",
                        borderRadius: "0px 0px 0px 0px",
                        fontSize: "14px",
                      },
                      "& .MuiInputBase-input": { color: "#909090" },
                    }}
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[17px] min-w-[414px] max-w-full mq750:min-w-full">
                  <div className="relative tracking-[-0.5px] font-semibold inline-block min-w-[86px]">
                    Your Email
                  </div>
                  <TextField
                    className="[border:none] bg-[transparent] self-stretch h-[59px] font-rubik text-sm text-gray-100"
                    placeholder="Write your email here...."
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#d9d9d9" },
                      "& .MuiInputBase-root": {
                        height: "59px",
                        borderRadius: "0px 0px 0px 0px",
                        fontSize: "14px",
                      },
                      "& .MuiInputBase-input": { color: "#909090" },
                    }}
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
                <div className="self-stretch relative tracking-[-0.5px] font-semibold">
                  Your Review
                </div>
                <textarea
                  className="bg-[transparent] h-[218px] w-auto [outline:none] self-stretch box-border flex flex-row items-start justify-start p-4 font-rubik text-sm text-gray-100 border-[1px] border-solid border-gainsboro"
                  placeholder="Write your review here...."
                  rows={11}
                  cols={65}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[30px] max-w-full font-inter">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <input
              className="m-0 h-[18px] w-[18px] relative box-border border-[1px] border-solid border-gainsboro"
              type="checkbox"
            />
            <div className="relative tracking-[-0.5px]">
              Save my name, email, and website in this browser for the next time
              I comment.
            </div>
          </div>
          <Button
            className="w-[155px] h-[50px]"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#23292e",
              border: "#23292e solid 2px",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#23292e" },
              width: 155,
              height: 50,
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductReview;
