import { FunctionComponent } from "react";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1651.3px] !m-[0] absolute top-[-94.5px] right-[130.2px] rounded-xl bg-black overflow-hidden shrink-0 flex flex-row items-center justify-between pt-[40.5px] px-16 pb-[40.6px] box-border max-w-full gap-5 z-[2] text-left text-21xl text-white font-integral-cf mq1125:flex-wrap ${className}`}
    >
      <h1 className="m-0 h-[94px] w-[551px] relative text-inherit leading-[45px] font-bold font-[inherit] inline-block shrink-0 max-w-full mq800:text-13xl mq800:leading-[36px] mq450:text-5xl mq450:leading-[27px]">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <div className="w-[349px] flex flex-col items-start justify-start gap-3.5 min-w-[349px] max-w-full mq800:min-w-full mq1125:flex-1">
        <div className="self-stretch rounded-43xl bg-white overflow-hidden flex flex-row items-start justify-start py-3 pl-4 pr-[124px] gap-3">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/placeholder.svg"
          />
          <input
            className="w-[calc(100%_-_164px)] [border:none] [outline:none] font-satoshi text-base bg-[transparent] h-[22px] flex-1 relative text-gray-700 text-left inline-block min-w-[104px] p-0"
            placeholder="Enter your email address"
            type="text"
          />
        </div>
        <button className="cursor-pointer [border:none] py-3 px-5 bg-white self-stretch rounded-43xl overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-100">
          <div className="w-[172px] relative text-base font-medium font-satoshi text-black text-left inline-block">
            Subscribe to Newsletter
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent2;
