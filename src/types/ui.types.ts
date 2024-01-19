// all the types in components/ui folder will be defined here
// input props
import { togglecp, FRNZ_variantButton, FRNZ_variantInput } from "./constants.types"

export interface FRNZ_InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    id?: string;
    variant?: FRNZ_variantInput;
    name: string;
    type?: string;
    placeholder?: string;
    fx?: React.CSSProperties;
    fxclass?: string;
    children?: React.ReactNode;
}

//button props
export interface FRNZ_ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    id?: string;
    variant?: FRNZ_variantButton;
    label: string;
    fx?: React.CSSProperties;
    fxc?: togglecp;
}

export interface FRNZ_ButtonProps_default extends FRNZ_ButtonProps {
    fxclass?: string;
}
export interface FRNZ_ButtonProps_gsap extends FRNZ_ButtonProps {
    animType: string;
}
