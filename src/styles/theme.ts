/* eslint-disable @typescript-eslint/no-explicit-any */
import { amber, deepPurple } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    [key: string]: any;
  }
  interface TypographyVariantsOptions {
    [key: string]: any;
  }
  interface Palette {
    [key: string]: any;
  }
  interface PaletteOptions {
    [key: string]: any;
  }

  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

// Create a theme instance.
let theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        popper: {
          zIndex: "1099 ",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.MuiInputLabel-root": {
            maxWidth: "100%",
          },
          fontSize: "14px",
          fontWeight: "bold",
          color: "#54575a",
          "&.Mui-focused": {
            color: "#54575a",
          },
          transform: "none",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          "label + &": {
            marginTop: "10px",
          },
          height: "44px",
          boxSizing: "border-box",
          borderRadius: 5,
          position: "relative",
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: "#efefef",
          fontSize: "14px",
          padding: "10px 12px",
          "&.Mui-error": {
            borderColor: "#EC0909",
          },
          "&.Mui-focused": {
            borderColor: "#6043b6",
          },
          "& input.Mui-disabled": {
            cursor: "not-allowed",
          },
          "& input::-webkit-outer-spin-button": {
            display: "none",
            MozAppearance: "none",
          },
          "& input::-webkit-inner-spin-button": {
            display: "none",
            MozAppearance: "none",
          },
        },
      },
    },
  },
  palette: {
    primary: deepPurple,
    secondary: amber,
    custom: {
      footerBottom: "#00063a",
      footerMenu: "#0e1240",
      buttonColor: "#f3ab02",
      white: "#fff",
      black: "#000000",
      azureishWhite: "#dcecfc",
      outerSpace: "#464646",
      darkCharcoal: "#313131",
      comingSoon: "#2a3273",
      yellowLight: "#f3ab02",
      yellowMedium: "#F7BF3C",
      yellowDark: "#F3AB03",
      grayMedium: "#363636",
      grey: "#808080",
      grayLight: "#3b3b3b",
      grayDark: "#787878",
      redLight: "#ff0031",
      blueMedium: "#314491",
      darkBlue: "#3c338f",
      lightBlue: "#E8EEF5",
      lightPurple: "#4B56C0",
      mediumPurple: "#6c63ff",
      bluePigment: "#3c338f",
      brightGray: "#ebebeb",
      darkLiver: "#4E4E4E",
      darkBluePigment: "#384090",
      celadonBlue: "#0076ad",
      plumpGrey: "#767676",
      vividGamboge: "#fe9700",
      vividSkyBlue: "#00c8fd",
      batteryBlue: "#25c5d9",
      pictonBlue: "#42a4f5",
      cerisePink: "#eb407a",
      plumpPurple: "#673bb6",
      davyGrey: "#525252",
      taupeGray: "#898A8A",
      chineseWhite: "#e1e1e1",
      ashWhite: "#fdfdfd",
      lotionWhite: "#fafafa",
      culturedWhite: "#f4f4f7",
      lavenderWeb: "#e2daf0",
      oldLavender: "#795277",
      silverChalice: "#ababab",
      aliceBlue: "#f2f4ff",
      quickSilver: "#a3a3a3",
      notSelectedText: "#313a8e4d",
      selectedBlueBg: "#dce2ff",
      lavenderGrey: "#868686",
      lavenderBlue: "#384090",
      pink: "#eb00e1",
      midnightGreen: "#003d59",
      graniteGray: "#636363",
      charlestonGreen: "#2a2a2a",
      philippineGray: "#929292",
      aeroBlue: "#c0ffd3",
      gainsboro: "#DFDFDF",
      cornflowerBlue: "#6695ff",
      paragraphgrey: "#727272",
      customGrey: "#8C99A4",
      customBlack: "#2e3440",
      lightpink: "#ff0060",
      customLightGrey: "#c9c9c9",
      lightYellow: "#ffe600",
      spanishViolet: "#3f268d",
      russianViolet: "#1e004b",
      blue: "#0017ff",
      buttonHover: "#b47e00",
      spanishGrey: "#f8f8f8",
      wheat: "#c8c8c8",
      error: "#ac3f3f",
      tabGray: "#eaeaea",
      sonicSilver: "#757575",
      silverGrey: "#8a8989",
    },
  },

  breakpoints: {
    values: {
      mobile: 0,
      tablet: 601,
      laptop: 1024,
      desktop: 1200,
    },
  },

  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(", "),
    font: {
      montserrat: {
        fontFamily: ["Montserrat", "sans-serif"].join(", "),
      },
      openSans: {
        fontFamily: ["Open Sans", "sans-serif"].join(", "),
      },
    },
  },
});

const customTypography = {
  heading: {
    fontSize: "42px",
    [theme.breakpoints.down("tablet")]: {
      fontSize: "22px",
    },
    fontWeight: "bold",
    color: theme.palette.custom.outerSpace,
    textAlign: "center",
  },
};

theme = {
  ...theme,
  typography: {
    ...theme.typography,
    ...customTypography,
  },
};

theme = responsiveFontSizes(theme);

export default theme;
