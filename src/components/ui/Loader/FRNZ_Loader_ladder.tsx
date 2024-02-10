import React, { useEffect } from "react";
import { FRNZ_Loader_defaultProps } from "../../../types/ui.types";
const FRNZ_Loader_ladder: React.FunctionComponent<FRNZ_Loader_defaultProps> = ({
  size,
  fxc,
}) => {
  useEffect(() => {
    if (fxc && fxc.primary) {
      document.documentElement.style.setProperty(
        "--FRNZ_Loader_ladder_primary",
        fxc.primary
      );
    }
    if (fxc && fxc.secondary) {
      document.documentElement.style.setProperty(
        "--FRNZ_Loader_ladder_secondary",
        fxc.secondary
      );
    }
    return () => {
      // document.documentElement.style.removeProperty(
      //   "--FRNZ_Loader_ladder_primary"
      // );
      // document.documentElement.style.removeProperty(
      //   "--FRNZ_Loader_ladder_secondary"
      // );
    };
  }, [fxc]);

  useEffect(() => {
    if (size) {
      document.documentElement.style.setProperty(
        "--FRNZ_Loader_ladder_size",
        `${size}px`
      );
    }

    return () => {
      if (size) {
        document.documentElement.style.setProperty(
          "--FRNZ_Loader_ladder_size",
          `${90}px`
        );
      }
    };
  }, [size]);

  return <div className="FRNZ_Loader_ladder"></div>;
};

export default FRNZ_Loader_ladder;
