import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";

export type Component1Type = {
  className?: string;
};

const Component1: FunctionComponent<Component1Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-[37px] pb-5 pl-[37px] pr-[34px] box-border relative gap-[34px] min-w-[233px] max-w-full z-[2] text-left text-lg text-white font-pt-sans mq800:pt-6 mq800:box-border gap-[17px] ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[1px_1px_10px_1px_rgba(0,_0,_0,_0.05)] rounded-8xs bg-white" />
      <div className="self-stretch flex flex-row items-start justify-start relative text-base">
        <img
          className="h-[214px] flex-1 relative max-w-full overflow-hidden object-cover z-[0]"
          alt=""
          src="/group-3-1@2x.png"
        />
        <img
          className="h-[77.9px] w-[78.5px] absolute !m-[0] top-[-39px] left-[-18px] object-contain z-[1]"
          alt=""
          src="/group-3@2x.png"
        />
        <div className="absolute !m-[0] top-[-11px] left-[5px] leading-[15px] inline-block min-w-[36px] z-[3]">
          -30%
        </div>
        <img
          className="h-[77.9px] w-[78.5px] absolute !m-[0] top-[-39px] left-[369px] object-contain z-[2]"
          alt=""
          src="/group-3@2x.png"
        />
        <div className="absolute !m-[0] top-[-11px] left-[392px] leading-[15px] inline-block min-w-[36px] z-[3]">
          -30%
        </div>
      </div>
      <div className="w-[138px] relative text-black inline-block z-[1]">
        <p className="m-0">Jute Home Decor</p>
      </div>
      <b className="w-[73px] absolute !m-[0] bottom-[33px] left-[112px] text-xl inline-block text-gray-300 text-center z-[2] mq450:text-base">
        BUY
      </b>
      <FrameComponent prop="699/-" prop1="489/-" />
    </div>
  );
};

export default Component1;
