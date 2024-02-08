import React from "react";
import { FRNZ_HamburgerProps } from "../../../types/ui.types";

const FRNZ_Hamburger: React.FunctionComponent<FRNZ_HamburgerProps> = ({
  variant,
  onClick,
  fxc,
  debug,
}) => {
  const burgerIconClicked = (target: any) => {
    target?.classList.toggle("open");
    if (debug) {
      console.log(target);
    }
    if (onClick) {
      onClick();
    }
  };

  const frnz_variant = variant ? variant : "Cross";
  const vfx = {
    primary: fxc && fxc.primary ? fxc.primary : "#ff6600",
    secondary:
      fxc && fxc.secondary
        ? fxc.secondary
        : fxc && fxc.primary
        ? fxc.primary
        : "#ff6600",
    bgc: fxc && fxc.bgc ? fxc.bgc : "transparent",
  };

  switch (frnz_variant) {
    case "Cross":
      return (
        <div
          className="FRNZ_Hamburger Hamburger_cross"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            burgerIconClicked(e.currentTarget);
          }}
        >
          <span style={{ background: vfx.primary }}></span>
          <span style={{ background: vfx.secondary }}></span>
          <span style={{ background: vfx.primary }}></span>
        </div>
      );

    case "Lazy":
      return (
        <div
          className="FRNZ_Hamburger Hamburger_lazy"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            burgerIconClicked(e.currentTarget);
          }}
        >
          <span style={{ background: vfx.primary }}></span>
          <span style={{ background: vfx.secondary }}></span>
          <span style={{ background: vfx.primary }}></span>
        </div>
      );

    case "Snowy":
      return (
        <div
          className="FRNZ_Hamburger Hamburger_snowy"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            burgerIconClicked(e.currentTarget);
          }}
        >
          <span style={{ background: vfx.primary }}></span>
          <span style={{ background: vfx.secondary }}></span>
          <span style={{ background: vfx.primary }}></span>
          <span style={{ background: vfx.secondary }}></span>
          <span style={{ background: vfx.primary }}></span>
          <span style={{ background: vfx.secondary }}></span>
        </div>
      );

    case "Wavy":
      return (
        <div
          className="FRNZ_Hamburger Hamburger_wavy"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            burgerIconClicked(e.currentTarget);
          }}
        >
          <span style={{ background: vfx.primary }}></span>
          <span style={{ background: vfx.primary }}></span>
          <span style={{ background: vfx.primary }}></span>
          <span style={{ background: vfx.primary }}></span>
        </div>
      );

    default:
      return <></>;
  }
};

export default FRNZ_Hamburger;
