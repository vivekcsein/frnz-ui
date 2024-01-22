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

//type button
export type FRNZ_Button_Backtotop = 'Backtotop';
export type FRNZ_Button_BgcolorIN = 'BgcolorIN';
export type FRNZ_Button_BgcolorOut = 'BgcolorOut';
export type FRNZ_Button_Celebration = 'Celebration';
export type FRNZ_Button_ArrowSlide = 'ArrowSlide';
export type FRNZ_Button_I_wantAttention = 'I_wantAttention';
export type FRNZ_Button_RainbowBorder = 'RainbowBorder';
export type FRNZ_Button_Rainbowfill = 'Rainbowfill';
export type FRNZ_Button_Spotlight = 'Spotlight';
export type FRNZ_Button_Starlight = 'Starlight';
export type FRNZ_Button_GSAP = 'gsap';
export type FRNZ_Button_Navbar = 'navbar';

//type input

export type FRNZ_Input_Password = "Password";
export type FRNZ_Input_Username = "Username";
export type FRNZ_Input_Phone = "Phone";
export type FRNZ_Input_Modern = "Modern";
export type FRNZ_Input_Search = "Search";
export type FRNZ_Input_gsap = "gsap";



export type FRNZ_variantButton =
    // | FRNZ_GSAP
    | FRNZ_Button_Backtotop
    | FRNZ_Button_BgcolorIN
    | FRNZ_Button_BgcolorOut
    | FRNZ_Button_Celebration
    | FRNZ_Button_ArrowSlide
    | FRNZ_Button_I_wantAttention
    | FRNZ_Button_RainbowBorder
    | FRNZ_Button_Rainbowfill
    | FRNZ_Button_Spotlight
    | FRNZ_Button_Starlight
    | FRNZ_Button_Navbar


export type FRNZ_variantInput =
    | FRNZ_Input_Password
    | FRNZ_Input_Username
    | FRNZ_Input_Phone
    | FRNZ_Input_Modern
    | FRNZ_Input_Search
// | FRNZ_Input_gsap