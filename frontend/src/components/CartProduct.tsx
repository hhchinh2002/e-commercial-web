import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  name?: string;
  price?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propLineHeight?: CSSProperties["lineHeight"];
};

const CartProduct: NextPage<FrameComponent2Type> = ({
  name,
  price,
  propPadding,
  propLineHeight,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const completeSetOfStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-left text-xl text-gray-500 font-raleway mq450:flex-wrap">
      <div className="h-[120px] w-[120px] relative bg-gainsboro min-w-[120px] mq450:flex-1" />
      <div
        className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[191px]"
        style={frameDivStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
          <b
            className="self-stretch relative tracking-[-0.5px] leading-[35px] mq450:text-base mq450:leading-[28px]"
            style={completeSetOfStyle}
          >
            {name}
          </b>
          <div className="w-[154px] relative tracking-[-0.5px] font-poppins text-gray-400 inline-block whitespace-nowrap mq450:text-base">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
