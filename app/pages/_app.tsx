import React from "react"
import type { AppProps } from "next/app";
import Theme from "../assets/global-styles/theme"
import GlobalStyle from "../assets/global-styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}