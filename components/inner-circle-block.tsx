import { FunctionComponent } from "react";

export type InnerCircleBlockType = {
  className?: string;
};

const InnerCircleBlock: FunctionComponent<InnerCircleBlockType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[0px] left-[856px] w-[906px] h-[856.5px] text-left text-3xl text-white font-pt-sans ${className}`}
    >
      <img
        className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[931.5px] object-contain z-[2]"
        alt=""
        src="/ellipse-8.svg"
      />
      <div className="absolute top-[369px] left-[348px] rounded-3xs w-[357px] h-[238px] bg-cover bg-no-repeat bg-[top] z-[3]">
        <img
          className="absolute top-[0px] left-[0px] rounded-3xs w-full h-full object-cover hidden"
          alt=""
          src="/househallwayinteriorwithclothesandfurniture20210901053146utc-1@2x.png"
        />
        <div className="absolute top-[195px] left-[0px] rounded-t-none rounded-br-none rounded-bl-3xs bg-forestgreen-200 w-[242px] h-[43px] whitespace-nowrap z-[4]">
          <div className="absolute top-[0px] left-[0px] rounded-t-none rounded-br-none rounded-bl-3xs bg-forestgreen-200 w-full h-full hidden" />
          <div className="absolute top-[8px] left-[16px] tracking-[0.07em] inline-block w-[226px] h-[30px] z-[5]">
            Zero-Waste Products
          </div>
        </div>
      </div>
      <div className="absolute top-[147px] left-[347px] rounded-8xs bg-whitesmoke-100 w-[357px] h-[94px] whitespace-nowrap z-[3] text-lg text-black">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-whitesmoke-100 w-full h-full hidden" />
        <b className="absolute top-[34.5px] left-[162px] leading-[20.5px] inline-block w-[147px] h-[20.5px] z-[4]">
          Quality assurance
        </b>
        <img
          className="absolute top-[16px] left-[47px] w-[72px] h-[62.9px] z-[4]"
          alt=""
          src="/group-6.svg"
        />
      </div>
    </div>
  );
};

export default InnerCircleBlock;
