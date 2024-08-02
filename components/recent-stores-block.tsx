import { FunctionComponent } from "react";

export type RecentStoresBlockType = {
  className?: string;
};

const RecentStoresBlock: FunctionComponent<RecentStoresBlockType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[931.5px] !m-[0] absolute bottom-[281px] left-[-173px] flex flex-row items-end justify-end pt-[277px] px-[26px] pb-[317.6px] box-border gap-[92px] max-w-full text-left text-3xl text-white font-pt-sans mq800:flex-wrap ${className}`}
    >
      <div className="h-[261.9px] w-[309px] flex flex-col items-start justify-start min-w-[309px] mq800:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[65px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[18px] pr-2.5">
            <div className="flex-1 relative tracking-[0.07em] z-[3] mq450:text-lg">
              Sustainable Home Goods
            </div>
          </div>
          <h2 className="m-0 self-stretch relative text-11xl font-bold font-[inherit] z-[2] mq800:text-5xl mq450:text-lg">
            Recently Viewed Stores
          </h2>
        </div>
      </div>
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute top-[74px] left-[372px] rounded-3xs w-[357px] h-[238px] object-cover"
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
        />
        <div className="absolute top-[269px] left-[372px] rounded-t-none rounded-br-none rounded-bl-3xs bg-forestgreen-300 w-[290px] h-[43px] z-[2]" />
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain z-[5]"
          alt=""
        />
      </div>
      <div className="w-[134px] flex flex-col items-start justify-start pt-[52.3px] pb-[52.9px] pl-[33px] pr-0 box-border min-w-[134px] text-mini mq800:flex-1">
        <div className="self-stretch flex flex-row items-start justify-start relative">
          <img
            className="h-[124.2px] w-[125px] absolute !m-[0] bottom-[-52.9px] left-[-33px] object-contain z-[8]"
            alt=""
            src="/group-7@2x.png"
          />
          <div className="flex-1 relative z-[9]">Best Seller</div>
        </div>
      </div>
    </div>
  );
};

export default RecentStoresBlock;
