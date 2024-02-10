import React from "react";
import { FRNZ_Loader_defaultProps } from "../../../types/ui.types";
const FRNZ_Loader_gradientSpinner: React.FunctionComponent<
  FRNZ_Loader_defaultProps
> = ({ size, fxc }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: "relative",
        animation: "FRNZ_Anim_Spin360 0.75s linear infinite",
        borderRadius: "100%",
      }}
    >
      <circle
        stroke="url(#gradient)"
        r="220"
        cy="256"
        cx="256"
        strokeWidth="50"
        fill="transparent"
        style={{
          strokeDasharray: "50",
          strokeDashoffset: "10",
          strokeLinecap: "round",
        }}
      ></circle>
      <linearGradient id="gradient">
        <stop
          stopOpacity="1"
          stopColor={fxc && fxc.primary ? fxc.primary : "#dd00ff"}
          offset="0%"
        ></stop>
        <stop
          stopOpacity="0"
          stopColor={fxc && fxc.secondary ? fxc.secondary : "#0000ff"}
          offset="100%"
        ></stop>
      </linearGradient>
    </svg>
  );
};

export default FRNZ_Loader_gradientSpinner;
