import React from "react"
import JwtDecoder from "./jwt-decoder";

export default function Home() {
  return <JwtDecoder />
}

export function getAnalytics() {
  return new Promise((res, rej) => {
      let numberOfRetries = 20;
      const analytics = (window as any).stAnalytics;
      if (analytics) {
          res(analytics.getInstance());
          return;
      }

      let interval = setInterval(() => {
          const stAnalytics = (window as any).stAnalytics;
          numberOfRetries--;
          if (stAnalytics) {
              clearInterval(interval);
              res(stAnalytics.getInstance());
              return;
          }
          if (numberOfRetries < 0) {
              clearInterval(interval);
              rej("Already waited for 2 seconds");
          }
      }, 100);
  });
}

export class AnalyticsUtilities {
    static DID_SEND_HEADER_CHANGE_EVENT = false;
    static DID_SEND_PAYLOAD_CHANGE_EVENT = false;
    static DID_SEND_SIGNING_KEY_CHANGE_EVENT = false;
    static DID_SEND_JWT_CHANGE_EVENT = false;
}