import React from "react";
import { FRNZ_ButtonProps } from "../../../types/ui.types";
import FRNZ_Button_default from "./FRNZ_Button_default";
// import FRNZ_Button_gsap from "./FRNZ_Button_gsap";
import FRNZ_Button_text from "./FRNZ_Button_text";
import FRNZ_Button_icon from "./FRNZ_Button_icon";
import FRNZ_Button_starlight from "./FRNZ_Button_starlight";
import FRNZ_Button_rainbow_border from "./FRNZ_Button_rainbow_border";
import FRNZ_Button_backtotop from "./FRNZ_Button_backtotop";
import FRNZ_Button_gradient from "./FRNZ_Button_gradient";
import FRNZ_Button_cameo from "./FRNZ_Button_cameo";
import FRNZ_Button_royal from "./FRNZ_Button_royal";

const FRNZ_Button: React.FunctionComponent<FRNZ_ButtonProps> = ({
  id,
  label,
  variant,
  children,
  ...props
}) => {
  const frnz_key = id ? id : null;
  const variantUI = variant ? variant : "";

  switch (variantUI) {
    case "BgcolorIN":
      return (
        <FRNZ_Button_default
          key={frnz_key}
          label={label}
          fxclass="frnz_ui_button_BgcolorIN"
          children={children}
          {...props}
        />
      );
    case "BgcolorOut":
      return (
        <FRNZ_Button_default
          key={frnz_key}
          label={label}
          fxclass="frnz_ui_button_BgcolorOut"
          children={children}
          {...props}
        />
      );

    case "I_wantAttention":
      return (
        <FRNZ_Button_default
          key={frnz_key}
          label={label}
          fxclass="frnz_ui_button_I_wantAttention"
          children={children}
          {...props}
        />
      );

    case "ArrowSlide":
      return (
        <FRNZ_Button_text
          key={frnz_key}
          label={label}
          fxclass="frnz_ui_button_ArrowSlide"
          children={children}
          {...props}
        />
      );

    case "Rainbowfill":
      return (
        <FRNZ_Button_text
          key={frnz_key}
          label={label}
          fxclass="frnz_ui_button_Rainbowfill"
          children={children}
          {...props}
        />
      );

    case "Spotlight":
      return (
        <FRNZ_Button_icon
          key={frnz_key}
          label={label}
          children={children}
          {...props}
        />
      );

    case "Starlight":
      return (
        <FRNZ_Button_starlight
          key={frnz_key}
          label={label}
          children={children}
          {...props}
        />
      );

    case "RainbowBorder":
      return (
        <FRNZ_Button_rainbow_border
          key={frnz_key}
          label={label}
          children={children}
          {...props}
        />
      );
    case "Backtotop":
      return (
        <FRNZ_Button_backtotop
          key={frnz_key}
          label={label}
          children={children}
          {...props}
        />
      );
    case "Gradient":
      return (
        <FRNZ_Button_gradient
          key={frnz_key}
          label={label}
          children={children}
          {...props}
        />
      );
    case "Cameo":
      return (
        <FRNZ_Button_cameo
          key={frnz_key}
          label={label}
          children={children}
          {...props}
        />
      );
    case "Royal":
      return (
        <FRNZ_Button_royal
          key={frnz_key}
          label={label}
          children={children}
          {...props}
        />
      );

    case "navbar":
      return (
        <FRNZ_Button_default
          key={frnz_key}
          label={label}
          fxclass="frnz_ui_button_navbar"
          children={children}
          {...props}
        />
      );

    // case "Celebration":
    //   return (
    //     <FRNZ_Button_default
    //       key={frnz_key}
    //       label={label}
    //       fxclass="frnz_ui_button_Celebration"
    //       children={children}
    //       {...props}
    //     />
    //   );

    // case "gsap":
    //   return (
    //     <FRNZ_Button_gsap
    //       key={frnz_key}
    //       label={label}
    //       animType={variantUI}
    //       children={children}
    //       {...props}
    //     />
    //   );

    default:
      return (
        <FRNZ_Button_default
          key={frnz_key}
          label={label}
          children={children}
          {...props}
        />
      );
  }
};

export default FRNZ_Button;
