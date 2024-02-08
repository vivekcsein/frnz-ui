import React from "react";
import {
  FRNZ_svgProps,
  FRNZ_svgDataProps,
  FRNZ_svg_PopupProps,
  FRNZ_svg_RatingProps,
} from "../../../types/ui.types";
import {
  primaryColor,
  bgColor,
  starIcon,
  heartIcon,
} from "../../../libs/constants";
const FRNZ_svg: React.FunctionComponent<FRNZ_svgProps> = ({
  id,
  variant,
  show,
  fxc,
  pathd,
  size,
  strokeWidth,
  ...props
}) => {
  const svgData: FRNZ_svgDataProps = {
    xSize: show ? (show <= 0 ? 0 : show >= 100 ? 511 : (show * 512) / 100) : 0,
    fillcolor: fxc && fxc.primary ? fxc.primary : primaryColor,
    sidecolor: fxc && fxc.secondary ? fxc.secondary : bgColor,
    svgpath: pathd
      ? pathd
      : variant && variant == "Popup"
      ? heartIcon
      : starIcon,
    svgsize: size ? size : 256,
    svgstroke:
      strokeWidth && strokeWidth <= 0 ? 0 : strokeWidth ? strokeWidth : 10,
  };
  console.log(svgData.svgstroke);

  const svg_variant = variant ? variant : "Default";
  const frnz_key = id ? id : null;

  switch (svg_variant) {
    case "Rating":
      return <FRNZ_svg_Rating svgData={svgData} key={frnz_key} {...props} />;
    case "Popup":
      return (
        <FRNZ_svg_Popup
          svgData={svgData}
          onClick={props.onClick}
          key={frnz_key}
          {...props}
        />
      );

    case "Default":
      return <FRNZ_svg_Rating svgData={svgData} key={frnz_key} {...props} />;

    default:
      return <></>;
  }
};

export default FRNZ_svg;

const FRNZ_svg_Rating = ({ svgData }: FRNZ_svg_RatingProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={svgData.svgsize}
      height={svgData.svgsize}
      fill="none"
    >
      <path
        d={svgData.svgpath}
        fill={`url(#starsvg${svgData.xSize}${svgData.fillcolor})`}
        stroke={svgData.fillcolor}
        strokeWidth={svgData.svgstroke}
      />
      <defs>
        <linearGradient
          id={`starsvg${svgData.xSize}${svgData.fillcolor}`}
          x1={svgData.xSize}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={svgData.fillcolor} />
          <stop stopColor={svgData.sidecolor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

const FRNZ_svg_Popup = ({ svgData, ...props }: FRNZ_svg_PopupProps) => {
  const FRNZ_togglePopup = (target: any) => {
    const elem = target as HTMLDivElement;
    const child1 = elem.children[0] as HTMLElement;
    const child2 = elem.children[1] as HTMLElement;

    if (child2.style.opacity == "1") {
      child1.style.stroke = svgData.fillcolor;
      child2.style.opacity = "0";
      child2.style.transform = "scale(0.33)";
      child2.style.transition = " all 0.33s ease";
    } else {
      child1.style.stroke = "transparent";
      child2.style.opacity = "1";
      child2.style.transform = "none";
      child2.style.transition = "all 0.5s cubic-bezier(0.19, 2.41, 0.45, 0.94)";
    }
  };
  return (
    <>
      <svg
        viewBox="0 0 512 512"
        width={svgData.svgsize}
        height={svgData.svgsize}
        onClick={(e) => {
          e.preventDefault();
          FRNZ_togglePopup(e.currentTarget);
          if (props.onClick) {
            props.onClick();
          }
        }}
        style={{
          overflow: "visible",
        }}
      >
        <use
          xlinkHref={`#heartsvg${svgData.xSize}${svgData.fillcolor}`}
          style={{
            fill: "transparent",
            stroke: svgData.fillcolor,
            strokeWidth: svgData.svgstroke,
            msTransition: " all 0.33s ease",
          }}
        />
        <use
          xlinkHref={`#heartsvg${svgData.xSize}${svgData.fillcolor}`}
          style={{
            fill: svgData.fillcolor,
            stroke: svgData.fillcolor,
            opacity: 0,
            transform: "scale(0.33)",
            transformOrigin: "center",
          }}
        />
      </svg>

      <svg
        viewBox="0 0 512 512"
        width={svgData.svgsize}
        height={svgData.svgsize}
        style={{ display: "none" }}
      >
        <defs>
          <path
            id={`heartsvg${svgData.xSize}${svgData.fillcolor}`}
            d={svgData.svgpath ? svgData.svgpath : heartIcon}
          />
        </defs>
      </svg>
    </>
  );
};
