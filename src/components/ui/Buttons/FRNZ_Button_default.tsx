import React from "react";
const FRNZ_Button_default: React.FunctionComponent<FRNZ_ui_ButtonProps> = ({
  label,
}) => {
  return <button className="frnz_ui_button_default">{label}</button>;
};

export default FRNZ_Button_default;
