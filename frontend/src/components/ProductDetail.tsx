import type { NextPage } from "next";
import { Button, IconButton, Rating, TextField } from "@mui/material";
import { Product } from "src/types/IProduct";
import { useState } from "react";
import { AddCircle, Favorite, FavoriteBorder, HeadsetRounded, RemoveCircle } from "@mui/icons-material";

const ProductDetail: NextPage<{ product: Product }> = ({ product }) => {
  const { name, imageUrl, price, description, rating } = product;
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[75px] pb-[25px] box-border max-w-full text-left text-lg text-gray-100 font-rubik mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[47px] max-w-full mq750:gap-[23px] overflow-hidden">
        <img
          className="self-stretch h-[595px] flex-1 relative bg-gainsboro min-w-[404px] max-w-full mq750:min-w-full shrink-0 object-cover"
          loading="lazy"
          alt=""
          src={imageUrl}
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[30px] min-w-[404px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[33px] mq750:gap-[16px]">
            <h2 className="m-0 self-stretch relative text-13xl tracking-[-0.5px] font-bold font-raleway text-gray-500 mq450:text-lgi mq1050:text-7xl">
              {name}
            </h2>
            <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[403.5px] pl-0 gap-[15px] text-sm mq450:pr-5 mq450:box-border mq750:flex-wrap mq750:pr-[201px] mq750:box-border">
              <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[137px]">
                <Rating
                  name="read-only"
                  value={rating}
                  precision={0.2}
                  readOnly
                />
              </div>
              <div className="relative tracking-[-0.5px] inline-block min-w-[63px]">
                ( 1 review )
              </div>
            </div>
            <div className="self-stretch relative text-17xl tracking-[-0.5px] text-gray-400 whitespace-nowrap mq450:text-3xl mq1050:text-10xl">
              $ {price}
            </div>
            {/* <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch relative tracking-[-0.5px]">
                <span>Stock :</span>
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
            </div> */}
            <div className="self-stretch relative tracking-[-0.5px] leading-[35px]">
              {description}
            </div>
          </div>
          <div className="w-[337.9px] flex flex-row items-start justify-start gap-[19px] max-w-full text-gray-500 mq450:flex-wrap">
            <div className="flex-1 box-border flex flex-row items-start justify-start py-[3px] gap-[15px] min-w-[83px] max-w-[120px] border-[1px] border-solid border-gray-500">
              <div className="flex items-center justify-center border p-2">
                <IconButton
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <RemoveCircle />
                </IconButton>

                <div className="relative flex items-center justify-center min-w-[40px] mx-2">
                  <TextField
                    value={quantity.toString()}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                    inputProps={{
                      style: { textAlign: "center", padding: "0 5px" },
                    }}
                    size="small"
                    variant="standard"
                    className="w-full borderless"
                    sx={{
                      "& .MuiInputBase-root": {
                        padding: 0,
                      },
                      "& .MuiInput-underline:before": {
                        borderBottom: "none",
                      },
                      "& .MuiInput-underline:hover:before": {
                        borderBottom: "none",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottom: "2px solid black", // Change the color and width as needed
                      },
                      "& .Mui-focused .MuiInput-underline:after": {
                        borderBottom: "2px solid black", // Ensure focus shows the border
                      },
                      "& .MuiInput-underline.Mui-focused:before": {
                        borderBottom: "2px solid black", // Optional: Display border on focus
                      },
                    }}
                  />
                </div>

                <IconButton
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <AddCircle />
                </IconButton>
              </div>
            </div>
            <Button
              className="h-[45px] flex-[0.9375] min-w-[83px] mq450:flex-1 max-w-[130px]"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#facfad",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#f5ac72" },
                height: 45,
              }}
            >
              Add to Cart
            </Button>

            {/* Favorite to be released later
            <IconButton>
              <FavoriteBorder/>
            </IconButton> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
