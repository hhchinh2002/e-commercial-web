import type { NextPage } from "next";
import Footer from "../components/Footer";
import Navbar from "src/components/Navbar";
import { Button } from "@mui/material";
import Product from "src/components/Product";

const Homepage: NextPage = () => {
  return (
    <div className="w-full relative bg-seashell overflow-hidden flex flex-col items-start justify-start gap-[75px] leading-[normal] tracking-[normal] mq800:gap-[37px] mq450:gap-[19px]">
      <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-xl text-peachpuff font-rubik">
        <Navbar />
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-20 px-[75px] box-border gap-[60px] bg-[url('/hero@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full lg:gap-[30px] lg:pl-[37px] lg:pr-[37px] lg:box-border mq750:gap-[15px] mq750:pt-[52px] mq750:pb-[52px] mq750:box-border">
          <div className="flex-1 flex flex-col items-start justify-start pt-[153px] px-0 pb-0 box-border min-w-[400px] max-w-full mq450:pt-[99px] mq450:box-border mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[28px]">
              <div className="self-stretch relative tracking-[-0.5px] mq450:text-base">
                The Scent
              </div>
              <h1 className="m-0 self-stretch relative text-21xl tracking-[-0.5px] leading-[60px] font-bold font-raleway mq450:text-5xl mq450:leading-[36px] mq1050:text-13xl mq1050:leading-[48px]">
                Illuminate Your Life with the a variety of Scents
              </h1>
              <Button
                className="w-[218px] h-[60px]"
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#3e4e50",
                  fontSize: "20",
                  background: "#facfad",
                  border: "#facfad solid 2px",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#facfad" },
                  width: 218,
                  height: 60,
                }}
              >
                Shop Now
              </Button>
            </div>
          </div>
          <div className="h-[566px] flex-1 relative min-w-[400px] max-w-full mq750:min-w-full" />
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full text-center text-21xl text-darkslategray font-raleway mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[25px]">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] font-normal font-inherit mq450:text-5xl mq1050:text-13xl">
          Best-Sellers
        </h1>
        <div className="self-stretch grid flex-row items-start justify-start pt-0 px-0 pb-[125px] box-border gap-[20px] max-w-full grid-cols-[repeat(3,_minmax(313px,_1fr))] text-5xl lg:justify-center lg:grid-cols-[repeat(2,_minmax(313px,_542px))] mq750:pb-[81px] mq750:box-border mq750:grid-cols-[minmax(313px,_1fr)]">
          <Product cardImages="/rectangle-18@2x.png" />
          <Product cardImages="/rectangle-18-1@2x.png" />
          <Product cardImages="/rectangle-18-2@2x.png" />
        </div>
      </div>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
