import React from "react";
import { ThemeProvider, useTheme } from "styled-components";

export const theme = {
  colors: {
    // synonymous with black
    dark: {
      800: '#282828',
      900: '#141414',
      950: '#1c1c1c',
      1000: '#1a1a1a',
    },
    // synonymous with white
    light: {
      900: '#f5f6f7',
      1000: '#ffffff'
    },
    blue: {
      200: '#9cdcfe'
    },
    purple: {
      200: '#c19cfe',
      1000: "#664de5",
    },
    red: {
      200: '#fe9c9c',
      300: '#C54F4F',
      800: '#331717',
      1000: "#cc0404"
    },
    brown: {
      500: '#CE9178'
    },
    green: {
      900: "#66bc7a",
      1000: "#0c6e23",
    },
    grey: {
      600: '#F8F9FC',
      700: "#ADB4C1",
      750: '#606060',
      800: '#5e5e5e',
      810: '#5D5D5D',
      850: '#2a2a2a',
      900: "#6c6f76",
      950: '#323232',
      1000: "#333333"
    },
    orange: {
      1000: '#ff9933'
    }
  },
  fontSizes: {
    small: "1.4rem",
    medium: "1.6rem",
  },
  borderRadius: {
    small: ".6rem",
    medium: "1.4rem",
  },
  fontFamily: {
    menlo: `"Menlo", monospace`,
    roboto: `"Roboto", sans-serif`
  },
  paddingMargins: {
    medium: "1.6rem"
  },
  breakpoints: {
    tablet: '768px'
  }
};

const Theme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const useAppTheme = () => {
  const appTheme = useTheme() as typeof theme;
  return appTheme
}

export default Theme;