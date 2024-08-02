import { FunctionComponent } from "react";

export type ResourceTitleType = {
  className?: string;
};

const ResourceTitle: FunctionComponent<ResourceTitleType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 bg-whitesmoke-300 flex flex-col items-start justify-start pt-[153.5px] pb-[52px] pl-[136px] pr-[130px] box-border gap-[21px] max-w-full z-[1] text-left text-29xl text-black font-outfit mq800:pt-[100px] mq800:pb-[34px] mq800:pl-[34px] mq800:pr-8 mq800:box-border mq1125:pl-[68px] mq1125:pr-[65px] mq1125:box-border ${className}`}
    >
      <div className="w-[1919px] h-[723.5px] relative bg-whitesmoke-300 hidden max-w-full" />
      <div className="w-[299.5px] flex flex-row items-start justify-start py-0 px-[25px] box-border">
        <h1 className="m-0 flex-1 relative text-inherit [text-decoration:underline] font-bold font-[inherit] z-[2] mq800:text-19xl mq450:text-10xl">
          <p className="m-0">Junky</p>
          <p className="m-0">Resources</p>
        </h1>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-[22px] pb-[5px] box-border max-w-full text-xl">
        <b className="relative z-[2] mq450:text-base">
          Your JUNK, Their RESOURCE
        </b>
      </div>
      <footer className="self-stretch flex flex-col items-end justify-start gap-[50.1px] max-w-full text-left text-3xl text-black font-pt-sans gap-[25px]">
        <div className="w-[1635.8px] flex flex-row items-start justify-end py-0 px-0.5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-2">
              <b className="relative z-[2] mq450:text-lg">+91 98522 XX589</b>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start pt-0 px-0 pb-[9px] box-border gap-3 max-w-full z-[2] text-base font-satoshi">
              <div className="h-[66px] w-[248px] hidden" />
              <div className="flex-1 flex flex-col items-start justify-start min-w-[762px] max-w-full mq1125:min-w-full">
                <div className="w-[104px] flex flex-col items-start justify-start gap-[26px] shrink-0">
                  <div className="relative tracking-[3px] leading-[18px] uppercase font-medium inline-block min-w-[100px]">
                    Company
                  </div>
                  <div className="self-stretch relative leading-[19px] text-gray-600">
                    <p className="m-0 whitespace-pre-wrap">{`About          `}</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0 whitespace-pre-wrap">{`Features          `}</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0 whitespace-pre-wrap">{`Works          `}</p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0 whitespace-pre-wrap">{`Career  `}</p>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pl-[322px] pr-5 mt-[-177px] mq800:pl-[161px] mq800:box-border">
                  <div className="w-[149px] flex flex-col items-start justify-start gap-[26px] shrink-0">
                    <a className="[text-decoration:none] relative tracking-[3px] leading-[18px] uppercase font-medium text-[inherit] inline-block min-w-[40px]">
                      FAQ
                    </a>
                    <div className="self-stretch relative leading-[19px] text-gray-600">
                      <p className="m-0">Account</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">Manage Deliveries</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">Orders</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">Payments</p>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-end mt-[-177px]">
                  <div className="flex flex-col items-start justify-start gap-[26px] shrink-0">
                    <div className="relative tracking-[3px] leading-[18px] uppercase font-medium inline-block min-w-[120px]">
                      Resources
                    </div>
                    <div className="relative leading-[19px] text-gray-600">
                      <p className="m-0">Free eBooks</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">Development Tutorial</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">How to - Blog</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">Youtube Playlist</p>
                    </div>
                  </div>
                </div>
                <div className="w-[766.2px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full mt-[-177px]">
                  <div className="flex flex-col items-start justify-start gap-[26px] shrink-0">
                    <div className="w-[53px] relative tracking-[3px] leading-[18px] uppercase font-medium inline-block">
                      Help
                    </div>
                    <div className="relative leading-[19px] text-gray-600">
                      <p className="m-0">Customer Support</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">Delivery Details</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">{`Terms & Conditions`}</p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">Privacy Policy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[76px] flex flex-col items-start justify-start">
                <img
                  className="w-7 h-7 relative"
                  loading="lazy"
                  alt=""
                  src="/1.svg"
                />
              </div>
              <div className="h-[76px] w-[407.3px] flex flex-col items-start justify-start max-w-full">
                <div className="w-[108px] h-7 relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-7 h-7"
                    loading="lazy"
                    alt=""
                    src="/2.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[40px] w-7 h-7"
                    loading="lazy"
                    alt=""
                    src="/3.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[80px] w-7 h-7"
                    loading="lazy"
                    alt=""
                    src="/4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[19.4px] max-w-full text-right text-sm text-gray-600 font-satoshi">
          <div className="self-stretch h-px relative border-gray-500 border-t-[1px] border-solid box-border z-[2]" />
          <div className="w-[1587.6px] flex flex-row items-start justify-between max-w-full gap-5 mq800:flex-wrap">
            <div className="w-[358.2px] flex flex-col items-start justify-start pt-[15.8px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch relative z-[2]">
                Shop.co © 2000-2023, All Rights Reserved
              </div>
            </div>
            <div className="h-[30px] flex flex-row items-start justify-start gap-3">
              <img
                className="self-stretch w-[46.6px] relative rounded-[5.38px] max-h-full min-h-[30px] z-[2]"
                loading="lazy"
                alt=""
                src="/badge.svg"
              />
              <img
                className="self-stretch w-[46.6px] relative rounded-[5.38px] max-h-full min-h-[30px] z-[2]"
                alt=""
                src="/badge-1.svg"
              />
              <img
                className="self-stretch w-[46.6px] relative rounded-[5.38px] max-h-full min-h-[30px] z-[2]"
                alt=""
                src="/badge-2.svg"
              />
              <img
                className="self-stretch w-[46.6px] relative rounded-[5.38px] max-h-full min-h-[30px] z-[2]"
                alt=""
                src="/badge-3.svg"
              />
              <img
                className="self-stretch w-[46.6px] relative rounded-[5.38px] max-h-full min-h-[30px] z-[2]"
                alt=""
                src="/badge-4.svg"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResourceTitle;
