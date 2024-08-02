import { FunctionComponent } from "react";
import Component3 from "./Component3";
import Component2 from "./Component2";
import Component1 from "./Component1";
import Component from "./Component";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[26px] box-border max-w-full text-left text-3xl text-white font-pt-sans ${className}`}
    >
      <div className="w-[1520px] flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[239.3px] w-[357px] absolute !m-[0] top-[277px] left-[391px] rounded-3xs object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/minimalistloungewithmodernsofa20210826153251utc-1@2x.png"
        />
        <div className="h-[238px] w-[358px] absolute !m-[0] top-[0px] left-[389px] z-[2]">
          <img
            className="absolute top-[0px] left-[0px] w-full h-full object-cover"
            loading="lazy"
            alt=""
            src="/group-21@2x.png"
          />
          <div className="absolute top-[175px] left-[0px] rounded-t-none rounded-br-none rounded-bl-3xs bg-forestgreen-300 w-[247px] h-[63px] z-[1]" />
          <div className="absolute top-[176px] left-[16px] tracking-[0.07em] inline-block w-[244px] h-[27px] z-[2] mq450:text-lg">
            Eco-Friendly Fashion and Accessories
          </div>
        </div>
        <div className="h-16 w-[292px] absolute !m-[0] top-[454.5px] left-[389px]">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[273px] z-[3]"
            alt=""
            src="/rectangle-22.svg"
          />
          <div className="absolute h-[calc(100%_-_5px)] top-[2.5px] left-[12px] tracking-[0.07em] inline-block w-[280px] z-[4] mq450:text-lg">
            Educatiolnal Resources and DIY Kits
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start gap-[125px] max-w-full gap-[31px] gap-4 gap-[62px]">
          <div className="w-[1127px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[359px] flex flex-col items-start justify-start gap-[39px] max-w-full gap-[19px]">
              <div className="self-stretch h-[238px] relative rounded-3xs bg-cover bg-no-repeat bg-[top] z-[3]">
                <img
                  className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full object-cover hidden"
                  alt=""
                  src="/classicmasterbedroom20210826153252utc-1@2x.png"
                />
                <div className="absolute top-[175px] left-[0px] rounded-t-none rounded-br-none rounded-bl-3xs bg-forestgreen-300 w-[232px] h-[63px] z-[4]" />
                <div className="absolute top-[175px] left-[18px] tracking-[0.07em] inline-block w-[253px] h-[55px] z-[5] mq450:text-lg">
                  Green Technologies and Gadgets
                </div>
              </div>
              <div className="self-stretch h-[239px] relative rounded-3xs bg-cover bg-no-repeat bg-[top] z-[3]">
                <img
                  className="absolute top-[0px] left-[1px] rounded-3xs w-full h-full object-cover hidden"
                  alt=""
                  src="/childrensroominterior20220104060841utc-1@2x.png"
                />
                <div className="absolute top-[196px] left-[0px] rounded-t-none rounded-br-none rounded-bl-3xs bg-forestgreen-300 w-[315px] h-[43px] z-[4]" />
                <div className="absolute top-[202px] left-[20px] tracking-[0.07em] inline-block w-[301px] h-[30px] z-[5] mq450:text-lg">
                  Circular Economy Services
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-7 max-w-full text-base">
            <div className="h-[618px] flex-1 relative min-w-[486px] max-w-full mq800:min-w-full mq450:h-auto mq450:min-h-[618]">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[440px] max-w-full mq450:h-auto mq450:min-h-[618]">
                <div className="absolute top-[385px] left-[267px] w-[100px] h-[100px] overflow-hidden hidden" />
                <Component3 />
                <div className="absolute top-[341px] left-[159px] rounded-sm bg-palevioletred border-black border-[1px] border-solid box-border w-7 h-7 z-[7]" />
              </div>
              <Component2 />
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[29px] min-w-[484px] max-w-full text-lg mq800:flex-wrap mq800:min-w-full">
              <Component1 />
              <Component />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
