export type randomGeneratorProps = {
    start: number;
    range: number;
}

export interface togglecp {
    bgc?: string;
    primary?: string;
    secondary?: string;
}

export type CustomVariant = string & { __type: 'CustomVariant' };
export type FRNZ_GSAP = 'gsap';
export type FRNZ_Navbar = 'navbar';
export type FRNZ_Attention = 'attention';
export type FRNZ_RightSlide = 'rightSlide';
export type FRNZ_ArrowSlide = 'arrowSlide';
export type FRNZ_Spotlight = 'spotlight';
export type FRNZ_Starlight = 'starlight';
export type FRNZ_RainbowBorder = 'rainbowBorder';
export type FRNZ_colorfill = 'colorfill';
export type FRNZ_colorfill2 = 'colorfill2';
export type FRNZ_rainbowfill = 'rainbowfill';
export type FRNZ_celebration = 'celebration';
export type FRNZ_backtotop = 'backtotop';


export type variantButton =
    // | FRNZ_GSAP
    // | FRNZ_Navbar
    | FRNZ_Attention
    | FRNZ_RightSlide
    | FRNZ_ArrowSlide
    | FRNZ_Spotlight
    | FRNZ_Starlight
    | FRNZ_RainbowBorder
    | FRNZ_colorfill
    | FRNZ_colorfill2
    | FRNZ_rainbowfill
    | FRNZ_celebration
    | FRNZ_backtotop