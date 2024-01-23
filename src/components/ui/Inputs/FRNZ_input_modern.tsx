import React from "react";
import { FRNZ_InputProps } from "../../../types/ui.types";

const FRNZ_input_modern: React.FunctionComponent<FRNZ_InputProps> = ({
  name,
  type,
  ...props
}) => {
  return (
    <div className="frnz_ui_input_var_modern">
      <input
        placeholder="Enter your Input"
        type={type}
        name={name}
        className="frnz_ui_input_var_modern_input"
        {...props}
      />
    </div>
  );
};

export default FRNZ_input_modern;
