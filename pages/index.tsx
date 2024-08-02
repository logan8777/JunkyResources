import { FunctionComponent } from "react";
import WorryJunkContainer from "../components/WorryJunkContainer";
import FrameComponent3 from "../components/FrameComponent3";
import InnerCircleBlock from "../components/InnerCircleBlock";
import RecentStoresBlock from "../components/RecentStoresBlock";
import FrameComponent1 from "../components/FrameComponent1";
import ResourceTitle from "../components/ResourceTitle";
import FrameComponent2 from "../components/FrameComponent2";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full h-[3470px] relative bg-gray-200 overflow-hidden flex flex-col items-start justify-start pt-[17px] px-0 pb-0.5 box-border gap-[162.5px] leading-[normal] tracking-[normal] text-left text-lg text-gray-300 font-pt-sans gap-[41px] gap-[81px] mq1350:h-auto">
      <div className="w-[70px] h-[70px] relative rounded-[50%] bg-lightblue hidden" />
      <section className="self-stretch flex flex-row items-start justify-start relative max-w-full text-center text-lg text-gray-400 font-pt-sans">
        <div className="w-[1520px] !m-[0] absolute right-[188px] bottom-[-38.5px] rounded-8xs bg-whitesmoke-200 flex flex-row items-start justify-center pt-3.5 pb-[17px] pl-10 pr-5 box-border max-w-full z-[2] text-11xl text-gray-300 font-outfit">
          <div className="h-[75px] w-[1520px] relative rounded-8xs bg-whitesmoke-200 hidden max-w-full" />
          <h2 className="m-0 h-11 w-[220px] relative text-inherit font-semibold font-[inherit] flex items-center justify-center shrink-0 z-[1] mq800:text-5xl mq450:text-lg">
            SHOW MORE
          </h2>
        </div>
        <div className="w-[357px] !m-[0] absolute top-[735px] left-[587px] rounded-8xs bg-whitesmoke-100 flex flex-row items-start justify-start pt-5 pb-[18px] pl-11 pr-[34px] box-border gap-[41px] max-w-full z-[1] text-left text-black">
          <div className="h-[94px] w-[357px] relative rounded-8xs bg-whitesmoke-100 hidden max-w-full" />
          <img
            className="h-14 w-[93px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/group.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
            <b className="self-stretch relative leading-[16.5px] z-[1]">
              Fast Delivery
            </b>
          </div>
        </div>
        <div className="h-[239px] w-[357px] absolute !m-[0] top-[957px] left-[199px] rounded-3xs bg-cover bg-no-repeat bg-[top] z-[6] text-left text-3xl text-white">
          <img
            className="absolute top-[0px] left-[1px] rounded-3xs w-full h-full object-cover hidden"
            alt=""
            src="/interiorofturquoiseandwhiteelegantkitchenwi20210831143310utc-1@2x.png"
          />
          <div className="absolute top-[176px] left-[0px] rounded-t-none rounded-br-none rounded-bl-3xs bg-forestgreen-300 w-[228px] h-[63px] z-[7]" />
          <div className="absolute top-[181px] left-[16px] tracking-[0.07em] inline-block w-[251px] h-[45px] z-[8] mq450:text-lg">
            Rececycled and Upcycled Materials
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[81.5px] box-border gap-[26px] max-w-full z-[2] mq800:pb-[22px] mq800:box-border mq1125:pb-[34px] mq1125:box-border mq1350:pb-[53px] mq1350:box-border">
          <WorryJunkContainer />
          <FrameComponent3 />
        </div>
        <div className="h-[2744.8px] w-[1762px] absolute !m-[0] right-[0px] bottom-[-1035.3px] text-left text-3xl text-white">
          <img
            className="absolute top-[1888.3px] left-[774.7px] w-[931.5px] h-[856.5px] object-contain"
            alt=""
            src="/ellipse-12.svg"
          />
          <img
            className="absolute top-[566px] left-[0px] w-[1918.4px] h-[1413px] object-contain z-[1]"
            alt=""
            src="/ellipse-10.svg"
          />
          <InnerCircleBlock />
          <div className="absolute top-[646px] left-[1203px] rounded-3xs w-[358px] h-[238px] bg-cover bg-no-repeat bg-[top] z-[3]">
            <img
              className="absolute top-[0px] left-[1px] rounded-3xs w-full h-full object-cover hidden"
              alt=""
              src="/3drenderingbusinessmeetingroomonhighriseof20210827232054utc-1@2x.png"
            />
            <div className="absolute top-[174px] left-[0px] w-[299px] h-16">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-br-none rounded-bl-3xs bg-forestgreen-300 w-[275px] z-[4]" />
              <div className="absolute h-[calc(100%_-_5px)] top-[5px] left-[10px] tracking-[0.07em] inline-block w-[289px] z-[5] mq450:text-lg">
                Community Projects and Collaborations
              </div>
            </div>
          </div>
        </div>
        <RecentStoresBlock />
        <div className="h-[45px] w-[153px] !m-[0] absolute right-[432px] bottom-[-207.5px] rounded-8xs border-gray-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3.5 pb-[17px] pl-[660px] pr-0 z-[2]">
          <div className="h-[45px] w-[153px] relative rounded-8xs border-gray-400 border-[1px] border-solid box-border hidden" />
          <h2 className="m-0 w-[93px] relative text-inherit leading-[15px] font-normal font-[inherit] inline-block shrink-0 [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
            GreenTech
          </h2>
        </div>
        <div className="h-[45px] w-[153px] !m-[0] absolute right-[248px] bottom-[-207.5px] rounded-8xs border-gray-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3.5 pb-[17px] pl-[660px] pr-0 z-[2]">
          <div className="h-[45px] w-[153px] relative rounded-8xs border-gray-400 border-[1px] border-solid box-border hidden" />
          <h2 className="m-0 w-[95px] relative text-inherit leading-[15px] font-normal font-[inherit] inline-block shrink-0 [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
            WasteLess
          </h2>
        </div>
        <div className="h-[45px] w-[149px] !m-[0] absolute right-[836px] bottom-[-207.5px] rounded-8xs border-gray-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3.5 pb-[17px] pl-[660px] pr-0 z-[2]">
          <div className="h-[45px] w-[149px] relative rounded-8xs border-gray-400 border-[1px] border-solid box-border hidden" />
          <h2 className="m-0 w-[79px] relative text-inherit leading-[15.3px] font-normal font-[inherit] inline-block shrink-0 [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
            Recycled
          </h2>
        </div>
        <div className="h-[45px] w-[183px] !m-[0] absolute right-[619px] bottom-[-207.5px] rounded-8xs border-gray-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3.5 pb-[17px] pl-[660px] pr-0 z-[2]">
          <div className="h-[45px] w-[183px] relative rounded-8xs border-gray-400 border-[1px] border-solid box-border hidden" />
          <h2 className="m-0 w-[126px] relative text-inherit leading-[15px] font-normal font-[inherit] inline-block shrink-0 [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
            EcoConscious
          </h2>
        </div>
        <div className="h-[45px] w-[153px] !m-[0] absolute right-[518px] bottom-[-267.5px] rounded-8xs border-gray-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3.5 pb-[17px] pl-[660px] pr-0 z-[2]">
          <div className="h-[45px] w-[153px] relative rounded-8xs border-gray-400 border-[1px] border-solid box-border hidden" />
          <h2 className="m-0 w-[74px] relative text-inherit leading-[15.3px] font-normal font-[inherit] inline-block shrink-0 [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
            BioBased
          </h2>
        </div>
        <div className="h-[45px] w-[142px] !m-[0] absolute right-[342px] bottom-[-267.5px] rounded-8xs border-gray-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3.5 pb-[17px] pl-[660px] pr-0 whitespace-nowrap z-[2]">
          <div className="h-[45px] w-[142px] relative rounded-8xs border-gray-400 border-[1px] border-solid box-border hidden" />
          <h2 className="m-0 w-[100px] relative text-inherit leading-[19px] font-normal font-[inherit] inline-block shrink-0 [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
            Green Made
          </h2>
        </div>
        <div className="h-[45px] w-[183px] !m-[0] absolute right-[705px] bottom-[-267.5px] rounded-8xs border-gray-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3.5 pb-[17px] pl-[660px] pr-0 z-[2]">
          <div className="h-[45px] w-[183px] relative rounded-8xs border-gray-400 border-[1px] border-solid box-border hidden" />
          <h2 className="m-0 w-[94px] relative text-inherit leading-[15.3px] font-normal font-[inherit] inline-block shrink-0 [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
            EarthSafe
          </h2>
        </div>
        <div className="h-[45px] w-[182px] !m-[0] absolute right-[922px] bottom-[-267.5px] rounded-8xs border-gray-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3.5 pb-[17px] pl-[660px] pr-0 z-[2]">
          <div className="h-[45px] w-[182px] relative rounded-8xs border-gray-400 border-[1px] border-solid box-border hidden" />
          <h2 className="m-0 w-[110px] relative text-inherit leading-[15px] font-normal font-[inherit] inline-block shrink-0 [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
            Renewable
          </h2>
        </div>
        <div className="h-[45px] w-[142px] !m-[0] absolute right-[1235px] bottom-[-207.5px] rounded-8xs border-gray-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3.5 pb-[17px] pl-[660px] pr-0 z-[2]">
          <div className="h-[45px] w-[142px] relative rounded-8xs border-gray-400 border-[1px] border-solid box-border hidden" />
          <h2 className="m-0 w-[100px] relative text-inherit leading-[19px] font-normal font-[inherit] inline-block shrink-0 [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
            EcoFriendly
          </h2>
        </div>
        <div className="h-[45px] w-[182px] !m-[0] absolute right-[1019px] bottom-[-207.5px] rounded-8xs border-gray-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3.5 pb-[17px] pl-[660px] pr-0 z-[2]">
          <div className="h-[45px] w-[182px] relative rounded-8xs border-gray-400 border-[1px] border-solid box-border hidden" />
          <h2 className="m-0 w-[110px] relative text-inherit leading-[15px] font-normal font-[inherit] inline-block shrink-0 [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
            Sustainable
          </h2>
        </div>
        <div className="h-[45px] w-36 !m-[0] absolute right-[1527px] bottom-[-267.5px] rounded-8xs border-gray-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3.5 pb-[17px] pl-[660px] pr-0 z-[2]">
          <div className="h-[45px] w-36 relative rounded-8xs border-gray-400 border-[1px] border-solid box-border hidden" />
          <h2 className="m-0 w-[79px] relative text-inherit leading-[15px] font-normal font-[inherit] inline-block shrink-0 [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
            Upcycled
          </h2>
        </div>
        <div className="h-[45px] w-[139px] !m-[0] absolute right-[1354px] bottom-[-267.5px] rounded-8xs border-gray-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3.5 pb-[17px] pl-[660px] pr-0 z-[2]">
          <div className="h-[45px] w-[139px] relative rounded-8xs border-gray-400 border-[1px] border-solid box-border hidden" />
          <h2 className="m-0 w-[87px] relative text-inherit leading-[15px] font-normal font-[inherit] inline-block shrink-0 [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
            EcoSmart
          </h2>
        </div>
        <div className="h-[45px] w-[182px] !m-[0] absolute right-[1138px] bottom-[-267.5px] rounded-8xs border-gray-400 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-3.5 pb-[17px] pl-[660px] pr-0 whitespace-nowrap z-[2]">
          <div className="h-[45px] w-[182px] relative rounded-8xs border-gray-400 border-[1px] border-solid box-border hidden" />
          <h2 className="m-0 w-[110px] relative text-inherit leading-[15px] font-normal font-[inherit] inline-block shrink-0 [-webkit-text-stroke:1px_rgba(255,_255,_255,_0.6)] z-[1]">
            Low Impact
          </h2>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center py-0 pl-[707px] pr-5 box-border max-w-full mq800:pl-44 mq800:box-border mq450:pl-5 mq450:box-border mq1350:pl-[353px] mq1350:box-border">
        <div className="w-[737px] flex flex-col items-end justify-start gap-[15px] max-w-full">
          <div className="self-stretch h-[45px]" />
          <div className="self-stretch h-[45px] flex flex-row items-start justify-center py-0 pl-[23px] pr-5 box-border max-w-full">
            <div className="self-stretch w-[546px] max-w-full" />
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[191.5px] pl-0.5 pr-0 box-border max-w-full shrink-0 mq1125:pb-[124px] mq1125:box-border mq450:pb-[81px] mq450:box-border">
        <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <FrameComponent1 />
          <ResourceTitle />
          <FrameComponent2 />
        </div>
      </section>
      <div className="self-stretch h-5 flex flex-row items-start justify-center py-0 pl-[1375px] pr-5 box-border shrink-0 mq800:pl-[343px] mq800:box-border mq450:pl-5 mq450:box-border mq1350:pl-[687px] mq1350:box-border">
        <div className="self-stretch w-[165px] relative leading-[20px] inline-block shrink-0">
          Смотреть все работы
        </div>
      </div>
    </div>
  );
};

export default Desktop;
