import React from "react";
import { FRNZ_ButtonProps_default } from "../../../types/ui.types";
const FRNZ_Button_default: React.FunctionComponent<
  FRNZ_ButtonProps_default
> = ({ label, fx, fxclass, ...props }) => {
  return (
    <button
      className={fxclass ? fxclass : "frnz_ui_button_default"}
      style={fx ? fx : {}}
      {...props}
    >
      {label}
    </button>
  );
};

export default FRNZ_Button_default;
