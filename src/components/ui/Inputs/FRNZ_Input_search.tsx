import React from "react";
import { FRNZ_InputProps } from "../../../types/ui.types";

const FRNZ_Input_search: React.FunctionComponent<FRNZ_InputProps> = ({
  name,
  type,
  label,
  placeholder,
  ...props
}) => {
  return (
    <div className="container">
      <input
        type={type}
        name={name}
        className="input"
        required
        placeholder={placeholder ? placeholder : "serach here..."}
        {...props}
      />
      <div className="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <title>{label}</title>
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          ></path>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M338.29 338.29L448 448"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FRNZ_Input_search;
