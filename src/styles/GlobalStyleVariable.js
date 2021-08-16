export const COLORS_VARIABLES = {
  primary: "#293B5F",
  secondary: "#B2AB8C",
  accent: "#47597E",
  danger: "#d50000",
  success: "#00c853",
  dark: "#000000",
  white: "#ffffff",
  gray: "#707070",
  grayLight: "#ebebeb",
  grayDark: "#222222"
}
export const FONT_VARIABLES = {
  family: `'Poppins', 'Helvetica', 'Arial', sans-serif`,
  heading: `'Poppins', 'Helvetica', 'Arial', sans-serif`,
  light: "300",
  regular: "400",
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
  mobileS: `(min-width: ${SIZE_SCREEN_VARIABLES.mobileS})`,
  mobileM: `(min-width: ${SIZE_SCREEN_VARIABLES.mobileM})`,
  mobileL: `(min-width: ${SIZE_SCREEN_VARIABLES.mobileL})`,
  tablet: `(min-width: ${SIZE_SCREEN_VARIABLES.tablet})`,
  laptop: `(min-width: ${SIZE_SCREEN_VARIABLES.laptop})`,
  laptopL: `(min-width: ${SIZE_SCREEN_VARIABLES.laptopL})`,
  desktop: `(min-width: ${SIZE_SCREEN_VARIABLES.desktop})`,
  desktopL: `(min-width: ${SIZE_SCREEN_VARIABLES.desktop})`
}
