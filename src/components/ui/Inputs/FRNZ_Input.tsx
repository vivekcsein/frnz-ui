import React from "react";
import "../../../styles/ui/Input/FRNZ_Input.scss";
import FRNZ_Input_default from "./FRNZ_Input_default"

const FRNZ_Input: React.FunctionComponent<FRNZ_ui_InputProps> = ({
  id,
  variant,
  name,
  ...props
}) => {
  const variantInput = variant ? variant : "";
  let style: React.CSSProperties;
  if (props.style) {
    style = props.style;
  } else {
    style = {
      backgroundColor: "var(--primary)",
    };
  }

  switch (variantInput) {
    case "gsap":
      return (
        <input
          className="frnz_input_gsap"
          type="text"
          placeholder="gsap input"
          style={style}
        />
      );

    default:
      return <FRNZ_Input_default name={name} {...props} />;
  }
};

export default FRNZ_Input;
