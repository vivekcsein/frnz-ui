import React from "react";
import { FRNZ_ButtonProps } from "../../../types/ui.types";
const FRNZ_Button_icon: React.FunctionComponent<FRNZ_ButtonProps> = ({
  label,
  fx,
  children,
  ...props
}) => {
  return (
    <button
      className="frnz_ui_button_Spotlight"
      style={fx ? fx : {}}
      {...props}
    >
      {label}
      {children}
    </button>
  );
};

export default FRNZ_Button_icon;
