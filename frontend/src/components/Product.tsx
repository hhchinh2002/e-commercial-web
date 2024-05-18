import type { NextPage } from "next";
import { Button } from "@mui/material";

export type ProductCardsType = {
  cardImages?: string;
};

const ProductCards: NextPage<ProductCardsType> = ({ cardImages }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[24px] max-w-full text-center text-5xl text-darkslategray font-raleway">
      <img
        className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={cardImages}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
        <div className="self-stretch relative tracking-[-0.5px] mq450:text-lgi">
          Vanilla-scented Candel
        </div>
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
  );
};

export default ProductCards;
