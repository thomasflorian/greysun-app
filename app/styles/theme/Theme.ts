import { Layout } from "constant";

const DARK_MODE = true;

// Specify theme
export default {
    colors: {
      primary_light: DARK_MODE ? '#D64F27' : '#D64F27',
      primary: DARK_MODE ? '#D64F27' : '#D64F27',
      primary_dark: DARK_MODE ? '#D64F27' : '#D64F27',
      secondary_light: DARK_MODE ? '#D64F27' : '#D64F27',
      secondary: DARK_MODE ? '#D64F27' : '#D64F27',
      secondary_dark: DARK_MODE ? '#D64F27' : '#D64F27',
      background: DARK_MODE ? '#D64F27' : '#0F2138',
      text_light: DARK_MODE ? '#D64F27' : '#D64F27',
      text_dark: DARK_MODE ? '#D64F27' : '#D64F27',
      success: DARK_MODE ? '#D64F27' : '#D64F27',
      error: DARK_MODE ? '#D64F27' : '#D64F27',
    },
    font: {
      bold: "Montserrat-Bold",
      regular: "Montserrat-Regular",
      medium: "Montserrat-Medium",
      light: "Montserrat-Light",
      thin: "Montserrat-Thin",
    },
    fontsize: {
      xxlarge: Layout.isSmallDevice ? 30 : 42,
      xlarge: Layout.isSmallDevice ? 26 : 36,
      large: Layout.isSmallDevice ? 20 : 32,
      medium: Layout.isSmallDevice ? 16 : 26,
      small: Layout.isSmallDevice ? 12 : 20,
      xsmall: Layout.isSmallDevice ? 10 : 16,
      xxsmall: Layout.isSmallDevice ? 8 : 12,
    },
    spacing: {
      xxlarge: Layout.isSmallDevice ? 30 : 75,
      xlarge: Layout.isSmallDevice ? 25 : 65,
      large: Layout.isSmallDevice ? 20 : 50,
      mediumplus: Layout.isSmallDevice ? 15 : 35,
      medium: Layout.isSmallDevice ? 10 : 25,
      smallplus: Layout.isSmallDevice ? 8 : 20,
      small: Layout.isSmallDevice ? 5 : 10,
      xsmall: Layout.isSmallDevice ? 3 : 8,
      xxsmall: Layout.isSmallDevice ? 2 : 4,
    }
  };