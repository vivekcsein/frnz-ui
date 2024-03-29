import React from "react";
import { FRNZ_InputProps_default } from "../../../types/ui.types";

const FRNZ_Input_default: React.FunctionComponent<FRNZ_InputProps_default> = ({
  name,
  type,
  placeholder,
  fx,
  fxclass,
  ...props
}) => {
  const vfx = fx ? fx : {};
  return (
    <input
      className={fxclass ? fxclass : "frnz_ui_input_default"}
      type={type ? type : "text"}
      name={name ? name : "input"}
      placeholder={placeholder ? placeholder : ""}
      style={vfx}
      {...props}
    />
  );
};

export default FRNZ_Input_default;
