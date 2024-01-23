import React from "react"
import type { AppProps } from "next/app";
import Theme from "../assets/global-styles/theme"
import GlobalStyle from "../assets/global-styles/global";
import "../styles/global.css"
import Head from "next/head";
import ErrorBoundary from "../components/error-boundary/error-boundary.component";
import Header from "../components/common/navigation/header";
import Footer from "../components/common/navigation/footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  let title = "SuperTokens JWT Decoder";

  if ((Component as any).title !== undefined) {
    title = (Component as any).title;
  }


  return (
    <Theme>
     <Head>
        <title>{title}</title>
      </Head>
      <GlobalStyle />
      <ErrorBoundary>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </ErrorBoundary>
      <script defer src="/static/antcs.js" type="text/javascript"></script>
    </Theme>
  );
}