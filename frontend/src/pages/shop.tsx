import type { NextPage } from "next";
import {
  TextField,
  Button,
  Pagination,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "src/components/ProductCard";
import { Product } from "src/types/IProduct";
import productService from "src/helpers/product-service/api-wrappers";
import { useEffect, useState } from "react";

const Shop: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const getProducts = async () => {
    try {
      const products = await productService.getProducts();
      setProducts(products);
      setLastPage(Math.ceil(products.length/6))
    } catch (err) {
      console.log("error fetching products", err);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        await getProducts();
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  
  return (
    <div className="w-full relative bg-seashell overflow-hidden flex flex-col items-start justify-start gap-[100px] leading-[normal] tracking-[normal] mq750:gap-[50px] mq450:gap-[25px]">
      <Navbar />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[75px] pb-[50px] box-border max-w-full text-left text-xl text-gray-100 font-raleway lg:pb-[148px] lg:box-border mq750:pl-[37px] mq750:pr-[37px] mq750:box-border mq1050:pb-24 mq1050:box-border mq450:pb-[62px] mq450:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="w-full flex flex-col items-start justify-start gap-[8px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[74.3px] max-w-full lg:flex-wrap mq750:gap-[37px] mq450:gap-[19px]">
              <div className="h-[1187px] w-[308px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[308px] lg:flex-1">
                <div className="w-[407px] pb-[50px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq450:flex-wrap">
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
                <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[59.3px] mq450:gap-[30px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base font-poppins">
                    <div className="self-stretch relative text-xl leading-[24px] font-semibold font-raleway text-gray-500 mq450:text-base mq450:leading-[19px]">
                      ProductCard Categories
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
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-[50px]">
                <div className="w-full overflow-auto flex-1 flex flex-wrap flex-start items-start justify-start gap-[33px] min-w-[554px] max-w-full text-center text-5xl text-darkslategray mq750:min-w-full mq450:gap-[16px]">
                  {
                    products.slice((page - 1) * 6, Math.min(products.length, page * 6)).map(product => (
                      // eslint-disable-next-line react/jsx-key
                      <ProductCard imageUrl={product.imageUrl} name={product.name} price={product.price}/>
                    ))
                  }
                </div>
                <div className="w-full relative text-sm text-gray-500 font-rubik">
                  <div className="flex flex-row items-start justify-center gap-[20px] max-w-full mq750:flex-wrap">
                    <Pagination count={lastPage} shape="rounded" size="large" showLastButton onChange={handlePageChange}/>
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
