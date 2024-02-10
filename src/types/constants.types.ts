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
export type FRNZ_Button_ArrowSlide = 'ArrowSlide';
export type FRNZ_Button_I_wantAttention = 'I_wantAttention';
export type FRNZ_Button_RainbowBorder = 'RainbowBorder';
export type FRNZ_Button_Rainbowfill = 'Rainbowfill';
export type FRNZ_Button_Spotlight = 'Spotlight';
export type FRNZ_Button_Starlight = 'Starlight';
export type FRNZ_Button_GSAP = 'gsap';
export type FRNZ_Button_Navbar = 'navbar';
export type FRNZ_Button_Gradient = 'Gradient';
export type FRNZ_Button_Cameo = 'Cameo';
export type FRNZ_Button_Royal = 'Royal';
// export type FRNZ_Button_Celebration = 'Celebration';

//type input
export type FRNZ_Input_Password = "Password";
export type FRNZ_Input_Username = "Username";
export type FRNZ_Input_Phone = "Phone";
export type FRNZ_Input_Modern = "Modern";
export type FRNZ_Input_Search = "Search";
export type FRNZ_Input_gsap = "gsap";

//type hamburger icons
export type FRNZ_Hamburger_cross = "Cross"
export type FRNZ_Hamburger_snowy = "Snowy"
export type FRNZ_Hamburger_lazy = "Lazy"
export type FRNZ_Hamburger_Wavy = "Wavy"

//type svg path
export type FRNZ_type_readonly = "readonly";
export type FRNZ_type_readwrite = "readwrite";

export type FRNZ_svg_Rating = "Rating";
export type FRNZ_svg_Popup = "Popup";
export type FRNZ_svg_Default = "Default";

export type FRNZ_Loader_Default = "Default";
export type FRNZ_Loader_Spinner = "Spinner";
export type FRNZ_Loader_ladder = "Ladder";
export type FRNZ_Loader_cradle = "Cradle";
export type FRNZ_Loader_gradientSpin = "GradientSpin";
export type FRNZ_Loader_dotspinner = "DotSpinner";
export type FRNZ_Loader_radial = "Radial";
export type FRNZ_Loader_Dots = "Dots";

export type FRNZ_variantButton =
    // | FRNZ_GSAP
    | FRNZ_Button_Backtotop
    | FRNZ_Button_BgcolorIN
    | FRNZ_Button_BgcolorOut
    | FRNZ_Button_ArrowSlide
    | FRNZ_Button_I_wantAttention
    | FRNZ_Button_RainbowBorder
    | FRNZ_Button_Rainbowfill
    | FRNZ_Button_Spotlight
    | FRNZ_Button_Starlight
    | FRNZ_Button_Navbar
    | FRNZ_Button_Gradient
    | FRNZ_Button_Cameo
    | FRNZ_Button_Royal

// | FRNZ_Button_Celebration


export type FRNZ_variantInput =
    | FRNZ_Input_Password
    | FRNZ_Input_Modern
    | FRNZ_Input_Search
// | FRNZ_Input_Username
// | FRNZ_Input_Phone
// | FRNZ_Input_gsap


export type FRNZ_variantHamburger =
    | FRNZ_Hamburger_cross
    | FRNZ_Hamburger_lazy
    | FRNZ_Hamburger_snowy
    | FRNZ_Hamburger_Wavy

export type FRNZ_variantSVG =
    | FRNZ_svg_Rating
    | FRNZ_svg_Popup
    | FRNZ_svg_Default


export type FRNZ_typeSVG =
    | FRNZ_type_readonly
    | FRNZ_type_readwrite

export type FRNZ_variantLoader =
    | FRNZ_Loader_Default
    | FRNZ_Loader_Spinner
    | FRNZ_Loader_ladder
    | FRNZ_Loader_cradle
    | FRNZ_Loader_gradientSpin
    | FRNZ_Loader_dotspinner
    | FRNZ_Loader_radial
    | FRNZ_Loader_Dots