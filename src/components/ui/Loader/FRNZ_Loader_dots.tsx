import React from "react";
import { FRNZ_Loader_defaultProps } from "../../../types/ui.types";

const FRNZ_Loader_dots: React.FunctionComponent<FRNZ_Loader_defaultProps> = ({
  size,
  fxc,
}) => {
  return (
    <div
      className="FRNZ_Loader_dots"
      style={{
        width: `${size ? size * 15 : 300}px`,
        height: `${size ? size * 2 : 60}px`,
      }}
    >
      <div
        className="FRNZ_Loader__dots"
        style={{
          width: `${size ? size * 6 : 120}px`,
          height: `${size ? size * 6 : 120}px`,
        }}
      >
        <div
          className="FRNZ_Loader___dots FRNZ_Loader___dots1"
          style={{
            backgroundColor: `${fxc && fxc.primary ? fxc.primary : "dd00ff"}`,
            width: `${size ? size : 20}px`,
            height: `${size ? size : 20}px`,
          }}
        ></div>
        <div
          className="FRNZ_Loader___dots FRNZ_Loader___dots2 "
          style={{
            backgroundColor: `${fxc && fxc.primary ? fxc.primary : "dd00ff"}`,
            width: `${size ? size : 20}px`,
            height: `${size ? size : 20}px`,
          }}
        ></div>
        <div
          className="FRNZ_Loader___dots FRNZ_Loader___dots3 "
          style={{
            backgroundColor: `${fxc && fxc.primary ? fxc.primary : "dd00ff"}`,
            width: `${size ? size : 20}px`,
            height: `${size ? size : 20}px`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FRNZ_Loader_dots;
