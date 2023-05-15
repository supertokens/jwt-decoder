import React from "react"
import type { AppProps } from "next/app";
import Theme from "../assets/global-styles/theme"
import GlobalStyle from "../assets/global-styles/global";
import "../styles/global.css"
import Head from "next/head";
import ErrorBoundary from "../components/error-boundary/error-boundary.component";

export default function MyApp({ Component, pageProps }: AppProps) {
  let title = "SuperTokens JWT Decoder";

  if ((Component as any).title !== undefined) {
    title = (Component as any).title;
  }

  function loadBundleAfterDelay() {
    setTimeout(() => {
      const script = document.createElement("script");
      script.src = "/static/bundle.js";
      script.defer = true;
      document.body.appendChild(script);
    }, 100);
  }

  React.useEffect(() => {
    loadBundleAfterDelay();
  }, []);

  return (
    <Theme>
      <Head>
        <title>{title}</title>
      </Head>
      <GlobalStyle />
      <div id="supertokens-webflow-header"></div>
      <div id="supertokens-root"></div>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
      <div id="supertokens-webflow-footer"></div>
      <script defer src="/static/antcs.js" type="text/javascript"></script>
    </Theme>
  );
}