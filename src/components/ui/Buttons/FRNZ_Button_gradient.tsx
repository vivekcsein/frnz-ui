import React from "react";
import { FRNZ_ButtonProps_default } from "../../../types/ui.types";

const FRNZ_Button_gradient: React.FunctionComponent<
  FRNZ_ButtonProps_default
> = ({ label, fx, fxc, ...props }) => {
  const vfx = {
    ...fx,
    backgroundImage: `linear-gradient(144deg, 
          ${fxc && fxc.primary ? fxc.primary : "#dd00ff"},
          ${fxc && fxc.secondary ? fxc.secondary : "#5b42f3"} 50%,
          ${fxc && fxc.bgc ? fxc.bgc : "#00ddeb"}`,
  };
  return (
    <button className="FRNZ_Button_gradient" style={vfx} {...props}>
      <span>{label}</span>
    </button>
  );
};

export default FRNZ_Button_gradient;
