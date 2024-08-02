import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";

export type ComponentType = {
  className?: string;
};

const Component: FunctionComponent<ComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[490px] flex-1 flex flex-col items-start justify-start pt-[37px] pb-5 pl-[37px] pr-[34px] box-border relative gap-[34px] min-w-[233px] max-w-full z-[2] text-left text-lg text-black font-pt-sans mq800:pt-6 mq800:box-border mq450:h-auto gap-[17px] ${className}`}
    >
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[1px_1px_10px_1px_rgba(0,_0,_0,_0.05)] rounded-8xs bg-white" />
      <div className="self-stretch flex flex-row items-start justify-start shrink-0">
        <img
          className="h-[214px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          alt=""
          src="/group-3-2@2x.png"
        />
      </div>
      <div className="self-stretch relative leading-[102.4%] shrink-0 z-[1]">
        <p className="m-0">Recycled colourful paper straws</p>
        <p className="m-0">100 Pcs</p>
      </div>
      <b className="w-[73px] absolute !m-[0] bottom-[33px] left-[111px] text-xl inline-block text-gray-300 text-center z-[2] mq450:text-base">
        BUY
      </b>
      <FrameComponent
        propMinHeight="130px"
        propHeight="38px"
        propHeight1="19px"
        prop="150/-"
        propColor="#bdbdbd"
        prop1="104/-"
        propHeight2="29px"
      />
    </div>
  );
};

export default Component;
