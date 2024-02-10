import React, { useEffect } from "react";
import { FRNZ_Loader_defaultProps } from "../../../types/ui.types";

const FRNZ_Loader_cradle: React.FunctionComponent<FRNZ_Loader_defaultProps> = ({
  size,
  fxc,
}) => {
  useEffect(() => {
    if (fxc && fxc.primary) {
      document.documentElement.style.setProperty(
        "--FRNZ_Loader_cradle_primary",
        fxc.primary
      );
    }
  }, [fxc]);
  return (
    <div
      className="FRNZ_Loader_cradle"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div className="FRNZ_Loader__cradle"></div>
      <div className="FRNZ_Loader__cradle"></div>
      <div className="FRNZ_Loader__cradle"></div>
      <div className="FRNZ_Loader__cradle"></div>
    </div>
  );
};

export default FRNZ_Loader_cradle;
