export const COLORS_VARIABLES = {
  primary: "#004EFF",
  secondary: "#B2AB8C",
  accent: "#F5F8FF",
  accentSecondary: "#BED2FF",
  danger: "#d50000",
  success: "#00c853",
  dark: "#000000",
  white: "#ffffff",
  gray: "#707070",
  grayLight: "#F2F2F2",
  grayDark: "#575757"
}
export const FONT_VARIABLES = {
  family: `'Poppins', 'Helvetica', 'Arial', sans-serif`,
  heading: `'Poppins', 'Helvetica', 'Arial', sans-serif`,
  light: "300",
  regular: "400",
  semiBold: "600",
  bold: "700",
  black: "900"
}

const SIZE_SCREEN_VARIABLES = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
}

export const DEVICE = {
  mobileS: `@media only screen and (min-width: ${SIZE_SCREEN_VARIABLES.mobileS}){display: none}`,
  mobileM: `@media only screen and (min-width: ${SIZE_SCREEN_VARIABLES.mobileM}){display: none}`,
  mobileL: `@media only screen and (min-width: ${SIZE_SCREEN_VARIABLES.mobileL}){display: none}`,
  tablet: `@media only screen and (min-width: ${SIZE_SCREEN_VARIABLES.tablet}){display: none}`,
  laptop: `@media only screen and (min-width: ${SIZE_SCREEN_VARIABLES.laptop}){display: none}`,
  laptopL: `@media only screen and (min-width: ${SIZE_SCREEN_VARIABLES.laptopL}){display: none}`,
  desktop: `@media only screen and (min-width: ${SIZE_SCREEN_VARIABLES.desktop}){display: none}`,
  desktopL: `@media only screen and (min-width: ${SIZE_SCREEN_VARIABLES.desktop}){display: none}`
}

export const FlexItems = {
  top: `-webkit-box-align: flex-start;
            -moz-box-align: flex-start;
            -ms-flex-align: flex-start;
            -webkit-align-items: flex-start;
            align-items: flex-start;`,
  stretch: `-webkit-box-align: stretch;
            -moz-box-align: stretch;
            -ms-flex-align: stretch;
            -webkit-align-items: stretch;
            align-items: stretch;`,
  center: `-webkit-box-align: center;
            -moz-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;`
}
