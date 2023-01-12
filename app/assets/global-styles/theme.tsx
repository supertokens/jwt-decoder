import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    // synonymous with black
    dark: {
      900: '#141414',
      950: '#1c1c1c',
      1000: '#1a1a1a',
    },
    // synonymous with white
    light: {
      900: '#f5f6f7',
      1000: '#ffffff'
    },
    purple: {
      1000: "#664de5",
    },
    red: {
      1000: "#cc0404"
    },
    grey: {
      600: '#F8F9FC',
      700: "#ADB4C1",
      800: '#5e5e5e',
      900: "#6c6f76",
      950: '#323232',
      1000: "#333333"
    },
  },
  fontSizes: {
    xSmall: "1.3rem",
    small: "1.5rem",
    medium: "2rem",
    large: "2.5rem",
  },
  borderRadius: {
    small: ".6rem",
    medium: "1.4rem",
  },
  paddingMargins: {
    medium: "1.6rem"
  }
};

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;