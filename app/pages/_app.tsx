import React from "react"
import type { AppProps } from "next/app";
import Theme from "../assets/global-styles/theme"
import GlobalStyle from "../assets/global-styles/global";
import "../styles/global.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <Component {...pageProps} />
    </Theme>
  );
}