import React from "react"
import type { AppProps } from "next/app";
import Theme from "../assets/global-styles/theme"
import GlobalStyle from "../assets/global-styles/global";
import "../styles/global.css"
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Head>
        <title>SuperTokens JWT Decoder</title>
      </Head>
      <GlobalStyle />
      <div id="supertokens-webflow-white-header"></div>
      <div id="supertokens-root"></div>
      <div id="non-whitelisted-page"/>
      <div id="supertokens-webflow-footer"></div>
      <Component {...pageProps} />
      <script defer src="/static/bundle.js" type="text/javascript"></script>
      <script defer src="/static/antcs.js" type="text/javascript"></script>
    </Theme>
  );
}