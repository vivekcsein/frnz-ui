import React from "react";
import { FRNZ_ButtonProps_default } from "../../../types/ui.types";
const FRNZ_Button_text: React.FunctionComponent<FRNZ_ButtonProps_default> = ({
  label,
  fx,
  fxclass,
  ...props
}) => {
  return (
    <button
      className={fxclass ? fxclass : "frnz_ui_button_text"}
      style={fx ? fx : {}}
      {...props}
    >
      <span className="frnz_ui_button_text_outerlabel">
        <span className="frnz_ui_button_text_innerlabel"> {label}</span>
      </span>
    </button>
  );
};

export default FRNZ_Button_text;
