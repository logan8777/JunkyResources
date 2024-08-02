import { FunctionComponent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import Component4 from "./Component4";

export type WorryJunkContainerType = {
  className?: string;
};

const WorryJunkContainer: FunctionComponent<WorryJunkContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-21xl text-black font-radio-canada ${className}`}
    >
      <div className="w-[1520px] !m-[0] absolute top-[256px] left-[199px] rounded-3xs bg-white border-black border-[1px] border-solid box-border flex flex-row items-start justify-between pt-[3px] pb-[21px] pl-[249px] pr-[151px] max-w-full gap-5 z-[3] mq1350:flex-wrap">
        <div className="h-[387px] w-[1520px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden max-w-full" />
        <div className="w-[644px] flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border min-w-[644px] max-w-full mq1125:min-w-full mq1350:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] z-[4] mq800:text-13xl mq450:text-5xl">
              <p className="m-0">
                Worried about junks that you don’t need anymore?
              </p>
              <p className="m-0">&nbsp;</p>
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border max-w-full text-31xl">
              <h1 className="m-0 h-[153px] flex-1 relative text-inherit font-semibold font-[inherit] flex items-center max-w-full z-[4] mq800:text-21xl mq450:text-11xl">{`Your junks might just be someone’s key to creativity.. `}</h1>
            </div>
          </div>
        </div>
        <img
          className="h-[359px] w-[309px] relative rounded-69xl object-cover z-[4] mq1350:flex-1"
          loading="lazy"
          alt=""
          src="/picture11-1@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-end justify-start pt-0 px-0 pb-[102px] box-border gap-[505px] max-w-full text-lg font-pt-sans gap-[126px] mq800:pb-[43px] mq800:box-border gap-[252px] mq1125:pb-[66px] mq1125:box-border">
        <header className="self-stretch h-[230px] relative max-w-full text-left text-lg text-white font-pt-sans mq800:h-auto mq800:min-h-[230]">
          <div className="absolute top-[180px] left-[199px] bg-forestgreen-100 w-[87px] h-[3px] z-[1]" />
          <Component4 />
          <div className="absolute top-[137px] left-[0px] w-full h-[93px] max-w-full text-center text-17xl text-black font-poppins">
            <div className="absolute h-[calc(100%_-_33px)] w-full top-[19px] right-[0px] bottom-[14px] left-[0px] bg-limegreen" />
            <img
              className="absolute h-full w-[9.79%] top-[0px] right-[81.82%] bottom-[0px] left-[8.39%] max-w-full overflow-hidden max-h-full z-[1]"
              loading="lazy"
              alt=""
              src="/rectangle-4.svg"
            />
            <div className="absolute top-[15px] left-[188px] w-[1548px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
              <b className="self-stretch relative z-[1] mq450:text-base">
                <span>
                  <span className="text-red">{` `}</span>
                  <span>Deals</span>
                  <span className="text-seagreen">{` `}</span>
                </span>
                <span className="text-white text-xl">
                  <span>{` `}</span>
                  <span className="whitespace-pre-wrap">
                    {" "}
                    Eco-Friendly G-Tech 0 Waste Home Goods Gadgets Markets Where
                    to Look
                  </span>
                </span>
              </b>
            </div>
            <div className="absolute bottom-[-701px] left-[0px] w-[960.8px] flex flex-col items-start justify-start pt-[69.5px] px-[133px] pb-0 box-border gap-[62px] max-w-full text-left text-11xl text-white font-pt-sans">
              <Autocomplete
                className="w-[243px] h-96"
                sx={{ width: 243 }}
                disablePortal
                options={[] as any}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    color="primary"
                    label=""
                    variant="standard"
                    placeholder=""
                    helperText=""
                  />
                )}
              />
              <div className="w-[506px] flex flex-row items-start justify-start py-0 px-[66px] box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full">
                  <h2 className="m-0 w-[321px] relative text-inherit font-bold font-[inherit] inline-block max-w-full z-[1] mq800:text-5xl mq450:text-lg">
                    OUR ADVANTAGES
                  </h2>
                  <div className="self-stretch h-[94px] relative text-lg text-black">
                    <b className="absolute top-[36px] left-[107px] leading-[20px] inline-block w-[267px] h-5">
                      Day-Wise Highlighted Deals
                    </b>
                    <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[357px]">
                      <div className="absolute top-[0px] left-[0px] rounded-8xs bg-whitesmoke-100 w-full h-full z-[1]" />
                      <img
                        className="absolute top-[18px] left-[29px] w-[67px] h-[62px] overflow-hidden"
                        loading="lazy"
                        alt=""
                        src="/interface11-2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[349px] flex flex-row items-start justify-start py-0 px-[66px] box-border max-w-full">
                <h2 className="m-0 flex-1 relative text-inherit font-bold font-[inherit] mq800:text-5xl mq450:text-lg">
                  Catagories
                </h2>
              </div>
            </div>
          </div>
        </header>
        <div className="w-[1533px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[357px] rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-start pt-3.5 px-[34px] pb-[15px] box-border gap-[45px] max-w-full z-[3] mq450:flex-wrap gap-[22px]">
            <div className="h-[94px] w-[357px] relative rounded-8xs bg-whitesmoke-100 hidden max-w-full" />
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-[62px] h-[57px] relative z-[4]"
                alt=""
                src="/group-2.svg"
              />
            </div>
            <div className="w-[171px] flex flex-col items-start justify-start gap-1">
              <b className="w-[105px] relative inline-block z-[4]">
                Low Prices
              </b>
              <div className="self-stretch relative text-base z-[4]">
                If you find it cheaper we will give you a discount
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorryJunkContainer;
