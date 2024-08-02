import { FunctionComponent } from "react";

export type Component3Type = {
  className?: string;
};

const Component3: FunctionComponent<Component3Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-full flex flex-col items-end justify-start pt-[37px] pb-[27px] pl-[31px] pr-[113px] box-border gap-4 max-w-full h-full z-[6] text-left text-base text-white font-pt-sans ${className}`}
    >
      <div className="w-[357px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px] shadow-[4px_4px_10px_2px_rgba(0,_0,_0,_0.1)] rounded-8xs bg-white" />
      <div className="self-stretch flex flex-row items-start justify-start relative">
        <img
          className="h-[214px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
        />
        <img
          className="h-[77.9px] w-[78.5px] absolute !m-[0] top-[-39px] left-[-17px] object-contain z-[2]"
          alt=""
          src="/group-3@2x.png"
        />
        <div className="absolute !m-[0] top-[-11px] left-[6px] leading-[15px] inline-block min-w-[36px] z-[3]">
          -30%
        </div>
      </div>
      <b className="w-[73px] absolute !m-[0] bottom-[111px] left-[111px] text-xl inline-block text-center z-[2] mq450:text-base">
        BUY
      </b>
      <div className="self-stretch flex flex-row items-start justify-end py-0 pl-1.5 pr-1 text-lg text-black">
        <div className="flex-1 flex flex-col items-start justify-start gap-[11.5px]">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[5px] gap-[3px] mq450:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start gap-[19px] min-w-[129px]">
              <div className="w-[183px] flex flex-row items-start justify-start gap-[19px]">
                <div className="h-[5px] flex-1 relative rounded-sm bg-forestgreen-100 z-[1]" />
                <div className="h-[5px] flex-1 relative rounded-sm border-forestgreen-100 border-[1px] border-solid box-border z-[1]" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-1">
                <div className="self-stretch relative z-[1]">
                  Recycled Pilastic String Bag
                </div>
                <div className="flex flex-row items-start justify-start gap-[12.5px]">
                  <div className="h-7 w-7 relative rounded-sm bg-darkslategray z-[1]" />
                  <div className="h-7 w-7 relative rounded-sm bg-darkolivegreen z-[1]" />
                  <div className="h-7 w-7 relative rounded-sm bg-blanchedalmond z-[1]" />
                </div>
              </div>
            </div>
            <div className="h-[5px] w-[82px] relative rounded-sm border-forestgreen-100 border-[1px] border-solid box-border z-[1]" />
          </div>
          <img
            className="self-stretch h-px relative max-w-full overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/line-2.svg"
          />
          <div className="w-[210px] flex flex-row items-start justify-start pt-0 px-0 pb-[3.5px] box-border gap-3 text-silver-100">
            <div className="w-[82px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <b className="self-stretch relative [text-decoration:line-through] z-[1]">
                999/-
              </b>
            </div>
            <b className="flex-1 relative text-6xl text-black z-[1] mq450:text-xl">
              699/-
            </b>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7.5px]">
            <div className="h-px flex-1 relative border-gainsboro-200 border-t-[1px] border-solid box-border z-[1]" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[27px] text-base text-gray-300">
            <div className="self-stretch flex flex-row items-start justify-start gap-[31px] mq450:flex-wrap">
              <div className="h-[53px] flex-1 relative rounded-8xs bg-forestgreen-100 min-w-[143px] z-[1]" />
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <img
                  className="w-[34px] h-[29px] relative overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/-4-2.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[11px] mq450:flex-wrap">
              <div className="flex-1 relative text-sm inline-block min-w-[48px] z-[1]">
                <p className="m-0">Dimensions</p>
              </div>
              <div className="w-[61px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch relative z-[1]">
                  <p className="m-0">height</p>
                  <p className="m-0">30 Cm</p>
                </div>
              </div>
              <div className="w-[52px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch relative z-[1]">
                  <p className="m-0">Width</p>
                  <p className="m-0">55Cm</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="relative z-[1]">
                  <p className="m-0">Capacity</p>
                  <p className="m-0">22 L</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-44 h-[59.5px] relative rounded-sm hidden z-[4]"
        alt=""
      />
      <div className="w-[141px] h-0 relative text-sm text-gray-100 hidden z-[5]">
        Добавить в избранное
      </div>
    </div>
  );
};

export default Component3;
