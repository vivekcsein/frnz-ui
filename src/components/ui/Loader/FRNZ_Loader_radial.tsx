import React, { useEffect } from "react";
import { FRNZ_Loader_radialProps } from "../../../types/ui.types";

const FRNZ_Loader_radial: React.FunctionComponent<FRNZ_Loader_radialProps> = ({
  size,
  data,
}) => {
  useEffect(() => {
    if (size) {
      document.documentElement.style.setProperty(
        "--FRNZ_Loader_Radial_size",
        `${size}px`
      );
    }
  }, [size]);
  useEffect(() => {
    if (data) {
      document.documentElement.style.setProperty(
        "--FRNZ_Loader_Radial_hue",
        `${data}`
      );
    }
  }, [data]);
  const wSize = size ? size : 100 + 20;

  return (
    <div
      style={{
        width: `${wSize}px`,
        height: `${wSize}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        aria-live="assertive"
        role="alert"
        className="FRNZ_Loader_radial"
      ></div>
    </div>
  );
};

export default FRNZ_Loader_radial;
