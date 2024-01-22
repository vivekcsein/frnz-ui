import React, { useEffect, useState } from "react";
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
  message,
  ...props
}) => {
  const [passwordVisible, setPasswordvisible] = useState(
    type ? type : "password"
  );
  const togglePassword = () => {
    setPasswordvisible(passwordVisible === "password" ? "text" : "password");
  };

  const [vfx, setVfx] = useState<React.CSSProperties>(fx ? fx : {});

  useEffect(() => {
    setVfx((prev) => ({
      ...prev,
      color: fx?.color,
      backgroundColor: fx?.backgroundColor,
    }));
  }, [fx]);

  useEffect(() => {
    if (vfx && vfx.color) {
      document.documentElement.style.setProperty(
        "--frnz_placeholder_color",
        vfx.color
      );
    }

    return () => {
      document.documentElement.style.removeProperty("--frnz_placeholder_color");
    };
  }, [vfx]);

  return (
    <div
      className="frnz_ui_input_var_password"
      style={{ position: "relative" }}
    >
      <div className="frnz_ui_input_var_password_error">
        <p>{message ? message : ""}</p>
      </div>
      <input
        className={`${fxclass ? fxclass : "frnz_ui_input_var_password_input"}`}
        type={passwordVisible}
        name={name ? name : "input"}
        placeholder={placeholder ? placeholder : ""}
        style={vfx}
        {...props}
      />
      <div
        className={`frnz_ui_input_var_password_icon`}
        style={{
          position: "absolute",
          right: "0",
          top: "50%",
          transform: "translate( -20%,-50%)",
          color: vfx.color,
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
