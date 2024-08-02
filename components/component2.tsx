import { FunctionComponent } from "react";

export type Component2Type = {
  className?: string;
};

const Component2: FunctionComponent<Component2Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[389px] w-[358px] flex flex-col items-start justify-start pt-[37px] pb-8 pl-9 pr-[34px] box-border gap-[34px] z-[7] text-left text-lg text-black font-pt-sans ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[1px_1px_10px_1px_rgba(0,_0,_0,_0.05)] rounded-8xs bg-white" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-[3px]">
        <img
          className="h-[214px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/group-31@2x.png"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-7">
        <div className="w-[220px] flex flex-row items-start justify-start pt-0 px-0 pb-1.5 box-border">
          <div className="flex-1 relative z-[1]">Recycled Straw Hat</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 text-silver-100">
          <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                <div className="h-px flex-1 relative border-gainsboro-200 border-t-[1px] border-solid box-border z-[1]" />
              </div>
              <div className="w-[207px] flex flex-row items-start justify-start gap-3 z-[1]">
                <div className="w-[82px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                  <b className="self-stretch relative [text-decoration:line-through] leading-[19px]">
                    300/-
                  </b>
                </div>
                <b className="h-[26px] flex-1 relative text-6xl inline-block text-black mq450:text-xl">
                  150/-
                </b>
              </div>
            </div>
            <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border z-[1]" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-px text-center text-xl text-gray-300">
          <div className="w-[216px] flex flex-row items-start justify-between gap-5">
            <div className="w-20 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-start relative">
                <div className="h-[53px] w-[220px] absolute !m-[0] top-[-14px] left-[calc(50%_-_110px)] rounded-8xs border-forestgreen-100 border-[1px] border-solid box-border z-[1]" />
                <b className="flex-1 relative z-[2] mq450:text-base">BUY</b>
              </div>
            </div>
            <img
              className="h-[29px] w-[34px] relative overflow-hidden shrink-0 min-h-[29px] z-[1]"
              alt=""
              src="/-4-3.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[63px] h-[30px] relative rounded-sm bg-forestgreen-100 hidden z-[3]" />
      <div className="w-[27px] h-0 relative text-sm text-white text-center hidden z-[4]">
        Best Seller
      </div>
    </div>
  );
};

export default Component2;
