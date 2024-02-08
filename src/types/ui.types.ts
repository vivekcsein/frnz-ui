// all the types in components/ui folder will be defined here
// input props
import { togglecp, FRNZ_variantButton, FRNZ_variantInput, FRNZ_variantHamburger, FRNZ_variantSVG } from "./constants.types"

export interface FRNZ_InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    id?: string;
    variant?: FRNZ_variantInput;
    name: string;
    type?: string;
    label?: string;
    placeholder?: string;
    fx?: React.CSSProperties;
    ref?: React.RefObject<HTMLInputElement>
}

//button props
export interface FRNZ_ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    id?: string;
    variant?: FRNZ_variantButton;
    label: string;
    fx?: React.CSSProperties;
    fxc?: togglecp;
}

export interface FRNZ_HamburgerProps {
    variant?: FRNZ_variantHamburger;
    onClick?: () => void;
    debug?: boolean;
    fxc?: togglecp;
}

export interface FRNZ_svgProps {
    id?: string;
    variant?: FRNZ_variantSVG;
    onClick?: () => void;
    fxc?: togglecp;
    show?: number;
    size?: number;
    pathd?: string;
    strokeWidth?: number;
    debug?: boolean;

}

export interface FRNZ_ButtonProps_default extends FRNZ_ButtonProps {
    fxclass?: string;
}
export interface FRNZ_ButtonProps_gsap extends FRNZ_ButtonProps {
    animType: string;
}
export interface FRNZ_InputProps_default extends FRNZ_InputProps {
    fxclass?: string;
    message?: string;
}

export interface FRNZ_svgDataProps {
    xSize: number;
    fillcolor: string;
    sidecolor: string;
    svgpath: string;
    svgsize: number;
    svgstroke: number;
}

export interface FRNZ_svg_PopupProps {
    svgData: FRNZ_svgDataProps;
    onClick?: () => void;
}

export interface FRNZ_svg_RatingProps {
    svgData: FRNZ_svgDataProps;
}