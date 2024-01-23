import React, { useState } from "react";
import { FRNZ_InputProps_default } from "../../../types/ui.types";
import FRNZ_svg_invisible from "../SVG/FRNZ_svg_invisible";
import FRNZ_svg_visible from "../SVG/FRNZ_svg_visible";

const FRNZ_input_password: React.FunctionComponent<FRNZ_InputProps_default> = ({
  name,
  type,
  placeholder,
  fx,
  fxclass,
  ref,
  ...props
}) => {
  const [passwordVisible, setPasswordvisible] = useState(
    type ? type : "password"
  );
  const togglePassword = () => {
    setPasswordvisible(passwordVisible === "password" ? "text" : "password");
  };

  return (
    <div
      className="frnz_ui_input_var_password"
      style={{ position: "relative" }}
    >
      <div className="frnz_ui_input_var_password_error">
        <p>{props.message ? props.message : ""}</p>
      </div>
      <input
        className={`${fxclass ? fxclass : "frnz_ui_input_var_password_input"}`}
        type={passwordVisible}
        name={name ? name : "serach"}
        placeholder={placeholder ? placeholder : ""}
        style={fx ? fx : {}}
        {...props}
      />
      <div
        className={`frnz_ui_input_var_password_icon`}
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translate( -20%,-50%)",
          color: fx?.color,
          fontSize: "x-large",
        }}
        onClick={() => {
          togglePassword();
        }}
      >
        {passwordVisible === "password" ? (
          <FRNZ_svg_invisible />
        ) : (
          <FRNZ_svg_visible />
        )}
      </div>
    </div>
  );
};

export default FRNZ_input_password;
