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
export type FRNZ_Backtotop = 'Backtotop';
export type FRNZ_BgcolorIN = 'BgcolorIN';
export type FRNZ_BgcolorOut = 'BgcolorOut';
export type FRNZ_Celebration = 'Celebration';
export type FRNZ_ArrowSlide = 'ArrowSlide';
export type FRNZ_RightSlide = 'RightSlide';
export type FRNZ_I_wantAttention = 'I_wantAttention';
export type FRNZ_RainbowBorder = 'RainbowBorder';
export type FRNZ_Rainbowfill = 'Rainbowfill';
export type FRNZ_Spotlight = 'Spotlight';
export type FRNZ_Starlight = 'Starlight';
export type FRNZ_GSAP = 'gsap';
export type FRNZ_Navbar = 'navbar';


export type variantButton =
    // | FRNZ_GSAP
    | FRNZ_Backtotop
    | FRNZ_BgcolorIN
    | FRNZ_BgcolorOut
    | FRNZ_Celebration
    | FRNZ_I_wantAttention
    | FRNZ_ArrowSlide
    | FRNZ_RightSlide
    | FRNZ_Spotlight
    | FRNZ_Starlight
    | FRNZ_RainbowBorder
    | FRNZ_Rainbowfill
    | FRNZ_Navbar