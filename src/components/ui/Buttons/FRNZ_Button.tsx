import React from "react";
import { FRNZ_ButtonProps } from "../../../types/ui.types";
import FRNZ_Button_default from "./FRNZ_Button_default";
// import FRNZ_Button_gsap from "./FRNZ_Button_gsap";
import FRNZ_Button_text from "./FRNZ_Button_text";
import FRNZ_Button_icon from "./FRNZ_Button_icon";
import FRNZ_Button_starlight from "./FRNZ_Button_starlight";
import FRNZ_Button_rainbow_border from "./FRNZ_Button_rainbow_border";
import FRNZ_Button_backtotop from "./FRNZ_Button_backtotop";

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
          fxclass="frnz_ui_button_colorfill"
          children={children}
          {...props}
        />
      );
    case "BgcolorOut":
      return (
        <FRNZ_Button_default
          key={frnz_key}
          label={label}
          fxclass="frnz_ui_button_colorfill2"
          children={children}
          {...props}
        />
      );

    case "I_wantAttention":
      return (
        <FRNZ_Button_default
          key={frnz_key}
          label={label}
          fxclass="frnz_ui_button_attention"
          children={children}
          {...props}
        />
      );

    case "RightSlide":
      return (
        <FRNZ_Button_default
          key={frnz_key}
          label={label}
          fxclass="frnz_ui_button_slideright"
          children={children}
          {...props}
        />
      );

    case "Celebration":
      return (
        <FRNZ_Button_default
          key={frnz_key}
          label={label}
          fxclass="frnz_ui_button_celebration"
          children={children}
          {...props}
        />
      );

    case "ArrowSlide":
      return (
        <FRNZ_Button_text
          key={frnz_key}
          label={label}
          fxclass="frnz_ui_button_arrow_slide"
          children={children}
          {...props}
        />
      );

    case "Rainbowfill":
      return (
        <FRNZ_Button_text
          key={frnz_key}
          label={label}
          fxclass="frnz_ui_button_rainbowfill"
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
