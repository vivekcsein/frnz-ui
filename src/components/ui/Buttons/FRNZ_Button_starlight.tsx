import React, { useEffect, useState } from "react";
import { FRNZ_ButtonProps } from "../../../types/ui.types";
const FRNZ_Button_starlight: React.FunctionComponent<FRNZ_ButtonProps> = ({
  label,
  fx,
  fxc,
  children,
  ...props
}) => {
  const [starColor, setStarColor] = useState("");
  const [vfx, setVfx] = useState(fx ? fx : {});
  const [onHover, setOnHover] = useState(false);
  const [border, setBorder] = useState(`4px solid`);
  const [boxshadow, setBoxshadow] = useState(``);
  const onMouseEnter = () => {
    setOnHover(true);
  };
  const onMouseLeave = () => {
    setOnHover(false);
  };

  useEffect(() => {
    if (fxc && fxc.primary) {
      setStarColor(fxc.primary);
    }
  }, [fx, fxc]);

  useEffect(() => {
    if (fxc && fxc.primary) {
      if (vfx.border && fxc.bgc) {
        setBorder(`${vfx.border} ${fxc.bgc}`);
      } else if (vfx.border && !fxc.bgc) {
        setBorder(`${vfx.border} ${fxc.primary}`);
      } else if (!vfx.border && !fxc.bgc) {
        setBorder(`4px solid ${fxc.primary}`);
      } else if (!vfx.border && fxc.bgc) {
        setBorder(`4px solid ${fxc.bgc}`);
      }

      if (vfx.boxShadow && fxc.bgc) {
        setBoxshadow(`0 0 25px ${fxc.bgc}`);
      } else if (vfx.boxShadow && !fxc.bgc) {
        setBoxshadow(`0 0 25px ${fxc.primary}`);
      } else if (!vfx.boxShadow && !fxc.bgc) {
        setBoxshadow(`0 0 25px ${fxc.primary}`);
      } else if (!vfx.boxShadow && fxc.bgc) {
        setBoxshadow(`0 0 25px ${fxc.bgc}`);
      }

      setVfx({
        ...vfx,
        backgroundColor: !onHover
          ? fxc?.bgc
            ? `${fxc.bgc}`
            : `${fxc.primary}`
          : "transparent",
        boxShadow: onHover ? boxshadow : `none`,
        border: border,
      });
    }

    return () => {};
  }, [fx, fxc, onHover]);

  const svgStar = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
        className="svg_starlight"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{
                stopColor: fxc?.primary,
              }}
            />
            <stop
              offset="100%"
              style={{
                stopColor: fxc?.secondary ? fxc.secondary : fxc?.primary,
              }}
            />
          </linearGradient>
        </defs>
        <path
          className="svg_starlight_filler"
          style={{ fill: fxc?.secondary ? "url(#grad1)" : starColor }}
          d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
        ></path>
      </svg>
    );
  };

  return (
    <button
      className="frnz_ui_button_Starlight"
      style={vfx}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {label}
      <div className="starlight_star1">{svgStar()}</div>
      <div className="starlight_star2">{svgStar()}</div>
      <div className="starlight_star3">{svgStar()}</div>
      <div className="starlight_star4">{svgStar()}</div>
      <div className="starlight_star5">{svgStar()}</div>
      <div className="starlight_star6">{svgStar()}</div>
    </button>
  );
};

export default FRNZ_Button_starlight;

// const starStyle = {
//   shapeRendering: "geometricPrecision",
//   textRendering: "geometricPrecision",
//   imageRendering: "optimizeQuality",
//   fillRule: "evenodd",
//   clipRule: "evenodd",
// };
// const starStyleX =
//   "shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd";
