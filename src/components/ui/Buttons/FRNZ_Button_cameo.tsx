import React, { useEffect } from "react";
import { FRNZ_ButtonProps_default } from "../../../types/ui.types";

const FRNZ_Button_cameo: React.FunctionComponent<FRNZ_ButtonProps_default> = ({
  label,
  fx,
  fxc,
  ...props
}) => {
  const newLabel = label.split(",");
  useEffect(() => {
    if (fxc && fxc.primary) {
      document.documentElement.style.setProperty(
        "--FRNZ_Button_cameo_primary",
        `${fxc.primary}`
      );
    }
    if (fxc && fxc.secondary) {
      document.documentElement.style.setProperty(
        "--FRNZ_Button_cameo_secondary",
        `${fxc.secondary}`
      );
    }

    return () => {};
  }, [fxc]);

  const vfx = {
    ...fx,
    backgroundColor: `${
      fxc && fxc.bgc
        ? fxc.bgc
        : fx && fx.backgroundColor
        ? fx.backgroundColor
        : "#333"
    }`,
    color: `${fx && fx.color ? fx.color : "white"}`,
  };
  return (
    <button
      className="FRNZ_Button_cameo"
      data-before-text={newLabel[0]}
      data-after-text={newLabel[1]}
      style={vfx}
      {...props}
    ></button>
  );
};

export default FRNZ_Button_cameo;
