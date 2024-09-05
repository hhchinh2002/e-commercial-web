import type { NextPage } from "next";
import { Button } from "@mui/material";
import { Product } from "src/types/IProduct";

interface ProductCardParams {
  imageUrl: string,
  name: string,
  price: number,
}

const ProductCard: NextPage<ProductCardParams> = ({ imageUrl, name, price } : ProductCardParams) => {
  if (!imageUrl) {
    imageUrl = "https://cdn.shopify.com/s/files/1/0383/7902/8612/files/3_e4dad3ba-2834-4467-95d9-42a5a02bcd42_480x480.jpg?v=1691484781";
  }
  console.log(imageUrl);
  return (
    <div className="flex min-w-[400px] flex-col items-start justify-start gap-[24px] max-w-[500px] text-center text-5xl text-darkslategray font-raleway">
      <img
        className="self-stretch h-[400px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={imageUrl}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
        <div className="self-stretch relative tracking-[-0.5px] mq450:text-lgi">
          {name}
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-left text-lg font-rubik">
          <div className="relative tracking-[-0.5px] inline-block whitespace-nowrap">
            $ {price}
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

export default ProductCard;
