import React from "react";
import { FRNZ_InputProps } from "../../../types/ui.types";
const FRNZ_Input_default = (props: FRNZ_InputProps) => {
  return (
    <input
      className="frnz_input_default"
      type={props.type ? props.type : "text"}
      placeholder={props.placeholder ? props.placeholder : ""}
      style={props.style}
      {...props}
    />
  );
};

export default FRNZ_Input_default;
