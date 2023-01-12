import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    // synonymous with black
    dark: {
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
      700: '#F8F9FC',
      800: "#ADB4C1",
      900: "#6c6f76"
    },
  },
  fontSizes: {
    xSmall: "1.3rem",
    small: "1.5rem",
    medium: "2rem",
    large: "2.5rem",
  },
  borderRadius: {
    small: "0.7rem",
    medium: "1rem",
    large: "1.2rem",
  },
  paddingMargins: {
    medium: "1.6rem"
  }
};

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;