import React from "react";

const FRNZ_Input_default = (props: FRNZ_context_InputProps) => {
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
