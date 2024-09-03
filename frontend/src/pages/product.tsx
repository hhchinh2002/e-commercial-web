import type { NextPage } from "next";
import ProductDetail from "../components/ProductDetail";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import ProductReview from "src/components/ProductReview";
import Navbar from "src/components/Navbar";
import { Product } from "src/types/IProduct";

const sampleScentedCandleProduct: Product = {
  id: 1,
  name: "Lavender Bliss Scented Candle",
  description: "A soothing lavender-scented candle perfect for relaxation and stress relief. Made with natural soy wax and essential oils.",
  price: 19.99,
  quantity: 100,
  scent: "Lavender",
  size: "Medium",
  weight: 0.5, // Weight in kilograms
  imageUrl: "https://irishomefragrances.com/cdn/shop/products/INAC8005LA_1.jpg?v=1704262425&width=2048",
  category: "Candles",
  rating: 4.7,
  createdAt: new Date("2024-01-01T10:00:00Z"),
  updatedAt: new Date("2024-09-01T12:00:00Z"),
}

const ProductPage: NextPage = () => {
  return (
    <div className="w-full relative bg-seashell overflow-hidden flex flex-col items-start justify-start gap-[75px] leading-[normal] tracking-[normal] mq450:gap-[19px] mq750:gap-[37px]">
      <Navbar />
      <ProductDetail product={sampleScentedCandleProduct} />
      {/* Product review (to be released later)*/}
      {/* <ProductReview /> 
      <section className="w-full flex flex-row items-start justify-start pt-0 px-[75px] pb-[25px] box-border max-w-full text-center text-21xl text-gray-500 font-raleway mq750:pl-[37px] mq750:pr-[37px] mq750:box-border">
        <div className="flex-1 flex flex-col items-start justify-center align-center gap-[43px] max-w-full mq750:gap-[21px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.5px] font-normal font-inherit mq450:text-5xl mq1050:text-13xl">
            Related Products
          </h1>
          <div className="w-full overflow-x-auto flex flex-row items-center justify-center gap-[19px] max-w-full text-left text-sm text-white font-rubik">
            <ProductCard />
            <ProductCard />
            <ProductCard /> 
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
};

export default ProductPage;
