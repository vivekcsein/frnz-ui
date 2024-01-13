import React from "react";
import "../../../styles/ui/Buttons/FRNZ_Button.scss";
import FRNZ_Button_default from "./FRNZ_Button_default";
import FRNZ_Button_gsap from "./FRNZ_Button_gsap";
const FRNZ_Button: React.FunctionComponent<FRNZ_ui_ButtonProps> = ({
  label,
  variant,
}) => {
  switch (variant) {
    case "gsap":
      return <FRNZ_Button_gsap label={label} />;

    default:
      return <FRNZ_Button_default label={label} />;
  }
};

export default FRNZ_Button;
