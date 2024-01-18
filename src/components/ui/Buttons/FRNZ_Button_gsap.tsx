import React from "react";
import { FRNZ_ButtonProps_gsap } from "../../../types/ui.types";
const FRNZ_Button_gsap: React.FunctionComponent<FRNZ_ButtonProps_gsap> = ({
  label,
}) => {
  return <button className="frnz_ui_button_gsap">{label}</button>;
};

export default FRNZ_Button_gsap;
