import React from "react";
import { FRNZ_ButtonProps_default } from "../../../types/ui.types";
const FRNZ_Button_royal: React.FunctionComponent<FRNZ_ButtonProps_default> = ({
  label,
  fx,
  fxc,
  ...props
}) => {
  const vfx = {
    ...fx,
    backgroundColor: `${
      fxc && fxc.bgc
        ? fxc.bgc
        : fx && fx.backgroundColor
        ? fx.backgroundColor
        : "#e0e8ef"
    }`,
    color: `${
      fxc && fxc.primary ? fxc.primary : fx && fx.color ? fx.color : "#7e97b8"
    }`,
  };
  return (
    <button className="FRNZ_Button_royal" style={vfx} {...props}>
      {label}
    </button>
  );
};

export default FRNZ_Button_royal;
