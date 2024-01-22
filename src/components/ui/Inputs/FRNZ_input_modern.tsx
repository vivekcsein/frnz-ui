import React from "react";
import { FRNZ_InputProps } from "../../../types/ui.types";

const FRNZ_input_modern: React.FunctionComponent<FRNZ_InputProps> = ({
  name,
  type,
  ...props
}) => {
  return (
    <div className="textInputWrapper">
      <input
        placeholder="Enter your Input"
        type={type}
        name={name}
        className="textInput"
        {...props}
      />
    </div>
  );
};

export default FRNZ_input_modern;
