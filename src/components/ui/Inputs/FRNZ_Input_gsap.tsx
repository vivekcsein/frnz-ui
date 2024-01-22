import React from "react";
import { FRNZ_InputProps } from "../../../types/ui.types";

const FRNZ_Input_gsap: React.FunctionComponent<FRNZ_InputProps> = ({
  name,
  type,
  placeholder,
  fx,
  ...props
}) => {
  const vfx = fx ? fx : {};
  return (
    <input
      type={type ? type : "text"}
      name={name ? name : "input"}
      placeholder={placeholder ? placeholder : ""}
      style={vfx}
      {...props}
    />
  );
};

export default FRNZ_Input_gsap;
