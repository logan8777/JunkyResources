import { FunctionComponent } from "react";

export type Component4Type = {
  className?: string;
};

const Component4: FunctionComponent<Component4Type> = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[-1px] w-full flex flex-col items-end justify-start pt-px px-0 pb-[65px] box-border gap-2 max-w-full z-[2] text-left text-lg text-white font-pt-sans ${className}`}
    >
      <div className="self-stretch h-[37px] flex flex-col items-start justify-start pt-0 px-0 pb-[11px] box-border gap-[11px] max-w-full mq800:h-auto">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[22px] box-border max-w-full">
          <div className="w-[1522px] flex flex-row items-end justify-between max-w-full gap-5 mq800:flex-wrap">
            <nav className="m-0 w-[506px] flex flex-row items-start justify-start gap-[22px] max-w-full whitespace-nowrap text-left text-lg text-white font-pt-sans mq450:flex-wrap">
              <div className="flex-1 flex flex-row items-start justify-start py-0 pl-0 pr-[9px] box-border gap-[3.5px] min-w-[74px]">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/location-and-map--location.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <a className="[text-decoration:none] self-stretch relative font-bold text-[inherit]">
                    India
                  </a>
                </div>
                <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                  <img
                    className="w-3.5 h-3.5 relative overflow-hidden shrink-0 object-contain"
                    alt=""
                    src="/chevronleft-1@2x.png"
                  />
                </div>
              </div>
              <div className="w-[67px] flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-4 box-border">
                <a className="[text-decoration:none] self-stretch relative text-[inherit]">
                  Home
                </a>
              </div>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[73px]">
                  Services
                </a>
              </div>
              <div className="w-[73px] flex flex-col items-start justify-start pt-[3px] pb-0 pl-0 pr-1 box-border">
                <a className="[text-decoration:none] self-stretch relative text-[inherit]">
                  Orders
                </a>
              </div>
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[91px]">
                  Help Center
                </a>
              </div>
            </nav>
            <div className="w-[236px] flex flex-row items-start justify-start gap-14">
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[106px]">
                Notifications
              </a>
              <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[74px]">
                Contacts
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative border-gainsboro-300 border-t-[1px] border-solid box-border shrink-0" />
      </div>
      <div className="w-[1893px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-21xl font-outfit">
        <div className="w-[1527px] flex flex-row items-start justify-between max-w-full gap-5 mq1350:flex-wrap">
          <a className="[text-decoration:none] relative leading-[40px] font-bold text-[inherit] mq800:text-13xl mq800:leading-[32px] mq450:text-5xl mq450:leading-[24px]">
            <p className="m-0">Junky</p>
            <p className="m-0">Resources</p>
          </a>
          <div className="w-[955px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full text-mini font-pt-sans">
            <div className="self-stretch flex flex-row items-end justify-start pt-0 px-0 pb-3 box-border gap-[43px] max-w-full mq800:flex-wrap gap-[21px]">
              <div className="flex-1 flex flex-row items-end justify-start gap-[97px] max-w-full mq800:flex-wrap gap-12 mq800:min-w-full gap-6">
                <div className="flex-1 flex flex-row items-start justify-between pt-[11px] pb-[11.1px] pl-[25px] pr-[11px] box-border relative min-w-[100px] gap-5">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl border-lightblue border-[1px] border-solid box-border" />
                  <input
                    className="w-[77px] [border:none] [outline:none] bg-[transparent] h-4 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border font-pt-sans text-base text-white"
                    placeholder="Search"
                    type="text"
                  />
                  <img
                    className="h-[22.9px] w-[22.9px] relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/interface36-1.svg"
                  />
                </div>
                <div className="w-[219px] flex flex-row items-start justify-start">
                  <img
                    className="h-[29px] w-[27px] relative"
                    alt=""
                    src="/group-1.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[9px] pr-0">
                        <b className="flex-1 relative">+91 98522 XX589</b>
                      </div>
                      <div className="w-32 flex flex-row items-start justify-start relative text-center text-lg text-crimson">
                        <div className="h-[35px] w-[177px] absolute !m-[0] bottom-[-12px] left-[-25px] rounded-8xs border-crimson border-[1px] border-solid box-border" />
                        <a className="[text-decoration:none] flex-1 relative leading-[18px] text-[inherit] z-[1]">
                          Request a call
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[300px] flex flex-col items-start justify-start gap-[9px] text-sm">
                <div className="w-[277px] flex flex-row items-start justify-start py-0 px-5 box-border">
                  <div className="flex-1 flex flex-row items-end justify-between gap-5">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                      <img
                        className="w-[17px] h-[19px] relative overflow-hidden shrink-0"
                        alt=""
                        src="/-6-1.svg"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-start gap-3.5">
                      <img
                        className="h-[19px] w-[22px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/-4-1.svg"
                      />
                      <div className="flex flex-row items-start justify-start py-0 pl-0 pr-3.5">
                        <div className="h-[19px] w-9 relative rounded-6xs bg-crimson" />
                        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 ml-[-22px]">
                          <div className="relative inline-block min-w-[8px] z-[1]">
                            2
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                      <img
                        className="w-6 h-6 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/-1-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-[39px] text-left text-lg text-white font-pt-sans gap-[19px]">
                  <div className="flex-1 flex flex-row items-start justify-between gap-5">
                    <a className="[text-decoration:none] relative leading-[18px] text-[inherit] inline-block min-w-[65px]">
                      Account
                    </a>
                    <a className="[text-decoration:none] w-[95px] relative leading-[18px] text-[inherit] inline-block shrink-0">
                      Favorites
                    </a>
                  </div>
                  <div className="w-[67px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <a className="[text-decoration:none] self-stretch relative leading-[18px] text-[inherit]">
                      Cart
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component4;
