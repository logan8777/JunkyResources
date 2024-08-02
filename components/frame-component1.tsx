import { FunctionComponent } from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[901px] !m-[0] absolute top-[-492.5px] left-[-2px] flex flex-col items-start justify-start pt-[146px] pb-[526.5px] pl-[249px] pr-0 box-border gap-[41px] max-w-full text-left text-11xl text-white font-pt-sans ${className}`}
    >
      <img
        className="w-[931.5px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[-118px] max-h-full object-contain"
        alt=""
        src="/ellipse-11.svg"
      />
      <h2 className="m-0 w-[355px] relative text-inherit font-bold font-[inherit] inline-block [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] max-w-full z-[2] mq800:text-5xl mq450:text-lg">
        Custom Filter
      </h2>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start gap-[34px] mq800:flex-wrap">
            <button className="cursor-pointer border-gray-400 border-[1px] border-solid pt-[9px] px-[27px] pb-[13px] bg-gray-400 w-[113px] rounded-8xs box-border flex flex-row items-start justify-start z-[2] hover:bg-gainsboro-400 hover:border-gainsboro-400 hover:border-[1px] hover:border-solid hover:box-border">
              <div className="h-[45px] w-[113px] relative rounded-8xs bg-gray-400 border-gray-400 border-[1px] border-solid box-border hidden" />
              <div className="flex-1 relative text-lg leading-[19px] font-pt-sans text-white text-center [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
                Home
              </div>
            </button>
            <button className="cursor-pointer border-gray-400 border-[1px] border-solid pt-[9px] px-[18px] pb-[13px] bg-[transparent] w-[113px] rounded-8xs box-border flex flex-row items-start justify-start z-[2] hover:bg-gainsboro-500 hover:border-gainsboro-400 hover:border-[1px] hover:border-solid hover:box-border">
              <div className="h-[45px] w-[113px] relative rounded-8xs border-gray-400 border-[1px] border-solid box-border hidden" />
              <div className="flex-1 relative text-lg leading-[19px] font-pt-sans text-gray-400 text-center [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
                Circular
              </div>
            </button>
          </div>
          <div className="w-[553px] h-[45px] max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
