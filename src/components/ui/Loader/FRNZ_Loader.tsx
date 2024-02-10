import React from "react";
import FRNZ_Loader_default from "./FRNZ_Loader_default";
import { FRNZ_LoaderProps } from "../../../types/ui.types";
import FRNZ_loader_spinner from "./FRNZ_loader_spinner";
import FRNZ_Loader_ladder from "./FRNZ_Loader_ladder";
import FRNZ_Loader_cradle from "./FRNZ_Loader_cradle";
import FRNZ_Loader_gradientSpinner from "./FRNZ_Loader_gradientSpinner";
import FRNZ_Loader_dotspinner from "./FRNZ_Loader_dotspinner";
import FRNZ_Loader_radial from "./FRNZ_Loader_radial";
import FRNZ_Loader_dots from "./FRNZ_Loader_dots";
const FRNZ_loader: React.FunctionComponent<FRNZ_LoaderProps> = ({
  id,
  variant,
  ...props
}) => {
  const frnz_key = id ? id : null;
  const variantUI = variant ? variant : "Default";
  //   const loadinON = isLoading ? isLoading : true;

  switch (variantUI) {
    case "Default":
      return <FRNZ_Loader_default key={frnz_key} {...props} />;
    case "Spinner":
      return <FRNZ_loader_spinner key={frnz_key} {...props} />;
    case "Ladder":
      return <FRNZ_Loader_ladder key={frnz_key} {...props} />;
    case "Cradle":
      return <FRNZ_Loader_cradle key={frnz_key} {...props} />;
    case "GradientSpin":
      return <FRNZ_Loader_gradientSpinner key={frnz_key} {...props} />;
    case "DotSpinner":
      return <FRNZ_Loader_dotspinner key={frnz_key} {...props} />;
    case "Radial":
      return <FRNZ_Loader_radial key={frnz_key} {...props} />;
    case "Dots":
      return <FRNZ_Loader_dots key={frnz_key} {...props} />;

    default:
      return <></>;
  }
};

export default FRNZ_loader;
