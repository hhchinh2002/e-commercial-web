import type { NextPage } from "next";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";

const SubscriptionSuggestion: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[75px] pb-[25px] box-border max-w-full text-left text-21xl text-whitesmoke-100 font-raleway mq800:pl-[37px] mq800:pr-[37px] mq800:box-border">
      <div className="flex-1 [background:linear-gradient(135deg,_#273032,_#284b53)] flex flex-row items-start justify-start py-[46px] pr-0 pl-[59px] box-border gap-[44px] max-w-full mq800:gap-[22px] mq450:pt-[30px] mq450:pb-[30px] mq450:box-border mq1350:flex-wrap mq1350:pl-5 mq1350:pr-5 mq1350:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[40px] min-w-[385px] max-w-full mq800:gap-[20px] mq800:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] leading-[60px] font-bold font-inherit mq800:text-13xl mq800:leading-[48px] mq450:text-5xl mq450:leading-[36px]">
              Subscribe now and get 10% off all items
            </h1>
            <div className="self-stretch relative text-base tracking-[-0.5px] leading-[35px] font-rubik">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[1px] max-w-full mq800:flex-wrap">
            <TextField
              className="[border:none] bg-[transparent] h-[69px] flex-1 font-rubik text-lg text-gray-100 min-w-[283px] max-w-full"
              placeholder="Your email here.."
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "69px",
                  backgroundColor: "#fff",
                  borderRadius: "0px 0px 0px 0px",
                  fontSize: "18px",
                },
                "& .MuiInputBase-input": { color: "#909090" },
              }}
            />
            <Button
              className="h-[69px] w-[157px]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fee3ca",
                fontSize: "18",
                background: "#23292e",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#23292e" },
                width: 157,
              }}
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="h-[309px] flex-1 relative min-w-[385px] max-w-full mq800:min-w-full" />
      </div>
    </section>
  );
};

export default SubscriptionSuggestion;
