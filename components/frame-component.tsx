import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;
  prop?: string;
  prop1?: string;

  /** Style props */
  propMinHeight?: CSSProperties["minHeight"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
  propColor?: CSSProperties["color"];
  propHeight2?: CSSProperties["height"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  propMinHeight,
  propHeight,
  propHeight1,
  prop,
  propColor,
  prop1,
  propHeight2,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-4 text-left text-lg text-silver-200 font-pt-sans ${className}`}
      style={frameDivStyle}
    >
      <div
        className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1.5 gap-[11px]"
        style={frameDiv1Style}
      >
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
          <div className="h-px flex-1 relative border-gainsboro-200 border-t-[1px] border-solid box-border z-[1]" />
        </div>
        <div className="w-[207px] flex flex-row items-start justify-start gap-3 z-[1]">
          <div
            className="w-[82px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border"
            style={frameDiv2Style}
          >
            <b
              className="self-stretch relative [text-decoration:line-through] leading-[19px]"
              style={bStyle}
            >
              {prop}
            </b>
          </div>
          <b className="h-[26px] flex-1 relative text-6xl inline-block text-black mq450:text-xl">
            {prop1}
          </b>
        </div>
      </div>
      <div className="self-stretch h-px relative border-gainsboro-200 border-t-[1px] border-solid box-border z-[1]" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
        <div className="flex-1 flex flex-row items-start justify-start gap-8 mq450:flex-wrap gap-4">
          <div className="h-[53px] flex-1 relative rounded-8xs border-forestgreen-100 border-[1px] border-solid box-border min-w-[143px] z-[1]" />
          <div
            className="flex flex-col items-start justify-start pt-3 px-0 pb-0"
            style={frameDiv3Style}
          >
            <img
              className="w-[34px] h-[29px] relative overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/-4-3.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
