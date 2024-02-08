import React, { useLayoutEffect, useState } from "react";
import FRNZ_Input_default from "./FRNZ_Input_default";
import { FRNZ_InputProps } from "../../../types/ui.types";
// import FRNZ_Input_phone from "./FRNZ_Input_phone";
import FRNZ_input_modern from "./FRNZ_input_modern";
import FRNZ_Input_search from "./FRNZ_Input_search";
import FRNZ_input_password from "./FRNZ_input_password";
// import FRNZ_Input_gsap from "./FRNZ_Input_gsap";

const FRNZ_Input: React.FunctionComponent<FRNZ_InputProps> = ({
  id,
  name,
  type,
  fx,
  variant,
  ...props
}) => {

  
  const frnz_key = id ? id : null;
  const variantUI = variant ? variant : "";
  const [vfx, setVfx] = useState<React.CSSProperties>(fx ? fx : {});

  useLayoutEffect(() => {
    setVfx((prev) => ({
      ...prev,
      color: fx?.color,
      backgroundColor: fx?.backgroundColor,
    }));
  }, [fx]);

  useLayoutEffect(() => {
    if (vfx && vfx.color) {
      document.documentElement.style.setProperty(
        "--frnz_placeholder_color",
        vfx.color
      );
    }

    return () => {
      document.documentElement.style.removeProperty("--frnz_placeholder_color");
    };
  }, [vfx]);

  switch (variantUI) {
    case "Password":
      return (
        <FRNZ_input_password
          key={frnz_key}
          type={"password"}
          name={name}
          fx={vfx}
          {...props}
        />
      );

    case "Modern":
      return (
        <FRNZ_input_modern
          key={frnz_key}
          name={name}
          type={type}
          fx={vfx}
          {...props}
        />
      );
    case "Search":
      return (
        <FRNZ_Input_search
          key={frnz_key}
          name={name}
          type={type}
          fx={vfx}
          {...props}
        />
      );

    // case "gsap":
    //   return (
    //     <FRNZ_Input_gsap
    //       key={frnz_key}
    //       type={type}
    //       name={name}
    //       className="frnz_ui_input_gsap"
    //       style={vfx}
    //     />
    //   );

    // case "Phone":
    //   return (
    //     <FRNZ_Input_phone
    //       key={frnz_key}
    //       name={name}
    //       type={type}
    //       fx={vfx}
    //       {...props}
    //     />
    //   );

    default:
      return (
        <FRNZ_Input_default
          key={frnz_key}
          name={name}
          type={type}
          fx={vfx}
          fxclass="frnz_ui_input_default"
          {...props}
        />
      );
  }
};

export default FRNZ_Input;
